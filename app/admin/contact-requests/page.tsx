import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import {
  ContactRequestsClient,
  type ContactRow,
} from "@/components/admin/leads/ContactRequestsClient";

export const dynamic = "force-dynamic";

export default async function ContactRequestsPage() {
  const admin = await requireAdmin();
  const records = await prisma.contactRequest.findMany({
    orderBy: { createdAt: "desc" },
  });

  const rows: ContactRow[] = records.map((r) => ({
    id: r.id,
    firstName: r.firstName,
    lastName: r.lastName,
    phone: r.phone,
    email: r.email,
    cadre: r.cadre,
    reason: r.reason,
    message: r.message,
    acceptedTerms: r.acceptedTerms,
    archived: r.archived,
    createdAt: r.createdAt.toISOString(),
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Contact Requests"
          description="Review, archive, and export messages from the contact form."
        />
        <ContactRequestsClient rows={rows} />
      </div>
    </AdminShell>
  );
}
