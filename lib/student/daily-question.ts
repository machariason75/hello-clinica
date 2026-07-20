import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";

/**
 * Question of the Day — identity, recording, and the one free set per day.
 *
 * Identity model:
 *   signed in  -> "student:<id>"
 *   anonymous  -> "visitor:<uuid>"  (a long-lived cookie)
 *
 * One unique index on (identityKey, dayKey) guarantees ONE row per person per
 * day. Replaying the daily question updates that row rather than adding another,
 * so the admin counts stay honest without any application-level de-duplication.
 *
 * The free practice set deliberately requires an ACCOUNT. Anonymous entitlement
 * would be trivially farmed by clearing cookies, and more importantly this is
 * the natural moment to convert a curious stranger into a registered user.
 */

const VISITOR_COOKIE = "hc_visitor";

/** Stable "YYYY-MM-DD" key in UTC, so the day rolls over at the same instant everywhere. */
export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Reads the visitor cookie. Returns null if absent — creation happens in the action. */
export async function readVisitorId(): Promise<string | null> {
  try {
    return (await cookies()).get(VISITOR_COOKIE)?.value ?? null;
  } catch {
    return null;
  }
}

/** Ensures a visitor id exists, creating the cookie when needed. */
export async function ensureVisitorId(): Promise<string> {
  const jar = await cookies();
  const existing = jar.get(VISITOR_COOKIE)?.value;
  if (existing) return existing;

  const id = crypto.randomUUID();
  jar.set(VISITOR_COOKIE, id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  return id;
}

export type DailyState = {
  /** Have they answered today's question? */
  answered: boolean;
  /** Do they still have their free practice set available today? */
  freeSetAvailable: boolean;
  /** If claimed, which quiz it was spent on. */
  claimedQuizId: string | null;
  signedIn: boolean;
};

/** Current state for whoever is asking, without writing anything. */
export async function getDailyState(): Promise<DailyState> {
  const student = await getStudent();
  const visitorId = await readVisitorId();

  const identityKey = student ? `student:${student.id}` : visitorId ? `visitor:${visitorId}` : null;

  if (!identityKey) {
    return { answered: false, freeSetAvailable: !!student, claimedQuizId: null, signedIn: !!student };
  }

  try {
    const row = await prisma.dailyQuestionAttempt.findUnique({
      where: { identityKey_dayKey: { identityKey, dayKey: todayKey() } },
      select: { answered: true, claimedQuizId: true },
    });

    return {
      answered: row?.answered ?? false,
      // Only signed-in users can hold an entitlement at all.
      freeSetAvailable: !!student && !row?.claimedQuizId,
      claimedQuizId: row?.claimedQuizId ?? null,
      signedIn: !!student,
    };
  } catch {
    return { answered: false, freeSetAvailable: !!student, claimedQuizId: null, signedIn: !!student };
  }
}

/**
 * Records that today's question was answered.
 * Upserts, so replaying it never creates a second row.
 */
export async function recordDailyAnswer(questionId: string, wasCorrect: boolean): Promise<void> {
  try {
    const student = await getStudent();
    const visitorId = student ? null : await ensureVisitorId();
    const identityKey = student ? `student:${student.id}` : `visitor:${visitorId}`;
    const dayKey = todayKey();

    await prisma.dailyQuestionAttempt.upsert({
      where: { identityKey_dayKey: { identityKey, dayKey } },
      create: {
        identityKey,
        studentId: student?.id ?? null,
        dayKey,
        questionId,
        answered: true,
        wasCorrect,
      },
      update: {
        // Keep the FIRST result — a replay shouldn't overwrite whether they got
        // it right the first time, which is the number worth reporting.
        studentId: student?.id ?? undefined,
      },
    });
  } catch {
    /* never let analytics break the user's experience */
  }
}

/**
 * Claims the free practice set for today, if available.
 * Returns true when this quiz is now unlocked for them.
 */
export async function claimFreeSet(quizId: string): Promise<boolean> {
  const student = await getStudent();
  if (!student) return false; // account required, by design

  const identityKey = `student:${student.id}`;
  const dayKey = todayKey();

  try {
    const existing = await prisma.dailyQuestionAttempt.findUnique({
      where: { identityKey_dayKey: { identityKey, dayKey } },
      select: { claimedQuizId: true },
    });

    // Already spent on this same quiz — let them continue it.
    if (existing?.claimedQuizId === quizId) return true;
    // Already spent on a different quiz today.
    if (existing?.claimedQuizId) return false;

    await prisma.dailyQuestionAttempt.upsert({
      where: { identityKey_dayKey: { identityKey, dayKey } },
      create: {
        identityKey,
        studentId: student.id,
        dayKey,
        questionId: "",
        claimedQuizId: quizId,
        claimedAt: new Date(),
      },
      update: { claimedQuizId: quizId, claimedAt: new Date(), studentId: student.id },
    });
    return true;
  } catch {
    return false;
  }
}

/** Is this specific quiz unlocked today by the free-set entitlement? */
export async function hasFreeSetFor(quizId: string): Promise<boolean> {
  const student = await getStudent();
  if (!student) return false;
  try {
    const row = await prisma.dailyQuestionAttempt.findUnique({
      where: { identityKey_dayKey: { identityKey: `student:${student.id}`, dayKey: todayKey() } },
      select: { claimedQuizId: true },
    });
    return row?.claimedQuizId === quizId;
  } catch {
    return false;
  }
}
