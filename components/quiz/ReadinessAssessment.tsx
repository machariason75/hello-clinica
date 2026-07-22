"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { ArrowRight, Check, X, Target, Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";
import type { AssessmentQuestion } from "@/lib/queries/readiness";
import { subscribeToNewsletter } from "@/lib/actions/newsletter";

/**
 * The free readiness assessment.
 *
 * No account, no timer, no pressure — twelve questions and an honest report.
 * The report is the product here: it tells someone exactly which topics they're
 * weak in, which is genuinely useful whether or not they ever pay, and makes the
 * case for the Question Bank far better than a sales pitch could.
 *
 * The email capture sits AFTER the report, not before it. Gating the result
 * behind a form is the standard move and it's the wrong one — people bounce, and
 * the ones who don't feel tricked. Give the value first.
 */
export function ReadinessAssessment({ questions }: { questions: AssessmentQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [isPending, startTransition] = useTransition();

  const total = questions.length;
  const current = questions[index];

  const report = useMemo(() => {
    const byTopic = new Map<string, { correct: number; total: number }>();
    let correct = 0;

    for (const q of questions) {
      const picked = answers[q.id];
      const right = q.choices.find((c) => c.isCorrect)?.id;
      const ok = picked === right;
      if (ok) correct++;

      const acc = byTopic.get(q.topic) ?? { correct: 0, total: 0 };
      acc.total++;
      if (ok) acc.correct++;
      byTopic.set(q.topic, acc);
    }

    const topics = Array.from(byTopic.entries())
      .map(([topic, t]) => ({ topic, ...t, pct: Math.round((t.correct / t.total) * 100) }))
      .sort((a, b) => a.pct - b.pct);

    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    const verdict =
      score >= 80
        ? "You're in strong shape"
        : score >= 60
          ? "You're on your way"
          : "There's ground to make up — and that's useful to know now";

    return { correct, score, topics, verdict, weakest: topics.slice(0, 3) };
  }, [answers, questions, total]);

  function choose(choiceId: string) {
    if (!current || answers[current.id]) return;
    setAnswers((a) => ({ ...a, [current.id]: choiceId }));
  }

  function next() {
    if (index < total - 1) setIndex(index + 1);
    else setFinished(true);
  }

  function saveEmail() {
    if (!name.trim() || !email.trim()) {
      toast.error("Please add your name and email.");
      return;
    }
    startTransition(async () => {
      // The action takes FormData (it's used with a <form> elsewhere), and reads
      // consent as the string "true"/"on" — match that exactly.
      const fd = new FormData();
      fd.set("name", name.trim());
      fd.set("email", email.trim());
      fd.set("consent", "true");
      const res = await subscribeToNewsletter(null, fd);
      if (res?.success) {
        setSent(true);
        toast.success("Sent — check your inbox.");
      } else {
        toast.error(res?.message || "Could not save that. Please try again.");
      }
    });
  }

  if (total === 0) {
    return (
      <div className="surface-card p-10 text-center">
        <p className="text-deep-blue/60">The assessment isn&apos;t available just yet. Please check back soon.</p>
      </div>
    );
  }

  /* ------------------------------ REPORT ------------------------------ */
  if (finished) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="surface-card p-6 sm:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-coral to-[#E8613F] text-white shadow-md">
              <span className="text-2xl font-extrabold leading-none">{report.score}%</span>
              <span className="mt-0.5 text-[10px] font-medium opacity-90">readiness</span>
            </div>
            <h2 className="mt-4 text-xl font-bold text-deep-blue sm:text-2xl">{report.verdict}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              You answered {report.correct} of {total} correctly.
            </p>
          </div>

          <div className="mt-7">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-deep-blue">
              <Target className="h-4 w-4 text-coral" aria-hidden="true" /> How you did, topic by topic
            </h3>
            <ul className="space-y-3">
              {report.topics.map((t) => {
                const tone = t.pct < 50 ? "bg-red-500" : t.pct < 70 ? "bg-amber-500" : "bg-emerald-500";
                return (
                  <li key={t.topic}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="truncate text-deep-blue">{t.topic}</span>
                      <span className="shrink-0 tabular-nums text-muted-foreground">
                        {t.correct}/{t.total}
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-deep-blue/8">
                      <div className={`h-full rounded-full ${tone}`} style={{ width: `${t.pct}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {report.weakest.length > 0 && (
            <div className="mt-6 rounded-xl border border-deep-blue/10 bg-[#F3E9DD]/40 p-4">
              <p className="text-sm font-semibold text-deep-blue">Where to focus first</p>
              <p className="mt-1 text-sm text-deep-blue/70">
                Start with {report.weakest.map((w) => w.topic).join(", ")}. Those are the areas costing you the most
                marks right now — improving them moves your overall score fastest.
              </p>
              <Link
                href="/question-bank"
                className="focus-ring mt-3 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-coral to-[#E8613F] px-4 py-2 text-sm font-semibold text-white"
              >
                Practise these in the Question Bank <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Email capture — AFTER the value, never before it */}
        {!sent ? (
          <div className="surface-card p-6">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-deep-blue">
              <Mail className="h-4 w-4 text-coral" aria-hidden="true" /> Want study tips for your weak areas?
            </p>
            <p className="mt-1 text-sm text-deep-blue/70">
              We&apos;ll send occasional practice questions and revision guidance. No spam, unsubscribe in one click.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="focus-ring rounded-xl border border-deep-blue/15 px-3 py-2 text-sm"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="focus-ring rounded-xl border border-deep-blue/15 px-3 py-2 text-sm"
              />
              <button
                onClick={saveEmail}
                disabled={isPending}
                className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-medical-blue to-deep-blue px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
              >
                {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send them"}
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-sm text-emerald-700">Thanks — you&apos;re on the list.</p>
        )}

        <p className="text-center">
          <button
            onClick={() => {
              setAnswers({});
              setIndex(0);
              setFinished(false);
            }}
            className="focus-ring text-sm font-medium text-medical-blue underline hover:text-coral"
          >
            Take it again
          </button>
        </p>
      </div>
    );
  }

  /* ---------------------------- QUESTIONS ---------------------------- */
  const picked = answers[current.id];
  const answered = !!picked;
  const correctId = current.choices.find((c) => c.isCorrect)?.id;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="surface-card overflow-hidden">
        <div className="border-b border-deep-blue/10 bg-gradient-to-r from-[#F3E9DD]/80 to-white px-5 py-3 sm:px-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-deep-blue/60">
              Question {index + 1} of {total}
            </span>
            <span className="rounded-full bg-medical-blue/10 px-2 py-0.5 font-medium text-medical-blue">
              {current.topic}
            </span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-deep-blue/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-coral to-[#E8613F] transition-all"
              style={{ width: `${((index + (answered ? 1 : 0)) / total) * 100}%` }}
            />
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-base font-medium leading-relaxed text-deep-blue">{current.stem}</p>

          <ul className="mt-4 space-y-2">
            {current.choices.map((c) => {
              const isPicked = picked === c.id;
              const showCorrect = answered && c.isCorrect;
              const showWrong = answered && isPicked && !c.isCorrect;

              let cls = "w-full rounded-xl border px-4 py-3 text-left text-sm transition focus-ring ";
              if (showCorrect) cls += "border-emerald-400 bg-emerald-50 text-emerald-900";
              else if (showWrong) cls += "border-red-300 bg-red-50 text-red-900";
              else if (answered) cls += "border-deep-blue/10 bg-white text-deep-blue/50";
              else cls += "border-deep-blue/15 bg-white text-deep-blue hover:border-coral/50 hover:bg-[#F3E9DD]/40";

              return (
                <li key={c.id}>
                  <button type="button" onClick={() => choose(c.id)} disabled={answered} className={cls}>
                    <span className="flex items-start gap-2">
                      {showCorrect && <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />}
                      {showWrong && <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />}
                      <span>{c.text}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {answered && (
            <>
              <div className="mt-4 rounded-xl border border-deep-blue/10 bg-[#F3E9DD]/40 p-4">
                <p className="text-sm font-semibold text-deep-blue">
                  {picked === correctId ? "Correct" : "The right answer is explained below"}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-deep-blue/75">{current.explanation}</p>
              </div>
              <button
                onClick={next}
                className="focus-ring mt-4 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-coral to-[#E8613F] px-5 py-2.5 text-sm font-semibold text-white"
              >
                {index < total - 1 ? "Next question" : "See my report"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
