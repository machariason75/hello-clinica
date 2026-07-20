import { prisma } from "@/lib/prisma";

/**
 * Question of the Day.
 *
 * Draws from the WHOLE question bank — premium sections included. Showing one
 * question a day from paid content is a sample, not a giveaway, and it's a far
 * better advert for the bank than restricting it to free sections would be.
 *
 * The question is presented without naming its exam or section: it's simply a
 * clinical question. That keeps it relevant to every visitor rather than
 * signalling "this isn't for you" to anyone not sitting that particular exam.
 *
 * Deterministic by day, so everyone sees the same question and it can be posted,
 * discussed and linked to.
 */

export type DailyQuestion = {
  id: string;
  stem: string;
  explanation: string;
  choices: { id: string; text: string; isCorrect: boolean }[];
};

function dayIndex(): number {
  return Math.floor(Date.now() / 86400000);
}

export async function getQuestionOfTheDay(): Promise<DailyQuestion | null> {
  try {
    // Single-answer questions only — select-all reads badly in a small card.
    const eligible = await prisma.question.findMany({
      where: {
        type: "SINGLE",
        quiz: { published: true, category: { published: true } },
      },
      select: {
        id: true,
        stem: true,
        explanation: true,
        choices: { select: { id: true, text: true, isCorrect: true }, orderBy: { order: "asc" } },
      },
      orderBy: { id: "asc" }, // stable, so the index means the same thing all day
    });

    if (eligible.length === 0) return null;

    const q = eligible[dayIndex() % eligible.length];
    return {
      id: q.id,
      stem: q.stem,
      explanation: q.explanation,
      choices: q.choices,
    };
  } catch {
    return null;
  }
}
