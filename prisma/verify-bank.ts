/**
 * QUESTION BANK HEALTH CHECK — read-only. Run after every seed.
 *
 * WHY THIS EXISTS
 * ---------------
 * Two problems reached production before anyone noticed:
 *
 *   1. Duplicated questions. A retry replayed a batch of inserts that had
 *      already partly committed, leaving Practice Set 5 with 129 rows for 93
 *      questions. Nothing complained. The write path is now idempotent, but a
 *      check that would have caught it in seconds is worth having anyway.
 *
 *   2. Invisible cards. An animation waited for 15% of its container to be on
 *      screen before fading children in. At four cards that always happened; at
 *      twenty-four the container grew so tall the trigger never fired, and an
 *      entire section rendered as blank clickable blocks. Every diagnostic we
 *      had said the data was fine — because it was.
 *
 * The common thread: both were SCALING failures that looked fine at small size
 * and broke silently as content grew. This script checks the things that scale.
 *
 * Run:  npx tsx prisma/verify-bank.ts
 *
 * Exit code 1 on any error, so it can gate a deploy if you ever want it to.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** Above this many quizzes in one section, layout assumptions deserve a re-check. */
const SECTION_SIZE_WATCH = 12;

type Issue = { level: "error" | "warn"; where: string; message: string };
const issues: Issue[] = [];
const err = (where: string, message: string) => issues.push({ level: "error", where, message });
const warn = (where: string, message: string) => issues.push({ level: "warn", where, message });

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

async function main() {
  console.log("\n════════ QUESTION BANK HEALTH CHECK ════════\n");

  /* ─── categories ─── */

  const categories = await prisma.quizCategory.findMany({
    include: { _count: { select: { quizzes: true, children: true } } },
  });

  for (const c of categories) {
    if (!c.title || !c.title.trim()) err(c.slug, "category has a blank title");
    if (!c.slug.match(/^[a-z0-9-]+$/)) warn(c.slug, "slug contains unexpected characters");
    if (/paediatr|haematol|gynaecol|orthopaed|anaesth|oedema|tumour/i.test(c.slug))
      warn(c.slug, "slug still contains British spelling");
    if (c._count.quizzes > SECTION_SIZE_WATCH)
      warn(
        c.slug,
        `${c._count.quizzes} quizzes — above ${SECTION_SIZE_WATCH}. Confirm the section page still renders; ` +
          `this is the size at which the stagger animation previously failed.`
      );
  }

  /* ─── quizzes ─── */

  const quizzes = await prisma.quiz.findMany({
    include: {
      category: { select: { slug: true } },
      _count: { select: { questions: true } },
    },
  });

  for (const q of quizzes) {
    const where = q.slug;
    if (!q.title || !q.title.trim()) err(where, "quiz has a blank title");
    if (!q.description || !q.description.trim()) warn(where, "quiz has no description");
    if (q._count.questions === 0) err(where, "quiz has no questions");
    if (q.kind === "EXAM" && !q.timeLimitSeconds) warn(where, "exam has no time limit set");
    if (q.published === false) warn(where, "quiz is unpublished and will not appear");
  }

  /* ─── questions: the checks that catch a bad seed ─── */

  console.log(`Checking ${quizzes.length} quizzes…\n`);

  let totalQuestions = 0;
  let totalDuplicates = 0;

  for (const quiz of quizzes) {
    const questions = await prisma.question.findMany({
      where: { quizId: quiz.id },
      include: { choices: { select: { text: true, isCorrect: true } } },
    });
    totalQuestions += questions.length;

    // Duplicated stems inside one quiz — the signature of a replayed insert.
    const seen = new Set<string>();
    let dupes = 0;
    for (const q of questions) {
      const key = norm(q.stem);
      if (seen.has(key)) dupes++;
      else seen.add(key);
    }
    if (dupes > 0) {
      totalDuplicates += dupes;
      err(quiz.slug, `${dupes} duplicated question rows (${questions.length} rows, ${seen.size} unique)`);
    }

    // Answer key sanity — a question with no correct answer is unanswerable.
    for (const [i, q] of questions.entries()) {
      const correct = q.choices.filter((c) => c.isCorrect).length;
      const type = q.type as string;

      if (correct === 0) err(quiz.slug, `Q${i + 1} has no correct answer`);
      if (type === "SINGLE" && correct > 1)
        err(quiz.slug, `Q${i + 1} is SINGLE but has ${correct} correct answers`);
      if (type === "TRUE_FALSE" && q.choices.length !== 2)
        err(quiz.slug, `Q${i + 1} is TRUE_FALSE but has ${q.choices.length} choices`);
      if (type === "MULTI" && correct === q.choices.length)
        err(quiz.slug, `Q${i + 1} is MULTI with every option correct`);
      if (q.choices.length < 2) err(quiz.slug, `Q${i + 1} has fewer than 2 choices`);
      if (!q.explanation || !q.explanation.trim())
        warn(quiz.slug, `Q${i + 1} has no explanation`);
    }
  }

  /* ─── report ─── */

  const errors = issues.filter((i) => i.level === "error");
  const warnings = issues.filter((i) => i.level === "warn");

  console.log("─── TOTALS ───");
  console.log(`  categories : ${categories.length}`);
  console.log(`  quizzes    : ${quizzes.length}`);
  console.log(`  questions  : ${totalQuestions}`);
  console.log(`  duplicates : ${totalDuplicates}`);

  if (warnings.length) {
    console.log(`\n─── WARNINGS (${warnings.length}) ───`);
    for (const w of warnings) console.log(`  ⚠ [${w.where}] ${w.message}`);
  }

  if (errors.length) {
    console.log(`\n─── ERRORS (${errors.length}) ───`);
    for (const e of errors) console.log(`  ✗ [${e.where}] ${e.message}`);
    console.log("\nFix these before pushing.\n");
    process.exit(1);
  }

  console.log("\n✓ No errors. The bank is structurally sound.\n");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
