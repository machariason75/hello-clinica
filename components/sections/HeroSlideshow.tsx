"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, Plus, GraduationCap } from "lucide-react";
import { HERO_SLIDE_COUNT } from "@/lib/hero-rotation";

const SLIDES = [
  { src: "/images/medics/medic-1.jpg", alt: "Smiling nurse in blue scrubs" },
  { src: "/images/medics/medic-2.jpg", alt: "Smiling doctor in a white coat" },
  { src: "/images/medics/medic-3.jpg", alt: "Smiling clinician in a white coat" },
  { src: "/images/medics/medic-5.jpg", alt: "Smiling clinician in blue scrubs" },
  { src: "/images/medics/medic-6.jpg", alt: "Smiling healthcare professional" },
];

// A mismatch here would silently break the rotation, so fail loudly in dev.
if (process.env.NODE_ENV !== "production" && SLIDES.length !== HERO_SLIDE_COUNT) {
  console.warn(
    `HeroSlideshow: SLIDES has ${SLIDES.length} photos but HERO_SLIDE_COUNT is ${HERO_SLIDE_COUNT}. Update lib/hero-rotation.ts.`
  );
}

/**
 * Hero photo — ONE photo, held still for the whole visit.
 *
 * The photo to show is decided by the server (see lib/hero-rotation.ts) and
 * passed in, so it is already correct in the first HTML. There is deliberately
 * no interval, no AnimatePresence and no cross-dissolve:
 *
 *   - Arriving visitors find a finished photo, never a transition in progress.
 *   - The photo cannot change while someone is reading the dashboard.
 *   - It changes between visits — browse elsewhere for a while, return, and the
 *     10-minute window has usually moved on to a new face.
 *
 * The only motion left is a single fade-and-settle on first paint, which belongs
 * to the page-load sequence rather than to the photo itself.
 */
export function HeroSlideshow({ slotIndex = 0 }: { slotIndex?: number }) {
  const reduce = useReducedMotion();

  // Defensive: an out-of-range index from a stale server build must not blank
  // the hero.
  const active = SLIDES[((slotIndex % SLIDES.length) + SLIDES.length) % SLIDES.length] ?? SLIDES[0];

  return (
    <div className="relative">
      {/* Decorative floating accents (not photos). Palette per Amendment
          Register v1.2: coral CTA family, cyan accent, deep teal brand. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
        <span className="absolute -left-3 top-12 flex h-11 w-11 items-center justify-center rounded-full bg-coral text-white shadow-lg">
          <HeartPulse className="h-5 w-5" />
        </span>
        <span className="absolute -right-3 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-accent-blue text-white shadow-lg">
          <Plus className="h-5 w-5" />
        </span>
        <span className="absolute -left-4 bottom-14 flex h-11 w-11 items-center justify-center rounded-full bg-medical-blue text-white shadow-lg">
          <GraduationCap className="h-5 w-5" />
        </span>
      </div>

      <motion.div
        initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
        className="relative aspect-[4/3] overflow-hidden rounded-card bg-white shadow-card ring-1 ring-black/5"
      >
        <Image
          src={active.src}
          alt={active.alt}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 600px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
