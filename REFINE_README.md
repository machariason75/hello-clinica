# Aesthetic refinements

## What changed
1. ONE photo at a time — removed the thumbnail strip, dots, and arrows.
2. Scroll-driven, not a timer — as you scroll the welcome view away, the photo
   gently cross-dissolves into the next while drifting (parallax), so it reads
   as part of the scroll, not a slideshow. A different photo greets you each
   time you return to the home view. Reduced-motion users see one still image.
3. Warm background is now SITE-WIDE — the warm cream base applies on every page
   consistently (it's set on the global background tokens).
4. Admin area now uses the warm background AND the new logo (no medic photos
   in admin, by design).

## Files
Edited: components/sections/HeroSlideshow.tsx, components/admin/AdminShell.tsx,
        tailwind.config.ts, app/globals.css
(The logo file you already have from the previous pass; the admin reuses it.)

## Install
1. Extract over your hello-clinica folder, keeping structure (Replace when asked).
2. Restart the dev server (tailwind.config.ts changed):  Ctrl+C, then  npm run dev
3. Check: homepage shows one rotating photo that blends on scroll; every page
   (and the admin) shares the warm background; the admin sidebar shows the logo.
