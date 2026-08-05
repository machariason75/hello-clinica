/**
 * PATHOLOGY DIAGNOSTIC — read-only. Changes nothing.
 *
 * Answers, in order, the questions that determine why a section might not
 * appear on the site:
 *
 *   1. Does the fs-pathology category exist, and what is it called?
 *   2. Is it attached to a parent, so the navigation can reach it?
 *   3. Which quizzes sit under it, and are they published?
 *   4. Do those quizzes actually contain questions?
 *   5. How does all that compare with a section that IS displaying?
 *
 * Run:  npx tsx prisma/diagnose-pathology.ts
 *
 * Paste the whole output back and it will be obvious which step failed.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("\n════════ PATHOLOGY DIAGNOSTIC ════════\n");

  /* ---- 1. the category ---- */
  const pathology = await prisma.quizCategory.findUnique({
    where: { slug: "fs-pathology" },
  });

  if (!pathology) {
    console.log("✗ No category with slug 'fs-pathology' exists.");
    console.log("  The seed would have failed immediately with a clear error.\n");
    console.log("  Categories that DO exist, for comparison:\n");
    const all = await prisma.quizCategory.findMany({
      select: { slug: true, title: true },
      orderBy: { slug: "asc" },
    });
    for (const c of all) console.log(`    ${c.slug.padEnd(34)} ${c.title}`);
    console.log("");
    return;
  }

  console.log("1. CATEGORY");
  console.log(`   ✓ found: ${pathology.slug}`);
  console.log(`     title    : ${pathology.title}`);
  console.log(`     id       : ${pathology.id}`);
  console.log(`     parentId : ${pathology.parentId ?? "(none — top level)"}`);

  // Print every remaining field so we can spot a visibility flag the seed
  // never sets — e.g. published, active, visible, order.
  const extras = Object.entries(pathology).filter(
    ([k]) => !["id", "slug", "title", "parentId", "description", "overview"].includes(k)
  );
  if (extras.length) {
    console.log("     other fields:");
    for (const [k, v] of extras) console.log(`       ${k.padEnd(16)} = ${JSON.stringify(v)}`);
  }

  if (pathology.parentId) {
    const parent = await prisma.quizCategory.findUnique({
      where: { id: pathology.parentId },
      select: { slug: true, title: true },
    });
    console.log(`     parent   : ${parent?.slug} (${parent?.title})`);
  }

  /* ---- 2. quizzes under it ---- */
  const quizzes = await prisma.quiz.findMany({
    where: { categoryId: pathology.id },
    orderBy: { order: "asc" },
    include: { _count: { select: { questions: true } } },
  });

  console.log(`\n2. QUIZZES UNDER fs-pathology  (${quizzes.length} found)\n`);

  if (!quizzes.length) {
    console.log("   ✗ NONE. The seed has not written to this database.");
    console.log("     Run:  npx tsx prisma/seed-pathology.ts");
    console.log("     Note that `git push` does NOT run seeds — the command");
    console.log("     must be run against the database directly.\n");
  } else {
    const pad = Math.max(...quizzes.map((q) => q.slug.length));
    for (const q of quizzes) {
      const flags: string[] = [];
      if ("published" in q && !(q as any).published) flags.push("NOT PUBLISHED");
      if (q._count.questions === 0) flags.push("NO QUESTIONS");
      const mark = flags.length ? `  ← ${flags.join(", ")}` : "";
      console.log(
        `   ${q.slug.padEnd(pad)}  ${String(q._count.questions).padStart(3)} Q  ` +
          `${(q as any).kind ?? "?"}  order ${q.order}${mark}`
      );
    }
  }

  /* ---- 3. compare with a working section ---- */
  console.log("\n3. COMPARISON — sections that already display\n");

  const others = await prisma.quizCategory.findMany({
    where: { slug: { not: "fs-pathology" } },
    select: { slug: true, title: true, parentId: true, _count: { select: { quizzes: true } } },
    orderBy: { slug: "asc" },
  });

  const withContent = others.filter((c) => c._count.quizzes > 0).slice(0, 12);
  for (const c of withContent) {
    console.log(
      `   ${c.slug.padEnd(34)} ${String(c._count.quizzes).padStart(3)} quizzes  ` +
        `parent=${c.parentId ? "yes" : "NO"}`
    );
  }

  /* ---- 4. totals ---- */
  const totalQuizzes = await prisma.quiz.count();
  const totalQuestions = await prisma.question.count();
  const pathologyQuestions = quizzes.reduce((n, q) => n + q._count.questions, 0);

  console.log("\n4. TOTALS\n");
  console.log(`   quizzes in database   : ${totalQuizzes}`);
  console.log(`   questions in database : ${totalQuestions}`);
  console.log(`   of which Pathology    : ${pathologyQuestions}`);

  /* ---- 5. verdict ---- */
  console.log("\n5. LIKELY CAUSE\n");

  if (!quizzes.length) {
    console.log("   The seed has never run against this database.");
    console.log("   → npx tsx prisma/seed-pathology.ts");
  } else if (quizzes.every((q) => q._count.questions === 0)) {
    console.log("   Quizzes exist but hold no questions — the seed created the");
    console.log("   quiz rows then failed before writing questions.");
  } else if ("published" in quizzes[0] && quizzes.some((q) => !(q as any).published)) {
    console.log("   Some quizzes are unpublished, so the site filters them out.");
  } else if (!pathology.parentId) {
    console.log("   The category has no parent, so the navigation tree may not");
    console.log("   reach it even though the content exists.");
  } else {
    console.log("   Data looks correct in the database. If the site still does not");
    console.log("   show it, the problem is in the page query or caching rather");
    console.log("   than the content. Send this output and we will look there.");
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
