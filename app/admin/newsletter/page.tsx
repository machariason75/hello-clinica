import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import {
  NewsletterClient,
  type SubscriberRow,
} from "@/components/admin/leads/NewsletterClient";

export const dynamic = "force-dynamic";

export default async function NewsletterPage() {
  const admin = await requireAdmin();
  const records = await prisma.newsletterSubscriber.findMany({
    orderBy: { subscribedAt: "desc" },
  });

  const rows: SubscriberRow[] = records.map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    consent: r.consent,
    archived: r.archived,
    subscribedAt: r.subscribedAt.toISOString(),
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Newsletter Subscribers"
          description="View subscribers, archive, and export the list as CSV."
        />
        <NewsletterClient rows={rows} />
      </div>
    </AdminShell>
  );
}
