# Wave 6 — Renal (75 questions) + Question of the Day FIX

Two things in this drop. Please do the schema step — the QOTD fix needs it.

---

# PART 1 — THE QUESTION OF THE DAY BUG YOU SPOTTED

You were right on both counts.

## Bug 1: content waves were shuffling the day's question
The question was picked as  eligible[dayNumber % poolSize].

That LOOKS deterministic, but poolSize changes every time questions are seeded.
So the moment a new wave landed, the same day resolved to a DIFFERENT question —
changing under students who were mid-answer, and breaking the "everyone sees the
same question today" promise the feature depends on.

## Bug 2: the rollover wasn't happening at midnight
The homepage cached for an hour (revalidate = 3600), so a new day's question
could take up to 60 minutes to appear.

## The fix
A new table, daily_question_picks, stores the chosen question id against the
day. The first request of a day decides it; after that it is locked and never
recomputed. Consequences:

  • Seeding new content NEVER disturbs today's question
  • Everyone sees the same question all day, so it can be shared and discussed
  • Rotation is governed purely by the UTC date, not by traffic
  • It's now CHEAPER: two indexed lookups instead of loading the whole pool

Homepage cache dropped to 60 seconds, so the rollover is effectively automatic —
it does not wait for anyone to visit, and nobody sees a stale question. (Next.js
requires that value to be a literal, so it can't be computed as "seconds until
midnight" — a short fixed window achieves the same thing.)

There's also a safety net: if an admin deletes or unpublishes the chosen
question mid-day, the card falls back to another rather than disappearing.

## Confirmed: every seeded question IS eligible
The pool is every SINGLE-answer question in a published quiz within a published
category. All 338 questions from Waves 1–6 qualify, so the daily question now
draws from the whole bank.

---

# PART 2 — RENAL WAVE (75 questions, 8 quizzes)

Same expanded shape as Wave 5.

  PRACTICE
    Renal Physiology — Set 1        15   Foundational Sciences → Physiology
    Renal Physiology — Set 2        15   (fresh, no overlap)
    Nephrology — Set 1              15   Clinical Specialties → Internal Medicine
    Nephrology — Set 2              15   (fresh, no overlap)
    Renal & Diuretic Drugs — Set 1  15   Foundational Sciences → Pharmacology

  EXAMS
    Renal Physiology — Timed        30   35 min
    Nephrology — Timed              30   35 min
    Renal — Comprehensive Timed     75   90 min

28 topics. Some of the reasoning it teaches:
  - Why an ACE inhibitor drops GFR in renal artery stenosis (efferent tone is
    what was holding filtration up)
  - Why the "triple whammy" — ACE inhibitor + diuretic + NSAID — causes AKI
  - Why serum potassium looks normal in DKA despite severe total-body depletion
  - Why thiazides cause hyponatraemia but loop diuretics less so
  - Why phosphate binders do nothing unless taken WITH food
  - Why dietary calcium should NOT be restricted in calcium oxalate stones
  - How SGLT2 inhibitors protect kidneys mechanically, not just metabolically

---

# INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag `app`, `lib` and `prisma` into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. ADD THE NEW MODEL TO YOUR SCHEMA
   Open  prisma/schema.prisma  and paste the contents of
   prisma/ADD_THIS_MODEL_TO_SCHEMA.txt  at the very END of the file.

   (I'm not shipping the whole schema.prisma — doing that has broken your build
   before by overwriting newer changes with my older copy. One paste is safer.)

3. APPLY THE SCHEMA CHANGE
       npx prisma db push

4. SEED THE RENAL CONTENT
       npx tsx prisma/seed-renal.ts
   Expect eight confirmation lines.

5. CHECK IT COMPILES
       npx tsc --noEmit

6. RUN LOCALLY
       npm run dev
   - Homepage: the Question of the Day still appears and works
   - Question Bank → Foundational Sciences → Physiology → Renal
   - Question Bank → Clinical Specialties → Internal Medicine → Nephrology

7. PUSH TO GITHUB
       git add .
       git commit -m "content: renal wave; fix: stable daily question rotation"
       git push

8. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R on the live site.

---

# ⚠ REMINDER FOR LATER — expanding the earlier waves

You asked me to remind you. These waves still have only ONE practice set and one
exam, and should be expanded to the Wave 5/6 shape (multiple sets + separate
exams) once the new subjects are done:

  Wave 1  BLS (30) and ACLS (30)     → split into 2 sets each + exams
  Wave 2  Antibiotics (39)           → split into 2–3 sets + exams
  Wave 3  Cardiovascular (45)        → add second sets for each of the three
  Wave 4  Microbiology (44)          → add second sets, especially bacteriology

I'll bring this up again when we finish the remaining subjects.

# Running total
  Waves 1–6: 338 original questions · 132 topics · 31 quizzes
