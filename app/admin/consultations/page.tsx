import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import {
  ConsultationsClient,
  type ConsultationRow,
} from "@/components/admin/leads/ConsultationsClient";

export const dynamic = "force-dynamic";

export default async function ConsultationsPage() {
  const admin = await requireAdmin();
  const records = await prisma.consultation.findMany({
    orderBy: { createdAt: "desc" },
  });

  const rows: ConsultationRow[] = records.map((r) => ({
    id: r.id,
    firstName: r.firstName,
    lastName: r.lastName,
    phone: r.phone,
    email: r.email,
    cadre: r.cadre,
    contactMethod: r.contactMethod,
    socialHandle: r.socialHandle,
    consent: r.consent,
    message: r.message,
    status: r.status,
    archived: r.archived,
    createdAt: r.createdAt.toISOString(),
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Consultation Requests"
          description="Review, update status, archive, and export consultation requests."
        />
        <ConsultationsClient rows={rows} />
      </div>
    </AdminShell>
  );
}
