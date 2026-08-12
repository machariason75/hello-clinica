// @ts-nocheck  — disposable read-only utility; skip type-checking so no strict tsconfig can block it
/**
 * READ-ONLY EXPORT — Biochemistry inventory
 *
 * This does NOT change your database. It only reads it and writes one file,
 * `biochemistry-export.json`, plus prints a summary in the terminal.
 *
 * Run:  npx tsx prisma/export-biochemistry.ts
 * Then upload `biochemistry-export.json` (in your project root) in the chat.
 */

import { PrismaClient } from "@prisma/client";
import { writeFileSync } from "node:fs";

const prisma = new PrismaClient();

const looksBiochem = (s: string | null | undefined) => !!s && /biochem/i.test(s);

async function main() {
  // 1) Every category (this schema uses `title`, not `name`), plus parent link.
  const categories = await prisma.quizCategory.findMany({
    select: { id: true, slug: true, title: true, parentId: true },
  });

  // 2) Every quiz (lightweight), to map quizzes to categories.
  const quizzes = await prisma.quiz.findMany({
    select: { id: true, slug: true, title: true, kind: true, categoryId: true },
  });

  // Count questions per quiz.
  const counts = await prisma.question.groupBy({
    by: ["quizId"],
    _count: { _all: true },
  });
  const countByQuiz = new Map<string, number>();
  for (const c of counts) countByQuiz.set(c.quizId, c._count._all);

  const catById = new Map(categories.map((c) => [c.id, c]));
  const titleOf = (id: string | null) => (id ? catById.get(id)?.title ?? null : null);

  // ---- Console summary: all categories with quiz + question counts ----
  console.log("\n=== ALL CATEGORIES (slug — title — #quizzes — #questions) ===");
  for (const cat of categories) {
    const qz = quizzes.filter((q) => q.categoryId === cat.id);
    const totalQ = qz.reduce((s, q) => s + (countByQuiz.get(q.id) ?? 0), 0);
    const parent = cat.parentId ? `  [under: ${titleOf(cat.parentId)}]` : "";
    const flag = looksBiochem(cat.slug) || looksBiochem(cat.title) ? "  <== biochem?" : "";
    console.log(`  ${cat.slug}  —  ${cat.title}  —  ${qz.length} quizzes  —  ${totalQ} questions${parent}${flag}`);
  }

  // ---- Identify biochemistry-related categories & quizzes ----
  const biochemCats = categories.filter((c) => looksBiochem(c.slug) || looksBiochem(c.title));
  const biochemQuizzes = quizzes.filter(
    (q) =>
      biochemCats.some((c) => c.id === q.categoryId) ||
      looksBiochem(q.slug) ||
      looksBiochem(q.title)
  );

  if (biochemQuizzes.length === 0) {
    console.log(
      "\n(No biochemistry-named category or quiz found. The summary above lists " +
        "every category — tell me which slug holds the biochem items.)"
    );
  }

  // 3) Full questions (with choices) for those quizzes only.
  const biochemQuizIds = biochemQuizzes.map((q) => q.id);
  const questions = biochemQuizIds.length
    ? await prisma.question.findMany({
        where: { quizId: { in: biochemQuizIds } },
        select: {
          quizId: true,
          type: true,
          stem: true,
          topic: true,
          explanation: true,
          choices: {
            select: { text: true, isCorrect: true, order: true },
            orderBy: { order: "asc" },
          },
        },
      })
    : [];

  // ---- Topic breakdown for biochem ----
  const byTopic = new Map<string, number>();
  for (const q of questions) {
    const key = q.topic ?? "(no topic)";
    byTopic.set(key, (byTopic.get(key) ?? 0) + 1);
  }
  if (questions.length) {
    console.log("\n=== BIOCHEM QUESTIONS BY TOPIC ===");
    [...byTopic.entries()]
      .sort((a, b) => b[1] - a[1])
      .forEach(([t, n]) => console.log(`  ${n.toString().padStart(3)}  ${t}`));
    const avgExpl =
      questions.reduce((s, q) => s + (q.explanation?.trim().length ?? 0), 0) / questions.length;
    console.log(`\n  Total biochem questions: ${questions.length}`);
    console.log(`  Average explanation length: ${avgExpl.toFixed(0)} chars`);
  }

  // ---- Write the JSON for upload ----
  const payload = {
    exportedAt: new Date().toISOString(),
    allCategories: categories.map((c) => {
      const qz = quizzes.filter((q) => q.categoryId === c.id);
      return {
        slug: c.slug,
        title: c.title,
        parent: titleOf(c.parentId),
        quizCount: qz.length,
        questionCount: qz.reduce((s, q) => s + (countByQuiz.get(q.id) ?? 0), 0),
      };
    }),
    biochemQuizzes: biochemQuizzes.map((q) => ({
      slug: q.slug,
      title: q.title,
      kind: q.kind,
      category: titleOf(q.categoryId),
      questionCount: countByQuiz.get(q.id) ?? 0,
    })),
    biochemQuestions: questions.map((q) => ({
      quiz: biochemQuizzes.find((z) => z.id === q.quizId)?.slug ?? null,
      type: q.type,
      topic: q.topic,
      stem: q.stem,
      explanation: q.explanation,
      choices: q.choices.map((c) => ({ text: c.text, isCorrect: c.isCorrect })),
    })),
  };

  writeFileSync("biochemistry-export.json", JSON.stringify(payload, null, 2));
  console.log("\n✓ Wrote biochemistry-export.json to your project root. Upload that file in the chat.");
}

main()
  .catch((e) => {
    console.error("Export failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
