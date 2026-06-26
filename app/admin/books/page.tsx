import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { BooksManager, type BookRow } from "@/components/admin/content/BooksManager";

export const dynamic = "force-dynamic";

export default async function AdminBooksPage() {
  const admin = await requireAdmin();
  const records = await prisma.book.findMany({ orderBy: { createdAt: "desc" } });

  const rows: BookRow[] = records.map((r) => ({
    id: r.id,
    title: r.title,
    author: r.author,
    description: r.description,
    category: r.category,
    coverImage: r.coverImage,
    fileUrl: r.fileUrl,
    featured: r.featured,
    published: r.published,
    archived: r.archived,
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Books"
          description="Create, edit, feature, archive, and remove books. Images and files use links (URLs)."
        />
        <BooksManager rows={rows} />
      </div>
    </AdminShell>
  );
}
