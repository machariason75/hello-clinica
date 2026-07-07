import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Saves a completed quiz attempt. Anonymous in Drop 1 (userId null); Drop 2 will
 * attach the signed-in user so students can see their history and weak topics.
 * Best-effort: the player still shows the report even if this fails.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      quizId,
      mode,
      score,
      correctCount,
      totalQuestions,
      timeSpentSeconds,
      topicBreakdown,
    } = body ?? {};

    if (
      typeof quizId !== "string" ||
      typeof score !== "number" ||
      typeof correctCount !== "number" ||
      typeof totalQuestions !== "number"
    ) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    // Ensure the quiz exists (and avoid writing orphan rows).
    const quiz = await prisma.quiz.findUnique({ where: { id: quizId }, select: { id: true } });
    if (!quiz) {
      return NextResponse.json({ ok: false, error: "Quiz not found" }, { status: 404 });
    }

    await prisma.quizAttempt.create({
      data: {
        quizId,
        userId: null,
        mode: typeof mode === "string" ? mode : "timed",
        score: Math.max(0, Math.min(100, Math.round(score))),
        correctCount,
        totalQuestions,
        timeSpentSeconds: typeof timeSpentSeconds === "number" ? Math.max(0, timeSpentSeconds) : 0,
        topicBreakdown: topicBreakdown ?? undefined,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
