# Slice 3 — Student accounts + premium gating + university request flow

Adds a student login system (separate from admin), locks premium Question Bank
sections behind it, and lets students request course/university access.

## What you get
- Student accounts: /account/register, /account/login, /account (dashboard).
  Passwords are hashed (bcrypt); the session is a signed cookie — completely
  separate from the admin login, so the admin area is untouched.
- Premium gating: TEAS, HESI A2 Certifications, and Nursing Exams are marked
  premium. Visitors can browse the structure but see a "premium" lock on the
  actual tests/resources until they have access. Nursing Certifications (the
  NCLEX sample) stays FREE as a taster.
- Colleges & Universities: signed-in students get a request form (university +
  course + notes); it saves and says "we'll reach out". Signed-out visitors are
  asked to sign in first.
- Admin -> Students: see every account, Grant/Revoke premium access (do this
  after you confirm payment).
- Admin -> Access Requests: see course requests, set status; marking one
  "granted" automatically switches on that student's premium access.
- Footer now has a "My Account" link.

Payment is manual for now (you grant access in the admin) — exactly as agreed.
Real online payment can come later.

## Install — IN ORDER
1. Extract over your hello-clinica folder -> Replace all.
2. Update the database (adds students, requests, and a premium flag):
       npx prisma db push
3. Re-seed the tree so the premium flags apply (safe, no duplicates):
       npx tsx prisma/seed-quizbank.ts
4. Test:  npm run dev
   - Register at /account/register, then open TEAS -> you should see the lock.
   - In Admin -> Students, Grant access to your test account, reload TEAS ->
     it unlocks.
   - Open Colleges & Universities while signed in -> submit a request ->
     see it in Admin -> Access Requests. Set it to "granted" -> access turns on.
5. Push:
       git add .
       git commit -m "Slice 3: student accounts, premium gating, access requests"
       git push

Note: this folder must have @vercel/speed-insights installed (npm install
--legacy-peer-deps if a fresh clone), and NEXTAUTH_SECRET set in .env (it already
is — the student cookie reuses it).
