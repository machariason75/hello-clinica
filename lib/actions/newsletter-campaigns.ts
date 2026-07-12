"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { sendNotificationEmail } from "@/lib/email";
import { emailShell, newsletterFooter, siteUrl, makeToken } from "@/lib/email-templates";
import { requireAdmin } from "@/lib/admin/auth-helpers";

export type CampaignResult = { success: boolean; message?: string; sent?: number; failed?: number };

/** Ensures every active subscriber has an unsubscribe token. */
async function ensureTokens() {
  const missing = await prisma.newsletterSubscriber.findMany({
    where: { unsubToken: null },
    select: { id: true },
  });
  for (const s of missing) {
    await prisma.newsletterSubscriber.update({
      where: { id: s.id },
      data: { unsubToken: makeToken() },
    });
  }
}

export async function createCampaign(subject: string, body: string): Promise<CampaignResult> {
  await requireAdmin();
  if (!subject.trim() || !body.trim()) {
    return { success: false, message: "Subject and body are required." };
  }
  await prisma.newsletterCampaign.create({
    data: { subject: subject.trim(), body: body.trim(), status: "DRAFT" },
  });
  revalidatePath("/admin/newsletter");
  return { success: true };
}

export async function deleteCampaign(id: string): Promise<CampaignResult> {
  await requireAdmin();
  await prisma.newsletterCampaign.delete({ where: { id } });
  revalidatePath("/admin/newsletter");
  return { success: true };
}

/**
 * Sends a campaign to every active subscriber.
 *
 * - Skips anyone who unsubscribed or is archived.
 * - Sends INDIVIDUALLY so each email carries that person's own unsubscribe link
 *   and nobody sees anyone else's address.
 * - Records how many succeeded/failed; safe to re-run only if it failed.
 */
export async function sendCampaign(id: string): Promise<CampaignResult> {
  await requireAdmin();

  const campaign = await prisma.newsletterCampaign.findUnique({ where: { id } });
  if (!campaign) return { success: false, message: "Campaign not found." };
  if (campaign.status === "SENT" || campaign.status === "SENDING") {
    return { success: false, message: "This campaign has already been sent." };
  }

  await ensureTokens();

  const subscribers = await prisma.newsletterSubscriber.findMany({
    where: { unsubscribed: false, archived: false },
    select: { email: true, name: true, unsubToken: true },
  });

  if (subscribers.length === 0) {
    return { success: false, message: "There are no active subscribers to send to." };
  }

  await prisma.newsletterCampaign.update({ where: { id }, data: { status: "SENDING" } });

  let sent = 0;
  let failed = 0;
  const base = siteUrl();

  for (const sub of subscribers) {
    const unsubUrl = `${base}/newsletter/unsubscribe?token=${sub.unsubToken}`;
    const html = emailShell({
      heading: campaign.subject,
      bodyHtml: campaign.body,
      footerHtml: newsletterFooter(unsubUrl),
    });

    const res = await sendNotificationEmail({
      template: "newsletter-campaign",
      subject: campaign.subject,
      recipients: [sub.email],
      html,
      relatedType: "NewsletterCampaign",
      relatedId: campaign.id,
    });

    if (res.status === "SENT") sent++;
    else failed++;
  }

  await prisma.newsletterCampaign.update({
    where: { id },
    data: {
      status: failed > 0 && sent === 0 ? "FAILED" : "SENT",
      sentAt: new Date(),
      sentCount: sent,
      failedCount: failed,
    },
  });

  revalidatePath("/admin/newsletter");
  return {
    success: sent > 0,
    sent,
    failed,
    message:
      sent === 0
        ? "Nothing sent — check that RESEND_API_KEY and FROM_EMAIL are set in Vercel."
        : `Sent to ${sent} subscriber${sent === 1 ? "" : "s"}${failed ? `, ${failed} failed` : ""}.`,
  };
}
