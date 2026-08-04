/**
 * QUESTION BANK ENGINE — shared by every content wave.
 *
 * WHY THIS EXISTS
 * ---------------
 * The old waves each carried their own copy of `seedSet()`, its own retry
 * wrapper, and their own ad-hoc exam assembly. That was tolerable at 75
 * questions per subject. At 7 practice sets x 70-100 questions plus 7 exams,
 * per subject, across forty subjects, hand-rolled boilerplate is where the
 * gaps hide. This module makes the 7x7 shape DECLARATIVE and, critically,
 * VALIDATES it before a single row is written.
 *
 * A wave file now contains questions and almost nothing else.
 *
 * WHAT IT GUARANTEES
 * ------------------
 *   - Idempotent: quizzes upsert by slug, questions are rebuilt each run.
 *   - Fail-fast validation BEFORE any write, so a malformed wave never
 *     half-lands in production. Checks set sizes, answer-key sanity, option
 *     counts, duplicate stems across the whole subject, topic coverage, and
 *     that every practice question is reachable by at least one exam.
 *   - Deterministic exam draws: the same seed produces the same paper on
 *     every machine and every re-run, so a student's Exam 4 does not silently
 *     become a different paper after a redeploy.
 *   - Retries on dropped connections (the pooled Postgres connection drops
 *     under long seeds; this bit was learned the hard way in Wave 10).
 *
 * Run a wave with:  npx tsx prisma/seed-<subject>.ts
 */

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

/* ══════════════════════════ TYPES ══════════════════════════ */

export type QuestionType = "SINGLE" | "MULTI" | "TRUE_FALSE";

export type Choice = { text: string; isCorrect?: boolean };

export type Q = {
  /** Defaults to SINGLE. */
  type?: QuestionType;
  /** The vignette or question text. Data tables may be embedded as markdown. */
  stem: string;
  /** Drives the per-topic results breakdown. Keep to the subject's topic list. */
  topic: string;
  /** Rationale: why the key is right AND why each distractor fails. */
  explanation: string;
  /**
   * Optional figure (EKG strip, blood smear, growth chart, imaging).
   * Requires the additive `imageUrl` / `imageAlt` columns on Question —
   * see AMERICANIZE_AND_ENGINE_README.md. Silently ignored until then.
   */
  imageUrl?: string;
  imageAlt?: string;
  choices: Choice[];
};

export type SetDef = {
  /** 1-7. */
  n: number;
  title: string;
  description: string;
  difficulty: "Foundational" | "Intermediate" | "Advanced";
  /** Overrides the subject's default category (e.g. put a drugs set under fs-pharmacology). */
  categorySlug?: string;
  questions: Q[];
};

export type ExamDef = {
  /** 1-7. */
  n: number;
  title: string;
  description: string;
  difficulty: "Foundational" | "Intermediate" | "Advanced";
  minutes: number;
  categorySlug?: string;
  passThreshold?: number;
  /** Builds the paper from the practice pool. Use the draw helpers below. */
  draw: (pool: Pool) => Q[];
};

export type SubjectConfig = {
  /** Display name, e.g. "Pathology". */
  subject: string;
  /** Slug stem, e.g. "pathology" -> pathology-practice-set-1, pathology-exam-1. */
  slugBase: string;
  /** Default category slug for every set and exam. */
  categorySlug: string;
  /** Minimum questions per practice set. Defaults to 70. */
  minPerSet?: number;
  /** Minimum questions per exam. Defaults to 70. */
  minPerExam?: number;
  sets: SetDef[];
  exams: ExamDef[];
  /** Printed after a successful run — regional caveats, review notes. */
  footnote?: string;
};

/* ═══════════════════════ DRAW HELPERS ═══════════════════════ */

/**
 * The practice pool, handed to each exam's `draw`. Indexed 1-7 to match the
 * set numbers a student sees, because off-by-one errors in exam assembly are
 * invisible until someone sits the wrong paper.
 */
export class Pool {
  constructor(private readonly sets: Map<number, Q[]>) {}

  /** Everything, in set order. */
  all(): Q[] {
    return [...this.sets.keys()].sort((a, b) => a - b).flatMap((k) => this.sets.get(k)!);
  }

  /** The named sets, concatenated in the order given. */
  fromSets(...ns: number[]): Q[] {
    return ns.flatMap((n) => {
      const s = this.sets.get(n);
      if (!s) throw new Error(`Exam draw referenced Set ${n}, which does not exist.`);
      return s;
    });
  }

  /** Every question tagged with any of these topics. */
  byTopic(...topics: string[]): Q[] {
    const want = new Set(topics.map((t) => t.toLowerCase()));
    return this.all().filter((q) => want.has(q.topic.toLowerCase()));
  }

  /** Only the question types given — e.g. types("MULTI") for an SATA drill. */
  byType(...types: QuestionType[]): Q[] {
    const want = new Set(types);
    return this.all().filter((q) => want.has(q.type ?? "SINGLE"));
  }

  /** Only items carrying a figure — the imaging / data-interpretation paper. */
  withFigures(): Q[] {
    return this.all().filter((q) => !!q.imageUrl);
  }

  /**
   * Longer stems are, empirically, the multi-step reasoning items. A crude
   * proxy, but a stable one, and far better than tagging difficulty by hand
   * across seven hundred questions.
   */
  longestStems(count: number, source?: Q[]): Q[] {
    return [...(source ?? this.all())]
      .sort((a, b) => b.stem.length - a.stem.length)
      .slice(0, count);
  }
}

/** Deterministic PRNG. Same seed, same paper, forever. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic shuffle. Pass a distinct seed per exam. */
export function shuffle<T>(items: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Deterministic sample without replacement. */
export function sample<T>(items: T[], count: number, seed: number): T[] {
  return shuffle(items, seed).slice(0, count);
}

/** Concatenate draws and drop repeats, keeping first occurrence. */
export function merge(...groups: Q[][]): Q[] {
  const seen = new Set<string>();
  const out: Q[] = [];
  for (const g of groups) {
    for (const q of g) {
      const key = q.stem.trim();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(q);
    }
  }
  return out;
}

/* ═══════════════════════ VALIDATION ═══════════════════════ */

type Problem = { level: "error" | "warn"; message: string };

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

function validate(cfg: SubjectConfig, pool: Pool, papers: Map<number, Q[]>): Problem[] {
  const problems: Problem[] = [];
  const minSet = cfg.minPerSet ?? 70;
  const minExam = cfg.minPerExam ?? 70;
  const err = (m: string) => problems.push({ level: "error", message: m });
  const warn = (m: string) => problems.push({ level: "warn", message: m });

  /* ---- structure ---- */
  if (cfg.sets.length !== 7) err(`Expected 7 practice sets, found ${cfg.sets.length}.`);
  if (cfg.exams.length !== 7) err(`Expected 7 exam sets, found ${cfg.exams.length}.`);

  const setNumbers = cfg.sets.map((s) => s.n).sort((a, b) => a - b);
  if (new Set(setNumbers).size !== setNumbers.length) err("Duplicate practice set numbers.");
  const examNumbers = cfg.exams.map((e) => e.n).sort((a, b) => a - b);
  if (new Set(examNumbers).size !== examNumbers.length) err("Duplicate exam numbers.");

  /* ---- per-question sanity ---- */
  const checkQuestion = (q: Q, where: string) => {
    const type = q.type ?? "SINGLE";
    const correct = q.choices.filter((c) => c.isCorrect).length;

    if (!q.stem.trim()) err(`${where}: empty stem.`);
    if (!q.explanation.trim()) err(`${where}: missing rationale.`);
    if (q.explanation.trim().length < 80)
      warn(`${where}: rationale is thin (<80 chars) — it should explain the distractors too.`);

    if (type === "SINGLE") {
      if (correct !== 1) err(`${where}: SINGLE needs exactly one correct choice, found ${correct}.`);
      if (q.choices.length < 5)
        warn(`${where}: ${q.choices.length} options — US board style is five.`);
    }
    if (type === "MULTI") {
      if (correct < 2) err(`${where}: MULTI needs at least two correct choices.`);
      if (correct === q.choices.length) err(`${where}: MULTI has every option correct.`);
      if (q.choices.length < 5) warn(`${where}: SATA items read better with five or more options.`);
    }
    if (type === "TRUE_FALSE") {
      if (q.choices.length !== 2) err(`${where}: TRUE_FALSE must have exactly two choices.`);
      if (correct !== 1) err(`${where}: TRUE_FALSE needs exactly one correct choice.`);
    }

    const texts = q.choices.map((c) => normalize(c.text));
    if (new Set(texts).size !== texts.length) err(`${where}: duplicate option text.`);
    if (q.imageUrl && !q.imageAlt)
      warn(`${where}: figure has no alt text — required for accessibility.`);
  };

  /* ---- sets ---- */
  const allStems = new Map<string, string>();
  const topics = new Set<string>();

  for (const set of cfg.sets) {
    const where = `Set ${set.n}`;
    if (set.questions.length < minSet)
      err(`${where}: ${set.questions.length} questions — the floor is ${minSet}.`);
    if (set.questions.length > 100)
      warn(`${where}: ${set.questions.length} questions — the ceiling is 100.`);

    set.questions.forEach((q, i) => {
      checkQuestion(q, `${where} Q${i + 1}`);
      topics.add(q.topic);
      const key = normalize(q.stem);
      const seen = allStems.get(key);
      if (seen) err(`${where} Q${i + 1}: stem duplicates ${seen}.`);
      else allStems.set(key, `${where} Q${i + 1}`);
    });
  }

  /* ---- exams ---- */
  for (const exam of cfg.exams) {
    const paper = papers.get(exam.n) ?? [];
    const where = `Exam ${exam.n}`;
    if (paper.length < minExam)
      err(`${where}: drew ${paper.length} questions — the floor is ${minExam}.`);
    if (exam.minutes <= 0) err(`${where}: timed exams need a positive time limit.`);

    const stems = paper.map((q) => normalize(q.stem));
    if (new Set(stems).size !== stems.length)
      err(`${where}: the same question appears twice on one paper.`);

    const orphan = paper.find((q) => !allStems.has(normalize(q.stem)));
    if (orphan)
      err(`${where}: contains a question absent from every practice set — exams must recombine, not introduce.`);
  }

  /* ---- coverage: the gap check ---- */
  const examined = new Set<string>();
  for (const paper of papers.values()) for (const q of paper) examined.add(normalize(q.stem));
  const unreachable = [...allStems.entries()].filter(([k]) => !examined.has(k));
  if (unreachable.length)
    warn(
      `${unreachable.length} practice question(s) appear on no exam — e.g. ${unreachable[0][1]}. ` +
        `Students who only sit exams will never meet them.`
    );

  if (topics.size < 10)
    warn(`Only ${topics.size} distinct topics — the per-topic report needs breadth to be useful.`);

  /* ---- question-type mix ---- */
  const total = pool.all().length;
  const multi = pool.byType("MULTI").length;
  const tf = pool.byType("TRUE_FALSE").length;
  if (multi / total < 0.08) warn(`Only ${multi}/${total} SATA items — aim for ~15%.`);
  if (tf / total < 0.04) warn(`Only ${tf}/${total} true/false items — aim for ~10%.`);

  return problems;
}

/* ═══════════════════════ WRITE LAYER ═══════════════════════ */

/**
 * The pooled connection drops during long seeds. Retry with backoff rather
 * than losing an hour of writes to one transient socket error.
 */
export async function withRetry<T>(fn: () => Promise<T>, label: string, attempts = 4): Promise<T> {
  let lastError: unknown;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      if (i === attempts) break;
      const wait = 400 * 2 ** (i - 1);
      console.log(`    ↻ ${label} failed (attempt ${i}/${attempts}) — retrying in ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw lastError;
}

async function categoryIdFor(slug: string, cache: Map<string, string>): Promise<string> {
  const hit = cache.get(slug);
  if (hit) return hit;
  const row = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug }, select: { id: true } }),
    `find category ${slug}`
  );
  if (!row)
    throw new Error(
      `Category "${slug}" not found. Run seed-medical-taxonomy.ts (and seed-americanize.ts) first.`
    );
  cache.set(slug, row.id);
  return row.id;
}

/** Writes one quiz and its questions. Re-running rebuilds the questions cleanly. */
async function writeQuiz(o: {
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  kind: "PRACTICE" | "EXAM";
  timeLimitSeconds: number | null;
  difficulty: string;
  passThreshold: number;
  order: number;
  questions: Q[];
}) {
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
          difficulty: o.difficulty,
          passThreshold: o.passThreshold,
          order: o.order,
          published: true,
        },
        update: {
          title: o.title,
          description: o.description,
          categoryId: o.categoryId,
          kind: o.kind,
          timeLimitSeconds: o.timeLimitSeconds,
          difficulty: o.difficulty,
          passThreshold: o.passThreshold,
          order: o.order,
        },
      }),
    `upsert ${o.slug}`
  );

  await withRetry(
    () => prisma.question.deleteMany({ where: { quizId: quiz.id } }),
    `clear ${o.slug}`
  );

  // Batched rather than one-at-a-time: 700 sequential round trips per subject
  // is minutes of wall clock and many more chances to drop the connection.
  const BATCH = 20;
  for (let i = 0; i < o.questions.length; i += BATCH) {
    const chunk = o.questions.slice(i, i + BATCH);
    await withRetry(
      () =>
        Promise.all(
          chunk.map((q, k) =>
            prisma.question.create({
              data: {
                quizId: quiz.id,
                type: q.type ?? "SINGLE",
                stem: q.stem,
                topic: q.topic,
                explanation: q.explanation,
                points: 1,
                order: i + k,
                choices: {
                  create: q.choices.map((c, ci) => ({
                    text: c.text,
                    isCorrect: !!c.isCorrect,
                    order: ci,
                  })),
                },
              },
            })
          )
        ),
      `write ${o.slug} [${i + 1}-${i + chunk.length}]`
    );
  }

  return quiz;
}

/* ═══════════════════════ ENTRY POINT ═══════════════════════ */

export async function seedSubject(cfg: SubjectConfig): Promise<void> {
  console.log(`\n═══ ${cfg.subject} ═══\n`);

  const pool = new Pool(new Map(cfg.sets.map((s) => [s.n, s.questions])));

  // Build every paper up front so validation sees the finished article.
  const papers = new Map<number, Q[]>();
  for (const exam of cfg.exams) {
    try {
      papers.set(exam.n, exam.draw(pool));
    } catch (e) {
      console.error(`✗ Exam ${exam.n} draw threw: ${(e as Error).message}`);
      process.exit(1);
    }
  }

  const problems = validate(cfg, pool, papers);
  const errors = problems.filter((p) => p.level === "error");
  const warnings = problems.filter((p) => p.level === "warn");

  for (const w of warnings) console.log(`  ⚠ ${w.message}`);
  if (errors.length) {
    console.error(`\n✗ ${errors.length} error(s) — nothing was written:\n`);
    for (const e of errors) console.error(`  • ${e.message}`);
    process.exit(1);
  }

  const cache = new Map<string, string>();
  let order = 0;

  for (const set of [...cfg.sets].sort((a, b) => a.n - b.n)) {
    const categoryId = await categoryIdFor(set.categorySlug ?? cfg.categorySlug, cache);
    await writeQuiz({
      slug: `${cfg.slugBase}-practice-set-${set.n}`,
      title: `${cfg.subject} — Practice Set ${set.n}`,
      description: set.description,
      categoryId,
      kind: "PRACTICE",
      timeLimitSeconds: null,
      difficulty: set.difficulty,
      passThreshold: 70,
      order: order++,
      questions: set.questions,
    });
    console.log(`  ✓ Practice Set ${set.n} — ${set.questions.length} questions · ${set.title}`);
  }

  for (const exam of [...cfg.exams].sort((a, b) => a.n - b.n)) {
    const categoryId = await categoryIdFor(exam.categorySlug ?? cfg.categorySlug, cache);
    const questions = papers.get(exam.n)!;
    await writeQuiz({
      slug: `${cfg.slugBase}-exam-${exam.n}`,
      title: `${cfg.subject} — Exam ${exam.n}`,
      description: exam.description,
      categoryId,
      kind: "EXAM",
      timeLimitSeconds: exam.minutes * 60,
      difficulty: exam.difficulty,
      passThreshold: exam.passThreshold ?? 70,
      order: order++,
      questions,
    });
    console.log(
      `  ✓ Exam ${exam.n} — ${questions.length} questions · ${exam.minutes} min · ${exam.title}`
    );
  }

  const totalUnique = pool.all().length;
  console.log(`\n  ${totalUnique} unique questions · 7 practice sets · 7 exams`);
  if (cfg.footnote) console.log(`\n  ${cfg.footnote}`);
  console.log("\nDone. Editable in Admin → Question Bank.");
}

/** Standard tail for every wave file. */
export function runWave(fn: () => Promise<void>) {
  fn()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
