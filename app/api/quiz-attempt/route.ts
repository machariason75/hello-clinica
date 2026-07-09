import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";

/**
 * Saves a completed quiz attempt. If a student is signed in, the attempt is
 * linked to their account (server-side, from the session cookie) so it appears
 * in their history with full review. Best-effort: the report still shows even
 * if this fails.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      quizId, mode, score, correctCount, totalQuestions,
      timeSpentSeconds, topicBreakdown, passed, answers,
    } = body ?? {};

    if (
      typeof quizId !== "string" ||
      typeof score !== "number" ||
      typeof correctCount !== "number" ||
      typeof totalQuestions !== "number"
    ) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    const quiz = await prisma.quiz.findUnique({ where: { id: quizId }, select: { id: true, kind: true } });
    if (!quiz) {
      return NextResponse.json({ ok: false, error: "Quiz not found" }, { status: 404 });
    }

    const student = await getStudent();

    await prisma.quizAttempt.create({
      data: {
        quizId,
        userId: student?.id ?? null,
        studentId: student?.id ?? null,
        mode: typeof mode === "string" ? mode : "timed",
        kind: quiz.kind,
        score: Math.max(0, Math.min(100, Math.round(score))),
        correctCount,
        totalQuestions,
        passed: typeof passed === "boolean" ? passed : false,
        timeSpentSeconds: typeof timeSpentSeconds === "number" ? Math.max(0, timeSpentSeconds) : 0,
        topicBreakdown: topicBreakdown ?? undefined,
        answers: answers ?? undefined,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
