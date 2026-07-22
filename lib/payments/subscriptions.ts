import { prisma } from "@/lib/prisma";

/**
 * Subscriptions → access.
 *
 * The important design decision here: this does NOT replace Student.hasAccess.
 * Subscriptions SET that flag instead.
 *
 * Why: every premium gate in the app already reduces to `student.hasAccess`.
 * Deriving access at read time would mean touching every one of those gates and
 * adding a database round-trip to each. Setting the flag keeps all of them
 * working untouched, keeps reads fast, and — crucially — leaves manual grants
 * working exactly as they do today, for anyone who pays by bank transfer, cash,
 * or any route the processor doesn't cover.
 *
 * The cost is that the flag can drift if a subscription expires without anything
 * running. That's what expireLapsedSubscriptions() is for.
 */

export type AccessSource = "subscription" | "manual" | "none";

/** Is there a live subscription for this student right now? */
export async function hasActiveSubscription(studentId: string): Promise<boolean> {
  const now = new Date();
  const count = await prisma.subscription.count({
    where: {
      studentId,
      status: "active",
      OR: [{ currentPeriodEnd: null }, { currentPeriodEnd: { gt: now } }],
    },
  });
  return count > 0;
}

/**
 * Recomputes hasAccess from subscriptions.
 *
 * Note it only ever GRANTS from a subscription — it will not revoke access that
 * an admin granted by hand, because we can't tell the difference between "manual
 * grant" and "stale flag" from the flag alone. Revoking is therefore a
 * deliberate admin action, which is the safer default: wrongly cutting off a
 * paying student is far worse than briefly over-granting.
 */
export async function syncStudentAccess(studentId: string): Promise<boolean> {
  const active = await hasActiveSubscription(studentId);
  if (active) {
    await prisma.student.update({ where: { id: studentId }, data: { hasAccess: true } });
    return true;
  }
  return false;
}

/**
 * Marks subscriptions whose period has ended as expired, and withdraws access
 * from anyone whose ONLY reason for having it was that subscription.
 *
 * Run this from a scheduled job (Vercel Cron) or opportunistically. Without it,
 * a lapsed subscription leaves hasAccess set to true forever.
 */
export async function expireLapsedSubscriptions(): Promise<{ expired: number; revoked: number }> {
  const now = new Date();

  const lapsed = await prisma.subscription.findMany({
    where: { status: "active", currentPeriodEnd: { not: null, lt: now } },
    select: { id: true, studentId: true },
  });

  if (lapsed.length === 0) return { expired: 0, revoked: 0 };

  await prisma.subscription.updateMany({
    where: { id: { in: lapsed.map((l) => l.id) } },
    data: { status: "expired" },
  });

  // Only revoke where nothing else still grants access.
  let revoked = 0;
  for (const l of lapsed) {
    const stillActive = await hasActiveSubscription(l.studentId);
    if (!stillActive) {
      await prisma.student.update({ where: { id: l.studentId }, data: { hasAccess: false } });
      revoked++;
    }
  }

  return { expired: lapsed.length, revoked };
}

/**
 * Records a successful payment and grants access.
 * Safe to call twice with the same providerRef — the unique constraint makes it
 * an update rather than a duplicate.
 */
export async function activateSubscription(opts: {
  studentId: string;
  provider: string;
  providerRef: string | null;
  plan?: string;
  amountMinor?: number;
  currency?: string;
  periodDays?: number | null;
}): Promise<void> {
  const {
    studentId,
    provider,
    providerRef,
    plan = "premium",
    amountMinor = 0,
    currency = "KES",
    periodDays = 30,
  } = opts;

  const currentPeriodEnd =
    periodDays === null ? null : new Date(Date.now() + periodDays * 86400000);

  if (providerRef) {
    await prisma.subscription.upsert({
      where: { provider_providerRef: { provider, providerRef } },
      create: {
        studentId,
        provider,
        providerRef,
        plan,
        status: "active",
        amountMinor,
        currency,
        currentPeriodEnd,
      },
      update: { status: "active", currentPeriodEnd, amountMinor, currency },
    });
  } else {
    await prisma.subscription.create({
      data: { studentId, provider, plan, status: "active", amountMinor, currency, currentPeriodEnd },
    });
  }

  await syncStudentAccess(studentId);
}

/** Cancels a subscription. Access is withdrawn only if nothing else grants it. */
export async function cancelSubscription(subscriptionId: string): Promise<void> {
  const sub = await prisma.subscription.update({
    where: { id: subscriptionId },
    data: { status: "cancelled", cancelledAt: new Date() },
    select: { studentId: true },
  });

  if (!(await hasActiveSubscription(sub.studentId))) {
    await prisma.student.update({ where: { id: sub.studentId }, data: { hasAccess: false } });
  }
}
