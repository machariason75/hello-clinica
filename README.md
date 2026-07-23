# Content Wave 4 — Microbiology  (44 questions, 5 quizzes)

## Why this pairs with Wave 2
Microbiology and antibiotics are usually taught as two separate lists to be
memorised. Here the rationales point FORWARD to treatment wherever it helps, so a
student moves from "which organism" to "which drug, and why that one" in a single
line of reasoning.

Examples of the crossover:
  - Pseudomonas identification → and the reminder that ertapenem does NOT cover it
  - Mycobacterial cell wall → why TB needs months of multi-drug therapy
  - Biofilm on prosthetic joints → why the hardware usually has to come out
  - C. difficile spores → why alcohol gel fails and soap-and-water is required
  - Fluconazole vs Aspergillus → why the wrong azole looks like treatment while
    the infection progresses

## The five quizzes
  Bacteriology — Practice Set 1      14 questions
  Virology — Practice Set 1          12 questions
  Parasitology — Practice Set 1      10 questions
  Mycology — Practice Set 1           8 questions
  Microbiology — Comprehensive Exam  all 44, 55 minutes

Each sits in its own section under Foundational Sciences → Microbiology, so the
sections are no longer empty and each stands on its own.

## 21 topics
Staining & Identification · Gram-Positive Organisms · Gram-Negative Organisms ·
Bacterial Toxins · Mycobacteria · Virulence Factors · Viral Structure · Viral
Replication · Viral Pathogenesis · HIV · Hepatitis Viruses · Influenza ·
Herpesviruses · Congenital Infections · Oncogenic Viruses · Malaria · Protozoa ·
Helminths · Antifungal Targets · Systemic Mycoses · Opportunistic Fungi

## Some of the reasoning it teaches
  - Why exotoxin and endotoxin behave completely differently (and why only one
    can be made into a vaccine)
  - How hepatitis B serology distinguishes vaccination from resolved infection
    on a single marker
  - Why antigenic drift needs a yearly flu vaccine but antigenic shift causes
    pandemics
  - Why sickle cell trait persists in malarial regions
  - Why ingesting tapeworm EGGS causes neurocysticercosis but eating the cysts
    does not
  - Why Pneumocystis presents with severe hypoxia and an unremarkable chest

## Install
1. Extract the CONTENTS -> Replace all (1 file: prisma/seed-microbiology.ts).
2. Sections must exist first (skip if already run):
       npx tsx prisma/seed-medical-taxonomy.ts
3. Seed:
       npx tsx prisma/seed-microbiology.ts
   Expect five confirmation lines. Safe to re-run.
4. npm run dev
   Question Bank -> Foundational Sciences -> Microbiology
5. git add .
   git commit -m "content: microbiology - bacteriology, virology, parasitology, mycology"
   git push

## ⚠ Review before promoting for certification
Epidemiology, resistance patterns and first-line treatment vary by region and
change over time. These questions test organism biology, identification and
mechanism — which travel well — but check anything specific against local
guidance and edit what differs.

## Running total
  Wave 1  BLS + ACLS           60
  Wave 2  Antibiotics          39
  Wave 3  Cardiovascular       45
  Wave 4  Microbiology         44
  ————
  188 original questions · 72 topics · 15 quizzes

## Next waves — say which
  - Respiratory (physiology → medicine → drugs, the Wave 3 arc structure)
  - Gross Anatomy + Neuroanatomy
  - Pathology (cell injury, inflammation, neoplasia)
  - Fluids, Electrolytes & Acid-Base
  - Obstetrics & Gynaecology
  - Paediatrics
  - Biochemistry
