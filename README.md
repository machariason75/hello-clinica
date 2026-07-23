# Content Wave 8 — Pathology  (75 questions, 8 quizzes)

Pathology is the bridge between the basic sciences and every clinical specialty:
it explains WHY disease produces the findings you examine for. These questions
connect mechanism to observable consequence rather than testing definitions.

## The eight quizzes
  PRACTICE
    General Pathology — Set 1     15   cell injury, death, inflammation, healing
    General Pathology — Set 2     15   thrombosis, infarction, atherosclerosis,
                                       hypersensitivity
    Neoplasia — Set 1             15   tumour biology, genetics, staging, markers
    Neoplasia — Set 2             15   oncogenic agents, inherited syndromes,
                                       haematological malignancy, emergencies
    Systemic Pathology — Set 1    15   organ by organ

  EXAMS
    General Pathology — Timed     30   35 min
    Neoplasia — Timed             30   35 min
    Pathology — Comprehensive     75   90 min

All under Foundational Sciences → Pathology.

## Some of the reasoning it teaches
  - Why membrane rupture is what releases troponin and transaminases — so those
    markers indicate cell DEATH, not stress
  - Why fat necrosis in pancreatitis causes hypocalcaemia (calcium is consumed
    saponifying fat)
  - Why arterial thrombi get ANTIPLATELETS and venous thrombi ANTICOAGULANTS —
    the composition dictates the drug
  - Why lung and bowel infarcts are red but heart and kidney infarcts are pale
  - Why the plaque that ruptures often isn't the most stenotic one
  - Why tumour suppressors need two hits but oncogenes only one — and why that
    explains young presentation in inherited cancer
  - Why eradicating H. pylori can make a MALT lymphoma regress
  - Why hyperkalaemia is the thing that kills in tumour lysis syndrome
  - Why transmural involvement is why Crohn's fistulates and UC doesn't
  - Why coeliac biopsy must be taken while still eating gluten

## 30 topics
Cell Injury · Cell Death · Acute Inflammation · Chronic Inflammation · Wound
Healing · Cellular Adaptation · Thrombosis · Embolism · Infarction · Oedema ·
Atherosclerosis · Deposition Disorders · Immunopathology · Tumour Biology ·
Cancer Genetics · Staging & Grading · Metastasis · Paraneoplastic Syndromes ·
Tumour Markers · Oncogenic Agents · Systemic Neoplasia · Haematological
Malignancy · Oncological Emergencies · Hepatic · Gastrointestinal · Respiratory ·
Renal · Neuropathology · Musculoskeletal · Endocrine Pathology

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-pathology.ts
   Expect eight confirmation lines. Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Foundational Sciences → Pathology

4. PUSH TO GITHUB
       git add .
       git commit -m "content: pathology - general, neoplasia and systemic"
       git push

5. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R on the live site.

No prisma db push — content only, no schema change.

If step 2 reports a missing category, run this first then retry:
       npx tsx prisma/seed-medical-taxonomy.ts

## Running total
  Wave 1  BLS + ACLS        60
  Wave 2  Antibiotics       39
  Wave 3  Cardiovascular    45
  Wave 4  Microbiology      44
  Wave 5  Respiratory       75
  Wave 6  Renal             75
  Wave 7  Anatomy           75
  Wave 8  Pathology         75
  ————
  488 original questions · 189 topics · 47 quizzes

## ⚠ STILL TO DO — expanding the earlier waves
  Wave 1  BLS (30) · ACLS (30)   → split into 2 sets each + separate exams
  Wave 2  Antibiotics (39)       → split into 2–3 sets + exams
  Wave 3  Cardiovascular (45)    → add second sets for each of the three
  Wave 4  Microbiology (44)      → add second sets, especially bacteriology

## Next subject waves — say which
  - Biochemistry
  - Histology
  - Obstetrics & Gynaecology
  - Paediatrics
  - General Surgery / Orthopaedics
  - Endocrinology
  - Fluids, Electrolytes & Acid-Base
  - Psychiatry & Mental Health
