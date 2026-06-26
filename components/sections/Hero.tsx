"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { HeroSlideshow } from "./HeroSlideshow";
import { siteConfig } from "@/lib/site-config";

/**
 * Homepage hero — warm, bright treatment (owner-directed, File 17 visual layer).
 * Soft peach/cream gradient with floating colour blobs and a live medic
 * slideshow in the illustration slot. Text is dark on the light field; the
 * primary CTA uses the coral brand action colour.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Soft coral + blue glow behind the hero image (over the shared canvas) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-8 h-80 w-80 rounded-full bg-[#F97360]/15 blur-3xl" />
        <div className="absolute right-1/3 bottom-0 h-72 w-72 rounded-full bg-[#2563EB]/12 blur-3xl" />
      </div>

      <Container className="relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "visible"}
        >
          <motion.span
            variants={reduce ? undefined : item}
            className="inline-flex items-center gap-2 rounded-full border border-coral/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-deep-blue shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-coral" aria-hidden="true" />
            Guidance for future healthcare professionals
          </motion.span>

          <motion.h1
            variants={reduce ? undefined : item}
            className="text-h1 mt-6 text-balance text-deep-blue"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-deep-blue/70 md:text-xl"
          >
            Personalized advising, trusted resources, and curated books to help you move from
            pre-med to practice with clarity and confidence.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="primary" size="lg">
              <Link href="/advising">
                Explore advising
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/resources">Browse free resources</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Live medic slideshow (replaces the AI illustration placeholder) */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={reduce ? undefined : { duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative px-4 sm:px-8 lg:px-2"
        >
          <HeroSlideshow />
        </motion.div>
      </Container>
    </section>
  );
}
