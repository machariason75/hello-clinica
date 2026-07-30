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
 *
 * PALETTE NOTE: the glow blobs previously used #F97360 and #2563EB. The latter
 * is a pre-override medical blue, which Amendment Register v1.2 explicitly
 * forbids reintroducing. Both now come from the sanctioned tokens — coral for
 * the warm side, cyan accent for the cool side — so the hero can't drift out of
 * the brand again when someone edits this file.
 *
 * `slotIndex` decides which medic photo shows. It is computed on the server (see
 * lib/hero-rotation.ts) so the photo is final before the page paints.
 */
export function Hero({ slotIndex = 0 }: { slotIndex?: number }) {
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
      {/* Soft coral + cyan glow behind the hero image (over the shared canvas) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-8 h-80 w-80 rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute right-1/3 bottom-0 h-72 w-72 rounded-full bg-accent-blue/12 blur-3xl" />
      </div>

      <Container className="relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <motion.div variants={container} initial={reduce ? "visible" : "hidden"} animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-coral/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-deep-blue shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-coral" aria-hidden="true" />
            Guidance for future healthcare professionals
          </motion.span>

          <motion.h1 variants={item} className="text-h1 mt-6 text-balance text-deep-blue">
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-deep-blue/70 md:text-xl"
          >
            Personalized advising, trusted resources, and curated books to help you move from
            pre-med to practice with clarity and confidence.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
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

        {/* Medic photo — settled, not mid-transition. */}
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut", delay: reduce ? 0 : 0.2 }}
          className="relative px-4 sm:px-8 lg:px-2"
        >
          <HeroSlideshow slotIndex={slotIndex} />
        </motion.div>
      </Container>
    </section>
  );
}
