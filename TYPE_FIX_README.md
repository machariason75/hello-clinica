# Proper fix — framer-motion × React 19 types (no build overrides)

## The root cause (one bug, not many)
framer-motion 11's type definitions don't resolve `motion.*` components against
React 19's types. Every motion component (Reveal, Stagger, PageTransition, Hero,
HeroSlideshow, Parallax, CurvedCarousel, PremiumBanner) rejects `className` at the
TYPE level, while working perfectly at runtime. This is a known upstream bug
(motiondivision/motion issues #2929, #2843, #2668).

## The fix
`types/framer-motion.d.ts` re-declares MotionProps so standard HTML attributes
(className, style, role, aria-*, handlers) are accepted again.
- It is compile-time ONLY: no runtime code, no behaviour change.
- It fixes ALL motion components at once — nothing had to be rewritten.
- Delete this file when framer-motion ships React 19-compatible types.

Also included:
- next.config.mjs: the TypeScript override is REMOVED — type-checking is fully back
  on, so real errors will still fail the build (as you wanted). The ESLint ignore
  stays (those were only cosmetic apostrophes). Security headers unchanged.
- PremiumBanner.tsx: restored to clean, idiomatic markup (the earlier
  wrapper-div workaround is no longer needed).

## Install
1. Extract over your hello-clinica folder -> Replace all (3 files; note the NEW
   folder `types/`).
2. Verify locally FIRST — this is the real test:
       npx tsc --noEmit
   Expect: no errors (or at least, no motion/className errors).
       npm run dev
3. Push:
       git add .
       git commit -m "fix: framer-motion React 19 type declarations"
       git push
