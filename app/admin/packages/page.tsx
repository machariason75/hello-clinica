import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { PackagesManager, type PackageRow } from "@/components/admin/content/PackagesManager";

export const dynamic = "force-dynamic";

export default async function AdminPackagesPage() {
  const admin = await requireAdmin();
  const records = await prisma.package.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  });

  const rows: PackageRow[] = records.map((r) => ({
    id: r.id,
    packageName: r.packageName,
    description: r.description,
    totalHours: r.totalHours,
    totalCost: r.totalCost,
    features: r.features,
    buttonText: r.buttonText,
    published: r.published,
    archived: r.archived,
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Consultation Packages"
          description="Create packages, set pricing and hours, edit features, reorder, duplicate, and archive."
        />
        <PackagesManager rows={rows} />
      </div>
    </AdminShell>
  );
}
