/**
 * Question bank inventory — VERSION 2, for the pool-and-draw model.
 *
 * WHAT CHANGED
 *
 * Version 1 measured practice and exams as two separate writing jobs and
 * reported 30,877 questions outstanding. Under the agreed model exam papers are
 * DRAWN from the practice pool, so exam questions are no longer written — they
 * are generated. The real outstanding figure is roughly half what v1 said.
 *
 * The target is now expressed against the practice pool:
 *
 *   · 7+ practice sets per section
 *   · 50+ questions each, more where the content is broad
 *   · 350 unique questions in the pool as the working minimum
 *   · exam papers generated from that pool by generate-exams.ts
 *
 * Duplicate reporting has changed too. A question appearing in both a practice
 * set and an exam paper is now EXPECTED — that is the design. What matters is
 * duplication between two practice sets, which means a set was written twice
 * and breaks the promise that sets are independent.
 *
 * Changes nothing. Safe to run any time.
 *
 * Usage:  npx tsx prisma/audit-question-bank.ts
 *         npx tsx prisma/audit-question-bank.ts --duplicates
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SHOW_DUPES = process.argv.includes("--duplicates");

const TARGET_SETS = 7;
const MIN_PER_SET = 50;
const TARGET_POOL = TARGET_SETS * MIN_PER_SET; // 350

async function main() {
  const cats = await prisma.quizCategory.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      parentId: true,
      quizzes: {
        select: { slug: true, kind: true, published: true, _count: { select: { questions: true } } },
        orderBy: { slug: "asc" },
      },
    },
    orderBy: [{ order: "asc" }, { title: "asc" }],
  });

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

  // Unique practice stems per category — the pool that actually matters.
  const practiceQuestions = await prisma.question.findMany({
    select: { stem: true, quiz: { select: { slug: true, kind: true, categoryId: true } } },
  });

  const poolByCat = new Map<string, Set<string>>();
  const practiceStemToQuizzes = new Map<string, string[]>();
  for (const q of practiceQuestions) {
    if (q.quiz.kind !== "PRACTICE") continue;
    const key = q.stem.trim().toLowerCase();
    if (!poolByCat.has(q.quiz.categoryId)) poolByCat.set(q.quiz.categoryId, new Set());
    poolByCat.get(q.quiz.categoryId)!.add(key);
    practiceStemToQuizzes.set(key, [...(practiceStemToQuizzes.get(key) ?? []), q.quiz.slug]);
  }

  console.log("\n══════════════════════════════════════════════════════════════");
  console.log(` PRACTICE POOL INVENTORY — target ${TARGET_SETS} sets, ${TARGET_POOL}+ unique questions`);
  console.log(" (exam papers are generated from the pool, not written separately)");
  console.log("══════════════════════════════════════════════════════════════\n");

  let outstanding = 0;
  let poolTotal = 0;
  const worklist: { section: string; slug: string; missing: number; sets: number }[] = [];

  for (const c of cats) {
    const practice = c.quizzes.filter((q) => q.kind === "PRACTICE");
    const exams = c.quizzes.filter((q) => q.kind === "EXAM");
    if (!practice.length && !exams.length) continue;

    const pool = poolByCat.get(c.id)?.size ?? 0;
    poolTotal += pool;
    const short = Math.max(0, TARGET_POOL - pool);
    outstanding += short;

    const complete = practice.length >= TARGET_SETS && short === 0;
    const mark = complete ? "✓" : pool === 0 ? "✗" : "·";

    console.log(`${mark} ${path(c)}`);
    console.log(
      `    practice: ${String(practice.length).padStart(2)} sets` +
        `   pool: ${String(pool).padStart(4)} unique` +
        `   exams: ${String(exams.length).padStart(2)} papers` +
        (short ? `   outstanding: ${short}` : `   COMPLETE`)
    );

    const thin = practice.filter((q) => q._count.questions < MIN_PER_SET);
    if (thin.length) {
      console.log(`    sets under ${MIN_PER_SET}: ` + thin.map((q) => `${q.slug}(${q._count.questions})`).join(", "));
    }
    if (pool > 0 && pool < 70 && exams.length > 0) {
      console.log(`    ⚠ pool too small for meaningful exam papers — papers will resemble each other`);
    }
    console.log("");

    if (short > 0) worklist.push({ section: path(c), slug: c.slug, missing: short, sets: practice.length });
  }

  /* ── duplication that actually matters ───────────────────────────────── */

  const crossSetDupes = [...practiceStemToQuizzes.entries()].filter(([, quizzes]) => new Set(quizzes).size > 1);

  console.log("══════════════════════════════════════════════════════════════");
  console.log(" SUMMARY");
  console.log("══════════════════════════════════════════════════════════════\n");
  console.log(`  Unique questions in practice pools   ${poolTotal}`);
  console.log(`  Outstanding to hit target            ${outstanding}`);
  console.log(`  Sections still short                 ${worklist.length}`);
  console.log(`  Duplicates BETWEEN practice sets     ${crossSetDupes.length}   ${crossSetDupes.length ? "← should be 0" : "✓"}\n`);

  if (crossSetDupes.length) {
    console.log("  These questions appear in more than one PRACTICE set, which breaks");
    console.log("  the promise that sets are independent. Mostly a legacy of the older");
    console.log("  seeds. Run with --duplicates to list them.\n");
    if (SHOW_DUPES) {
      for (const [stem, quizzes] of crossSetDupes.slice(0, 100)) {
        console.log(`    "${stem.slice(0, 66)}${stem.length > 66 ? "…" : ""}"`);
        console.log(`       ${[...new Set(quizzes)].join(", ")}`);
      }
      if (crossSetDupes.length > 100) console.log(`    … and ${crossSetDupes.length - 100} more\n`);
    }
  }

  // Sections closest to completion first — finishing one is worth more than
  // starting three, and a nearly-full section becomes usable soonest.
  worklist.sort((a, b) => a.missing - b.missing);
  console.log("  CLOSEST TO COMPLETE — best value to finish next:\n");
  worklist.slice(0, 15).forEach((w, i) => {
    console.log(
      `    ${String(i + 1).padStart(2)}. ${w.section.slice(0, 50).padEnd(52)} ${String(w.missing).padStart(4)} to go  (${w.sets} sets)`
    );
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
