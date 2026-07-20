"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

/**
 * Share a quiz result.
 *
 * Uses the Web Share API where it exists (all mobile browsers), which opens the
 * native sheet — WhatsApp, Instagram, Messages — and is by far the most likely
 * route for students sharing with a cohort. Falls back to copying text on
 * desktop, where Web Share is patchy.
 *
 * The shared text deliberately leads with the score and names the exam, because
 * that's what makes a classmate curious enough to click.
 */
export function ShareResult({
  score,
  quizTitle,
  categoryTitle,
  passed,
  url,
}: {
  score: number;
  quizTitle: string;
  categoryTitle?: string;
  passed: boolean;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  const headline = passed
    ? `I scored ${score}% on the ${quizTitle} practice set`
    : `I'm revising ${categoryTitle ?? quizTitle} — scored ${score}% on this practice set`;

  const text = `${headline} on Hello Clinica. Free practice questions with full rationales:`;

  async function share() {
    // Native share sheet — mobile, where cohorts actually talk.
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Hello Clinica", text, url });
        return;
      } catch {
        // User dismissed the sheet — not an error, just fall through to copy.
      }
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked — nothing useful we can do */
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-medical-blue ring-1 ring-deep-blue/15 transition hover:ring-coral/45"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" /> Copied
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" aria-hidden="true" /> Share result
        </>
      )}
    </button>
  );
}
