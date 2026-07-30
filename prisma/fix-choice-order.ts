/**
 * Randomise answer order across the entire question bank.
 *
 * VERSION 2 — now randomises EVERY quiz, not only the badly skewed ones.
 *
 * The earlier version only touched quizzes where the correct answer sat first
 * in 60% or more of questions. That fixed the worst offenders but left sets
 * sitting at 40–55% — still well above the ~25% you'd get by chance with four
 * options, and still learnable. Randomising everything removes the pattern
 * completely and costs nothing.
 *
 * WHAT IT TOUCHES: only the `order` column on choices. Never a choice's id,
 * text or isCorrect flag. Past student attempts store choice IDs, so their
 * results and reviews are unaffected.
 *
 * Usage:
 *   npx tsx prisma/fix-choice-order.ts            # audit only — changes nothing
 *   npx tsx prisma/fix-choice-order.ts --apply    # randomise everything
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const APPLY = process.argv.includes("--apply");

function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Row = { slug: string; eligible: number; first: number; pct: number };

async function survey(): Promise<Row[]> {
  const quizzes = await prisma.quiz.findMany({
    select: {
      slug: true,
      questions: {
        select: { id: true, choices: { select: { id: true, isCorrect: true }, orderBy: { order: "asc" } } },
      },
    },
    orderBy: { slug: "asc" },
  });

  return quizzes
    .map((q) => {
      const eligible = q.questions.filter((x) => x.choices.filter((c) => c.isCorrect).length === 1);
      const first = eligible.filter((x) => x.choices[0]?.isCorrect).length;
      return {
        slug: q.slug,
        eligible: eligible.length,
        first,
        pct: eligible.length ? Math.round((first / eligible.length) * 100) : 0,
      };
    })
    .filter((r) => r.eligible > 0);
}

async function main() {
  console.log(APPLY ? "Randomising answer order across the bank…\n" : "Auditing answer order (no changes)…\n");

  const before = await survey();
  if (!before.length) {
    console.log("No quizzes with single-answer questions found.");
    return;
  }

  for (const r of before) {
    const flag = r.pct >= 60 ? "⚠" : r.pct >= 40 ? "·" : " ";
    console.log(`${flag} ${r.slug.padEnd(46)} answer first in ${String(r.first).padStart(3)}/${String(r.eligible).padEnd(3)} (${r.pct}%)`);
  }

  const totalQ = before.reduce((s, r) => s + r.eligible, 0);
  const totalF = before.reduce((s, r) => s + r.first, 0);
  console.log(`\nBEFORE — correct answer first in ${totalF}/${totalQ} questions (${Math.round((totalF / totalQ) * 100)}%).`);
  console.log("Chance alone with four options would be about 25%.\n");

  if (!APPLY) {
    console.log("Re-run with --apply to randomise every quiz.");
    return;
  }

  const quizzes = await prisma.quiz.findMany({
    select: { slug: true, questions: { select: { id: true, choices: { select: { id: true } } } } },
    orderBy: { slug: "asc" },
  });

  let touched = 0;
  for (const quiz of quizzes) {
    for (const q of quiz.questions) {
      if (q.choices.length < 2) continue;
      const order = shuffled(q.choices.map((c) => c.id));
      for (let i = 0; i < order.length; i++) {
        await prisma.choice.update({ where: { id: order[i] }, data: { order: i } });
      }
      touched++;
    }
    process.stdout.write(`  randomised ${quiz.slug}\r`);
  }
  console.log(`\n  randomised ${touched} questions across ${quizzes.length} quizzes.\n`);

  // Verify rather than assume. If the after-figure isn't near 25%, something
  // is wrong and you should know before students see it.
  const after = await survey();
  const aQ = after.reduce((s, r) => s + r.eligible, 0);
  const aF = after.reduce((s, r) => s + r.first, 0);
  const pct = Math.round((aF / aQ) * 100);
  console.log(`AFTER  — correct answer first in ${aF}/${aQ} questions (${pct}%).`);

  if (pct >= 40) {
    console.log("\n⚠ That is still higher than expected. Re-run the audit and send me the output.");
  } else {
    console.log("\n✓ Distribution now looks random. The first-option pattern is gone.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
