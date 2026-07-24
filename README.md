# Content Wave 11 — Endocrinology  (75 questions)

## NEW STRUCTURE, as you asked
Larger practice sets and exactly two exams:

  PRACTICE
    Endocrinology — Practice Set 1   25   thyroid, parathyroid, adrenal
    Endocrinology — Practice Set 2   25   diabetes
    Endocrinology — Practice Set 3   25   pituitary, bone, reproductive, metabolic

  EXAMS
    Endocrinology — Timed Exam 1     50   Sets 1+2, 60 minutes
    Endocrinology — Timed Exam 2     75   everything, 90 minutes

Sets are now 25 questions rather than 15, and there are two exams rather than
three. Exam 1 is a substantial paper in its own right; Exam 2 is the full
comprehensive.

Sets 1, 2 and both exams sit under Clinical Specialties → Internal Medicine →
Endocrinology. Set 3 sits under Foundational Sciences → Physiology → Endocrine,
since it is the more mechanism-heavy material.

## Why endocrinology suits this treatment
Almost every endocrine disorder is a feedback loop broken in one of three
places — hypothalamus, pituitary, or end organ. The rationales point back to
that structure repeatedly, so the subject becomes one idea applied many times
rather than a list to memorise.

## Some of the reasoning it teaches
  - Why a raised TSH in hypothyroidism is the pituitary working CORRECTLY
  - Why iodine must be given AFTER the antithyroid drug in thyroid storm
  - Why secondary adrenal insufficiency spares potassium but Addison's doesn't
  - Why alpha-blockade must precede beta-blockade in phaeochromocytoma
  - Why potassium plummets after starting insulin in DKA
  - Why euglycaemic DKA is missed — the glucose looks reassuring
  - Why SGLT2 inhibitors protect kidneys mechanically, not metabolically
  - Why prolactin is the one pituitary hormone under INHIBITORY control, and
    what that explains about antipsychotics and about treatment
  - Why hydrocortisone comes before imaging in pituitary apoplexy
  - The single principle behind all dynamic testing: suppress to prove excess,
    stimulate to prove deficiency

Connection retry is built in.

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-endocrinology.ts
   Expect five confirmation lines. Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Clinical Specialties → Internal Medicine → Endocrinology
   Question Bank → Foundational Sciences → Physiology → Endocrine

4. PUSH TO GITHUB
       git add .
       git commit -m "content: endocrinology - thyroid, adrenal, diabetes, pituitary, bone"
       git push

5. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R on the live site.

No prisma db push — content only.

## Running total
  Waves 1–11: 713 original questions · 278 topics · 68 quizzes

## ⚠ STILL TO DO — expanding the earlier waves
  Wave 1  BLS (30) · ACLS (30)   → larger sets + 2 exams
  Wave 2  Antibiotics (39)       → larger sets + 2 exams
  Wave 3  Cardiovascular (45)    → larger sets + 2 exams
  Wave 4  Microbiology (44)      → larger sets + 2 exams
  Waves 5–10 use 15-question sets and 3 exams — worth restructuring to the new
  shape too, once the remaining subjects are done.

## Next subject waves — say which
  - General Surgery / Orthopaedics
  - Psychiatry & Mental Health
  - Gastroenterology & Hepatology
  - Neurology (clinical)
  - Biochemistry
  - Histology
  - Fluids, Electrolytes & Acid-Base
  - Haematology
