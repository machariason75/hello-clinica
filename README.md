# Content Wave 7 — Anatomy  (75 questions, 8 quizzes)

Fills three sections that were empty: Gross Anatomy, Neuroanatomy and Embryology.

## The eight quizzes
  PRACTICE
    Gross Anatomy — Set 1     15   Foundational Sciences → Anatomy → Gross
    Gross Anatomy — Set 2     15   (fresh, no overlap)
    Neuroanatomy — Set 1      15   Foundational Sciences → Anatomy → Neuroanatomy
    Neuroanatomy — Set 2      15   (fresh, no overlap)
    Embryology — Set 1        15   Foundational Sciences → Anatomy → Embryology

  EXAMS
    Gross Anatomy — Timed     30   35 min
    Neuroanatomy — Timed      30   35 min
    Anatomy — Comprehensive   75   90 min

## Written clinically, not as recall
Anatomy is only worth memorising when it explains something. Nearly every
question here anchors a structure to a consequence:

  - Why a mid-shaft humeral fracture causes wrist drop (radial nerve in the
    spiral groove) but a surgical neck fracture causes loss of abduction
    (axillary nerve)
  - Why carpal tunnel spares thenar SKIN sensation — the palmar cutaneous branch
    leaves before the tunnel, so its involvement means a more proximal lesion
  - Why a displaced femoral neck fracture threatens the femoral head, and why
    that changes the operation
  - Why appendicitis pain starts periumbilically and then moves
  - Why a chest drain goes over the UPPER border of the rib
  - Why bilateral recurrent laryngeal injury is an airway emergency
  - Why the abducens nerve is a "false localising sign"
  - Why Bell's palsy involves the forehead and a stroke does not
  - Why Wallenberg syndrome produces crossed sensory loss — the trigeminal
    nucleus hasn't crossed yet, the spinothalamic tract already has
  - Why bilateral renal agenesis kills through the LUNGS, not the kidneys

## 27 topics
Upper Limb · Lower Limb · Abdomen · Thorax · Head & Neck · Back & Spine ·
Cerebral Circulation · Cerebral Structure · Motor Pathways · Sensory Pathways ·
Cranial Nerves · Cerebellum · Basal Ganglia · Limbic System · Language · Visual
Pathway · Autonomic Pathways · CSF & Ventricles · Brainstem · Peripheral Nerves ·
Teratogenesis · Neural Development · Pharyngeal Development · Fetal Circulation ·
Gut Development · Urogenital Development · Craniofacial Development

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-anatomy.ts
   Expect eight confirmation lines. Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Foundational Sciences → Anatomy → Gross Anatomy
   Question Bank → Foundational Sciences → Anatomy → Neuroanatomy
   Question Bank → Foundational Sciences → Anatomy → Embryology

4. PUSH TO GITHUB
       git add .
       git commit -m "content: anatomy - gross, neuroanatomy and embryology"
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
  ————
  413 original questions · 159 topics · 39 quizzes

## ⚠ STILL TO DO — expanding the earlier waves
You asked me to remind you. These have only ONE practice set and one exam, and
should be brought up to the current shape:

  Wave 1  BLS (30) · ACLS (30)   → split into 2 sets each + separate exams
  Wave 2  Antibiotics (39)       → split into 2–3 sets + exams
  Wave 3  Cardiovascular (45)    → add second sets for each of the three
  Wave 4  Microbiology (44)      → add second sets, especially bacteriology

## Next subject waves — say which
  - Pathology (cell injury, inflammation, neoplasia)
  - Biochemistry
  - Histology
  - Obstetrics & Gynaecology
  - Paediatrics
  - General Surgery / Orthopaedics
  - Endocrinology
  - Fluids, Electrolytes & Acid-Base
