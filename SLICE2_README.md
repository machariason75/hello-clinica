# Slice 2 — Question Bank structure (nested categories + external links + admin)

Turns the Question Bank into a real, nested library and makes it fully
manageable from the admin.

## What you get
- Nested category tree: top tabs (Nursing Exams, TEAS, HESI A2 Certifications,
  Nursing Certifications, Colleges & Universities) -> sub-sections -> down to
  quizzes. Any depth of sub-folders is supported.
- Each section page shows: its sub-sections (folder cards), its practice tests
  (quiz cards), and tagged "Recommended resources" (rich external-link cards
  with thumbnails), plus a breadcrumb — all in the site's warm card style.
- Tagged external links: point to any website/video (e.g. Khan Academy,
  MedlinePlus) with a thumbnail preview. This is the "premium" resource feel.
- Admin -> Question Bank: build/edit/delete/reorder the whole tree (parent
  picker, icon, publish toggle, featured) and add/edit/delete external links.
- The Drop-1 NCLEX-RN sample quiz is re-parented under Nursing Certifications so
  it keeps working inside the tree.
- Rich placeholder content is seeded so nothing looks empty.

Note: the "Colleges & Universities" request form and paid access come in Slice 3.
Full per-question authoring (writing quiz questions in the admin) is a small
follow-up (Slice 2b); for now quizzes are seeded and managed per section.

## Install — IN ORDER
1. Extract over your hello-clinica folder -> Replace all.
2. Update the database (safe, additive):
       npx prisma db push
3. Seed the tree + links (safe to re-run; never duplicates):
       npx tsx prisma/seed-quizbank.ts
   Expect: "Upserted 30 categories", "Re-parented NCLEX-RN…", "Upserted 6 external links".
4. Test:  npm run dev
   - Question Bank -> Nursing Certifications -> NCLEX-RN -> the sample quiz still plays.
   - TEAS -> ATI TEAS Version 7 -> Reading/Math/Science/English.
   - Open a Pharmacology or Science section to see the external-link cards.
   - Admin -> Question Bank: try adding a section and a resource link.
5. Push live:
       git add .
       git commit -m "Slice 2: Question Bank tree + external links + admin"
       git push
