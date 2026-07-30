/**
 * SEEDKIT — shared helpers for every question-bank seed from here on.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * THE PROBLEM THIS EXISTS TO FIX
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Every seed written so far does this:
 *
 *     await prisma.question.deleteMany({ where: { quizId: quiz.id } });
 *
 * It wipes the quiz and rebuilds it. That was fine while seeds were the only
 * author. It is NOT fine given the plan to grow sets over time: the moment you
 * add ten questions to a set through Admin and someone later re-runs that seed,
 * your ten questions are gone. No warning, no backup.
 *
 * Since the whole reason for keeping sets unique is so they can be EXTENDED
 * later, that behaviour would quietly destroy the thing being built.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * WHAT THIS DOES INSTEAD
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Questions are matched by their stem within the quiz:
 *
 *   · stem already present  → update topic/explanation/choices in place
 *   · stem not present      → create it
 *   · question in the quiz that the seed doesn't know about → LEFT ALONE
 *
 * So a seed re-run refreshes what it owns and never touches what you added.
 * Question ids are preserved on update, so past attempt reviews stay intact.
 *
 * If you genuinely want a clean rebuild, pass `--replace` on the command line.
 * It asks for nothing and deletes everything in that quiz — deliberate, loud,
 * and never the default.
 */

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

export const REPLACE_MODE = process.argv.includes("--replace");

/* ── utilities ────────────────────────────────────────────────────────── */

/** Fisher-Yates. Correct answers are written first in seed data for readability. */
export function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Retries a write when the pooled connection drops. Real errors re-throw at once. */
export async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  const attempts = 3;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      const transient =
        e instanceof Error &&
        (e.message.includes("P1001") ||
          e.message.includes("Can't reach database") ||
          e.message.includes("Connection") ||
          e.message.includes("ECONNRESET"));
      if (!transient || i === attempts) throw e;
      const wait = i * 2000;
      console.log(`    … connection hiccup on ${label}, retrying in ${wait / 1000}s`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error("unreachable");
}

/* ── category helpers ─────────────────────────────────────────────────── */

/** Looks up a category by slug. Returns null with a clear message if absent. */
export async function findCategory(slug: string): Promise<string | null> {
  const c = await withRetry(() => prisma.quizCategory.findUnique({ where: { slug } }), `find ${slug}`);
  if (!c) {
    console.log(`  ✗ Category "${slug}" not found — run seed-medical-taxonomy.ts first.`);
    return null;
  }
  return c.id;
}

/** Finds a category, or creates it under `parentSlug` if missing. Never duplicates. */
export async function ensureCategory(o: {
  slug: string;
  title: string;
  description: string;
  overview?: string;
  icon?: string;
  parentSlug: string;
  order?: number;
}): Promise<string | null> {
  const existing = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: o.slug } }),
    `find ${o.slug}`
  );
  if (existing) {
    console.log(`  · Section already exists: ${o.title}`);
    return existing.id;
  }
  const parent = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: o.parentSlug } }),
    `find ${o.parentSlug}`
  );
  if (!parent) {
    console.log(`  ✗ Parent "${o.parentSlug}" not found — run seed-medical-taxonomy.ts first.`);
    return null;
  }
  const created = await withRetry(
    () =>
      prisma.quizCategory.create({
        data: {
          slug: o.slug,
          title: o.title,
          description: o.description,
          overview: o.overview ?? null,
          icon: o.icon ?? null,
          parentId: parent.id,
          order: o.order ?? 0,
          published: true,
        },
      }),
    `create ${o.slug}`
  );
  console.log(`  + Created section: ${o.title}`);
  return created.id;
}

/* ── the important one ────────────────────────────────────────────────── */

/**
 * Creates or updates a quiz, then reconciles its questions non-destructively.
 *
 * Returns a small report so the caller can print what actually changed.
 */
export async function seedSet(o: {
  categoryId: string;
  slug: string;
  title: string;
  description: string;
  kind: "PRACTICE" | "EXAM";
  timeLimitSeconds: number | null;
  difficulty: string;
  passThreshold?: number;
  questions: Q[];
}): Promise<void> {
  const quiz = await withRetry(
    () =>
      prisma.quiz.upsert({
        where: { slug: o.slug },
        create: {
          slug: o.slug,
          title: o.title,
          description: o.description,
          categoryId: o.categoryId,
          kind: o.kind,
          timeLimitSeconds: o.timeLimitSeconds,
          passThreshold: o.passThreshold ?? 70,
          difficulty: o.difficulty,
          published: true,
        },
        update: {
          title: o.title,
          description: o.description,
          categoryId: o.categoryId,
          kind: o.kind,
          timeLimitSeconds: o.timeLimitSeconds,
          difficulty: o.difficulty,
        },
      }),
    `quiz ${o.slug}`
  );

  if (REPLACE_MODE) {
    await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), "replace-mode clear");
  }

  const existing = await withRetry(
    () => prisma.question.findMany({ where: { quizId: quiz.id }, select: { id: true, stem: true } }),
    "read existing"
  );
  const byStem = new Map(existing.map((q) => [q.stem.trim(), q.id]));
  const seedStems = new Set(o.questions.map((q) => q.stem.trim()));

  let created = 0;
  let updated = 0;
  let order = 0;

  for (const q of o.questions) {
    const n = order++;
    const opts = shuffled(q.choices);
    const choiceData = opts.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i }));
    const known = byStem.get(q.stem.trim());

    if (known) {
      // Update in place. The question id survives, so past attempt reviews —
      // which reference choice ids — degrade gracefully rather than breaking.
      await withRetry(
        () =>
          prisma.question.update({
            where: { id: known },
            data: {
              topic: q.topic,
              explanation: q.explanation,
              order: n,
              choices: { deleteMany: {}, create: choiceData },
            },
          }),
        `update q${n + 1}`
      );
      updated++;
    } else {
      await withRetry(
        () =>
          prisma.question.create({
            data: {
              quizId: quiz.id,
              type: "SINGLE",
              stem: q.stem,
              topic: q.topic,
              explanation: q.explanation,
              points: 1,
              order: n,
              choices: { create: choiceData },
            },
          }),
        `create q${n + 1}`
      );
      created++;
    }
  }

  // Anything the seed doesn't know about was added by hand. Keep it, and place
  // it after the seeded questions so ordering stays sensible.
  const foreign = existing.filter((q) => !seedStems.has(q.stem.trim()));
  for (const q of foreign) {
    await withRetry(
      () => prisma.question.update({ where: { id: q.id }, data: { order: order++ } }),
      "renumber kept question"
    );
  }

  const total = o.questions.length + foreign.length;
  const kept = foreign.length ? `, ${foreign.length} of your own kept` : "";
  console.log(`  ✓ ${o.title} — ${total} questions (${created} new, ${updated} refreshed${kept})`);
}

export async function done() {
  console.log("\nDone. Editable in Admin → Question Bank.");
  await prisma.$disconnect();
}
