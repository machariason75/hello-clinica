# Content expansion — nursing + allied health (NO design changes)

Nothing visual changed. Homepage layout, hero, nav, admin, and all forms are
untouched. This only EXPANDS content and adds category options.

## What changed
SAFE (pure content, no database step):
- Testimonials now show a diverse mix (Medical Student, BSN Student, RN Graduate,
  Pre-Med, International Student, NP Student).
- Added 5 nursing FAQs (NCLEX prep, study length, recommended books, daily
  questions, how Hello Clinica helps nursing students).
- Consultation/contact "Current stage" dropdown expanded to the full list
  (Pre-Nursing, Nursing Student, BSN, Accelerated BSN, RN, LPN, LVN, MSN, DNP,
  Nurse Practitioner, Pre-Med, Medical Student, IMG, Pharmacy, PA, Dentistry,
  PT, OT, Respiratory Therapy, Other).

NEEDS ONE DATABASE COMMAND (adds new category options — additive, safe):
- New Book categories: "Nursing Books" and "NCLEX Books".
- New Resource category: "Nursing Resources".

## Install — follow in order
1. Extract this zip over your hello-clinica folder → Replace all.

2. Register the new categories in the database. In your terminal, run:
       npx prisma db push
   This ONLY ADDS the new category options. It does not delete or change any
   existing data. When it finishes it will say it's in sync.
   ⚠ If it ever warns about losing data or dropping something, STOP and send me
     the message — but for adding categories it won't.

3. Test locally:
       npm run dev
   (hard-refresh with Ctrl+Shift+R)

4. Push live:
       git add .
       git commit -m "expand nursing + allied health content and categories"
       git push
   Vercel regenerates and redeploys automatically.

## After it's live — what you do in the admin
- Upload Nursing/NCLEX books: Admin → Books → choose the new category. Same as
  before, no new steps.
- Add the 12 Nursing Resources items: Admin → Resources → category "Nursing
  Resources". Suggested items to add:
  Anatomy Review, Physiology Review, Pharmacology Basics, Dosage Calculations,
  NCLEX Quick Sheets, Lab Values, Medical Terminology, Nursing Abbreviations,
  Head-to-Toe Assessment, Vital Signs Guide, ECG Basics, Medication Administration.
  They appear as cards on the Nursing Resources page.

Note: resources currently list as cards on their category page (not a separate
URL per item). If you want each item to open its OWN dedicated page later, that's
a small add-on I can build separately.
