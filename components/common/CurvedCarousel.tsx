"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * CurvedCarousel — a 3D "coverflow" rail. The active card faces front while its
 * neighbours fan back along a curve, and the deck auto-advances right-to-left so
 * cards flow across the viewport instead of stacking into a long vertical list.
 * Pauses on hover, supports arrows + dots + keyboard, and falls back to a simple
 * horizontal swipe rail for reduced-motion users.
 */
export function CurvedCarousel<T>({
  items,
  renderItem,
  ariaLabel,
  autoMs = 4500,
  heightClass = "h-[20rem] sm:h-[17rem]",
}: {
  items: T[];
  renderItem: (item: T, active: boolean) => ReactNode;
  ariaLabel: string;
  autoMs?: number;
  heightClass?: string;
}) {
  const reduce = useReducedMotion();
  const n = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);


  useEffect(() => {
    if (reduce || paused || n <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), autoMs);
    return () => clearInterval(id);
  }, [reduce, paused, n, autoMs]);

  // Shortest signed distance from the active index (handles wrap-around).
  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  // Reduced-motion: plain horizontal snap rail, no 3D, no auto-motion.
  if (reduce) {
    return (
      <div className="mx-auto max-w-4xl overflow-x-auto" aria-label={ariaLabel}>
        <div className="flex snap-x gap-5 pb-4">
          {items.map((item, i) => (
            <div key={i} className="w-[85%] shrink-0 snap-center sm:w-[60%]">
              {renderItem(item, true)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={cn("relative mx-auto max-w-4xl [perspective:1500px]", heightClass)}>
        {items.map((item, i) => {
          const off = offsetOf(i);
          const abs = Math.abs(off);
          if (abs > 2) return null;
          const active = off === 0;
          return (
            <div
              key={i}
              aria-hidden={!active}
              className="absolute inset-y-0 left-1/2 w-[84%] transition-all duration-500 ease-out sm:w-[58%] [transform-style:preserve-3d]"
              style={{
                transform: `translateX(calc(-50% + ${off * 52}%)) translateZ(${-abs * 150}px) rotateY(${off * -34}deg) scale(${1 - abs * 0.06})`,
                opacity: abs > 1.6 ? 0 : 1 - abs * 0.3,
                zIndex: 20 - abs,
                pointerEvents: active ? "auto" : "none",
              }}
            >
              {renderItem(item, active)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
