/**
 * EXAM GENERATOR — VERSION 2
 *
 * ─────────────────────────────────────────────────────────────────────────
 * WHY VERSION 1 KEPT LOSING THE DATABASE
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Two faults, both mine.
 *
 * 1. NO RETRY. The seed files wrap every write in a retry, because Supabase's
 *    pooled connection drops periodically. The generator had none, so the first
 *    dropped connection killed the whole run.
 *
 * 2. FAR TOO MANY CALLS. It created questions one at a time — seven papers of
 *    seventy questions, each with its own nested choices, came to roughly 490
 *    sequential round trips. Long before the end, the pooler had closed the
 *    connection out from under it.
 *
 * Version 2 writes in batches instead:
 *
 *     upsert the quiz          1 call
 *     delete old questions     1 call
 *     createMany questions     1 call
 *     read back their ids      1 call
 *     createMany choices       2 calls (chunked)
 *     ─────────────────────────────────
 *                              6 calls per paper, ~42 in total
 *
 * From ~490 down to ~42. Every one of them retries with a reconnect, and it can
 * resume from any paper if it still fails.
 *
 * It also prefers DIRECT_URL over the pooled DATABASE_URL when one is set,
 * because the pooled connection is the thing that drops.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * USAGE
 * ─────────────────────────────────────────────────────────────────────────
 *
 *   npx tsx prisma/generate-exams.ts fs-pharmacology
 *   npx tsx prisma/generate-exams.ts fs-pharmacology --size=100
 *   npx tsx prisma/generate-exams.ts fs-pharmacology --paper=3   one paper only
 *   npx tsx prisma/generate-exams.ts --all
 *
 * If it still struggles, do them one at a time: --paper=1, then --paper=2, and
 * so on. Each paper is independent, so nothing is lost by stopping between them.
 */

import { PrismaClient } from "@prisma/client";

const DB_URL = process.env.DIRECT_URL || process.env.DATABASE_URL;
const prisma = new PrismaClient(DB_URL ? { datasources: { db: { url: DB_URL } } } : undefined);

const args = process.argv.slice(2);
const ALL = args.includes("--all");
const slugArg = args.find((a) => !a.startsWith("--"));
const num = (flag: string, fallback: number) => {
  const a = args.find((x) => x.startsWith(`--${flag}=`));
  return a ? parseInt(a.split("=")[1], 10) : fallback;
};
const PAPERS = num("papers", 7);
const SIZE = num("size", 70);
const ONLY_PAPER = num("paper", 0); // 0 = all papers
const CHUNK = num("chunk", 150); // rows per createMany
const MINUTES_PER_QUESTION = 1.2;

const TIERS = [
  "Foundations",
  "Core Concepts",
  "Applied Practice",
  "Special Situations",
  "Complications",
  "Clinical Reasoning",
  "Expert",
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Retries a database call, dropping and remaking the connection between
 * attempts. The reconnect is the important part — without it, a pooler that has
 * closed the socket will fail every retry too.
 */
async function withRetry<T>(fn: () => Promise<T>, label: string, attempts = 5): Promise<T> {
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      const transient =
        /P1001|P1008|P1017|P2024|can't reach database|connection|econnreset|etimedout|timed out|closed|socket/i.test(
          msg
        );
      if (!transient || i === attempts) throw e;
      const wait = Math.min(i * 2500, 12000);
      console.log(`      … ${label} dropped, reconnecting and retrying in ${wait / 1000}s (attempt ${i}/${attempts})`);
      try {
        await prisma.$disconnect();
      } catch {
        /* already gone */
      }
      await sleep(wait);
      try {
        await prisma.$connect();
      } catch {
        /* next attempt will surface it */
      }
    }
  }
  throw new Error("unreachable");
}

function chunked<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

/* ── deterministic RNG so papers are stable between runs ──────────────── */

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function weightedSample<T>(items: { item: T; weight: number }[], count: number, rng: () => number): T[] {
  const pool = items.map((x) => ({ ...x, key: Math.pow(rng(), 1 / Math.max(x.weight, 0.0001)) }));
  pool.sort((a, b) => b.key - a.key);
  return pool.slice(0, count).map((x) => x.item);
}

/* ── the work ─────────────────────────────────────────────────────────── */

type PoolItem = {
  stem: string;
  topic: string;
  explanation: string;
  setIndex: number;
  choices: { text: string; isCorrect: boolean }[];
};

function setNumberFromSlug(slug: string, fallback: number): number {
  const m = slug.match(/set-(\d+)/);
  return m ? parseInt(m[1], 10) : fallback;
}

async function generateForCategory(categorySlug: string) {
  const category = await withRetry(
    () =>
      prisma.quizCategory.findUnique({
        where: { slug: categorySlug },
        select: { id: true, title: true, slug: true },
      }),
    "find section"
  );
  if (!category) {
    console.log(`  ✗ Section "${categorySlug}" not found.`);
    return;
  }

  const practice = await withRetry(
    () =>
      prisma.quiz.findMany({
        where: { categoryId: category.id, kind: "PRACTICE" },
        select: {
          slug: true,
          questions: {
            select: {
              stem: true,
              topic: true,
              explanation: true,
              choices: { select: { text: true, isCorrect: true }, orderBy: { order: "asc" } },
            },
          },
        },
        orderBy: { slug: "asc" },
      }),
    "read practice sets"
  );

  if (!practice.length) {
    console.log(`  · ${category.title} — no practice sets yet, skipping.`);
    return;
  }

  const pool: PoolItem[] = [];
  practice.forEach((quiz, i) => {
    const setIndex = setNumberFromSlug(quiz.slug, i + 1);
    for (const q of quiz.questions) {
      if (q.choices.length < 2) continue;
      pool.push({
        stem: q.stem,
        topic: q.topic,
        explanation: q.explanation,
        setIndex,
        choices: q.choices.map((c) => ({ text: c.text, isCorrect: c.isCorrect })),
      });
    }
  });

  const seen = new Set<string>();
  const unique = pool.filter((p) => {
    const k = p.stem.trim().toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  console.log(`\n  ${category.title}`);
  console.log(`    pool: ${unique.length} unique questions across ${practice.length} practice set(s)`);

  if (unique.length < SIZE) {
    console.log(`    ⚠ Pool is smaller than the ${SIZE}-question paper size.`);
    console.log(`      Write more practice sets, or use --size=${Math.floor(unique.length * 0.8)}.`);
    return;
  }

  const maxSet = Math.max(...unique.map((p) => p.setIndex));
  const first = ONLY_PAPER || 1;
  const last = ONLY_PAPER || PAPERS;

  for (let paper = first; paper <= last; paper++) {
    const rng = mulberry32(hash(`${category.slug}::paper::${paper}`));
    const centre = maxSet <= 1 ? 1 : 1 + ((paper - 1) / Math.max(PAPERS - 1, 1)) * (maxSet - 1);

    const picked = weightedSample(
      unique.map((item) => ({
        item,
        // Inverse-square falloff around the paper's centre, plus a small floor
        // so distant tiers stay reachable. Tuned by simulation.
        weight: 1 / Math.pow(1 + Math.abs(item.setIndex - centre), 2) + 0.1,
      })),
      SIZE,
      rng
    );

    const tier = TIERS[Math.min(paper - 1, TIERS.length - 1)];
    const base = category.slug.replace(/^(fs|cs|qbc)-/, "");
    const slug = `${base}-exam-${paper}-${tier.toLowerCase().replace(/\s+/g, "-")}`;
    const difficulty = paper <= 2 ? "Foundational" : paper <= 5 ? "Intermediate" : "Advanced";
    const minutes = Math.round(SIZE * MINUTES_PER_QUESTION);
    const title = `${category.title} — Exam ${paper}: ${tier}`;
    const description = `${SIZE} questions in ${minutes} minutes, drawn from the ${category.title} question pool and weighted towards ${tier.toLowerCase()}-level material. Every paper is a different selection. Feedback is withheld until you submit.`;

    process.stdout.write(`    Exam ${paper}: ${tier.padEnd(18)} `);

    /* 1. quiz */
    const quiz = await withRetry(
      () =>
        prisma.quiz.upsert({
          where: { slug },
          create: {
            slug,
            title,
            description,
            categoryId: category.id,
            kind: "EXAM",
            timeLimitSeconds: minutes * 60,
            passThreshold: 70,
            difficulty,
            published: true,
          },
          update: { title, description, timeLimitSeconds: minutes * 60, difficulty },
        }),
      `paper ${paper} quiz`
    );

    /* 2. clear — exam papers are generated artefacts, nothing hand-authored */
    await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), `paper ${paper} clear`);

    /* 3. all questions in one statement */
    await withRetry(
      () =>
        prisma.question.createMany({
          data: picked.map((q, i) => ({
            quizId: quiz.id,
            type: "SINGLE",
            stem: q.stem,
            topic: q.topic,
            explanation: q.explanation,
            points: 1,
            order: i,
          })),
        }),
      `paper ${paper} questions`
    );

    /* 4. read the ids back so choices can be attached */
    const created = await withRetry(
      () => prisma.question.findMany({ where: { quizId: quiz.id }, select: { id: true, order: true } }),
      `paper ${paper} readback`
    );
    const byOrder = new Map(created.map((q) => [q.order, q.id]));

    /* 5. all choices, in a couple of chunks */
    const choiceRows: { questionId: string; text: string; isCorrect: boolean; order: number }[] = [];
    picked.forEach((q, i) => {
      const questionId = byOrder.get(i);
      if (!questionId) return;
      const opts = [...q.choices];
      for (let k = opts.length - 1; k > 0; k--) {
        const j = Math.floor(rng() * (k + 1));
        [opts[k], opts[j]] = [opts[j], opts[k]];
      }
      opts.forEach((c, j) =>
        choiceRows.push({ questionId, text: c.text, isCorrect: c.isCorrect, order: j })
      );
    });

    for (const batch of chunked(choiceRows, CHUNK)) {
      await withRetry(() => prisma.choice.createMany({ data: batch }), `paper ${paper} choices`);
    }

    const spread = [...new Set(picked.map((p) => p.setIndex))].sort((a, b) => a - b).join(",");
    console.log(`${SIZE} q / ${minutes} min   (from sets ${spread})`);

    // A short pause between papers keeps the pooler comfortable.
    if (paper < last) await sleep(400);
  }

  if (!ONLY_PAPER) {
    const papers = await withRetry(
      () =>
        prisma.quiz.findMany({
          where: { categoryId: category.id, kind: "EXAM" },
          select: { questions: { select: { stem: true } } },
          orderBy: { slug: "asc" },
        }),
      "overlap check"
    );
    if (papers.length > 1) {
      const a = new Set(papers[0].questions.map((q) => q.stem));
      const shared = papers[1].questions.filter((q) => a.has(q.stem)).length;
      console.log(`    papers 1 and 2 share ${shared}/${SIZE} questions (${Math.round((shared / SIZE) * 100)}%)`);
    }
  }
}

async function main() {
  console.log(
    `\nGenerating exam papers — ${ONLY_PAPER ? `paper ${ONLY_PAPER} only` : `${PAPERS} papers`} of ${SIZE} questions.`
  );
  console.log(`Using ${process.env.DIRECT_URL ? "DIRECT_URL" : "DATABASE_URL"} for the connection.`);

  if (ALL) {
    const cats = await withRetry(
      () =>
        prisma.quizCategory.findMany({
          where: { quizzes: { some: { kind: "PRACTICE" } } },
          select: { slug: true },
          orderBy: { slug: "asc" },
        }),
      "list sections"
    );
    console.log(`Found ${cats.length} sections with practice sets.\n`);
    for (const c of cats) await generateForCategory(c.slug);
  } else if (slugArg) {
    await generateForCategory(slugArg);
  } else {
    console.log("\nGive a section slug, or --all for every section.");
    console.log("  npx tsx prisma/generate-exams.ts fs-pharmacology");
    console.log("  npx tsx prisma/generate-exams.ts fs-pharmacology --paper=1\n");
    return;
  }

  console.log("\nDone. Papers are live and editable in Admin → Question Bank.");
}

main()
  .catch((e) => {
    console.error("\n" + (e instanceof Error ? e.message : String(e)));
    console.error("\nIf this is a connection error, try:");
    console.error("  npx tsx prisma/db-check.ts        to diagnose");
    console.error("  ... --paper=1   then --paper=2    one paper at a time\n");
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
