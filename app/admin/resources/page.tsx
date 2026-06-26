import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { ResourcesManager, type ResourceRow } from "@/components/admin/content/ResourcesManager";

export const dynamic = "force-dynamic";

export default async function AdminResourcesPage() {
  const admin = await requireAdmin();
  const records = await prisma.resource.findMany({ orderBy: { createdAt: "desc" } });

  const rows: ResourceRow[] = records.map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description,
    body: r.body,
    category: r.category,
    thumbnail: r.thumbnail,
    resourceFile: r.resourceFile,
    featured: r.featured,
    published: r.published,
    archived: r.archived,
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Resources"
          description="Create, edit, feature, archive, and remove resources. Images and files use links (URLs)."
        />
        <ResourcesManager rows={rows} />
      </div>
    </AdminShell>
  );
}
