"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Flag,
  Check,
  X,
  RotateCcw,
  ListChecks,
  BarChart3,
  BookOpen,
  Timer,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ---------- types ----------
export type QuizChoice = { id: string; text: string; isCorrect: boolean };
export type QuizQuestion = {
  id: string;
  type: "SINGLE" | "MULTI" | "TRUE_FALSE";
  stem: string;
  topic: string;
  explanation: string;
  choices: QuizChoice[];
};
export type QuizPlayerData = {
  id: string;
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  categoryTitle: string;
  timeLimitSeconds: number | null;
  passThreshold: number;
  difficulty: string;
  questions: QuizQuestion[];
};

type Mode = "study" | "timed";
type Phase = "intro" | "playing" | "result";

// ---------- helpers ----------
function sameSet(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}
function correctIds(q: QuizQuestion) {
  return q.choices.filter((c) => c.isCorrect).map((c) => c.id);
}
function isQuestionCorrect(q: QuizQuestion, selected: string[]) {
  return selected.length > 0 && sameSet(selected, correctIds(q));
}
function fmtClock(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
const letter = (i: number) => String.fromCharCode(65 + i);

// ============================================================
export function QuizPlayer({ quiz }: { quiz: QuizPlayerData }) {
  const questions = quiz.questions;
  const total = questions.length;

  const [phase, setPhase] = useState<Phase>("intro");
  const [mode, setMode] = useState<Mode>(quiz.timeLimitSeconds ? "timed" : "study");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({}); // study-mode reveal
  const [showReview, setShowReview] = useState(false);

  const defaultLimit = quiz.timeLimitSeconds ?? Math.max(total * 60, 60);
  const [timeLeft, setTimeLeft] = useState(defaultLimit);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef<number>(0);
  const savedRef = useRef(false);

  // ----- results (computed once we reach result phase) -----
  const results = useMemo(() => {
    let correct = 0;
    const byTopic: Record<string, { correct: number; total: number }> = {};
    for (const q of questions) {
      const sel = answers[q.id] ?? [];
      const ok = isQuestionCorrect(q, sel);
      if (ok) correct++;
      const t = q.topic || "General";
      byTopic[t] = byTopic[t] || { correct: 0, total: 0 };
      byTopic[t].total++;
      if (ok) byTopic[t].correct++;
    }
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, score, passed: score >= quiz.passThreshold, byTopic };
  }, [answers, questions, total, quiz.passThreshold]);

  const answeredCount = useMemo(
    () => questions.filter((q) => (answers[q.id]?.length ?? 0) > 0).length,
    [answers, questions]
  );

  // ----- finish / submit -----
  const finish = useCallback(() => {
    const spent = mode === "timed" ? defaultLimit - timeLeft : elapsed;
    setElapsed(spent < 0 ? 0 : spent);
    setPhase("result");
    setShowReview(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [mode, defaultLimit, timeLeft, elapsed]);

  // ----- timer (timed mode only, during play) -----
  useEffect(() => {
    if (phase !== "playing") return;
    const id = setInterval(() => {
      if (mode === "timed") {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(id);
            finish();
            return 0;
          }
          return t - 1;
        });
      } else {
        setElapsed((e) => e + 1);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [phase, mode, finish]);

  // ----- save attempt once, when result is shown -----
  useEffect(() => {
    if (phase !== "result" || savedRef.current) return;
    savedRef.current = true;
    const spent = mode === "timed" ? defaultLimit - timeLeft : elapsed;
    fetch("/api/quiz-attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quizId: quiz.id,
        mode,
        score: results.score,
        correctCount: results.correct,
        totalQuestions: total,
        timeSpentSeconds: spent < 0 ? 0 : spent,
        topicBreakdown: results.byTopic,
        passed: results.passed,
        answers,
      }),
    }).catch(() => {
      /* best-effort; report still shows */
    });
  }, [phase, mode, defaultLimit, timeLeft, elapsed, quiz.id, results, total]);

  // ----- actions -----
  function start(selected: Mode) {
    setMode(selected);
    setTimeLeft(selected === "timed" ? defaultLimit : defaultLimit);
    setElapsed(0);
    startedAt.current = Date.now();
    setPhase("playing");
    setCurrent(0);
  }
  function select(q: QuizQuestion, choiceId: string) {
    if (mode === "study" && checked[q.id]) return; // locked after checking
    setAnswers((prev) => {
      const curr = prev[q.id] ?? [];
      if (q.type === "MULTI") {
        return {
          ...prev,
          [q.id]: curr.includes(choiceId)
            ? curr.filter((c) => c !== choiceId)
            : [...curr, choiceId],
        };
      }
      return { ...prev, [q.id]: [choiceId] };
    });
  }
  const toggleFlag = (qid: string) =>
    setFlagged((p) => ({ ...p, [qid]: !p[qid] }));
  const goto = (i: number) => setCurrent(Math.min(Math.max(i, 0), total - 1));

  if (total === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-deep-blue">{quiz.title}</h1>
        <p className="text-body mt-3 text-muted-foreground">
          This quiz has no questions yet. Please check back soon.
        </p>
        <Link
          href={`/question-bank/${quiz.categorySlug}`}
          className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold text-medical-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to {quiz.categoryTitle}
        </Link>
      </div>
    );
  }

  // ============================ INTRO ============================
  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href={`/question-bank/${quiz.categorySlug}`}
          className="focus-ring mb-8 inline-flex items-center gap-2 text-sm font-medium text-medical-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {quiz.categoryTitle}
        </Link>

        <div className="surface-card p-8 sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-medical-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-medical-blue">
            <ListChecks className="h-3.5 w-3.5" /> Practice quiz
          </span>
          <h1 className="mt-4 text-3xl font-bold text-deep-blue sm:text-4xl">{quiz.title}</h1>
          <p className="text-body mt-3 text-muted-foreground">{quiz.description}</p>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-brand-bg/60 p-4">
              <ListChecks className="mx-auto h-5 w-5 text-medical-blue" />
              <p className="mt-1 text-lg font-bold text-deep-blue">{total}</p>
              <p className="text-xs text-muted-foreground">Questions</p>
            </div>
            <div className="rounded-2xl bg-brand-bg/60 p-4">
              <Clock className="mx-auto h-5 w-5 text-medical-blue" />
              <p className="mt-1 text-lg font-bold text-deep-blue">
                {Math.round(defaultLimit / 60)} min
              </p>
              <p className="text-xs text-muted-foreground">Timed limit</p>
            </div>
            <div className="rounded-2xl bg-brand-bg/60 p-4">
              <BarChart3 className="mx-auto h-5 w-5 text-medical-blue" />
              <p className="mt-1 text-lg font-bold text-deep-blue">{quiz.passThreshold}%</p>
              <p className="text-xs text-muted-foreground">To pass</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-deep-blue">Choose how you want to practice</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => start("study")}
                className="focus-ring group rounded-2xl border-2 border-medical-blue/15 bg-white p-5 text-left transition hover:border-medical-blue/40 hover:-translate-y-0.5"
              >
                <BookOpen className="h-6 w-6 text-medical-blue" />
                <p className="mt-3 font-semibold text-deep-blue">Study mode</p>
                <p className="text-sm text-muted-foreground">
                  Untimed. See the correct answer and explanation right after each question.
                </p>
              </button>
              <button
                type="button"
                onClick={() => start("timed")}
                className="focus-ring group rounded-2xl border-2 border-coral/20 bg-white p-5 text-left transition hover:border-coral/50 hover:-translate-y-0.5"
              >
                <Timer className="h-6 w-6 text-coral" />
                <p className="mt-3 font-semibold text-deep-blue">Timed test</p>
                <p className="text-sm text-muted-foreground">
                  Simulates exam conditions. Answers and rationales are revealed at the end.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const selected = answers[q.id] ?? [];
  const isChecked = mode === "study" && checked[q.id];

  // ============================ RESULT ============================
  if (phase === "result") {
    const topics = Object.entries(results.byTopic).sort((a, b) => a[0].localeCompare(b[0]));
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="surface-card overflow-hidden p-8 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div
              className={cn(
                "flex h-28 w-28 flex-col items-center justify-center rounded-full text-white shadow-md",
                results.passed ? "bg-brand-gradient" : "bg-coral"
              )}
            >
              <span className="text-3xl font-extrabold leading-none">{results.score}%</span>
              <span className="mt-0.5 text-xs font-medium opacity-90">score</span>
            </div>
            <h1 className="mt-5 text-2xl font-bold text-deep-blue sm:text-3xl">
              {results.passed ? "Nice work — you passed" : "Keep going — almost there"}
            </h1>
            <p className="text-body mt-2 text-muted-foreground">
              You answered {results.correct} of {total} correctly
              {mode === "timed" || elapsed > 0 ? <> in {fmtClock(elapsed)}</> : null}. Passing
              is {quiz.passThreshold}%.
            </p>
          </div>

          {/* topic breakdown */}
          <div className="mt-9">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-deep-blue">
              <BarChart3 className="h-5 w-5 text-medical-blue" /> Results by topic
            </h2>
            <div className="space-y-4">
              {topics.map(([topic, t]) => {
                const pct = Math.round((t.correct / t.total) * 100);
                return (
                  <div key={topic}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-medium text-deep-blue">{topic}</span>
                      <span className="text-muted-foreground">
                        {t.correct}/{t.total} · {pct}%
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-medical-blue/10">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all",
                          pct >= quiz.passThreshold ? "bg-brand-gradient" : "bg-coral"
                        )}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setShowReview((v) => !v)}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-medical-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <ListChecks className="h-4 w-4" /> {showReview ? "Hide review" : "Review answers"}
            </button>
            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setChecked({});
                setFlagged({});
                setShowReview(false);
                savedRef.current = false;
                setPhase("intro");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-medical-blue/20 px-5 py-2.5 text-sm font-semibold text-medical-blue transition hover:bg-medical-blue/5"
            >
              <RotateCcw className="h-4 w-4" /> Retake
            </button>
            <Link
              href={`/question-bank/${quiz.categorySlug}`}
              className="focus-ring inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-deep-blue"
            >
              More quizzes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* review list */}
        {showReview && (
          <div className="mt-8 space-y-5">
            {questions.map((question, i) => {
              const sel = answers[question.id] ?? [];
              const ok = isQuestionCorrect(question, sel);
              const correct = correctIds(question);
              return (
                <div key={question.id} className="surface-card p-6">
                  <div className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white",
                        ok ? "bg-emerald-500" : "bg-rose-500"
                      )}
                    >
                      {ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-medical-blue">
                        Question {i + 1} · {question.topic}
                      </p>
                      <p className="mt-1 font-medium text-deep-blue">{question.stem}</p>
                      <div className="mt-3 space-y-2">
                        {question.choices.map((c, ci) => {
                          const chosen = sel.includes(c.id);
                          const isRight = correct.includes(c.id);
                          return (
                            <div
                              key={c.id}
                              className={cn(
                                "flex items-start gap-2 rounded-xl border px-3 py-2 text-sm",
                                isRight
                                  ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                                  : chosen
                                    ? "border-rose-300 bg-rose-50 text-rose-900"
                                    : "border-transparent bg-brand-bg/50 text-muted-foreground"
                              )}
                            >
                              <span className="font-semibold">{letter(ci)}.</span>
                              <span className="flex-1">{c.text}</span>
                              {isRight && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />}
                              {chosen && !isRight && (
                                <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-3 rounded-xl bg-medical-blue/5 p-3 text-sm text-deep-blue">
                        <span className="font-semibold">Rationale. </span>
                        {question.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // ============================ PLAYING ============================
  const correct = correctIds(q);
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      {/* header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-medical-blue">{quiz.title}</p>
          <p className="text-xs text-muted-foreground">
            Question {current + 1} of {total} · {answeredCount} answered
          </p>
        </div>
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
            mode === "timed"
              ? timeLeft <= 30
                ? "bg-rose-100 text-rose-700"
                : "bg-medical-blue/10 text-medical-blue"
              : "bg-medical-blue/10 text-medical-blue"
          )}
        >
          <Clock className="h-4 w-4" />
          {mode === "timed" ? fmtClock(timeLeft) : `${fmtClock(elapsed)} elapsed`}
        </div>
      </div>

      {/* progress bar */}
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-medical-blue/10">
        <div
          className="h-full rounded-full bg-brand-gradient transition-all"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
        {/* question card */}
        <div className="surface-card p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center rounded-full bg-medical-blue/10 px-2.5 py-1 text-xs font-semibold text-medical-blue">
              {q.topic}
            </span>
            <button
              type="button"
              onClick={() => toggleFlag(q.id)}
              className={cn(
                "focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition",
                flagged[q.id]
                  ? "bg-coral/15 text-coral"
                  : "text-muted-foreground hover:bg-brand-bg"
              )}
            >
              <Flag className="h-3.5 w-3.5" /> {flagged[q.id] ? "Flagged" : "Flag"}
            </button>
          </div>

          <h2 className="mt-4 text-lg font-semibold leading-relaxed text-deep-blue sm:text-xl">
            {q.stem}
          </h2>
          {q.type === "MULTI" && (
            <p className="mt-1 text-sm font-medium text-coral">Select all that apply.</p>
          )}

          <div className="mt-5 space-y-3">
            {q.choices.map((c, ci) => {
              const chosen = selected.includes(c.id);
              const showState = isChecked;
              const isRight = correct.includes(c.id);
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => select(q, c.id)}
                  disabled={isChecked}
                  className={cn(
                    "focus-ring flex w-full items-start gap-3 rounded-2xl border-2 px-4 py-3 text-left text-sm transition",
                    showState && isRight
                      ? "border-emerald-400 bg-emerald-50"
                      : showState && chosen && !isRight
                        ? "border-rose-400 bg-rose-50"
                        : chosen
                          ? "border-medical-blue bg-medical-blue/5"
                          : "border-black/10 bg-white hover:border-medical-blue/40"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                      chosen
                        ? "border-medical-blue bg-medical-blue text-white"
                        : "border-black/20 text-muted-foreground"
                    )}
                  >
                    {letter(ci)}
                  </span>
                  <span className="flex-1 text-deep-blue">{c.text}</span>
                  {showState && isRight && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  )}
                  {showState && chosen && !isRight && (
                    <XCircle className="h-5 w-5 shrink-0 text-rose-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* study-mode reveal */}
          {isChecked && (
            <div className="mt-5 rounded-2xl bg-medical-blue/5 p-4 text-sm text-deep-blue">
              <span className="font-semibold">Rationale. </span>
              {q.explanation}
            </div>
          )}

          {/* controls */}
          <div className="mt-7 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => goto(current - 1)}
              disabled={current === 0}
              className="focus-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:text-deep-blue disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" /> Previous
            </button>

            {mode === "study" && !isChecked ? (
              <button
                type="button"
                onClick={() => setChecked((p) => ({ ...p, [q.id]: true }))}
                disabled={selected.length === 0}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-coral to-[#E8613F] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-40"
              >
                <Check className="h-4 w-4" /> Check answer
              </button>
            ) : current === total - 1 ? (
              <button
                type="button"
                onClick={finish}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-medical-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Finish <Check className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => goto(current + 1)}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-medical-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Next <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* navigator + submit */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="surface-card p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Questions
            </p>
            <div className="grid grid-cols-6 gap-2 lg:grid-cols-5">
              {questions.map((question, i) => {
                const isAnswered = (answers[question.id]?.length ?? 0) > 0;
                const isFlagged = flagged[question.id];
                return (
                  <button
                    key={question.id}
                    type="button"
                    onClick={() => goto(i)}
                    aria-label={`Go to question ${i + 1}`}
                    className={cn(
                      "relative flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition",
                      i === current
                        ? "bg-medical-blue text-white ring-2 ring-medical-blue ring-offset-2"
                        : isAnswered
                          ? "bg-medical-blue/15 text-medical-blue"
                          : "bg-brand-bg text-muted-foreground hover:bg-medical-blue/10"
                    )}
                  >
                    {i + 1}
                    {isFlagged && (
                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-coral" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-medical-blue/15" /> Answered
              </p>
              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-brand-bg ring-1 ring-black/10" /> Unanswered
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-coral" /> Flagged for review
              </p>
            </div>

            <button
              type="button"
              onClick={finish}
              className="focus-ring mt-5 w-full rounded-full bg-gradient-to-r from-coral to-[#E8613F] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Submit test
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
