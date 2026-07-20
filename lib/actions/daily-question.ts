"use server";

import { recordDailyAnswer, getDailyState, type DailyState } from "@/lib/student/daily-question";

/**
 * Thin server-action wrappers so the homepage card (a client component) can
 * record an answer and read its own state without exposing the database.
 */

export async function submitDailyAnswer(
  questionId: string,
  wasCorrect: boolean
): Promise<DailyState> {
  await recordDailyAnswer(questionId, wasCorrect);
  return getDailyState();
}

export async function readDailyState(): Promise<DailyState> {
  return getDailyState();
}
