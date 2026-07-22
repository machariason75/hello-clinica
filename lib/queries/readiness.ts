import { prisma } from "@/lib/prisma";

/**
 * Free readiness assessment.
 *
 * Samples questions spread ACROSS topics rather than drilling one area, because
 * the point isn't to test depth — it's to show someone which areas they're weak
 * in. That report is the thing worth trading an email address for, and it makes
 * the case for the Question Bank far better than any sales copy.
 *
 * Sampling is deliberately dynamic rather than a fixed seeded quiz: it stays
 * fresh as questions are added, and nobody has to maintain it.
 */

export type AssessmentQuestion = {
  id: string;
  stem: string;
  topic: string;
  explanation: string;
  choices: { id: string; text: string; isCorrect: boolean }[];
};

const TARGET_QUESTIONS = 12;

/** Deterministic-ish shuffle seeded by an integer, so results are reproducible per run. */
function shuffle<T>(items: T[], seed: number): T[] {
  const out = [...items];
  let s = seed || 1;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) % 2147483648;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export async function buildAssessment(): Promise<AssessmentQuestion[]> {
  try {
    const pool = await prisma.question.findMany({
      where: {
        type: "SINGLE",
        quiz: { published: true, category: { published: true } },
      },
      select: {
        id: true,
        stem: true,
        topic: true,
        explanation: true,
        choices: { select: { id: true, text: true, isCorrect: true }, orderBy: { order: "asc" } },
      },
      take: 400, // bounded: enough spread without loading the whole bank
    });

    if (pool.length === 0) return [];

    // Group by topic, then take one at a time from each in rotation. This gives
    // genuine breadth even when one topic has far more questions than others —
    // a naive random sample would over-represent whichever topic is largest.
    const byTopic = new Map<string, typeof pool>();
    for (const q of pool) {
      const list = byTopic.get(q.topic) ?? [];
      list.push(q);
      byTopic.set(q.topic, list);
    }

    const seed = Math.floor(Date.now() / 60000); // varies per minute
    const topics = shuffle(Array.from(byTopic.keys()), seed);
    const picked: typeof pool = [];

    let round = 0;
    while (picked.length < TARGET_QUESTIONS && round < 20) {
      for (const topic of topics) {
        if (picked.length >= TARGET_QUESTIONS) break;
        const list = byTopic.get(topic)!;
        if (list.length > round) picked.push(list[round]);
      }
      round++;
    }

    return picked.slice(0, TARGET_QUESTIONS).map((q) => ({
      id: q.id,
      stem: q.stem,
      topic: q.topic,
      explanation: q.explanation,
      choices: q.choices,
    }));
  } catch {
    return [];
  }
}
