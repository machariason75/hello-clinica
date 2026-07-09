import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, RotateCcw, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { getStudent } from "@/lib/student/auth";
import { prisma } from "@/lib/prisma";
import { letterGrade, gradeColor, formatDuration } from "@/lib/grading";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "Review", path: "/account/history" });

export default async function ReviewPage({ params }: { params: Promise<{ attemptId: string }> }) {
  const student = await getStudent();
  if (!student) redirect("/account/login");
  const { attemptId } = await params;

  const attempt = await prisma.quizAttempt.findUnique({
    where: { id: attemptId },
    include: {
      quiz: {
        select: {
          title: true, slug: true, kind: true,
          category: { select: { slug: true, title: true } },
          questions: { orderBy: { order: "asc" }, include: { choices: { orderBy: { order: "asc" } } } },
        },
      },
    },
  });

  // Only the owner can review their attempt.
  if (!attempt || attempt.studentId !== student.id) notFound();

  const saved = (attempt.answers ?? {}) as Record<string, string[]>;
  const questions = attempt.quiz.questions;

  return (
    <PageTransition>
      <PageHero eyebrow="Result review" title={attempt.quiz.title} description={`${attempt.quiz.category.title} · ${attempt.quiz.kind === "EXAM" ? "Exam" : "Practice"}`} />
      <Section ariaLabel="Review">
        <div className="mx-auto max-w-3xl">
          <Link href="/account/history" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-medical-blue hover:underline">
            <ArrowLeft className="h-4 w-4" /> All results
          </Link>

          {/* Score summary */}
          <div className="surface-card mb-8 flex flex-wrap items-center gap-6 p-6">
            <div className={"flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-brand-bg " + gradeColor(attempt.score)}>
              <span className="text-2xl font-bold leading-none">{letterGrade(attempt.score)}</span>
              <span className="text-xs font-medium">{attempt.score}%</span>
            </div>
            <div className="flex-1">
              <p className={"text-lg font-semibold " + (attempt.passed ? "text-emerald-600" : "text-red-500")}>
                {attempt.passed ? "Passed" : "Not passed"}
              </p>
              <p className="text-sm text-muted-foreground">
                {attempt.correctCount}/{attempt.totalQuestions} correct · {formatDuration(attempt.timeSpentSeconds)} · {new Date(attempt.createdAt).toLocaleDateString()}
              </p>
            </div>
            <Link href={`/question-bank/${attempt.quiz.category.slug}/${attempt.quiz.slug}`} className="inline-flex items-center gap-1.5 rounded-xl bg-coral px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
              <RotateCcw className="h-4 w-4" /> Retake
            </Link>
          </div>

          {/* Per-question review */}
          <div className="space-y-5">
            {questions.map((q, idx) => {
              const chosen = saved[q.id] ?? [];
              const correctIds = q.choices.filter((c) => c.isCorrect).map((c) => c.id);
              const gotIt = chosen.length > 0 && chosen.length === correctIds.length && correctIds.every((id) => chosen.includes(id));
              return (
                <div key={q.id} className="surface-card p-6">
                  <div className="flex items-start gap-3">
                    <span className={"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white " + (gotIt ? "bg-emerald-500" : "bg-red-400")}>
                      {gotIt ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Question {idx + 1} · {q.topic}</p>
                      <p className="mt-1 font-semibold text-deep-blue">{q.stem}</p>

                      <ul className="mt-3 space-y-1.5">
                        {q.choices.map((c) => {
                          const isChosen = chosen.includes(c.id);
                          const state = c.isCorrect ? "correct" : isChosen ? "wrong" : "neutral";
                          return (
                            <li key={c.id} className={
                              "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm " +
                              (state === "correct" ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                                : state === "wrong" ? "border-red-300 bg-red-50 text-red-700"
                                : "border-deep-blue/10 text-deep-blue/80")
                            }>
                              {c.isCorrect ? <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                                : isChosen ? <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                                : <span className="h-4 w-4 shrink-0" />}
                              <span className="flex-1">{c.text}</span>
                              {isChosen && <span className="text-xs font-medium opacity-70">your answer</span>}
                            </li>
                          );
                        })}
                      </ul>

                      {q.explanation && (
                        <div className="mt-3 rounded-lg bg-[#F3E9DD]/60 p-3 text-sm text-deep-blue/80">
                          <span className="font-semibold text-deep-blue">Why: </span>{q.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </PageTransition>
  );
}
