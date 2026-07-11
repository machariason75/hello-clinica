# Polish pass — reader gate, banner scope, nav, hero, testimonials, headers

Front-end + config only. No database, no new packages, no db push.

## What changed
1. Reader: the browser's native PDF toolbar (with its own download/print arrow)
   is now HIDDEN (#toolbar=0). Non-premium users can read but that leak is gone —
   downloads only happen through your gated button.
2. Premium banner: now shows ONLY on the home page ("dashboard"), and not once a
   visitor is browsing elsewhere.
3. Top nav: the "Request a Consultation" button is removed (Contact covers it).
4. Hero: the little progress dots under the photos are gone; the photo transition
   is now every 60 seconds.
5. Testimonials: added 5 student recommendations across TEAS, HESI, ATI, USMLE,
   and NCLEX, blended into the existing set.
6. Security headers: added HSTS (Strict-Transport-Security) to next.config.mjs,
   alongside the existing nosniff / frame / referrer / permissions headers.

## Install
1. Extract over your hello-clinica folder -> Replace all (6 files).
2. npm run dev  (check: reader has no download arrow; banner only on home;
   no consultation button in nav; hero calm; new testimonials show)
3. Push:
       git add .
       git commit -m "polish: reader gate, banner scope, nav, hero, testimonials, HSTS"
       git push
