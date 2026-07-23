import { prisma } from "@/lib/prisma";

/**
 * Question of the Day.
 *
 * Draws from the WHOLE question bank — premium sections included. One question a
 * day from paid content is a sample, not a giveaway, and it advertises the bank
 * better than restricting it to free sections would.
 *
 * Presented without naming its exam or section, so it speaks to every visitor
 * rather than signalling "not for you" to anyone sitting a different exam.
 *
 * ── WHY THE PICK IS PERSISTED ──────────────────────────────────────────────
 * The previous implementation chose eligible[dayNumber % poolSize]. That reads
 * as deterministic, but it isn't stable: adding questions changes poolSize, so
 * the same day suddenly resolves to a different question. Seed a new content
 * wave at lunchtime and the day's question changes underneath whoever is
 * answering it.
 *
 * Now the choice is written to daily_question_picks the first time a day is
 * requested and never recomputed. Consequences:
 *   • adding content never disturbs today's question
 *   • everyone sees the same question all day, so it can be shared and discussed
 *   • the rotation is governed purely by the UTC date, not by traffic
 *   • the lookup is cheap — one indexed row and one question, rather than
 *     loading the entire pool to pick a single item
 */

export type DailyQuestion = {
  id: string;
  stem: string;
  explanation: string;
  choices: { id: string; text: string; isCorrect: boolean }[];
};

/** "YYYY-MM-DD" in UTC — the same instant of rollover everywhere. */
export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Days since epoch, used as the selection seed. */
function dayNumber(): number {
  return Math.floor(Date.now() / 86400000);
}

/**
 * Resolves today's question id, creating the day's pick if it doesn't exist yet.
 * Returns null only when the bank has no eligible questions at all.
 */
async function resolveQuestionIdForToday(): Promise<string | null> {
  const dayKey = todayKey();

  // Fast path — already decided.
  const existing = await prisma.dailyQuestionPick.findUnique({
    where: { dayKey },
    select: { questionId: true },
  });
  if (existing) return existing.questionId;

  // First request of the day: choose, then lock it in.
  // Only ids are loaded here, so this stays light even with thousands of items.
  const ids = await prisma.question.findMany({
    where: {
      type: "SINGLE",
      quiz: { published: true, category: { published: true } },
    },
    select: { id: true },
    orderBy: { id: "asc" }, // stable ordering so the seed means the same thing
  });
  if (ids.length === 0) return null;

  const chosen = ids[dayNumber() % ids.length].id;

  try {
    // Two visitors can arrive in the same instant; whoever writes first wins and
    // the other reads their value back. The unique index on dayKey guarantees a
    // single answer either way.
    const pick = await prisma.dailyQuestionPick.upsert({
      where: { dayKey },
      create: { dayKey, questionId: chosen },
      update: {}, // already decided — never overwrite
      select: { questionId: true },
    });
    return pick.questionId;
  } catch {
    // Lost a race; read the winner.
    const raced = await prisma.dailyQuestionPick.findUnique({
      where: { dayKey },
      select: { questionId: true },
    });
    return raced?.questionId ?? chosen;
  }
}

export async function getQuestionOfTheDay(): Promise<DailyQuestion | null> {
  try {
    const questionId = await resolveQuestionIdForToday();
    if (!questionId) return null;

    const q = await prisma.question.findUnique({
      where: { id: questionId },
      select: {
        id: true,
        stem: true,
        explanation: true,
        choices: { select: { id: true, text: true, isCorrect: true }, orderBy: { order: "asc" } },
      },
    });

    // The chosen question may since have been deleted or unpublished by an
    // admin. Rather than showing nothing for the rest of the day, fall back to
    // any eligible question — the day's identity matters less than the card
    // being there.
    if (!q) {
      const fallback = await prisma.question.findFirst({
        where: { type: "SINGLE", quiz: { published: true, category: { published: true } } },
        select: {
          id: true,
          stem: true,
          explanation: true,
          choices: { select: { id: true, text: true, isCorrect: true }, orderBy: { order: "asc" } },
        },
        orderBy: { id: "asc" },
      });
      return fallback ?? null;
    }

    return q;
  } catch {
    return null;
  }
}
