# Hydration fix + FAQ-as-list + 7 testimonials (UI/content only)

## What changed
1. FIXED the hydration error: the hero used to pick a different starting photo
   per visit, which made the server and browser disagree. The hero now starts on
   a fixed photo (still cross-dissolves on scroll). Error gone.
2. FAQs are a scannable LIST again (accordion) on the Contact page — easy to skim.
3. Testimonials carousel now has SEVEN entries across different cadres:
   Medical Student, BSN Student, Pre-Med, RN Graduate, International Student,
   Nurse Practitioner Student, Pharmacy Student.

No database changes. Fully revertible.

## Install
1. Extract over your hello-clinica folder -> Replace all.
2. Stop the dev server (Ctrl+C) and restart:  npm run dev
3. Hard-refresh: Ctrl+Shift+R.
4. When happy: git add . ; git commit -m "hydration fix, faq list, 7 testimonials" ; git push
