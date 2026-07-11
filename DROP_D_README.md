# Drop D — Consultation & premium packages

Turns the "packages coming soon" placeholder into real, editable pricing that
reflects everything the platform now offers.

## What you get
- Advising page now shows PACKAGES: three plans with price, hours, and a full
  benefits list (Question Bank access, unlimited practice + real exams, results
  history with grades & review, in-browser reading mode, premium downloads,
  course-specific revision, and one-on-one advising). The middle plan is
  highlighted as "Most popular"; each button links to your existing consultation
  request flow with the package name attached.
- Admin -> Packages: create/edit/delete packages, set price, advising hours,
  benefits (one per line), button text, order, and publish state.
- The dashboard "Manage" panel now links to Packages too.

Prices are examples in USD — edit them (and the currency wording on the advising
page) to match your pricing.

## Install — IN ORDER
1. Extract over your hello-clinica folder -> Replace all.
   (No schema change, so NO `prisma db push` needed. No package.json, so your
   installed packages are untouched.)
2. Seed the three starter packages (safe to re-run; edit them after in admin):
       npx tsx prisma/seed-packages.ts
   Expect: "Seeded 3 packages."
3. Test:  npm run dev
   - Visit /advising -> the three plans show with prices and benefits.
   - Admin -> Packages -> edit a price or benefit -> reload /advising to see it.
4. Push:
       git add .
       git commit -m "Drop D: consultation & premium packages"
       git push
