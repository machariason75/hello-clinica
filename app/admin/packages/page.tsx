import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { PackagesManager, type PackageRow } from "@/components/admin/content/PackagesManager";

export const dynamic = "force-dynamic";

export default async function AdminPackagesPage() {
  const admin = await requireAdmin();
  const packages = await prisma.package.findMany({ where: { archived: false }, orderBy: [{ sortOrder: "asc" }] });
  const rows: PackageRow[] = packages.map((p) => ({
    id: p.id, packageName: p.packageName, description: p.description, totalHours: p.totalHours,
    totalCost: p.totalCost, features: p.features, buttonText: p.buttonText, sortOrder: p.sortOrder, published: p.published,
  }));
  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader title="Packages" description="Consultation & premium packages shown on the Advising page. Set prices, benefits, and publish state." />
        <PackagesManager rows={rows} />
      </div>
    </AdminShell>
  );
}
