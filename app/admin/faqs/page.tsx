import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { FaqsManager, type FaqRow } from "@/components/admin/content/FaqsManager";

export const dynamic = "force-dynamic";

export default async function AdminFaqsPage() {
  const admin = await requireAdmin();
  const records = await prisma.faq.findMany({
    orderBy: [{ category: "asc" }, { sortOrder: "asc" }, { createdAt: "asc" }],
  });

  const rows: FaqRow[] = records.map((r) => ({
    id: r.id,
    category: r.category,
    question: r.question,
    answer: r.answer,
    published: r.published,
    archived: r.archived,
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="FAQs"
          description="Create, edit, archive, and remove frequently asked questions by category."
        />
        <FaqsManager rows={rows} />
      </div>
    </AdminShell>
  );
}
