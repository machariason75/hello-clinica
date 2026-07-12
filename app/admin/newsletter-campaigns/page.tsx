import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { NewsletterCampaigns, type CampaignRow } from "@/components/admin/content/NewsletterCampaigns";

export const dynamic = "force-dynamic";

export default async function AdminNewsletterCampaignsPage() {
  const admin = await requireAdmin();

  const [records, activeSubscribers] = await Promise.all([
    prisma.newsletterCampaign.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.newsletterSubscriber.count({ where: { unsubscribed: false, archived: false } }),
  ]);

  const campaigns: CampaignRow[] = records.map((c) => ({
    id: c.id,
    subject: c.subject,
    body: c.body,
    status: c.status,
    sentAt: c.sentAt ? c.sentAt.toISOString() : null,
    sentCount: c.sentCount,
    failedCount: c.failedCount,
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Send Newsletters"
          description="Write a newsletter and send it to your subscribers. Every email carries an unsubscribe link, and anyone who has unsubscribed is skipped automatically."
        />
        <NewsletterCampaigns campaigns={campaigns} activeSubscribers={activeSubscribers} />
      </div>
    </AdminShell>
  );
}
