import { prisma } from "./prisma";

/**
 * Email layer.
 *
 * Phase 1's tech stack does NOT include Resend (it lands in the phase that
 * wires submissions end-to-end). To keep the FROZEN ordering correct now —
 * "Database Save First, Email Send Second, Retry On Failure, Never Lose Data" —
 * every submission already persists to the database before this runs, and this
 * function records an EmailLog entry for auditability.
 *
 * If RESEND_API_KEY is configured, emails send immediately via Resend's HTTP
 * API (no SDK dependency required). If it is absent, the attempt is logged as
 * PENDING and the user flow still succeeds — data is never lost. The later
 * email phase adds retry scheduling on top of this same contract.
 */

type SendArgs = {
  template: string;
  subject: string;
  recipients: string[];
  html: string;
  relatedType?: string;
  relatedId?: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function sendNotificationEmail(args: SendArgs): Promise<{ status: "SENT" | "PENDING" | "FAILED" }> {
  const log = await prisma.emailLog.create({
    data: {
      template: args.template,
      subject: args.subject,
      recipients: args.recipients,
      relatedType: args.relatedType,
      relatedId: args.relatedId,
      status: "PENDING",
    },
  });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL;

  // Not yet configured — keep the record PENDING so a later phase can retry.
  if (!apiKey || !from) {
    return { status: "PENDING" };
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: args.recipients,
        subject: args.subject,
        html: args.html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      await prisma.emailLog.update({
        where: { id: log.id },
        data: { status: "FAILED", attempts: { increment: 1 }, lastError: detail.slice(0, 500) },
      });
      return { status: "FAILED" };
    }

    await prisma.emailLog.update({
      where: { id: log.id },
      data: { status: "SENT", attempts: { increment: 1 } },
    });
    return { status: "SENT" };
  } catch (error) {
    await prisma.emailLog.update({
      where: { id: log.id },
      data: {
        status: "FAILED",
        attempts: { increment: 1 },
        lastError: error instanceof Error ? error.message.slice(0, 500) : "Unknown email error",
      },
    });
    return { status: "FAILED" };
  }
}

/** Minimal, safe HTML escaping for values interpolated into email bodies. */
export function esc(value: string | null | undefined): string {
  if (!value) return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
