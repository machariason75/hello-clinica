/**
 * Question bank inventory — measures every section against the target standard.
 *
 * TARGET (set by the owner):
 *   · 7+ practice sets per section, 50+ questions each, all unique
 *   · 7+ exam sets per section, 50+ questions each, all unique
 *
 * This prints where every section actually stands and how much is outstanding,
 * so the rebuild runs off real numbers instead of impressions.
 *
 * It also flags DUPLICATE STEMS across the whole bank. That matters more than
 * it sounds: exams in the older seeds were assembled by concatenating practice
 * sets, so the same question exists in several quizzes. Those duplicates have to
 * be found before sets can be extended independently.
 *
 * Changes nothing. Safe to run any time.
 *
 * Usage:  npx tsx prisma/audit-question-bank.ts
 *         npx tsx prisma/audit-question-bank.ts --duplicates   (full dup list)
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SHOW_DUPES = process.argv.includes("--duplicates");

const TARGET_SETS = 7;
const TARGET_QUESTIONS = 50;

async function main() {
  const cats = await prisma.quizCategory.findMany({
    select: {
      slug: true,
      title: true,
      parentId: true,
      id: true,
      quizzes: {
        select: { slug: true, title: true, kind: true, _count: { select: { questions: true } } },
        orderBy: { slug: "asc" },
      },
    },
    orderBy: [{ order: "asc" }, { title: "asc" }],
  });

  const titleById = new Map(cats.map((c) => [c.id, c.title]));
  const path = (c: (typeof cats)[number]) => {
    const parts = [c.title];
    let p = c.parentId;
    let guard = 0;
    while (p && guard++ < 10) {
      const parent = cats.find((x) => x.id === p);
      if (!parent) break;
      parts.unshift(parent.title);
      p = parent.parentId;
    }
    return parts.join(" › ");
  };

  const withQuizzes = cats.filter((c) => c.quizzes.length > 0);

  console.log("\n══════════════════════════════════════════════════════════════");
  console.log(` QUESTION BANK INVENTORY  —  target ${TARGET_SETS} sets × ${TARGET_QUESTIONS} questions`);
  console.log("══════════════════════════════════════════════════════════════\n");

  let totalQ = 0;
  let neededQ = 0;
  const worklist: { section: string; missing: number }[] = [];

  for (const c of withQuizzes) {
    const practice = c.quizzes.filter((q) => q.kind === "PRACTICE");
    const exams = c.quizzes.filter((q) => q.kind === "EXAM");
    const pq = practice.reduce((s, q) => s + q._count.questions, 0);
    const eq = exams.reduce((s, q) => s + q._count.questions, 0);
    totalQ += pq + eq;

    // What's still owed to reach the standard.
    const wantP = TARGET_SETS * TARGET_QUESTIONS;
    const wantE = TARGET_SETS * TARGET_QUESTIONS;
    const shortP = Math.max(0, wantP - pq);
    const shortE = Math.max(0, wantE - eq);
    const short = shortP + shortE;
    neededQ += short;

    const ok = practice.length >= TARGET_SETS && exams.length >= TARGET_SETS && short === 0;
    const mark = ok ? "✓" : short > 600 ? "✗" : "·";

    console.log(`${mark} ${path(c)}`);
    console.log(
      `    practice: ${String(practice.length).padStart(2)} sets / ${String(pq).padStart(4)} questions` +
        `     exams: ${String(exams.length).padStart(2)} sets / ${String(eq).padStart(4)} questions`
    );
    if (!ok) {
      console.log(`    outstanding: ${short} questions  (${shortP} practice, ${shortE} exam)`);
      worklist.push({ section: path(c), missing: short });
    }
    const thin = c.quizzes.filter((q) => q._count.questions < TARGET_QUESTIONS);
    if (thin.length) {
      console.log(
        `    below ${TARGET_QUESTIONS}: ` + thin.map((q) => `${q.slug}(${q._count.questions})`).join(", ")
      );
    }
    console.log("");
  }

  /* ── duplicate stems across the bank ─────────────────────────────────── */

  const questions = await prisma.question.findMany({
    select: { stem: true, quiz: { select: { slug: true } } },
  });
  const stemMap = new Map<string, string[]>();
  for (const q of questions) {
    const key = q.stem.trim().toLowerCase();
    stemMap.set(key, [...(stemMap.get(key) ?? []), q.quiz.slug]);
  }
  const dupes = [...stemMap.entries()].filter(([, quizzes]) => quizzes.length > 1);
  const dupTotal = dupes.reduce((s, [, q]) => s + q.length - 1, 0);

  console.log("══════════════════════════════════════════════════════════════");
  console.log(" SUMMARY");
  console.log("══════════════════════════════════════════════════════════════\n");
  console.log(`  Sections with content        ${withQuizzes.length}`);
  console.log(`  Questions in the bank        ${totalQ}`);
  console.log(`  Unique question stems        ${stemMap.size}`);
  console.log(`  Duplicated placements        ${dupTotal}   (same question in more than one quiz)`);
  console.log(`  Outstanding to hit target    ${neededQ}\n`);

  if (dupTotal > 0) {
    console.log(`  ${dupes.length} stems appear in more than one quiz. In the older seeds`);
    console.log(`  exams were built by combining practice sets, so this is expected —`);
    console.log(`  but those exams need their own questions before sets can grow`);
    console.log(`  independently. Run with --duplicates for the full list.\n`);
    if (SHOW_DUPES) {
      for (const [stem, quizzes] of dupes.slice(0, 200)) {
        console.log(`    "${stem.slice(0, 70)}${stem.length > 70 ? "…" : ""}"`);
        console.log(`       ${quizzes.join(", ")}`);
      }
      if (dupes.length > 200) console.log(`    … and ${dupes.length - 200} more`);
      console.log("");
    }
  }

  worklist.sort((a, b) => b.missing - a.missing);
  console.log("  BIGGEST GAPS — sensible order to work through:\n");
  worklist.slice(0, 15).forEach((w, i) => {
    console.log(`    ${String(i + 1).padStart(2)}. ${w.section.padEnd(52)} ${w.missing} questions`);
  });
  console.log("");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
