"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { CalendarDays, Check, X, Lightbulb, Unlock } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { DailyQuestion } from "@/lib/queries/question-of-day";
import { submitDailyAnswer } from "@/lib/actions/daily-question";
import type { DailyState } from "@/lib/student/daily-question";

/**
 * Question of the Day.
 *
 * Presented as a plain clinical question with no exam or section label, so it
 * speaks to every visitor rather than signalling "not for you" to anyone sitting
 * a different exam.
 *
 * Answering is open to everyone, signed in or not. The reward for answering is
 * the full rationale — and, for signed-in students, one complete practice set of
 * their choosing, free for the day.
 */
export function QuestionOfTheDay({
  question,
  initialState,
}: {
  question: DailyQuestion;
  initialState: DailyState;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const [state, setState] = useState<DailyState>(initialState);
  const [, startTransition] = useTransition();

  const answered = picked !== null;
  const correctId = question.choices.find((c) => c.isCorrect)?.id;
  const gotIt = answered && picked === correctId;

  function choose(choiceId: string) {
    if (answered) return;
    setPicked(choiceId);
    // Recorded server-side; one row per person per day regardless of replays.
    startTransition(async () => {
      const next = await submitDailyAnswer(question.id, choiceId === correctId);
      setState(next);
    });
  }

  return (
    <section className="section">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <div className="surface-card overflow-hidden">
              <div className="border-b border-deep-blue/10 bg-gradient-to-r from-[#F3E9DD]/80 to-white px-5 py-4 sm:px-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-coral">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Question of the Day
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  A new one every day, drawn from across the Question Bank. Free — no account needed.
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-base font-medium leading-relaxed text-deep-blue">{question.stem}</p>

                <ul className="mt-4 space-y-2">
                  {question.choices.map((c) => {
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
                    <div className="mt-5 rounded-xl border border-deep-blue/10 bg-[#F3E9DD]/40 p-4">
                      <p className="flex items-center gap-1.5 text-sm font-semibold text-deep-blue">
                        <Lightbulb className="h-4 w-4 text-coral" aria-hidden="true" />
                        {gotIt ? "Correct — here's why" : "Not quite. Here's the reasoning"}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-deep-blue/75">{question.explanation}</p>
                    </div>

                    {/* A quiet, factual line — not a pitch. Without it a
                        signed-in student would never discover the entitlement. */}
                    {state.signedIn && state.freeSetAvailable && (
                      <p className="mt-3 flex items-center gap-1.5 text-sm text-deep-blue/70">
                        <Unlock className="h-3.5 w-3.5 shrink-0 text-coral" aria-hidden="true" />
                        <span>
                          You have a free practice set today —{" "}
                          <Link href="/question-bank" className="font-semibold text-coral underline">
                            pick any set
                          </Link>
                          .
                        </span>
                      </p>
                    )}

                    {state.signedIn && !state.freeSetAvailable && (
                      <p className="mt-3 text-sm text-deep-blue/55">
                        You&apos;ve used today&apos;s free practice set. Another one tomorrow.
                      </p>
                    )}

                  </>
                )}

                {!answered && (
                  <p className="mt-4 text-xs text-muted-foreground">
                    Pick an answer to see the full rationale.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
