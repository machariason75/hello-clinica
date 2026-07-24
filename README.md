# Content Wave 15 — Neurology  (60 questions)

Answer shuffling built in, as with Wave 14.

## Structure
  PRACTICE
    Neurology — Practice Set 1   30   stroke, headache, seizures, localisation
    Neurology — Practice Set 2   30   MS, infection, cognition, spine, nerve,
                                      emergencies, neuro-ophthalmology, vertigo

  EXAMS
    Neurology — Timed Exam 1     30   40 minutes
    Neurology — Timed Exam 2     60   75 minutes (comprehensive)

## The habit these questions train
Neurology rewards one discipline: LOCALISE the lesion first, then ask what
process could produce it there. Almost every question is built around that
sequence rather than around pattern-matching a diagnosis — which is why the set
should transfer to unfamiliar presentations rather than only to the ones covered.

## Some of the reasoning it teaches
  - Why the CT comes first in stroke — thrombolysis saves lives in one type and
    kills in the other
  - Why lacunar strokes have no cortical signs (deep perforators, no cortex)
  - Why gradual spread separates migraine aura from a TIA
  - Why giant cell arteritis is treated BEFORE biopsy — blindness within days
  - Why antibiotics for meningitis must not wait for the CT
  - Why Listeria cover is added at the extremes of age
  - Why vital capacity, not oximetry, is monitored in Guillain-Barré and
    myasthenic crisis — saturations stay normal until it is nearly too late
  - Why a painful third nerve palsy WITH a dilated pupil is an aneurysm until
    proven otherwise, while a diabetic palsy spares the pupil
  - Why Bell's palsy takes the forehead and a stroke does not
  - Why B12 deficiency gives absent reflexes WITH extensor plantars
  - Why the single most useful question in neurology is how the symptom evolved
    over time

15 topics.

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-neurology.ts
   Expect four confirmation lines, each ending "(answers shuffled)".
   Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Clinical Specialties → Internal Medicine → Neurology

4. PUSH TO GITHUB
       git add .
       git commit -m "content: neurology"
       git push

5. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R

No prisma db push — content only.

## Running total
  Waves 1–15: 968 original questions · 367 topics · 85 quizzes

## ⚠ OUTSTANDING
  1. Finish fix-answer-order.ts until it reports completion (the earlier 788).
  2. Restructure Waves 1–12 to two practice sets per item plus two exams.
  3. Advanced tier of harder clinical-vignette questions.

## Next subject waves — say which
  - Haematology
  - Infectious Diseases (clinical)
  - Rheumatology
  - Dermatology
  - Biochemistry
  - Histology
  - Fluids, Electrolytes & Acid-Base
  - Critical Care
