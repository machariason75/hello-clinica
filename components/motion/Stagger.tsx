"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, type ReactNode } from "react";
import { staggerGroup, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * WHY THIS FILE CHANGED
 * ---------------------
 * The previous version used `viewport={{ once, amount: 0.15 }}`, meaning 15% of
 * the CONTAINER had to be on screen before the fade-in fired. Children sit at
 * opacity 0 until then.
 *
 * That threshold is a percentage of a container whose height grows with its
 * contents. With four cards the container is short and 15% of it is trivially
 * visible. With twenty-four cards it is several thousand pixels tall, 15% of it
 * may never fit in the viewport at once, the trigger never fires, and every card
 * stays permanently invisible — present in the DOM, full size, clickable, and
 * unreadable. Text inside an opacity-0 element cannot even be highlighted, which
 * is what made this so hard to identify.
 *
 * It was a scaling bug, not a bug in any one section. Every section reaches the
 * threshold eventually as content is added.
 *
 * TWO CHANGES, BOTH DEFENSIVE
 *
 * 1. `amount: 0` — fire as soon as any part of the container enters the
 *    viewport. A percentage of a variable-height element is not a safe trigger;
 *    "any of it is visible" is, and cannot fail no matter how tall the list grows.
 *
 * 2. Above MAX_ANIMATED_ITEMS, skip the animation entirely and render plain
 *    divs. Cascading two dozen elements is not a nice effect anyway — it is a
 *    long wait before the last card appears. More importantly it means a large
 *    section can never depend on an animation firing in order to be readable.
 *
 * The guiding principle: content must never be invisible because a decorative
 * animation did not run.
 */

/** Beyond this many children, render statically. Animation is decoration; readability is not. */
const MAX_ANIMATED_ITEMS = 12;

/** Container that staggers the reveal of its <StaggerItem/> children. */
export function StaggerGroup({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  // Respect the OS "reduce motion" setting, and bail out on long lists.
  const count = Children.count(children);
  if (reduce || count > MAX_ANIMATED_ITEMS) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={staggerGroup}
      initial="hidden"
      whileInView="visible"
      // amount: 0 — trigger on any visibility. Never a fraction of a container
      // whose height depends on how much content it holds.
      viewport={{ once, amount: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={cn(className)} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
