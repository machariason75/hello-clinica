import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { AccessRequestsManager, type RequestRow } from "@/components/admin/content/AccessRequestsManager";

export const dynamic = "force-dynamic";

export default async function AdminAccessRequestsPage() {
  const admin = await requireAdmin();
  const requests = await prisma.courseAccessRequest.findMany({ orderBy: { createdAt: "desc" } });
  const rows: RequestRow[] = requests.map((r) => ({
    id: r.id, name: r.name, email: r.email, university: r.university, course: r.course,
    message: r.message, status: r.status, createdAt: r.createdAt.toISOString(), linkedStudent: !!r.studentId,
  }));
  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader title="Access Requests" description="Course & university access requests from students. Update status as you follow up; “granted” unlocks that student’s premium access." />
        <AccessRequestsManager rows={rows} />
      </div>
    </AdminShell>
  );
}
