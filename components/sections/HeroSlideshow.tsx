"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HeartPulse, Plus, GraduationCap } from "lucide-react";

const SLIDES = [
  { src: "/images/medics/medic-1.jpg", alt: "Smiling nurse in blue scrubs" },
  { src: "/images/medics/medic-2.jpg", alt: "Smiling doctor in a white coat" },
  { src: "/images/medics/medic-3.jpg", alt: "Smiling clinician in a white coat" },
  { src: "/images/medics/medic-4.jpg", alt: "Smiling doctor with a stethoscope" },
  { src: "/images/medics/medic-5.jpg", alt: "Smiling clinician in blue scrubs" },
  { src: "/images/medics/medic-6.jpg", alt: "Smiling healthcare professional" },
];

// Module-level counter: advances once per mount, so each time the visitor
// lands back on the welcome view a different photo greets them.
let visitCursor = 0;

/**
 * Hero image — one photo visible at a time. There is no timed carousel and no
 * thumbnail strip. As the visitor scrolls the welcome view away, the current
 * photo gently cross-dissolves into the next while drifting (parallax), so the
 * change reads as part of the scroll rather than a slideshow. A fresh starting
 * photo is chosen on each visit. Reduced-motion users see a single still image.
 */
export function HeroSlideshow() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pick a stable starting photo once per mount.
  const startRef = useRef<number | null>(null);
  if (startRef.current === null) {
    startRef.current = visitCursor++ % SLIDES.length;
  }
  const start = startRef.current;
  const current = SLIDES[start];
  const next = SLIDES[(start + 1) % SLIDES.length];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Cross-dissolve current -> next as the hero scrolls out of view.
  const currentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const nextOpacity = useTransform(scrollYProgress, [0.25, 0.85], [0, 1]);
  const drift = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.07]);

  return (
    <div className="relative">
      {/* Decorative floating accents (not photos) */}
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
        ref={ref}
        initial={reduce ? false : { opacity: 0, scale: 0.97 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative aspect-[4/3] overflow-hidden rounded-card bg-white shadow-card ring-1 ring-black/5"
      >
        {reduce ? (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 600px"
            className="object-cover"
          />
        ) : (
          <>
            <motion.div style={{ opacity: currentOpacity, y: drift, scale: zoom }} className="absolute inset-0">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-cover"
              />
            </motion.div>
            <motion.div style={{ opacity: nextOpacity, y: drift, scale: zoom }} className="absolute inset-0">
              <Image
                src={next.src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-cover"
              />
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}
