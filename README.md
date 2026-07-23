# Content Wave 9 — Obstetrics & Gynaecology  (75 questions, 8 quizzes)

All under Clinical Specialties → Obstetrics & Gynaecology, which was empty.

## The eight quizzes
  PRACTICE
    Obstetrics — Set 1                 15
    Obstetrics — Set 2                 15   (fresh, no overlap)
    Gynaecology — Set 1                15
    Gynaecology — Set 2                15   (fresh, no overlap)
    Reproductive Endocrinology — Set 1 15

  EXAMS
    Obstetrics — Timed                 30   35 min
    Gynaecology — Timed                30   35 min
    Obs & Gyn — Comprehensive          75   90 min

38 topics — the widest spread of any wave so far.

## Some of the reasoning it teaches
  - Why ectopic pregnancy is assumed until excluded, and why shoulder tip pain
    matters
  - Why folic acid must start BEFORE conception (the neural tube closes by week 4)
  - Why anti-D protects the NEXT pregnancy, not the current one
  - Why abruption bleeding is underestimated — it can be concealed behind the
    placenta while the woman shocks
  - Why maternal glucose crosses the placenta but insulin doesn't, and how that
    causes both macrosomia and neonatal hypoglycaemia
  - Why anovulation in PCOS raises endometrial cancer risk (unopposed oestrogen)
  - Why HRT needs a progestogen only if the uterus is intact
  - Why continuous GnRH SUPPRESSES the axis while pulsatile GnRH stimulates it
  - Why lactation doesn't begin until the placenta is delivered
  - Why ovarian torsion can have normal Doppler flow — dual blood supply

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-obgyn.ts
   Expect eight confirmation lines. Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Clinical Specialties → Obstetrics & Gynaecology

4. PUSH TO GITHUB
       git add .
       git commit -m "content: obstetrics, gynaecology and reproductive endocrinology"
       git push

5. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R on the live site.

No prisma db push — content only.

If step 2 reports a missing category, run this first then retry:
       npx tsx prisma/seed-medical-taxonomy.ts

## ⚠ Review before promoting for certification
Obstetric practice is strongly protocol-driven and varies between national
guidelines — thresholds for intervention, screening schedules and drug choices
differ by country and are revised regularly. These questions test the underlying
principles and the emergencies where recognition matters most, but check anything
numerical against your local guideline and edit what differs.

## Running total
  Wave 1  BLS + ACLS        60
  Wave 2  Antibiotics       39
  Wave 3  Cardiovascular    45
  Wave 4  Microbiology      44
  Wave 5  Respiratory       75
  Wave 6  Renal             75
  Wave 7  Anatomy           75
  Wave 8  Pathology         75
  Wave 9  Obs & Gyn         75
  ————
  563 original questions · 227 topics · 55 quizzes

## ⚠ STILL TO DO — expanding the earlier waves
  Wave 1  BLS (30) · ACLS (30)   → split into 2 sets each + separate exams
  Wave 2  Antibiotics (39)       → split into 2–3 sets + exams
  Wave 3  Cardiovascular (45)    → add second sets for each of the three
  Wave 4  Microbiology (44)      → add second sets, especially bacteriology

## Next subject waves — say which
  - Paediatrics
  - Endocrinology
  - General Surgery / Orthopaedics
  - Psychiatry & Mental Health
  - Biochemistry
  - Histology
  - Fluids, Electrolytes & Acid-Base
  - Gastroenterology & Hepatology
