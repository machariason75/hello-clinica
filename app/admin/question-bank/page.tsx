import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import {
  QuizBankManager,
  type CategoryRow,
  type LinkRow,
  type CategoryOption,
} from "@/components/admin/content/QuizBankManager";
import { QuizzesManager, type QuizListRow } from "@/components/admin/content/QuizzesManager";

export const dynamic = "force-dynamic";

/** Builds "Parent › Child" style labels for the option pickers. */
function buildOptions(
  cats: { id: string; title: string; parentId: string | null }[],
): CategoryOption[] {
  const byId = new Map(cats.map((c) => [c.id, c]));
  function label(c: { id: string; title: string; parentId: string | null }): string {
    const parts = [c.title];
    let p = c.parentId ? byId.get(c.parentId) : null;
    let guard = 0;
    while (p && guard < 10) {
      parts.unshift(p.title);
      p = p.parentId ? byId.get(p.parentId) : null;
      guard++;
    }
    return parts.join(" › ");
  }
  return cats
    .map((c) => ({ id: c.id, label: label(c) }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export default async function AdminQuestionBankPage() {
  const admin = await requireAdmin();

  const cats = await prisma.quizCategory.findMany({
    orderBy: [{ order: "asc" }, { title: "asc" }],
    include: { _count: { select: { children: true, quizzes: true, externalLinks: true } } },
  });
  const parentTitleById = new Map(cats.map((c) => [c.id, c.title]));

  const categories: CategoryRow[] = cats.map((c) => ({
    id: c.id, title: c.title, slug: c.slug, description: c.description,
    overview: c.overview, icon: c.icon, parentId: c.parentId,
    parentTitle: c.parentId ? parentTitleById.get(c.parentId) ?? null : null,
    order: c.order, featured: c.featured, published: c.published,
    childCount: c._count.children, quizCount: c._count.quizzes, linkCount: c._count.externalLinks,
  }));

  const linkRecords = await prisma.quizExternalLink.findMany({
    orderBy: [{ createdAt: "desc" }],
    include: { category: { select: { title: true } } },
  });
  const links: LinkRow[] = linkRecords.map((l) => ({
    id: l.id, categoryId: l.categoryId, categoryTitle: l.category.title, title: l.title, url: l.url,
    description: l.description, thumbnailUrl: l.thumbnailUrl, source: l.source, order: l.order, published: l.published,
  }));

  const categoryOptions = buildOptions(
    cats.map((c) => ({ id: c.id, title: c.title, parentId: c.parentId })),
  );

  const quizRecords = await prisma.quiz.findMany({
    orderBy: [{ createdAt: "desc" }],
    include: { category: { select: { title: true } }, _count: { select: { questions: true } } },
  });
  const quizzes: QuizListRow[] = quizRecords.map((q) => ({
    id: q.id, title: q.title, slug: q.slug, categoryTitle: q.category.title, kind: q.kind,
    questionCount: q._count.questions, published: q.published,
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-8">
        <AdminPageHeader
          title="Question Bank"
          description="Build the category tree (Nursing Exams, TEAS, HESI A2, and more), author quizzes and questions, and tag external educational links to any section."
        />
        <QuizzesManager quizzes={quizzes} categoryOptions={categoryOptions} />
        <div className="border-t border-deep-blue/10 pt-8">
          <QuizBankManager categories={categories} links={links} categoryOptions={categoryOptions} />
        </div>
      </div>
    </AdminShell>
  );
}
