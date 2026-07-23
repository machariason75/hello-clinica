# Content Wave 3 — Cardiovascular  (45 questions, 4 quizzes)

## Why this is built as an ARC, not three unrelated sets
The three practice sets deliberately chain together:

  PHYSIOLOGY establishes preload, afterload, the cardiac cycle and conduction
      ↓
  CARDIOLOGY applies them to real presentations — ACS, arrhythmia, failure
      ↓
  DRUGS explains why each agent works by pointing back at those same mechanisms

So the nitrate question refers back to preload; the beta-blocker question refers
back to diastolic coronary filling; the ACE inhibitor question refers back to the
renin–angiotensin cascade taught two sets earlier. A student who gets a drug
question wrong can trace the reasoning back two steps instead of just memorising
the answer.

That's also why they fill three DIFFERENT sections of the taxonomy — a student
browsing Pharmacology finds the drug set on its own merits, but the arc is there
for anyone working through systematically.

## The four quizzes
  Cardiovascular Physiology — Practice Set 1    15 questions   (Foundational Sciences → Physiology)
  Cardiology — Clinical Practice Set 1          15 questions   (Clinical Specialties → Internal Medicine)
  Cardiovascular Drugs — Practice Set 1         15 questions   (Foundational Sciences → Pharmacology)
  Cardiovascular — Comprehensive Timed Exam     all 45, 55 min (Clinical Specialties → Internal Medicine)

## 23 topics
Cardiac Output · Cardiac Mechanics · Cardiac Cycle · Conduction · Coronary
Circulation · Cardiac Electrophysiology · Blood Pressure Regulation · Shock
Physiology · Acute Coronary Syndrome · Arrhythmias · Heart Failure · Valvular
Disease · Pericardial Disease · Vascular Emergencies · Infective Endocarditis ·
RAAS Agents · Beta-Blockers · Calcium Channel Blockers · Nitrates · Diuretics ·
Inotropes · Antiplatelets & Anticoagulants · Lipid-Lowering Agents

## Some of the connections it teaches
  - Why tachycardia causes ischaemia (diastole shortens, and that's when the
    left ventricle is actually perfused) — and why beta-blockers therefore both
    reduce demand AND improve supply
  - Why an ACE inhibitor cough happens (bradykinin) and why an ARB fixes it
  - Why nitrates plus sildenafil is dangerous (both drive the same NO–cGMP path)
  - Why inferior STEMI needs a right-sided ECG before you give nitrates
  - Why aortic dissection must be excluded before treating "chest pain" as ACS —
    the managements are opposite
  - Why spironolactone improves survival beyond its diuretic effect (fibrosis,
    not fluid)
  - Why digoxin toxicity and furosemide are linked through potassium

## Install
1. Extract the CONTENTS -> Replace all (1 file: prisma/seed-cardiovascular.ts).
2. Sections must exist first (skip if already run):
       npx tsx prisma/seed-medical-taxonomy.ts
3. Seed:
       npx tsx prisma/seed-cardiovascular.ts
   Expect four confirmation lines.
   Safe to re-run — replaces rather than duplicates.
4. npm run dev
   Question Bank -> Foundational Sciences -> Physiology -> Cardiovascular
   Question Bank -> Clinical Specialties -> Internal Medicine -> Cardiology
5. git add .
   git commit -m "content: cardiovascular physiology, cardiology and pharmacology"
   git push

## ⚠ Review before promoting for certification
Clinical thresholds and first-line agents vary by national guideline and are
revised periodically. These questions test mechanism and principle, which travel
well — but check anything numerical against your local guidance and edit what
differs. Admin -> Question Bank -> the quiz -> pencil icon on any question.

## Running total
  Wave 1  BLS 30 + ACLS 30        (+ timed ACLS exam)
  Wave 2  Antibiotics 39          (+ timed exam)
  Wave 3  Cardiovascular 45       (+ comprehensive timed exam)
  ————
  144 original questions · 51 topics · 10 quizzes

## Next waves — say which
  - Microbiology (bacteriology, virology, parasitology) — pairs with Wave 2
  - Gross Anatomy + Neuroanatomy
  - Respiratory (physiology → medicine → drugs, same arc structure)
  - Obstetrics & Gynaecology
  - Paediatrics
  - Pathology
  - Fluids, Electrolytes & Acid-Base
