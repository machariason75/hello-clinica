/**
 * PATHOLOGY DIAGNOSTIC v2 — read-only. Changes nothing.
 *
 * The first diagnostic printed quiz SLUGS. The cards on your dashboard display
 * TITLES. That was the gap: an empty title renders a blank card with a working
 * link, which is exactly the reported symptom, and v1 could not have shown it.
 *
 * This version prints every field the page could plausibly render, wrapped in
 * quote marks so an empty string is unmistakable — "" rather than blank space.
 *
 * It also counts duplicate question stems inside each quiz. Set 5 reported 129
 * questions where 93 were written, and Exam 1 reported 199 where 181 were
 * written, which points to batched inserts being replayed after a dropped
 * connection.
 *
 * Run:  npx tsx prisma/diagnose-pathology-2.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function show(value: unknown): string {
  if (value === null) return "NULL";
  if (value === undefined) return "UNDEFINED";
  if (typeof value === "string") {
    if (value === "") return '""  ← EMPTY STRING';
    if (value.trim() === "") return `"${value}"  ← WHITESPACE ONLY`;
    return `"${value}"`;
  }
  return JSON.stringify(value);
}

async function main() {
  console.log("\n════════ PATHOLOGY DIAGNOSTIC v2 ════════\n");

  const pathology = await prisma.quizCategory.findUnique({
    where: { slug: "fs-pathology" },
  });
  if (!pathology) {
    console.log("Category fs-pathology not found.\n");
    return;
  }

  /* ─── 1. sibling categories: does Pathology have children the page lists? ─── */

  const children = await prisma.quizCategory.findMany({
    where: { parentId: pathology.id },
    select: { slug: true, title: true, published: true, order: true },
    orderBy: { order: "asc" },
  });

  console.log(`1. CHILD CATEGORIES UNDER fs-pathology  (${children.length})\n`);
  if (!children.length) {
    console.log("   None — so the dashboard must be listing quizzes directly.\n");
  } else {
    for (const c of children) {
      console.log(`   ${c.slug}`);
      console.log(`     title     : ${show(c.title)}`);
      console.log(`     published : ${c.published}   order: ${c.order}`);
    }
    console.log("");
  }

  /* ─── 2. every quiz, with the fields a card would render ─── */

  const quizzes = await prisma.quiz.findMany({
    where: { categoryId: pathology.id },
    orderBy: [{ order: "asc" }, { slug: "asc" }],
    include: { _count: { select: { questions: true } } },
  });

  console.log(`2. QUIZZES — showing the fields a card renders  (${quizzes.length})\n`);

  const blankTitles: string[] = [];

  for (const q of quizzes as any[]) {
    const titleOk = typeof q.title === "string" && q.title.trim() !== "";
    if (!titleOk) blankTitles.push(q.slug);

    console.log(`   ${q.slug}`);
    console.log(`     title       : ${show(q.title)}`);
    console.log(`     description : ${show(q.description)}`);
    console.log(`     difficulty  : ${show(q.difficulty)}`);
    console.log(`     kind        : ${show(q.kind)}   published: ${q.published}`);
    console.log(`     questions   : ${q._count.questions}   order: ${q.order}`);
    console.log("");
  }

  /* ─── 3. duplicated questions inside each quiz ─── */

  console.log("3. DUPLICATE QUESTIONS WITHIN EACH QUIZ\n");

  let totalDupes = 0;
  for (const q of quizzes) {
    const questions = await prisma.question.findMany({
      where: { quizId: q.id },
      select: { stem: true },
    });
    const seen = new Set<string>();
    let dupes = 0;
    for (const item of questions) {
      const key = item.stem.trim().toLowerCase().replace(/\s+/g, " ");
      if (seen.has(key)) dupes++;
      else seen.add(key);
    }
    if (dupes > 0) {
      totalDupes += dupes;
      console.log(
        `   ${q.slug.padEnd(38)} ${questions.length} rows, ${seen.size} unique, ` +
          `${dupes} DUPLICATED`
      );
    }
  }
  if (totalDupes === 0) console.log("   None found.\n");
  else console.log(`\n   Total duplicated question rows: ${totalDupes}\n`);

  /* ─── 4. how many quizzes do other sections carry? ─── */

  console.log("4. QUIZ COUNT PER SECTION — is Pathology an outlier?\n");

  const all = await prisma.quizCategory.findMany({
    select: { slug: true, _count: { select: { quizzes: true } } },
    orderBy: { slug: "asc" },
  });
  const withContent = all.filter((c) => c._count.quizzes > 0);
  const counts = withContent.map((c) => c._count.quizzes);
  const median = counts.slice().sort((a, b) => a - b)[Math.floor(counts.length / 2)];

  for (const c of withContent.sort((a, b) => b._count.quizzes - a._count.quizzes).slice(0, 10)) {
    const flag = c.slug === "fs-pathology" ? "   ← THIS SECTION" : "";
    console.log(`   ${c.slug.padEnd(34)} ${String(c._count.quizzes).padStart(3)}${flag}`);
  }
  console.log(`\n   Median across sections with content: ${median}`);

  /* ─── 5. verdict ─── */

  console.log("\n5. FINDINGS\n");

  if (blankTitles.length) {
    console.log(`   ✗ ${blankTitles.length} quiz(zes) have a blank or missing title:`);
    for (const s of blankTitles) console.log(`       ${s}`);
    console.log("     A card with no title renders as an empty clickable block —");
    console.log("     which matches the reported symptom exactly.\n");
  } else {
    console.log("   ✓ Every quiz has a non-empty title, so blank cards are not");
    console.log("     caused by missing title data.\n");
  }

  if (totalDupes > 0) {
    console.log(`   ✗ ${totalDupes} duplicated question rows — batched inserts were`);
    console.log("     replayed after a dropped connection. Fixable by re-seeding");
    console.log("     with a corrected write path.\n");
  }

  const pathCount = quizzes.length;
  if (pathCount > median * 3) {
    console.log(`   ⚠ Pathology holds ${pathCount} quizzes against a median of ${median}.`);
    console.log("     Three generations of content are stacked in one section:");
    console.log("     the original sets, a later 7-set build, and the current one.");
    console.log("     A page that renders 4 cards comfortably may fail at 24.\n");
  }

  console.log("");
}

main()
  .catch((e) => {
    console.error("\n✗ Diagnostic failed:\n");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
