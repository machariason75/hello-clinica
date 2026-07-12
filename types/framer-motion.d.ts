/**
 * Framer Motion × React 19 type fix.
 *
 * framer-motion 11's type definitions don't resolve `motion.*` components
 * correctly against React 19's types. The symptom is that `className` (and other
 * standard DOM attributes) are rejected at the type level on every motion
 * component, with an error mentioning
 *   HTMLAttributesWithoutMotionProps<unknown, unknown>
 * even though everything works perfectly at runtime.
 *
 * This is a known upstream issue (motiondivision/motion#2929, #2843, #2668).
 *
 * The fix below re-declares the motion component props so the standard HTML
 * attributes (className, style, id, role, aria-*, event handlers, ...) are
 * accepted again. It is purely a compile-time declaration: no runtime code, no
 * behaviour change, and no component needs to be rewritten.
 *
 * When framer-motion ships React 19-compatible types, this file can be deleted.
 */
import type * as React from "react";

declare module "framer-motion" {
  /**
   * Allow all standard HTML attributes (className, style, role, aria-*, data-*,
   * event handlers) alongside motion's own animation props.
   */
  export interface MotionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    style?: React.CSSProperties;
  }
}

export {};
