import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { AuditLogsClient, type AuditRow } from "@/components/admin/audit/AuditLogsClient";

export const dynamic = "force-dynamic";

export default async function AdminAuditLogsPage() {
  const admin = await requireAdmin();
  const records = await prisma.auditLog.findMany({
    orderBy: { timestamp: "desc" },
    take: 500,
    include: { admin: { select: { name: true } } },
  });

  const rows: AuditRow[] = records.map((r) => ({
    id: r.id,
    adminName: r.admin?.name ?? "Unknown",
    action: r.action,
    entity: r.entity,
    entityId: r.entityId,
    ipAddress: r.ipAddress,
    timestamp: r.timestamp.toISOString(),
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Audit Logs"
          description="A record of admin actions. Showing the most recent 500 entries."
        />
        <AuditLogsClient rows={rows} />
      </div>
    </AdminShell>
  );
}
