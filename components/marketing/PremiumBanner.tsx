"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles, X, ArrowRight, Crown } from "lucide-react";

/**
 * Question Bank promo.
 *
 * TIMING, and the reasoning behind it:
 *
 *   SHOW_MS            how long it stays on screen once shown
 *   INTERVAL_MS        5 minutes between appearances by default
 *   BACKED_OFF_MS      10 minutes once the visitor has closed it
 *
 * Closing it used to silence the promo for the rest of the session. That threw
 * away every later chance to convert, and it also over-read the click: people
 * dismiss a panel because it's in the way right now, not because they never want
 * to hear about the Question Bank. So a dismissal now BACKS OFF rather than
 * silencing — the cadence doubles to 10 minutes, and the visitor is left alone
 * for a full back-off period before it returns.
 *
 * The back-off is remembered for the session, so closing it once on the homepage
 * still counts after they've been to the Question Bank and come back.
 */
const SHOW_MS = 9000;
const INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
const BACKED_OFF_MS = 10 * 60 * 1000; // 10 minutes after a dismissal
const FIRST_DELAY_MS = 6000;
const DISMISS_KEY = "hc_premium_banner_backed_off";

export function PremiumBanner() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [eligible, setEligible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [backedOff, setBackedOff] = useState(false);

  // Read the session preference before any scheduling decision is made.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") setBackedOff(true);
    } catch {
      /* private mode — fall back to the default cadence */
    }
  }, []);

  // Eligibility: not signed in, or signed in without access. Asked once.
  useEffect(() => {
    let active = true;
    fetch("/api/me")
      .then((r) => r.json())
      .then((d) => {
        if (active && !d.hasAccess) setEligible(true);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  // One scheduler, re-created whenever the cadence changes. Storing the hide
  // timer in a ref means a dismissal can cancel it immediately rather than
  // leaving a stray timeout that re-hides a later appearance.
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!eligible) return;

    const cadence = backedOff ? BACKED_OFF_MS : INTERVAL_MS;

    const show = () => {
      setVisible(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setVisible(false), SHOW_MS);
    };

    // After a dismissal, wait a full back-off period before reappearing —
    // showing up again 6 seconds later would be the opposite of respecting it.
    const first = setTimeout(show, backedOff ? cadence : FIRST_DELAY_MS);
    const interval = setInterval(show, cadence);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [eligible, backedOff]);

  // Only on the home dashboard — never once the visitor is engaging elsewhere.
  if (pathname !== "/") return null;
  if (!eligible) return null;

  function dismiss() {
    setVisible(false);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setBackedOff(true); // re-runs the scheduler at the slower cadence
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* nothing to persist to — the in-memory back-off still applies */
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : 120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reduce ? 0 : 120 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed bottom-5 right-5 z-40 w-[300px] max-w-[calc(100vw-2.5rem)]"
          role="complementary"
          aria-label="Question Bank offer"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-medical-blue via-[#14586B] to-coral p-5 text-white shadow-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/15 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/10 blur-2xl"
            />

            <button
              onClick={dismiss}
              aria-label="Close for now"
              className="absolute right-2 top-2 rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                <Crown className="h-3.5 w-3.5" /> Premium
              </span>
              <h3 className="mt-3 text-lg font-bold leading-snug">Unlock the full Question Bank</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/85">
                <li className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> TEAS, HESI &amp; real exams
                </li>
                <li className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> Results history &amp; grades
                </li>
                <li className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> Downloadable resources
                </li>
              </ul>
              <Link
                href="/question-bank/colleges-universities"
                onClick={() => setVisible(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-medical-blue transition hover:bg-white/90"
              >
                Get premium access <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
