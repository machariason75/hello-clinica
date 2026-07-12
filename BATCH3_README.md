# Batch 3 — Password reset oversight + admin-editable student reviews

## 1. Password Resets (Admin -> Password Resets)
Students get their reset link IMMEDIATELY (nobody locked out at midnight waits for
you to wake up). This page is your oversight record:
  - who requested a reset, and when
  - status: Pending / Completed / Expired
  - a summary count, and an alert chip on the dashboard when resets are in progress
Repeated requests on one account are worth a look — that's the signal this page
exists to give you.

SECURITY NOTE: the reset links themselves are deliberately NEVER shown. They are
single-use secrets; displaying them would let anyone with access to your admin
screen take over a student account. If a student is stuck, ask them to request a
fresh link from the sign-in page.

## 2. Student Reviews are now admin-editable (Admin -> Student Reviews)
The homepage testimonials were HARDCODED — you couldn't change them without a
developer. Now they live in the database:
  - Add, edit, delete reviews
  - Mark one "Featured" so it shows first
  - Publish/hide without deleting
The homepage reads from the database automatically.

FALLBACK (deliberate): if you haven't added any reviews yet, the homepage keeps
showing the original starter reviews — so the section is never empty. The moment
you publish your first real review, yours take over completely.

## 3. Quick Access — nothing to do
It auto-generates from the Question Bank. Anything you add in
Admin -> Question Bank (folders, quizzes, exams, external links) appears in Quick
Access automatically. No separate editing needed, by design.

## Install
1. Extract the CONTENTS into your project (NO nested hello-clinica folder!)
   -> Replace all.
2. npx tsc --noEmit      <- expect no errors
   npm run dev
   Check: Admin -> Password Resets, Admin -> Student Reviews (add one, then
   reload the homepage to see it replace the starters).
3. git add .
   git commit -m "admin: password reset oversight, editable student reviews"
   git push

(No schema change — no prisma db push needed.)
