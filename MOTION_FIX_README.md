# Build fix — Framer Motion className type error

Motion elements that combined `className` with union-typed animation props
(initial/animate = reduce ? A : B) made TypeScript lose the motion element type
and reject `className`. Normalized those props to a single shape so the type
resolves — reduced-motion behavior is preserved (elements start at their final
state, so no movement).

Files: PremiumBanner, HeroSlideshow, Hero.

## Install
1. Extract over your hello-clinica folder -> Replace all (3 files).
2. Push:
       git add .
       git commit -m "fix: framer-motion className type (normalize motion props)"
       git push
