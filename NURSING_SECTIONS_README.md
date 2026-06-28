# Nursing menus + folders + example content + carousel arrows removed

## What changed
1. NAV MENUS: "Nursing Books" and "NCLEX Books" now appear in the Books dropdown;
   "Nursing Resources" now appears in the Free Resources dropdown.
2. NURSING RESOURCES is now a set of FOLDERS. Clicking it opens 12 topic folders
   (Anatomy, Physiology, Pharmacology, Dosage Calculations, NCLEX Quick Sheets,
   Lab Values, Medical Terminology, Nursing Abbreviations, Head-to-Toe Assessment,
   Vital Signs, ECG Basics, Medication Administration). Each opens its own page —
   same look as every other folder on the site.
3. EXAMPLE CONTENT pre-filled (so nothing is empty):
   - 3 Nursing Books + 3 NCLEX Books (real popular titles).
   - 3 example items inside each of the 12 nursing folders.
   These are placeholders — upload the real files and edit the names/details from
   the admin panel anytime.
4. Testimonials carousel: the < > arrows are removed (dots + auto-rotate remain).

## Install — follow IN ORDER
1. Extract over your hello-clinica folder -> Replace all.

2. Add the new folders to the database (safe, additive — only ADDS options):
       npx prisma db push
   (If it ever warns about losing data, STOP and send me the message.)

3. Fill in the example content (safe to run once; re-running won't duplicate):
       npx tsx prisma/seed-nursing.ts
   You should see "Seeded 6 example books" and "Seeded 36 example nursing
   resource items".

4. Test locally:
       npm run dev
   Check: Books dropdown shows Nursing/NCLEX Books; Free Resources shows Nursing
   Resources -> 12 folders -> each has 3 example items.

5. Push live:
       git add .
       git commit -m "nursing menus, folders, example content; remove carousel arrows"
       git push

## Notes
- Upload real files into the TOPIC folders (e.g. "Anatomy Review"), not the
  "Nursing Resources" parent.
- The example items point to a sample PDF as a placeholder until you upload real
  files. Edit or delete any of them from Admin -> Resources / Books.
