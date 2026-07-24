# Content Wave 13 — Psychiatry & Mental Health  (60 questions)

## Built in the CORRECT structure this time
Two practice sets per item, two exams — the shape you asked for:

  PRACTICE
    Psychiatry — Practice Set 1   30 questions
    Psychiatry — Practice Set 2   30 questions   (entirely fresh, no overlap)

  EXAMS
    Psychiatry — Timed Exam 1     30 questions, 40 minutes
    Psychiatry — Timed Exam 2     60 questions, 75 minutes (comprehensive)

Sets are 30 rather than 25 here, since psychiatry is a single examinable item.

## A note on how this is written
Risk assessment questions focus on RECOGNITION and appropriate response —
identifying who is at risk, how to ask, and what to do next — because that is
what changes outcomes. The material is written for clinicians assessing and
supporting patients.

## Some of the reasoning it teaches
  - Why asking directly about suicidal thoughts does NOT increase risk, and why
    avoiding the question is the greater danger
  - Why risk assessment SCALES predict poorly for individuals and must not
    determine who receives care
  - Why the period straight after psychiatric discharge carries elevated risk
  - Why a manic episode in the history changes antidepressant prescribing
    completely
  - Why akathisia is worsened by increasing the antipsychotic — and is itself
    associated with raised suicide risk
  - Why thiamine goes in before glucose
  - Why refeeding syndrome kills through phosphate, not calories
  - Why delirium is a SYMPTOM, not a diagnosis — sedation treats the behaviour
    while the cause continues
  - Why Lewy body dementia changes prescribing (antipsychotic sensitivity)
  - What diagnostic overshadowing is, and why it contributes to people with
    severe mental illness dying substantially younger

17 topics. Connection retry built in.

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-psychiatry.ts
   Expect four confirmation lines. Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Clinical Specialties → Psychiatry & Mental Health

4. PUSH TO GITHUB
       git add .
       git commit -m "content: psychiatry and mental health"
       git push

5. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R on the live site.

No prisma db push — content only.

## ⚠ Review before promoting for certification
Mental health legislation, service structures and prescribing guidance vary
substantially between countries. These test clinical principles rather than any
single jurisdiction's law — review against local guidance and edit what differs.

## Running total
  Waves 1–13: 848 original questions · 327 topics · 77 quizzes

## ⚠ RESTRUCTURING QUEUE
  Waves 1–12 all need bringing to this shape: TWO practice sets per examinable
  item plus two exams. Surgery (Wave 12) in particular has only one practice set
  per section and needs a second for each of General Surgery, Orthopaedics and
  Perioperative Care.

## Next subject waves — say which
  - Gastroenterology & Hepatology
  - Neurology (clinical)
  - Haematology
  - Infectious Diseases (clinical)
  - Biochemistry
  - Histology
  - Fluids, Electrolytes & Acid-Base
  - Dermatology
