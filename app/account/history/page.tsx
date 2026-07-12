import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, RotateCcw, Eye, CheckCircle2, XCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { getStudent } from "@/lib/student/auth";
import { prisma } from "@/lib/prisma";
import { letterGrade, gradeColor, formatDuration } from "@/lib/grading";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "My results", path: "/account/history" });

export default async function HistoryPage() {
  const student = await getStudent();
  if (!student) redirect("/account/login");

  const attempts = await prisma.quizAttempt.findMany({
    where: { studentId: student.id },
    orderBy: { createdAt: "desc" },
    include: { quiz: { select: { title: true, slug: true, kind: true, category: { select: { slug: true, title: true } } } } },
  });

  const passedCount = attempts.filter((a) => a.passed).length;
  const avg = attempts.length ? Math.round(attempts.reduce((s, a) => s + a.score, 0) / attempts.length) : 0;

  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="My results" description="Every practice test and exam you've taken, with scores, grades, and full review." />
      <Section ariaLabel="Results history">
        <div className="mx-auto max-w-3xl">
          <Link href="/account" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-medical-blue hover:underline">
            ← Back to account
          </Link>

          {/* Summary */}
          <div className="mb-6 grid grid-cols-3 gap-3">
            {[
              { label: "Attempts", value: attempts.length },
              { label: "Passed", value: passedCount },
              { label: "Average", value: `${avg}%` },
            ].map((s) => (
              <div key={s.label} className="surface-card p-4 text-center">
                <p className="text-2xl font-bold text-deep-blue">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {attempts.length === 0 ? (
            <div className="surface-card p-8 text-center">
              <p className="text-body text-muted-foreground">You haven't taken any tests yet.</p>
              <Link href="/question-bank" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue hover:underline">
                Browse the Question Bank <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {attempts.map((a) => (
                <li key={a.id} className="surface-card flex flex-wrap items-center gap-4 p-4">
                  <div className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-bg " + gradeColor(a.score)}>
                    <span className="text-lg font-bold leading-none">{letterGrade(a.score)}</span>
                    <span className="text-[10px] font-medium">{a.score}%</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate font-semibold text-deep-blue">{a.quiz.title}</p>
                      <span className={"rounded-full px-2 py-0.5 text-[10px] font-medium " + (a.quiz.kind === "EXAM" ? "bg-coral/10 text-coral" : "bg-medical-blue/10 text-medical-blue")}>
                        {a.quiz.kind === "EXAM" ? "Exam" : "Practice"}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {a.quiz.category.title} · {a.correctCount}/{a.totalQuestions} correct · {formatDuration(a.timeSpentSeconds)} · {new Date(a.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={"inline-flex items-center gap-1 text-sm font-medium " + (a.passed ? "text-emerald-600" : "text-red-500")}>
                    {a.passed ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                    {a.passed ? "Passed" : "Not passed"}
                  </span>
                  <div className="flex items-center gap-2">
                    <Link href={`/account/history/${a.id}`} className="inline-flex items-center gap-1 rounded-lg border border-medical-blue/30 px-3 py-1.5 text-xs font-semibold text-medical-blue hover:bg-medical-blue/5">
                      <Eye className="h-3.5 w-3.5" /> Review
                    </Link>
                    <Link href={`/question-bank/${a.quiz.category.slug}/${a.quiz.slug}`} className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-coral to-[#E8613F] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90">
                      <RotateCcw className="h-3.5 w-3.5" /> Retake
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>
    </PageTransition>
  );
}
