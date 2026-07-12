# Batch 2 — USMLE + Pharmacy sections, and Quick Access

## 1. USMLE Revision (new section)
   USMLE Revision
     ├─ Step 1          (basic sciences)
     ├─ Step 2 CK       (clinical knowledge)
     ├─ Step 3          (final licensure step)
     └─ Study Strategy  (planning + external resources)

## 2. Pharmacy Licensure (new section)
The US pharmacy equivalent of the USMLE is the **NAPLEX** (North American
Pharmacist Licensure Examination), taken with the **MPJE** (pharmacy law).

   Pharmacy Licensure (NAPLEX & MPJE)
     ├─ NAPLEX
     ├─ MPJE                  (federal + state pharmacy law)
     ├─ Pharmacy Calculations (where most marks are lost)
     └─ Study Strategy

Both sections are PREMIUM, and each folder has an overview written to be
genuinely informative (what the exam tests, what to focus on).

## 3. Practice + Real Exam sets (8 quizzes)
Step 1, Step 2 CK, NAPLEX, MPJE and Calculations each get a PRACTICE set
(untimed, teaching) and/or a REAL EXAM (timed). Every question is ORIGINAL —
written in exam style, never copied — and every one has a rationale students see
on review.

## 4. Quick Access (the "stop clicking around" feature)
At the top of /question-bank there is now a searchable index of EVERYTHING —
every section, practice set, exam, and external link. Type "calculations" or
"Step 1" and jump straight there. Filter by Practice / Exams / Sections /
Resources. Returning students never dig through folders again.

## 5. Admin-editable — nothing is hardcoded
Everything above lives in the database:
  Admin -> Question Bank
    - add/rename/delete folders and sub-folders (any depth)
    - write quizzes and questions (Practice or Real Exam), set time limits
    - attach EXTERNAL LINKS to any folder — YouTube videos, study sites,
      Instagram pages, your state board of pharmacy, anything useful
Quick Access rebuilds itself automatically from whatever you add.

## Install — IN ORDER
1. Extract the CONTENTS into your project (NO nested hello-clinica folder!)
   -> Replace all.
2. Seed the new sections (categories first, then the quizzes):
       npx tsx prisma/seed-usmle-pharmacy.ts
       npx tsx prisma/seed-usmle-pharmacy-quizzes.ts
   Expect: "Seeded 10 ... categories." then "Seeded 8 ... quiz sets."
3. Check and run:
       npx tsc --noEmit      <- expect no errors
       npm run dev
   Visit /question-bank : Quick Access at the top, USMLE + Pharmacy folders below.
4. Push:
       git add .
       git commit -m "USMLE + pharmacy sections, quick access index"
       git push

(No schema change, so no `prisma db push` needed.)

## Tip: add external links right away
Admin -> Question Bank -> scroll to the links section. Attach a few YouTube
revision channels to "Study Strategy", and your state board of pharmacy to MPJE —
those two additions make the sections instantly more useful.
