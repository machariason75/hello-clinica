"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, Plus, GraduationCap } from "lucide-react";

/** The hero photo is constant — the same blue-scrubs clinician on every visit,
 *  so it paints instantly with no slideshow or swap. */
const HERO_PHOTO = { src: "/images/medics/medic-1.jpg", alt: "Smiling nurse in blue scrubs" };

export function HeroSlideshow({ slotIndex: _slotIndex = 0 }: { slotIndex?: number }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
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
          src={HERO_PHOTO.src}
          alt={HERO_PHOTO.alt}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 600px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
