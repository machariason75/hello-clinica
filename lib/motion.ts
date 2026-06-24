import type { Variants } from "framer-motion";

/**
 * Animation system (frozen set): Fade Up, Fade Left, Fade Right, Scale In,
 * Stagger Reveal, Parallax. Subtle, performance-conscious. Reduced-motion is
 * honored at the component level via useReducedMotion().
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export const staggerGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerItem: Variants = fadeUp;

export type MotionVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";

export const variantMap: Record<MotionVariant, Variants> = {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
};
