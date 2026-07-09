# Drop B — Results history + review, premium banner, download-gating, 6 quiz sets

Makes premium feel worth paying for.

## What you get
- Results history (premium value): every quiz/exam a signed-in student takes is
  saved. In "My account -> My results & review" they see each attempt with the
  category, Practice/Exam, score, US letter grade (A/B/C/D/F), pass/fail, and
  date — with a Re-attempt button.
- Full review: open any attempt to see every question, what they chose vs the
  correct answer, and the rationale/more-info — so they can revise from it.
- Floating premium banner: a tasteful promo drifts in on the client site every
  ~75s for ~9s (not on admin, hidden for premium users, dismissible), linking to
  premium sign-up. Not a fixed pop-up.
- Download-gating: everyone can READ resources/books on the site, but only
  premium students can DOWNLOAD files. Non-premium download clicks are redirected
  to a friendly "downloads are premium" note on their account page.
- 6 seeded quiz sets (Practice + Real Exam) across TEAS Reading/Math, HESI
  Anatomy, Nursing Fundamentals & Pharmacology, and NCLEX-PN — all ORIGINAL,
  exam-style questions (not copied from any real exam), each with rationales.

## Install — IN ORDER
1. Extract over your hello-clinica folder -> Replace all.
2. (Only if you did NOT run Drop A's db push yet) run:
       npx prisma db push
   (No schema change since Drop A; skip if Drop A already pushed.)
3. Seed the quiz sets (safe to re-run; needs the category tree from earlier):
       npx tsx prisma/seed-quizsets.ts
   Expect: "Seeded 6 quiz sets ..."
4. Test:  npm run dev
   - Sign in as a student, play a quiz, finish -> check My account -> My results.
   - Open an attempt -> review the questions and rationales.
   - As a NON-premium student, click a Download button -> you're taken to the
     account page with the premium note. Grant that student access in
     Admin -> Students, then download works.
   - Watch for the premium banner drifting in after a few seconds.
5. Push:
       git add .
       git commit -m "Drop B: results history+review, premium banner, download gating, quiz sets"
       git push

Note on downloads: this adds app/api/download/route.ts (premium-gated). Your
existing Download buttons already point here, so they keep working — they just
now check premium first.
