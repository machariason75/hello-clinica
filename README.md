# Content Wave 2 — Antibiotics & Antimicrobials  (39 questions)

Seeded into Foundational Sciences → Pharmacology → Antibiotics & Antimicrobials.

## Why this topic second
Pharmacology is where candidates consistently score worst, and antimicrobials are
the highest-yield slice of it across NCLEX, USMLE and the pharmacy boards. It is
also a topic where the principles travel — mechanism, class effects and
characteristic toxicity are the same everywhere, even where local formularies
differ.

## Two quizzes
  Antibiotics & Antimicrobials — Practice Set 1   39 questions, untimed
  Antibiotics & Antimicrobials — Timed Exam 1     same items, 45 minutes

## Six topics, chosen so the weak-area reports are actionable
  Mechanisms of Action   cell wall, 30S, 50S, DNA gyrase, folate, RNA polymerase
  Resistance             mecA/PBP2a, beta-lactamase, ESBL, VRE, stewardship
  Adverse Effects        the ones that matter clinically and are examined
  Clinical Selection     choosing the right agent for the organism and site
  Monitoring             levels, PK/PD, time-above-MIC vs concentration-dependent
  Stewardship            de-escalation, IV-to-oral switch, cultures first

A student who scores badly on "Resistance" but well on "Adverse Effects" gets a
genuinely useful signal — that's what the six-topic split is for.

## Some of the points it teaches
  - Why beta-lactamase inhibitors do nothing against MRSA (altered target, not
    an enzyme problem)
  - Why daptomycin fails in pneumonia (inactivated by surfactant)
  - Why ertapenem is the carbapenem that does NOT cover Pseudomonas
  - Why oral vancomycin treats C. difficile but intravenous vancomycin does not
  - Why trimethoprim causes hyperkalaemia (it acts like amiloride)
  - Why most reported penicillin allergy should be reassessed rather than
    accepted for life

## Install
1. Extract the CONTENTS -> Replace all (1 file: prisma/seed-antibiotics.ts).
2. The section must exist first (skip if already run):
       npx tsx prisma/seed-medical-taxonomy.ts
3. Seed:
       npx tsx prisma/seed-antibiotics.ts
   Expect two lines confirming 39 questions each.
   Safe to re-run — replaces rather than duplicates.
4. npm run dev
   Question Bank -> Foundational Sciences -> Pharmacology ->
   Antibiotics & Antimicrobials
5. git add .
   git commit -m "content: antibiotics and antimicrobials practice sets"
   git push

## ⚠ Antimicrobial guidance is local
Spectrum, resistance patterns and first-line choices vary by country, by
hospital, and over time. These questions deliberately test principles rather than
institution-specific protocols — but review them against your local formulary
before promoting any of it as definitive, and edit anything that differs.

## Running total
  Wave 1  BLS 30 + ACLS 30  (plus a timed ACLS exam)
  Wave 2  Antibiotics 39    (plus a timed exam)
  ————
  99 original questions across 28 topics

## Next waves — say which
  - Cardiovascular (physiology -> cardiology -> drugs, as one connected arc)
  - Microbiology (bacteriology, virology, parasitology)
  - Gross Anatomy + Neuroanatomy
  - Obstetrics & Gynaecology
  - Paediatrics
  - Pathology
