# Content Wave 1 — BLS & ACLS  (60 questions)

## What's in it
Three quizzes, seeded into the Emergency & Life Support branch:

  BLS Provider — Practice Set 1      30 questions, untimed
  ACLS Provider — Practice Set 1     30 questions, untimed
  ACLS — Timed Exam 1                the same 30 items, 35-minute limit

Every question has four options, exactly one correct answer, and a full rationale
that explains the REASONING — not just which letter is right. That's the part
that teaches, and the part that makes your bank worth paying for.

## Topic coverage (22 distinct topics)
BLS   Initial Assessment · Compressions · CPR Ratios · CPR Quality · Ventilation
      Defibrillation · Choking · Paediatric BLS · Chain of Survival · Safety
      Special Situations · Team Dynamics

ACLS  Cardiac Arrest Algorithm · Non-Shockable Rhythms · Pharmacology
      Tachycardia · Bradycardia · Electrical Therapy · Reversible Causes
      Monitoring · Post-Arrest Care · Vascular Access · Team Dynamics

That spread matters: the per-topic breakdown on the results screen, the weak-area
report in the readiness assessment, and the "where students struggle most" panel
in your analytics all read from these topic labels. Twenty-two topics means those
reports say something useful instead of "General: 18/30".

## Install
1. Extract the CONTENTS -> Replace all (1 file: prisma/seed-acls-bls.ts).
2. Make sure the taxonomy exists first (it creates the sections these live in):
       npx tsx prisma/seed-medical-taxonomy.ts
3. Seed the content:
       npx tsx prisma/seed-acls-bls.ts
   Expect: three lines confirming 30 questions each.
   Safe to re-run — it replaces the questions rather than duplicating them.
4. npm run dev
   Question Bank -> Emergency & Life Support -> BLS or ACLS -> play a set.
5. git add .
   git commit -m "content: BLS and ACLS practice sets"
   git push

## ⚠ Please review before promoting it for certification
These are original questions following the widely taught resuscitation sequences.
Resuscitation guidelines are revised periodically, and details like drug doses and
energy settings do change between editions.

Read through them once against your current national guideline and edit anything
that has moved. Admin -> Question Bank -> the quiz -> the pencil icon on any
question lets you change the stem, options, correct answer, topic and rationale.

I'd rather flag this than have you discover a superseded dose after a student
sat an exam on it.

## Everything here is yours to edit
Nothing is locked. In Admin -> Question Bank you can rewrite any question, add
more, delete ones you disagree with, move quizzes between sections, rename or
reorder sections, and create entirely new ones. The seed is a starting point,
not a fixture.

## Next waves
Say which and I'll write it:
  - Antibiotics & Antimicrobials
  - Cardiovascular (physiology -> cardiology -> drugs as one arc)
  - Microbiology (bacteriology, virology, parasitology)
  - Gross Anatomy + Neuroanatomy
  - Obstetrics & Gynaecology
  - Paediatrics
