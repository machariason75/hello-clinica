import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import {
  PackageInquiriesClient,
  type InquiryRow,
} from "@/components/admin/leads/PackageInquiriesClient";

export const dynamic = "force-dynamic";

export default async function PackageInquiriesPage() {
  const admin = await requireAdmin();
  const records = await prisma.packageInquiry.findMany({
    orderBy: { createdAt: "desc" },
    include: { package: { select: { packageName: true } } },
  });

  const rows: InquiryRow[] = records.map((r) => ({
    id: r.id,
    studentFirstName: r.studentFirstName,
    studentLastName: r.studentLastName,
    studentEmail: r.studentEmail,
    studentPhone: r.studentPhone,
    message: r.message,
    packageName: r.package?.packageName ?? "—",
    archived: r.archived,
    createdAt: r.createdAt.toISOString(),
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Package Inquiries"
          description="Review, archive, and export inquiries submitted from consultation packages."
        />
        <PackageInquiriesClient rows={rows} />
      </div>
    </AdminShell>
  );
}
