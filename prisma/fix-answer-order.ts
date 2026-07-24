/**
 * REPAIR — randomise the position of correct answers.  (v2: resumable)
 *
 * THE BUG
 * Every question was written with the correct answer first, and nothing
 * shuffled them, so 100% of correct answers sat at position A.
 *
 * WHAT CHANGED IN v2
 *  1. RESUMABLE. It skips any question whose correct answer has already been
 *     moved off position 0. So if the connection drops, just run it again — it
 *     picks up where it stopped instead of starting over.
 *  2. FEWER WRITES. It swaps the correct answer into a random slot rather than
 *     rewriting every choice: two updates per question instead of four, halving
 *     the load on the connection.
 *  3. BETTER RETRY. v1 checked for "Connection" with a capital C and therefore
 *     missed "Server has closed the connection" (P1017) — the exact error that
 *     stopped it. Matching is now case-insensitive and includes P1017.
 *  4. It pauses briefly every 50 questions, which keeps a free-tier pooled
 *     connection much happier over a long run.
 *
 * Only the display order changes. Question text, correct-answer flags and
 * rationales are never touched.
 *
 * Run:  npx tsx prisma/fix-answer-order.ts        (re-run freely until it completes)
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** Is this a dropped-connection error rather than a real failure? */
function isTransient(e: unknown): boolean {
  if (!(e instanceof Error)) return false;
  const m = e.message.toLowerCase();
  return (
    m.includes("p1001") ||
    m.includes("p1017") ||
    m.includes("can't reach database") ||
    m.includes("closed the connection") ||
    m.includes("connection") ||
    m.includes("econnreset") ||
    m.includes("timed out")
  );
}

async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  const attempts = 5;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      if (!isTransient(e) || i === attempts) throw e;
      const wait = i * 2000;
      console.log(`    … connection dropped on ${label}, waiting ${wait / 1000}s and retrying (${i}/${attempts - 1})`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error("unreachable");
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log("Randomising answer positions…\n");

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

  // Anything already fixed is skipped, which is what makes this resumable.
  const todo = questions.filter((q) => {
    if (q.choices.length < 2) return false;
    const idx = q.choices.findIndex((c) => c.isCorrect);
    return idx === 0; // still sitting at A
  });

  const alreadyDone = questions.length - todo.length;
  console.log(`  ${questions.length} questions total`);
  console.log(`  ${alreadyDone} already randomised (skipping)`);
  console.log(`  ${todo.length} still to fix\n`);

  if (todo.length === 0) {
    console.log("Nothing left to do — the whole bank is already randomised.");
    await report();
    return;
  }

  let done = 0;
  for (const q of todo) {
    const correct = q.choices.find((c) => c.isCorrect);
    if (!correct) continue;

    // Move the correct answer to a random slot by swapping it with whatever is
    // there. Two updates rather than four.
    const target = 1 + Math.floor(Math.random() * (q.choices.length - 1)); // never 0
    const displaced = q.choices[target];

    await withRetry(
      () => prisma.choice.update({ where: { id: correct.id }, data: { order: displaced.order } }),
      `question ${done + 1}`
    );
    await withRetry(
      () => prisma.choice.update({ where: { id: displaced.id }, data: { order: correct.order } }),
      `question ${done + 1}`
    );

    done++;
    if (done % 50 === 0) {
      console.log(`  … ${done} / ${todo.length}`);
      await sleep(400); // brief pause keeps the pooled connection healthy
    }
  }

  console.log(`\n  Updated ${done} questions.`);
  await report();
}

/** Prints the current distribution so you can see the fix worked. */
async function report() {
  const all = await withRetry(
    () =>
      prisma.question.findMany({
        select: { choices: { select: { isCorrect: true }, orderBy: { order: "asc" } } },
      }),
    "verify"
  );

  const pos: Record<number, number> = {};
  for (const q of all) {
    const i = q.choices.findIndex((c) => c.isCorrect);
    if (i >= 0) pos[i] = (pos[i] ?? 0) + 1;
  }

  const summary = ["A", "B", "C", "D", "E"]
    .map((L, i) => (pos[i] ? `${L}:${pos[i]}` : null))
    .filter(Boolean)
    .join("   ");

  console.log(`\n  Correct answer positions now:  ${summary}`);
  if ((pos[0] ?? 0) === all.length) {
    console.log("  ⚠ Nothing changed — please send me this output.");
  } else {
    console.log("\nDone. Answers are distributed across the options.");
  }
}

main()
  .catch((e) => {
    console.error("\n✗ Stopped:", e instanceof Error ? e.message.split("\n")[0] : e);
    console.error("  Progress is saved — just run the command again to continue.\n");
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
