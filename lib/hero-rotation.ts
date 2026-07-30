/**
 * Which hero photo is showing right now.
 *
 * WHY THIS IS A PURE FUNCTION OF THE CLOCK, not a timer.
 *
 * The old slideshow picked a random photo on mount and then advanced it on a
 * 60-second interval. Two problems followed from that:
 *
 *   1. The random pick happened AFTER the first paint, so a visitor saw photo 0
 *      and then watched it cross-dissolve into a different one — arriving, in
 *      effect, halfway through a transition they never asked for.
 *   2. The interval kept firing while the visitor was reading the page, so the
 *      photo changed underneath them.
 *
 * Deriving the photo from the current 10-minute window fixes both at once:
 *
 *   - There is no timer, so nothing can change while someone sits on the page.
 *   - The value is computed BEFORE render, so the photo is solid on arrival.
 *   - It still rotates: leave the dashboard, browse the Question Bank for a
 *     while, come back, and a different face is waiting.
 *
 * Compute this on the SERVER and pass it down, so the first HTML already carries
 * the right photo and hydration has nothing to correct.
 */

/** How long one photo holds the slot. */
export const HERO_ROTATION_MS = 10 * 60 * 1000; // 10 minutes

/** Keep in step with the SLIDES array in HeroSlideshow. */
export const HERO_SLIDE_COUNT = 5;

/**
 * The photo index for a given moment. Stable for the whole 10-minute window,
 * so two requests seconds apart agree.
 */
export function heroSlotIndex(now: number = Date.now(), slideCount = HERO_SLIDE_COUNT): number {
  if (slideCount <= 0) return 0;
  return Math.floor(now / HERO_ROTATION_MS) % slideCount;
}
