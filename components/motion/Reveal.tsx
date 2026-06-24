"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { variantMap, type MotionVariant } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Scroll-triggered reveal wrapper. Wraps any block in a single animation from
 * the frozen set. Respects prefers-reduced-motion (renders statically).
 */
export function Reveal({
  children,
  variant = "fadeUp",
  className,
  delay = 0,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  variant?: MotionVariant;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
