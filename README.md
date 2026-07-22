# Upload limits + password reset hardening + medical taxonomy

Three things. The first two are complete. The third is the STRUCTURE for a much
larger content build — see the honest note at the end.

---

# 1. BIGGER UPLOADS

Medical textbooks are large; 32 MB was never going to hold an atlas.

                      before   ->  now
  Book files (PDF)     32 MB   ->  512 MB
  Book files (EPUB)    32 MB   ->  256 MB
  Resource files       32 MB   ->  256 MB
  Cover images          4 MB   ->  16 MB
  Thumbnails            4 MB   ->  16 MB
  Audiobook chapters   64 MB   ->  512 MB

The size shown on the upload buttons updates automatically — it's read from the
same configuration.

## ⚠ ONE THING TO CHECK
Your UPLOADTHING PLAN also caps file size, and its cap wins. If a large upload
still fails after this, it's the plan, not the code — check your limit at
uploadthing.com/dashboard. The free tier is generous on count but modest on
per-file size.

If a book is genuinely too big for your plan, use "or paste a URL instead" and
host that file elsewhere. Everything downstream (the reader, the download gate,
the premium check) works identically with a pasted URL.

---

# 2. PASSWORD RESET — SHORTER, RESENDABLE, VISIBLE

## Link now expires in 15 minutes (was 60)
A reset link is a bearer credential: whoever holds it can take the account. Fifteen
minutes means a link left in a shared inbox, on a borrowed phone, or in a browser
someone forgot to close stops being dangerous quickly.

## Requesting a new link kills the old one
This already happened, and it's worth knowing because it's exactly the risk you
described: if someone requests a second link, the first STOPS WORKING immediately.
Only the newest link is ever valid, so an old one sitting on another device is
already dead.

## Resend, with a 60-second cooldown
A "Resend the link" button now appears — but ONLY after a link has been sent,
exactly as you asked. Offering it before would just be confusing.

The cooldown isn't security theatre (the server already caps requests per IP);
it stops an anxious user tapping five times and then having four dead links to
puzzle over. After a resend they're told plainly: only the newest link works.

## The admin can see it
Admin -> Password Resets gains a "Requests" column. One request shows a quiet
"once"; more than one shows an amber "3× requested" badge, so a burst on a single
account is visible at a glance. Usually it just means the email went to spam —
but you can now tell.

---

# 3. MEDICAL & HEALTH-SCIENCES TAXONOMY  (58 sections)

## The design decision that matters
You listed about thirty subjects. The obvious move is thirty top-level cards —
and that would wreck the Question Bank landing page, which is exactly the
"crowded" outcome you asked me to avoid.

So the top level gains FOUR branches, matching how clinicians actually think
about their training:

  FOUNDATIONAL SCIENCES      what you learn before the wards
    Anatomy (Gross, Neuro, Embryology, Histology)
    Physiology (Cardiovascular, Respiratory, Renal, Endocrine)
    Biochemistry
    Microbiology (Bacteriology, Virology, Parasitology, Mycology)
    Pathology
    Pharmacology (Antibiotics, Cardiovascular, CNS, Drug Calculations)
    Chemistry (Organic, Inorganic, Physical)

  CLINICAL SPECIALTIES       the rotations
    Internal Medicine (Cardiology, Respiratory, Gastro, Nephrology,
                       Neurology, Endocrinology)
    Surgery (General, Orthopaedics, Neurosurgery, Peri-operative)
    Obstetrics & Gynaecology · Paediatrics · Psychiatry
    Infectious Diseases · Critical Care · Outpatient & Primary Care

  EMERGENCY & LIFE SUPPORT   the certifications everyone renews
    BLS/BCLS · ACLS · PALS · First Aid Essentials · Trauma & Primary Survey

  CLINICAL SKILLS            what you're examined doing
    Physical Examination · Surgical Skills · Common Procedures
    Infection Prevention & Control · Documentation & Handover

The landing page gains four cards. The depth is there when someone goes looking.

## Install
1. Extract the CONTENTS -> Replace all (8 files).
2. npx prisma db push          (adds requestCount to password reset tokens)
3. npx tsx prisma/seed-medical-taxonomy.ts
   Prints a tree as it goes. Safe to re-run — it upserts by slug and never
   duplicates.
4. npx tsc --noEmit            <- expect no errors
   npm run dev
5. Check:
   - Question Bank -> four new branches, each opening into its sub-sections
   - Admin -> Password Resets -> the Requests column
   - Admin -> Books -> try uploading something over 32 MB
6. git add .
   git commit -m "uploads: raise limits; auth: 15-min reset links with resend; content: medical taxonomy"
   git push

---

# ON THE QUESTIONS — an honest note

You asked for 30+ questions across roughly 25 subjects. That is 750+ questions,
each needing a stem, options and a full rationale — well over 150,000 words.

I'm not going to generate that in bulk, and I'd push back on anyone who offers
to. People use this material to prepare for licensing exams. A wrong rationale on
antibiotic choice, an ACLS drug dose, or a fetal heart tracing isn't a typo — it
could mislead someone who then makes that decision on a real patient. Volume is
the easy part; accuracy is the part that matters, and it needs care per question.

## What I'd suggest instead
Content in WAVES, one section at a time, 30+ questions each, written properly:

  Wave 1  ACLS + BLS          — highest demand, algorithm-driven, very checkable
  Wave 2  Antibiotics & Antimicrobials
  Wave 3  Cardiovascular (physiology -> cardiology -> drugs, as one arc)
  Wave 4  Microbiology (bacteriology, virology, parasitology)
  Wave 5  Gross Anatomy + Neuroanatomy
  ...and onward

Each wave arrives as its own seed, testable on its own, rolled back on its own if
something's wrong.

Tell me which wave to start and I'll write it. My recommendation is ACLS/BLS:
they're the sections people search for most, the content is protocol-based so it
can be verified against published algorithms, and it's the fastest route to a
section that looks and feels complete.
