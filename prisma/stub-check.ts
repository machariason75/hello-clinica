/**
 * Stub check — find sections that are visibly empty to a visitor.
 *
 * WHY THIS MATTERS MORE THAN THE TOTALS
 *
 * The inventory shows eleven sections holding between 3 and 6 questions:
 * NAPLEX, MPJE, Pharmacy Calculations, USMLE Step 1 and Step 2 CK, TEAS Reading
 * and Mathematics, NCLEX-PN, Nursing Fundamentals, Nursing Pharmacology and
 * HESI Anatomy & Physiology.
 *
 * A student who clicks "USMLE Step 1", finds four questions and a scoreboard
 * does not conclude that one section is incomplete. They conclude the site is a
 * shell — and they don't come back to check whether Haematology is any better.
 * These stubs cost more credibility than they earn traffic, and they will keep
 * costing it for the year it takes to fill them properly.
 *
 * Hiding a quiz sets published = false. It is fully reversible, nothing is
 * deleted, and the section reappears the moment real content lands in it.
 *
 * Usage:
 *   npx tsx prisma/stub-check.ts                 report only, changes nothing
 *   npx tsx prisma/stub-check.ts --hide          unpublish quizzes under the threshold
 *   npx tsx prisma/stub-check.ts --show          re-publish everything it hid
 *   npx tsx prisma/stub-check.ts --hide --min=10 use a different threshold
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const HIDE = process.argv.includes("--hide");
const SHOW = process.argv.includes("--show");
const minArg = process.argv.find((a) => a.startsWith("--min="));
const MIN = minArg ? parseInt(minArg.split("=")[1], 10) : 15;

async function main() {
  const quizzes = await prisma.quiz.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      published: true,
      category: { select: { title: true } },
      _count: { select: { questions: true } },
    },
    orderBy: { slug: "asc" },
  });

  if (SHOW) {
    const hidden = quizzes.filter((q) => !q.published);
    if (!hidden.length) {
      console.log("\nNothing is currently hidden.\n");
      return;
    }
    for (const q of hidden) {
      await prisma.quiz.update({ where: { id: q.id }, data: { published: true } });
      console.log(`  ✓ re-published ${q.slug} (${q._count.questions} questions)`);
    }
    console.log(`\nRe-published ${hidden.length} quizzes.\n`);
    return;
  }

  const stubs = quizzes.filter((q) => q._count.questions < MIN);

  console.log(`\nQuizzes with fewer than ${MIN} questions:\n`);
  if (!stubs.length) {
    console.log("  None. Every quiz meets the threshold.\n");
    return;
  }

  for (const q of stubs) {
    const state = q.published ? "visible" : "hidden ";
    console.log(
      `  [${state}] ${String(q._count.questions).padStart(3)} q  ${q.category.title} › ${q.title}`
    );
  }

  const visible = stubs.filter((q) => q.published);
  console.log(`\n  ${stubs.length} below threshold, ${visible.length} currently visible to students.\n`);

  if (!HIDE) {
    console.log("  Run with --hide to unpublish the visible ones.");
    console.log("  Run with --show later to bring them all back.\n");
    return;
  }

  for (const q of visible) {
    await prisma.quiz.update({ where: { id: q.id }, data: { published: false } });
    console.log(`  ✓ hidden ${q.slug}`);
  }
  console.log(`\n  Hidden ${visible.length} quizzes. Nothing was deleted.`);
  console.log("  They return automatically when you re-publish, or run --show.\n");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
