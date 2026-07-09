"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles, X, ArrowRight, Crown } from "lucide-react";

const SHOW_MS = 9000;      // visible for ~9s
const INTERVAL_MS = 75000; // reappears about every 75s
const FIRST_DELAY_MS = 6000;
const DISMISS_KEY = "hc_premium_banner_dismissed";

export function PremiumBanner() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [eligible, setEligible] = useState(false);
  const [visible, setVisible] = useState(false);

  // Decide eligibility once (not signed in, or signed in without access).
  useEffect(() => {
    let active = true;
    if (typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY)) return;
    fetch("/api/me")
      .then((r) => r.json())
      .then((d) => { if (active && !d.hasAccess) setEligible(true); })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  // Periodic show/hide cycle.
  useEffect(() => {
    if (!eligible) return;
    let hideTimer: ReturnType<typeof setTimeout>;
    const show = () => {
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), SHOW_MS);
    };
    const first = setTimeout(show, FIRST_DELAY_MS);
    const interval = setInterval(show, INTERVAL_MS);
    return () => { clearTimeout(first); clearTimeout(hideTimer); clearInterval(interval); };
  }, [eligible]);

  // Never on admin or the account/auth screens.
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/account")) return null;
  if (!eligible) return null;

  function dismiss() {
    setVisible(false);
    setEligible(false);
    try { sessionStorage.setItem(DISMISS_KEY, "1"); } catch {}
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: 120 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, x: 120 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed bottom-5 right-5 z-40 w-[300px] max-w-[calc(100vw-2.5rem)]"
          role="complementary"
          aria-label="Premium offer"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-[#0C3C4C] via-[#14586b] to-[#C2461A] p-5 text-white shadow-2xl">
            {/* soft glow */}
            <div aria-hidden className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/15 blur-2xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

            <button onClick={dismiss} aria-label="Dismiss" className="absolute right-2 top-2 rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white">
              <X className="h-4 w-4" />
            </button>

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                <Crown className="h-3.5 w-3.5" /> Premium
              </span>
              <h3 className="mt-3 text-lg font-bold leading-snug">Unlock the full Question Bank</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/85">
                <li className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> TEAS, HESI & real exams</li>
                <li className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Results history & grades</li>
                <li className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Downloadable resources</li>
              </ul>
              <Link
                href="/question-bank/colleges-universities"
                onClick={() => setVisible(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#0C3C4C] transition hover:bg-white/90"
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
