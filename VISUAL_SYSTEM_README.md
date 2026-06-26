# Premium atmospheric visual system + asset fix

## Read me first — this pack is self-contained
It re-ships ALL images (logo, white logo, 6 photos, favicon) AND every visual
file, so it doesn't matter which earlier packs did or didn't apply. Extract it
over your hello-clinica folder, choosing "Replace" for everything.

## What it does
1. FIXES the missing logo + photos (the image files are included here).
2. Adds ONE continuous atmospheric background shared by every page — soft blue
   (#2563EB) + coral (#F97360) mesh lighting, slowly drifting blurred blobs, a
   faint dot texture. It stays under 10% opacity: felt, not noticed.
3. Makes page surfaces transparent so that canvas flows continuously beneath all
   sections (no hard breaks). White cards still float on top.
4. Applies the same canvas + logo to the ADMIN area and the ADMIN LOGIN page
   (no photos in admin, by design).
5. Hero shows one photo with soft coral/blue glow behind it; the logo appears in
   the nav, footer, admin sidebar, admin login, and as the browser-tab icon.

## Install
1. Extract over your hello-clinica folder, keeping structure → Replace all.
2. Restart the dev server (tailwind + css changed):  Ctrl+C , then  npm run dev
3. Hard-refresh the browser (Ctrl+Shift+R) so old images/styles clear.
4. Check: logo + photo visible on the homepage; the soft background is the same
   continuous canvas on every page and in the admin; nothing feels dark.

## Notes / what can follow next
- The footer is still the deeper teal band (a grounding element). If you want
  strictly "never dark", I can lighten it next — it needs its own logo/text
  colour pass, so I kept it separate.
- Buttons/headings still use the current brand colours. If you want them shifted
  to the brighter Medical Blue (#2563EB) too, that's a quick follow-up.
- Photos are still the ~200px crops from your mockup. Drop higher-res versions
  into public/images/medics/ with the same names to sharpen them.
