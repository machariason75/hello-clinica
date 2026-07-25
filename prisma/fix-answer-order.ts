/**
 * REPAIR — distribute correct answers uniformly.  (v3)
 *
 * HISTORY OF THIS SCRIPT, honestly
 *
 *  v1  The bank was written with every correct answer first, so 100% sat at A.
 *
 *  v2  My fix chose the new position with:
 *          const target = 1 + Math.floor(Math.random() * (n - 1));
 *      The `1 +` was meant to guarantee the answer moved off A. It also made
 *      position 0 unreachable — so A went from ALWAYS correct to NEVER correct.
 *      One bias replaced by the opposite bias, which is arguably worse because
 *      it is less obvious.
 *
 *  v3  A genuinely uniform pick across ALL positions, including A.
 *
 * WHAT UNIFORM ACTUALLY MEANS
 * With four options, roughly a quarter of questions SHOULD end up with the
 * answer at A. If A never appears, the distribution is not random. The script
 * therefore does NOT force the answer to move: when the random target happens
 * to equal its current position, it stays — and that costs no database writes,
 * which is a useful side effect.
 *
 * Expect a result near A:25%  B:25%  C:25%  D:25%, with normal random variation.
 *
 * Only display order changes. Question text, correct flags and rationales are
 * never touched. Safe to run repeatedly.
 *
 * Run:  npx tsx prisma/fix-answer-order.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function isTransient(e: unknown): boolean {
  if (!(e instanceof Error)) return false;
  const m = e.message.toLowerCase();
  return (
    m.includes("p1001") || m.includes("p1017") ||
    m.includes("can't reach database") || m.includes("closed the connection") ||
    m.includes("connection") || m.includes("econnreset") || m.includes("timed out")
  );
}

async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  for (let i = 1; i <= 5; i++) {
    try {
      return await fn();
    } catch (e) {
      if (!isTransient(e) || i === 5) throw e;
      const wait = i * 2000;
      console.log(`    … connection dropped on ${label}, waiting ${wait / 1000}s (${i}/4)`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error("unreachable");
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log("Distributing correct answers uniformly across all options…\n");

  const questions = await withRetry(
    () =>
      prisma.question.findMany({
        select: {
          id: true,
          choices: { select: { id: true, isCorrect: true, order: true }, orderBy: { order: "asc" } },
        },
      }),
    "load questions"
  );

  const usable = questions.filter((q) => q.choices.length >= 2);
  console.log(`  ${questions.length} questions found (${usable.length} with multiple choices)\n`);

  let moved = 0;
  let stayed = 0;
  let processed = 0;

  for (const q of usable) {
    const current = q.choices.findIndex((c) => c.isCorrect);
    if (current < 0) continue;

    // UNIFORM across every position, A included. No exclusions, no nudging.
    const target = Math.floor(Math.random() * q.choices.length);

    if (target === current) {
      // Already where chance put it. Leaving it is part of a fair distribution,
      // and it saves two writes.
      stayed++;
    } else {
      const a = q.choices[current];
      const b = q.choices[target];
      await withRetry(
        () => prisma.choice.update({ where: { id: a.id }, data: { order: b.order } }),
        `question ${processed + 1}`
      );
      await withRetry(
        () => prisma.choice.update({ where: { id: b.id }, data: { order: a.order } }),
        `question ${processed + 1}`
      );
      moved++;
    }

    processed++;
    if (processed % 100 === 0) {
      console.log(`  … ${processed} / ${usable.length}`);
      await sleep(400);
    }
  }

  console.log(`\n  Processed ${processed} questions — ${moved} moved, ${stayed} already in place.`);
  await report();
}

async function report() {
  const all = await withRetry(
    () =>
      prisma.question.findMany({
        select: { choices: { select: { isCorrect: true }, orderBy: { order: "asc" } } },
      }),
    "verify"
  );

  const pos: Record<number, number> = {};
  let total = 0;
  for (const q of all) {
    const i = q.choices.findIndex((c) => c.isCorrect);
    if (i >= 0) {
      pos[i] = (pos[i] ?? 0) + 1;
      total++;
    }
  }

  console.log("\n  Correct answer distribution:");
  ["A", "B", "C", "D", "E"].forEach((L, i) => {
    if (pos[i] === undefined && i > 3) return;
    const n = pos[i] ?? 0;
    const pct = total ? Math.round((n / total) * 100) : 0;
    const bar = "█".repeat(Math.round(pct / 2));
    console.log(`    ${L}: ${String(n).padStart(5)}  ${String(pct).padStart(3)}%  ${bar}`);
  });

  // Flag any position that is absent or dominant, since both are gameable.
  const counts = [0, 1, 2, 3].map((i) => pos[i] ?? 0);
  const missing = counts.some((c, i) => c === 0 && (pos[i] !== undefined || i < 4));
  const dominant = counts.some((c) => total > 0 && c / total > 0.4);

  if (missing) {
    console.log("\n  ⚠ One option never holds the correct answer — please send me this output.");
  } else if (dominant) {
    console.log("\n  ⚠ One option is over-represented — please send me this output.");
  } else {
    console.log("\nDone. Distribution looks fair — roughly a quarter on each option.");
  }
}

main()
  .catch((e) => {
    console.error("\n✗ Stopped:", e instanceof Error ? e.message.split("\n")[0] : e);
    console.error("  Just run the command again — re-running is harmless.\n");
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
