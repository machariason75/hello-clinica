import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { QuizEditor, type EditorQuiz, type EditorQuestion, type CategoryOption } from "@/components/admin/content/QuizEditor";

export const dynamic = "force-dynamic";

function buildOptions(cats: { id: string; title: string; parentId: string | null }[]): CategoryOption[] {
  const byId = new Map(cats.map((c) => [c.id, c]));
  function label(c: { id: string; title: string; parentId: string | null }): string {
    const parts = [c.title];
    let p = c.parentId ? byId.get(c.parentId) : null;
    let guard = 0;
    while (p && guard < 10) { parts.unshift(p.title); p = p.parentId ? byId.get(p.parentId) : null; guard++; }
    return parts.join(" › ");
  }
  return cats.map((c) => ({ id: c.id, label: label(c) })).sort((a, b) => a.label.localeCompare(b.label));
}

export default async function QuizEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin();
  const { id } = await params;

  const quiz = await prisma.quiz.findUnique({
    where: { id },
    include: { questions: { orderBy: { order: "asc" }, include: { choices: { orderBy: { order: "asc" } } } } },
  });
  if (!quiz) notFound();

  const cats = await prisma.quizCategory.findMany({ select: { id: true, title: true, parentId: true }, orderBy: { title: "asc" } });

  const editorQuiz: EditorQuiz = {
    id: quiz.id, title: quiz.title, slug: quiz.slug, categoryId: quiz.categoryId, description: quiz.description,
    kind: quiz.kind, difficulty: quiz.difficulty, timeLimitSeconds: quiz.timeLimitSeconds,
    passThreshold: quiz.passThreshold, featured: quiz.featured, published: quiz.published, order: quiz.order,
  };
  const questions: EditorQuestion[] = quiz.questions.map((q) => ({
    id: q.id, type: q.type, stem: q.stem, topic: q.topic, explanation: q.explanation, points: q.points, order: q.order,
    choices: q.choices.map((c) => ({ id: c.id, text: c.text, isCorrect: c.isCorrect })),
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader title={`Edit: ${quiz.title}`} description="Adjust the quiz settings and author its questions. Changes go live after you save." />
        <QuizEditor quiz={editorQuiz} questions={questions} categoryOptions={buildOptions(cats)} />
      </div>
    </AdminShell>
  );
}
