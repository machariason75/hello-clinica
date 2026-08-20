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
  /**
   * Practice sets this exam draws from. In partial mode the exam is skipped
   * until all of them exist, so a half-built subject still seeds cleanly.
   */
  requires?: number[];
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
  /**
   * Partial mode: seed whatever sets are present and skip exams whose sets
   * aren't written yet. Lets a subject go live one set at a time instead of
   * waiting for all seven. Set to false for the final run.
   */
  partial?: boolean;
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
/**
 * ANSWER-POSITION RANDOMIZATION
 * -----------------------------
 * If the correct choice is always written first, every SINGLE answer is "A" and
 * a student can pass by pattern alone. This spreads the key across positions.
 *
 * The seed is a hash of the STEM, so the shuffle is:
 *   - deterministic  — the same question lays out identically on every re-seed
 *     and in every exam it appears in, so review stays stable;
 *   - pattern-free   — the key lands in a different position from item to item,
 *     with no exploitable run of A/B/C/D/E.
 *
 * TRUE_FALSE is left alone: it must read "True" then "False". Balance there is a
 * property of how many items are true vs false, not of option order.
 */
function hashString(s: string): number {
  let h = 2166136261 >>> 0; // FNV-1a
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function orderedChoices(q: Q): Choice[] {
  if ((q.type ?? "SINGLE") === "TRUE_FALSE") return q.choices;
  return shuffle(q.choices, hashString(q.stem));
}

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
  if (cfg.partial) {
    warn(
      `PARTIAL BUILD — ${cfg.sets.length}/7 practice sets, ${cfg.exams.length}/7 exams. ` +
        `Structural checks relaxed until the subject is complete.`
    );
  } else {
    if (cfg.sets.length !== 7) err(`Expected 7 practice sets, found ${cfg.sets.length}.`);
    if (cfg.exams.length !== 7) err(`Expected 7 exam sets, found ${cfg.exams.length}.`);
  }

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
      // US boards vary the option count (4–7) by item; four is the floor, and a
      // deliberate mix of counts is more authentic than forcing every item to five.
      if (q.choices.length < 4) err(`${where}: SINGLE needs at least four options, found ${q.choices.length}.`);
    }
    if (type === "MULTI") {
      if (correct < 2) err(`${where}: MULTI needs at least two correct choices.`);
      if (correct === q.choices.length) err(`${where}: MULTI has every option correct.`);
      if (q.choices.length < 4) err(`${where}: MULTI needs at least four options, found ${q.choices.length}.`);
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

    /*
     * ANSWER-LENGTH PARITY AUDIT
     * ---------------------------
     * If the correct answer is reliably the longest option, students can game
     * the set by picking the longest choice without reading. A well-built set
     * has the correct answer as the longest option only about as often as
     * chance (1 / number-of-options), and the average correct-answer length
     * within a whisker of the average distractor length. We fail the set when
     * either signal is exploitable.
     */
    const graded = set.questions.filter(
      (q) => (q.type ?? "SINGLE") !== "TRUE_FALSE"
    );
    let perceptibleTell = 0; // correct answer noticeably longer than the rest
    let sumCorrect = 0;
    let sumDistractor = 0;
    let counted = 0;
    for (const q of graded) {
      const correctLens = q.choices.filter((c) => c.isCorrect).map((c) => (c.text ?? "").trim().length);
      const distractorLens = q.choices.filter((c) => !c.isCorrect).map((c) => (c.text ?? "").trim().length);
      if (!correctLens.length || !distractorLens.length) continue;
      counted++;
      const maxCorrect = Math.max(...correctLens);
      const maxDistractor = Math.max(...distractorLens);
      const meanDistractor = distractorLens.reduce((a, b) => a + b, 0) / distractorLens.length;
      // A "tell" is a gap a student could actually SEE: the correct answer is the
      // longest AND either ≥8 characters longer than the next option or >1.25× the
      // mean distractor. Tiny 1–2 char differences are not perceptible and don't count.
      if (maxCorrect > maxDistractor && (maxCorrect - maxDistractor >= 8 || maxCorrect > meanDistractor * 1.25))
        perceptibleTell++;
      sumCorrect += maxCorrect;
      sumDistractor += meanDistractor;
    }
    if (counted >= 20) {
      const tellRate = perceptibleTell / counted;
      const lenRatio = sumCorrect / sumDistractor;
      if (tellRate > 0.3)
        err(
          `${where}: the correct answer is perceptibly the longest in ${(tellRate * 100).toFixed(0)}% of items. ` +
            `Lengthen distractors or trim the key — length must not reveal the answer.`
        );
      else if (tellRate > 0.22)
        warn(`${where}: correct answer is perceptibly longest in ${(tellRate * 100).toFixed(0)}% of items. Tighten length parity toward chance.`);
      if (lenRatio > 1.2)
        err(
          `${where}: correct answers average ${lenRatio.toFixed(2)}× the distractor length. Match option lengths so the key is not detectable.`
        );
      else if (lenRatio > 1.13)
        warn(`${where}: correct answers average ${lenRatio.toFixed(2)}× distractor length. Aim for ≈1.0.`);
    }
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
  if (unreachable.length && !cfg.partial)
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

/*
 * TUNABLES FOR LARGE SEEDS
 * ------------------------
 * Dropping several sets in one wave means one seed run writes far more rows.
 * The database does not fall over from volume — it stalls from CONCURRENCY.
 * The old loop fired Promise.all over batches of 20, i.e. up to 20 nested
 * inserts at once. Prisma's pooled connection limit is ~9-17, so a big seed
 * would exceed the pool and throw "Timed out fetching a new connection from
 * the connection pool" partway through. These knobs bound that, and can be
 * turned down further from the shell if a run ever stalls:
 *
 *   QBANK_CONCURRENCY=4  QBANK_PAUSE_MS=250  npx tsx prisma/seed-<subject>.ts
 *
 * QBANK_ONLY lets a multi-set drop be written a few sets at a time, so you
 * never hold a huge write open. See seedSubject for the recipe.
 */
const WRITE_CONCURRENCY = clampInt(process.env.QBANK_CONCURRENCY, 8, 1, 32);
const PAUSE_BETWEEN_QUIZZES_MS = clampInt(process.env.QBANK_PAUSE_MS, 120, 0, 5000);
const SEED_ONLY = parseSetList(process.env.QBANK_ONLY);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function clampInt(v: string | undefined, dflt: number, lo: number, hi: number): number {
  const n = v ? parseInt(v, 10) : NaN;
  return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : dflt;
}

function parseSetList(v: string | undefined): Set<number> | undefined {
  if (!v) return undefined;
  const nums = v
    .split(",")
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => Number.isFinite(n));
  return nums.length ? new Set(nums) : undefined;
}

/**
 * Run `fn` over `items` with at most `limit` in flight at once. Preserves the
 * original index so question `order` stays stable regardless of completion
 * order. This is the bounded replacement for the old Promise.all(batch of 20).
 */
async function mapLimit<T>(
  items: T[],
  limit: number,
  fn: (item: T, index: number) => Promise<unknown>
): Promise<void> {
  let cursor = 0;
  let firstError: unknown = null;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      // Once any worker has failed, stop pulling NEW work. Inserts already
      // in flight are still awaited below, so the whole batch goes quiet
      // before the error is propagated — nothing can commit after a retry's
      // DELETE and duplicate rows (the 162-for-92 bug).
      if (firstError) return;
      const idx = cursor++;
      try {
        await fn(items[idx], idx);
      } catch (e) {
        if (firstError === null) firstError = e;
        return;
      }
    }
  });
  await Promise.all(workers); // every worker has fully settled by here
  if (firstError) throw firstError; // safe to let withRetry replay from the DELETE
}

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

/**
 * Extract a quiz's set/exam NUMBER from its slug (preferred), else its title,
 * else its order. Used by the duplicate gate below. Mirrors the cleanup tool.
 */
function quizNumberOf(slug: string, title: string, order: number | null): string | null {
  let m = /(?:practice-set|exam|set|paper|test)-(\d+)/i.exec(slug || "");
  if (m) return m[1];
  m = /(?:set|exam|paper|test)\s*#?\s*(\d+)/i.exec(title || "");
  if (m) return m[1];
  return order != null ? `order:${order}` : null;
}

/**
 * GATE — one number per kind per category.
 *
 * After the canonical quiz (`<base>-practice-set-N` / `<base>-exam-N`) is
 * written, remove any OTHER quiz in the same category and of the same kind that
 * resolves to the same number N — i.e. an old under-built or previous-generation
 * set left over from before. This makes every seed self-healing: a section can
 * never again show two "Practice Set 1" or two "Exam 1".
 *
 * Tightly scoped on purpose: it only ever removes same-category, same-kind,
 * same-number siblings of the quiz we just wrote, and only when our own slug is
 * the standard canonical form. Deleting a quiz cascades to its questions,
 * choices, and any attempts on that old quiz (the point of the cleanup).
 */
async function reconcileDuplicateNumber(o: {
  slug: string;
  categoryId: string;
  kind: "PRACTICE" | "EXAM";
}): Promise<void> {
  const mine = /-(?:practice-set|exam)-(\d+)$/i.exec(o.slug);
  if (!mine) return; // non-standard slug — never let the gate touch anything
  const num = mine[1];

  const siblings: { id: string; slug: string; title: string; order: number | null }[] =
    await withRetry(
      () =>
        prisma.quiz.findMany({
          where: { categoryId: o.categoryId, kind: o.kind, slug: { not: o.slug } },
          select: { id: true, slug: true, title: true, order: true },
        }),
      `scan duplicates of ${o.slug}`
    );

  const dupes = siblings.filter((s) => quizNumberOf(s.slug, s.title, s.order) === num);
  if (!dupes.length) return;

  await withRetry(
    () => prisma.quiz.deleteMany({ where: { id: { in: dupes.map((d) => d.id) } } }),
    `remove ${dupes.length} duplicate(s) of ${o.slug}`
  );
  for (const d of dupes) {
    console.log(`    ↳ removed duplicate ${o.kind === "EXAM" ? "exam" : "practice set"} #${num}: ${d.slug}`);
  }
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

  /*
   * WHY THE RETRY WRAPS THE WHOLE REBUILD, NOT EACH BATCH
   * ----------------------------------------------------
   * The previous version retried each batch of inserts individually. When the
   * connection dropped after some rows in a batch had already committed, the
   * retry re-inserted the entire batch — duplicating everything that had
   * succeeded. That is how Practice Set 5 ended up with 129 rows for 93
   * questions and Exam 1 with 199 for 181.
   *
   * Retrying from the DELETE makes a replay harmless: every attempt starts
   * from an empty question list, so the quiz can only ever end up with exactly
   * one copy of each question. Slower on failure, correct on failure.
   */
  await withRetry(async () => {
    await prisma.question.deleteMany({ where: { quizId: quiz.id } });

    // Bounded concurrency: never more than WRITE_CONCURRENCY inserts in flight,
    // so a large seed cannot exhaust the connection pool. `order` is the item's
    // stable index, not its completion order.
    await mapLimit(o.questions, WRITE_CONCURRENCY, (q, idx) =>
      prisma.question.create({
        data: {
          quizId: quiz.id,
          type: q.type ?? "SINGLE",
          stem: q.stem,
          topic: q.topic,
          explanation: q.explanation,
          points: 1,
          order: idx,
          choices: {
            create: orderedChoices(q).map((c, ci) => ({
              text: c.text,
              isCorrect: !!c.isCorrect,
              order: ci,
            })),
          },
        },
      })
    );
  }, `rebuild ${o.slug}`);

  // Verify: the row count must match what we intended to write.
  const written = await prisma.question.count({ where: { quizId: quiz.id } });
  if (written !== o.questions.length) {
    throw new Error(
      `${o.slug}: wrote ${written} questions but expected ${o.questions.length}. ` +
        `Re-run the seed — the quiz is in an inconsistent state.`
    );
  }

  // Gate: ensure no older duplicate of this same kind+number lingers alongside it.
  await reconcileDuplicateNumber({ slug: o.slug, categoryId: o.categoryId, kind: o.kind });

  return quiz;
}

/* ═══════════════════════ ENTRY POINT ═══════════════════════ */

export async function seedSubject(cfg: SubjectConfig): Promise<void> {
  console.log(`\n═══ ${cfg.subject} ═══\n`);

  /*
   * INCREMENTAL WRITES (QBANK_ONLY)
   * -------------------------------
   * A wave may ship several set files at once, but you don't have to write them
   * all in one run. QBANK_ONLY restricts THIS run to the named sets, so a big
   * drop lands in small, safe passes:
   *
   *   QBANK_ONLY=3,4 npx tsx prisma/seed-pharmacology.ts   # writes sets 3 & 4
   *   QBANK_ONLY=5,6 npx tsx prisma/seed-pharmacology.ts   # then 5 & 6
   *   npx tsx prisma/seed-pharmacology.ts                  # then everything +
   *                                                        # all now-buildable exams
   *
   * Exams only build from sets that are present this run, so early passes seed
   * sets and defer exams automatically; the final unfiltered pass writes the
   * exams once their source sets all exist. Nothing is ever half-written: each
   * quiz is rebuilt atomically (delete-then-insert) and row-count verified.
   */
  if (SEED_ONLY) {
    const before = cfg.sets.length;
    cfg = { ...cfg, sets: cfg.sets.filter((s) => SEED_ONLY.has(s.n)) };
    console.log(
      `  ⓘ QBANK_ONLY=${[...SEED_ONLY].sort((a, b) => a - b).join(",")} — ` +
        `writing ${cfg.sets.length} of ${before} present set(s) this run; ` +
        `exams needing absent sets are deferred.`
    );
  }

  const available = new Set(cfg.sets.map((s) => s.n));
  const pool = new Pool(new Map(cfg.sets.map((s) => [s.n, s.questions])));

  // Skip exams whose source sets don't exist yet.
  const buildable = cfg.exams.filter((e) => {
    const missing = (e.requires ?? []).filter((n) => !available.has(n));
    if (missing.length) {
      console.log(`  · Exam ${e.n} deferred — needs Set ${missing.join(", ")}`);
      return false;
    }
    return true;
  });
  cfg = { ...cfg, exams: buildable };

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
    if (PAUSE_BETWEEN_QUIZZES_MS) await sleep(PAUSE_BETWEEN_QUIZZES_MS);
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
    if (PAUSE_BETWEEN_QUIZZES_MS) await sleep(PAUSE_BETWEEN_QUIZZES_MS);
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
