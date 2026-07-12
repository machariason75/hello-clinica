"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HeartPulse, Plus, GraduationCap } from "lucide-react";

const SLIDES = [
  { src: "/images/medics/medic-1.jpg", alt: "Smiling nurse in blue scrubs" },
  { src: "/images/medics/medic-2.jpg", alt: "Smiling doctor in a white coat" },
  { src: "/images/medics/medic-3.jpg", alt: "Smiling clinician in a white coat" },
  { src: "/images/medics/medic-5.jpg", alt: "Smiling clinician in blue scrubs" },
  { src: "/images/medics/medic-6.jpg", alt: "Smiling healthcare professional" },
];

// Standby rotation speed — brisk enough to feel alive, calm enough not to distract.
const INTERVAL_MS = 60000;

/**
 * Hero image — a gentle auto-rotating slideshow that cross-dissolves through
 * ALL photos (not just the first two). It starts on a deterministic photo so
 * the server and client render identically (no hydration mismatch), then the
 * client advances the index on a timer and whenever the visitor taps the image.
 * Reduced-motion users see a single still image.
 */
export function HeroSlideshow() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function schedule() {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
  }

  useEffect(() => {
    if (reduce) return;
    // Client-only random starting photo → a different face greets each visit.
    // SSR/first render is slide 0, so this update causes no hydration mismatch.
    setIndex(Math.floor(Math.random() * SLIDES.length));
    schedule();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reduce]);

  // Tapping the photo advances immediately (and resets the standby timer),
  // so every interaction surfaces a different face.
  function advance() {
    if (reduce) return;
    setIndex((i) => (i + 1) % SLIDES.length);
    schedule();
  }

  const active = SLIDES[index];

  return (
    <div className="relative">
      {/* Decorative floating accents (not photos) — varied colours for warmth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
        <span className="absolute -left-3 top-12 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-coral to-[#E8613F] text-white shadow-lg">
          <HeartPulse className="h-5 w-5" />
        </span>
        <span className="absolute -right-3 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#E7A64B] text-white shadow-lg">
          <Plus className="h-5 w-5" />
        </span>
        <span className="absolute -left-4 bottom-14 flex h-11 w-11 items-center justify-center rounded-full bg-coral-dark text-white shadow-lg">
          <GraduationCap className="h-5 w-5" />
        </span>
      </div>

      <motion.div
        initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        onClick={advance}
        className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-card bg-white shadow-card ring-1 ring-black/5"
      >
        {reduce ? (
          <Image
            src={SLIDES[0].src}
            alt={SLIDES[0].alt}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 600px"
            className="object-cover"
          />
        ) : (
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.7, ease: "easeInOut" }, scale: { duration: INTERVAL_MS / 1000 + 1.5, ease: "linear" } }}
              className="absolute inset-0"
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}
