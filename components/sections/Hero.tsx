"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Stethoscope, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

/**
 * Homepage hero (frozen requirements): gradient background, large heading,
 * subheading, primary CTA, secondary CTA, and an AI illustration placeholder.
 *
 * The illustration slot is a labeled placeholder per the brief — the final
 * AI-generated artwork (per the AI Image Guide) drops into this exact frame in
 * a later content pass without layout changes.
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
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      {/* Ambient decorative layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-blue/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <Container className="relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-28">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "visible"}
        >
          <motion.span
            variants={reduce ? undefined : item}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-accent-blue" aria-hidden="true" />
            Guidance for future healthcare professionals
          </motion.span>

          <motion.h1 variants={reduce ? undefined : item} className="text-h1 mt-6 text-balance">
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl"
          >
            Personalized advising, trusted resources, and curated books to help you move from
            pre-med to practice with clarity and confidence.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="secondary" size="lg">
              <Link href="/advising">
                Explore advising
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-white/70 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/resources">Browse free resources</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* AI illustration placeholder (final artwork drops in here later) */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={reduce ? undefined : { duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div
            role="img"
            aria-label="Illustration of a medical advising session — final artwork to be added"
            className="glass-card flex aspect-[4/3] flex-col items-center justify-center gap-4 p-8 text-center"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
              <Stethoscope className="h-10 w-10 text-white" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/80">
              AI Illustration
            </p>
            <p className="max-w-xs text-sm text-white/70">
              Reserved frame for the hero illustration defined in the AI Image Guide.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
