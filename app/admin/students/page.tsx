import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { StudentsManager, type StudentRow } from "@/components/admin/content/StudentsManager";

export const dynamic = "force-dynamic";

export default async function AdminStudentsPage() {
  const admin = await requireAdmin();
  const students = await prisma.student.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { requests: true } } },
  });
  const rows: StudentRow[] = students.map((s) => ({
    id: s.id, name: s.name, email: s.email, university: s.university,
    hasAccess: s.hasAccess, createdAt: s.createdAt.toISOString(), requestCount: s._count.requests,
  }));
  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader title="Students" description="Registered student accounts. Grant or revoke premium Question Bank access (do this after payment is confirmed)." />
        <StudentsManager rows={rows} />
      </div>
    </AdminShell>
  );
}
