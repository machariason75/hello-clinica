import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { activateSubscription } from "@/lib/payments/subscriptions";

/**
 * Payment webhook — provider-agnostic skeleton.
 *
 *   POST /api/payments/webhook/paystack
 *   POST /api/payments/webhook/flutterwave
 *   POST /api/payments/webhook/mpesa
 *
 * WHAT THIS DOES TODAY
 *   - Records every incoming event in payment_events, idempotently
 *   - Activates a subscription when the payload clearly signals success
 *
 * WHAT IT DELIBERATELY DOES NOT DO YET
 *   - Verify the signature. Every provider signs webhooks differently, and
 *     verifying against the WRONG scheme is worse than not verifying, because it
 *     looks secure while accepting anything. That step goes in once you've
 *     chosen a provider and have its secret.
 *
 * ⚠ UNTIL SIGNATURE VERIFICATION IS ADDED, THIS ROUTE MUST NOT BE RELIED ON TO
 *   GRANT PAID ACCESS. It is scaffolding: it proves the plumbing and stores the
 *   events, but anyone who knows the URL could post to it. Keep granting access
 *   manually in the admin until the provider is wired up properly.
 */

type Ctx = { params: Promise<{ provider: string }> };

export async function POST(req: Request, ctx: Ctx) {
  const { provider } = await ctx.params;

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Providers disagree on where the reference lives; check the usual places.
  const data = (payload.data ?? payload) as Record<string, unknown>;
  const providerRef =
    (typeof data.reference === "string" && data.reference) ||
    (typeof data.tx_ref === "string" && data.tx_ref) ||
    (typeof data.id === "string" && data.id) ||
    null;

  const eventType =
    (typeof payload.event === "string" && payload.event) ||
    (typeof payload.type === "string" && payload.type) ||
    "unknown";

  // Store first, act second. If anything below fails we still have the raw event
  // to replay, rather than a payment that vanished.
  //
  // Note the two branches: the unique index includes providerRef, and in
  // Postgres NULLs never conflict with each other — so an upsert keyed on it is
  // only meaningful when a reference actually exists. Without one we simply
  // record the event; there is nothing to deduplicate against.
  let eventId: string;
  try {
    if (providerRef) {
      const row = await prisma.paymentEvent.upsert({
        where: { provider_eventType_providerRef: { provider, eventType, providerRef } },
        create: { provider, eventType, providerRef, payload: payload as never, processed: false },
        update: {}, // already seen — do not reprocess
        select: { id: true, processed: true },
      });
      // Already handled on an earlier delivery: acknowledge and stop, so a
      // provider retry can't grant a second subscription period.
      if (row.processed) {
        return NextResponse.json({ received: true, duplicate: true });
      }
      eventId = row.id;
    } else {
      const row = await prisma.paymentEvent.create({
        data: { provider, eventType, providerRef: null, payload: payload as never, processed: false },
        select: { id: true },
      });
      eventId = row.id;
    }
  } catch {
    // A duplicate is a success from the provider's point of view: acknowledge it
    // so they stop retrying.
    return NextResponse.json({ received: true, duplicate: true });
  }

  // Only act on clear success signals.
  const looksSuccessful =
    eventType.includes("success") ||
    eventType.includes("completed") ||
    (typeof data.status === "string" && ["success", "successful", "completed"].includes(data.status));

  if (!looksSuccessful) {
    return NextResponse.json({ received: true, acted: false });
  }

  // The student must be identifiable from the payload — typically an email or a
  // metadata field set when the payment was initiated.
  const meta = (data.metadata ?? {}) as Record<string, unknown>;
  const email =
    (typeof meta.email === "string" && meta.email) ||
    (typeof data.customer === "object" &&
      data.customer !== null &&
      typeof (data.customer as Record<string, unknown>).email === "string" &&
      ((data.customer as Record<string, unknown>).email as string)) ||
    null;

  if (!email) {
    await prisma.paymentEvent.update({
      where: { id: eventId },
      data: { error: "No customer email in payload" },
    });
    return NextResponse.json({ received: true, acted: false, reason: "no-email" });
  }

  try {
    const student = await prisma.student.findUnique({
      where: { email: email.toLowerCase().trim() },
      select: { id: true },
    });

    if (!student) {
      await prisma.paymentEvent.update({
        where: { id: eventId },
        data: { error: `No student account for ${email}` },
      });
      return NextResponse.json({ received: true, acted: false, reason: "no-student" });
    }

    const amountMinor = typeof data.amount === "number" ? data.amount : 0;
    const currency = typeof data.currency === "string" ? data.currency : "KES";

    await activateSubscription({
      studentId: student.id,
      provider,
      providerRef,
      amountMinor,
      currency,
      periodDays: 30,
    });

    await prisma.paymentEvent.update({
      where: { id: eventId },
      data: { processed: true, error: null },
    });

    return NextResponse.json({ received: true, acted: true });
  } catch (err) {
    await prisma.paymentEvent.update({
      where: { id: eventId },
      data: { error: String(err).slice(0, 500) },
    });
    // 200 on purpose: the event is stored, and telling the provider to retry
    // forever won't help if our own processing is broken.
    return NextResponse.json({ received: true, acted: false, reason: "error" });
  }
}
