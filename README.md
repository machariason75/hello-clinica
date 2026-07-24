# Content Wave 12 — Surgery & Orthopaedics  (75 questions)

Current structure: three 25-question practice sets and two exams.

  PRACTICE
    General Surgery — Practice Set 1                    25
    Orthopaedics & Trauma — Practice Set 1              25
    Perioperative Care & Neurosurgery — Practice Set 1  25

  EXAMS
    Surgery & Orthopaedics — Timed Exam 1   50   Sets 1+2, 60 minutes
    Surgery & Orthopaedics — Timed Exam 2   75   everything, 90 minutes

Fills four previously empty sections: General Surgery, Orthopaedics & Trauma,
Peri-operative Care and Neurosurgery.

## Taught as decision-making, not operative technique
Which presentations are time-critical, what must be excluded before acting, and
why the SEQUENCE of steps matters. That is what is examined, and more
importantly it is what protects patients.

## Some of the reasoning it teaches
  - Why appendicitis pain migrates, and why a hungry patient makes it less likely
  - How to spot a bowel obstruction that has STRANGULATED — the moment it stops
    being a conservative problem
  - Why femoral hernias strangulate more readily than inguinal ones
  - Why barium is contraindicated when perforation is suspected
  - Why pain out of proportion to examination means mesenteric ischaemia or
    necrotising fasciitis — and both are emergencies
  - Why pulselessness in compartment syndrome is a LATE sign, not a screening one
  - Why scaphoid, femoral head and talus all share avascular necrosis risk —
    one principle, three sites
  - Why the pelvic binder goes on the GREATER TROCHANTERS, not the iliac crests
  - Why 'GCS 8, intubate'
  - Why lumbar puncture before imaging can cause herniation
  - Why neurogenic shock needs vasopressors and not just fluids

32 topics. Connection retry built in.

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-surgery.ts
   Expect five confirmation lines. Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Clinical Specialties → Surgery → General Surgery
   Question Bank → Clinical Specialties → Surgery → Orthopaedics & Trauma
   Question Bank → Clinical Specialties → Surgery → Peri-operative Care

4. PUSH TO GITHUB
       git add .
       git commit -m "content: surgery, orthopaedics, perioperative care and neurosurgery"
       git push

5. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R on the live site.

No prisma db push — content only.

## Running total
  Waves 1–12: 788 original questions · 310 topics · 73 quizzes

## ⚠ RESTRUCTURING STILL TO DO
  Waves 1–4  (BLS/ACLS, Antibiotics, Cardiovascular, Microbiology)
  Waves 5–10 (Respiratory, Renal, Anatomy, Pathology, Obs&Gyn, Paediatrics)
  → all to be rebuilt as 25-question sets with two exams, matching Waves 11–12.

## Next subject waves — say which
  - Psychiatry & Mental Health
  - Gastroenterology & Hepatology
  - Neurology (clinical)
  - Haematology
  - Biochemistry
  - Histology
  - Fluids, Electrolytes & Acid-Base
  - Infectious Diseases (clinical)
