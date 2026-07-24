# Content Wave 16 — Haematology  (60 questions)

## This one CREATES a new section
The taxonomy had no Haematology section, so the seed creates one under
Clinical Specialties → Internal Medicine → Haematology before adding the
quizzes. That is safe and idempotent — re-running simply finds the existing
section rather than making a duplicate.

## Structure
  PRACTICE
    Haematology — Practice Set 1   30   red cells, iron, haemolysis,
                                        haemoglobinopathy, transfusion, malignancy
    Haematology — Practice Set 2   30   haemostasis, thrombosis, anticoagulation,
                                        blood products (fresh questions)

  EXAMS
    Haematology — Timed Exam 1     30   40 minutes
    Haematology — Timed Exam 2     60   75 minutes (comprehensive)

Answer shuffling built in. 17 topics.

## Some of the reasoning it teaches
  - Why ferritin can be NORMAL in genuine iron deficiency (it is an acute phase
    reactant) — and what to use instead when inflammation is present
  - Why B12 must be replaced before folate, or the blood count improves while
    the spinal cord deteriorates
  - Why the reticulocyte count separates haemolysis from marrow failure
  - How the Coombs test separates autoimmune haemolysis from a membrane defect
    when both show spherocytes
  - Why sickle cell patients need penicillin prophylaxis — functional
    hyposplenism from repeated infarction
  - Why TTP is treated with plasma exchange and platelets are AVOIDED
  - Why warfarin is prothrombotic in the first days (protein C falls first)
  - Why heparin-induced thrombocytopenia causes THROMBOSIS despite low platelets
  - Why arterial clots get antiplatelets and venous clots get anticoagulants —
    the composition dictates the drug
  - Why calcium, temperature and acidosis are monitored in massive transfusion

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-haematology.ts
   You should see a line confirming the new section was created, then four
   confirmation lines each ending "(answers shuffled)". Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Clinical Specialties → Internal Medicine → Haematology

4. PUSH TO GITHUB
       git add .
       git commit -m "content: haematology"
       git push

5. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R

No prisma db push — the section is created through the seed, not a schema change.

## Running total
  Waves 1–16: 1,028 original questions · 384 topics · 89 quizzes

Over a thousand questions.

## ⚠ OUTSTANDING
  1. Finish fix-answer-order.ts until it reports completion (the earlier 788).
  2. Restructure Waves 1–12 to two practice sets per item plus two exams.
  3. Advanced tier of harder clinical-vignette questions.

## Next subject waves — say which
  - Infectious Diseases (clinical)
  - Rheumatology
  - Dermatology
  - Critical Care
  - Biochemistry
  - Histology
  - Fluids, Electrolytes & Acid-Base
  - Ophthalmology / ENT
