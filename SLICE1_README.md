# Slice 1 — Visual polish (de-blue + footer + hero photos)

Pure front-end. No database changes, no new commands — just replace files and push.

## What changed
- De-blue: heavy teal fills are gone or warmed to the cream palette. Newsletter
  block and footer are warm; the "next step" CTA band is warm; in the ADMIN the
  active menu item and the analytics bars are now warm coral instead of solid
  teal. Teal remains only as text, thin accents, and the small quiz boxes.
- Footer: warm, with logo + Explore / Legal / Contact. "Question Bank" is in
  Explore. The repetitive newsletter block is removed from all inner pages
  (Books, Resources, Question Bank, Contact, Advising); the homepage keeps ONE
  newsletter, and the footer now closes the inner pages.
- Hero photos: all SIX are re-shipped (only the first was reaching the live
  site). Each visit opens on a random photo, the standby rotation is quicker
  (3.2s), tapping still advances, and the lone teal accent is now warm.

## Install
1. Extract over your hello-clinica folder -> Replace all.
   IMPORTANT: confirm the 6 files in public/images/medics/ actually copied
   (medic-1.jpg ... medic-6.jpg). If Windows skips them, drag that folder in
   manually — that is what makes all the photos show.
2. Test:  npm run dev
3. Push:  git add .  &&  git commit -m "Slice 1: de-blue, footer, hero photos"  &&  git push
