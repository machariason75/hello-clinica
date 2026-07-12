# Batch 1 — Look & feel fixes

## What changed
1. REMOVED the flawed AI image (medic-4.jpg — the double-belled stethoscope).
   The hero now cycles 5 clean photos.
   >>> YOU MUST ALSO DELETE THE FILE: public/images/medics/medic-4.jpg
2. RADIANT BUTTONS everywhere — no more flat blue/red solids:
   - primary  : coral → teal gradient that shifts on hover
   - secondary: soft cream gradient with a teal border
   - destructive: red gradient
   Hardcoded coral buttons (Read online, admin CTAs, Re-attempt, package
   buttons, premium locks) are now gradients too.
3. Premium promo now appears every 3 MINUTES (was ~75 seconds).
4. Admin tables SCROLL SIDEWAYS on phones instead of being cut off
   (Students, Quizzes, Question Bank, Books, Resources).

## Install
1. Extract the CONTENTS into your project (NO nested hello-clinica folder!)
   -> Replace all.
2. DELETE this file by hand:  public\images\medics\medic-4.jpg
3. npx tsc --noEmit      <- expect no errors
   npm run dev           <- check the buttons + hero
4. git add .
   git commit -m "polish: radiant buttons, remove flawed image, promo timing, mobile tables"
   git push

## Still to come (next drops)
- USMLE Revision + NAPLEX/MPJE (pharmacy) sections with folders, quizzes, exams,
  and admin-editable external links
- Question Bank "Quick Access" jump-list so returning users skip the clicking
- Password-reset requests visible in the admin
- The mobile "Request a Consultation" button (see note below)

## NOTE — mobile consultation button
I could not find it in my copy of your Navbar/Sidebar. On your machine, search the
project for:  Request a Consultation
and delete the button/link that appears in the mobile menu (likely in
components/layout/Navbar.tsx or components/navigation/Sidebar.tsx). If you paste me
that block, I'll remove it for you properly.
