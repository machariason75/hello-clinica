# Content Wave 14 — Gastroenterology & Hepatology  (60 questions)

## ✅ ANSWER SHUFFLING IS NOW BUILT IN
This is the first wave that shuffles each question's choices before writing to
the database. The bug your friend found — all 788 correct answers sitting at
position A — cannot recur in this or any future wave.

You will see "(answers shuffled)" confirmed on each line as it seeds.

## Structure
  PRACTICE
    Gastroenterology — Practice Set 1   30   luminal GI
    Hepatology — Practice Set 2         30   liver and biliary (fresh questions)

  EXAMS
    Gastroenterology — Timed Exam 1     30   40 minutes
    Gastro & Hepatology — Timed Exam 2  60   75 minutes (comprehensive)

25 topics.

## Some of the reasoning it teaches
  - Why resuscitation comes BEFORE endoscopy in an upper GI bleed
  - Why variceal bleeding gets terlipressin AND antibiotics — the antibiotics
    independently improve survival and are easily forgotten
  - Why coeliac serology must be taken while still eating gluten
  - Why C. difficile needs ORAL vancomycin — intravenous never reaches the lumen
  - Why antimotility drugs are dangerous in bloody diarrhoea
  - Why infection must be excluded before escalating immunosuppression in an IBD
    flare — C. difficile and CMV mimic a flare exactly
  - Why dark urine with pale stools means conjugated hyperbilirubinaemia
  - How ONE hepatitis B marker separates vaccination from resolved infection
  - Why AST:ALT above 2 points to alcohol
  - Why lactulose treats encephalopathy through ammonia, not constipation
  - Why vitamin K should NOT routinely correct the INR in acute liver failure —
    it masks the prognostic signal used to decide on transplantation
  - What Courvoisier's law actually tells you

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all.

2. SEED THE QUESTIONS
       npx tsx prisma/seed-gastroenterology.ts
   Expect four confirmation lines, each ending "(answers shuffled)".
   Safe to re-run.

3. RUN LOCALLY
       npm run dev
   Question Bank → Clinical Specialties → Internal Medicine →
   Gastroenterology & Hepatology

4. PUSH TO GITHUB
       git add .
       git commit -m "content: gastroenterology and hepatology"
       git push

5. GO LIVE
   Vercel → Deployments → wait for Ready → Ctrl+Shift+R

No prisma db push — content only.

## Running total
  Waves 1–14: 908 original questions · 352 topics · 81 quizzes

## ⚠ OUTSTANDING WORK
  1. Finish running fix-answer-order.ts until it reports completion, so the
     earlier 788 questions are all randomised.
  2. RESTRUCTURING: Waves 1–12 need bringing to the current shape — two practice
     sets per examinable item plus two exams. Surgery in particular has only one
     practice set for each of its three sections.
  3. ADVANCED TIER: harder clinical-vignette questions for stronger candidates,
     alongside rather than replacing the current sets.

## Next subject waves — say which
  - Neurology (clinical)
  - Haematology
  - Infectious Diseases (clinical)
  - Biochemistry
  - Histology
  - Dermatology
  - Fluids, Electrolytes & Acid-Base
  - Rheumatology
