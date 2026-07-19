# Hardening — issues 4, 5 and 6

Three of the four you picked. Issue 3 (the Enum Trap) is a live-data migration
and gets its own drop — see the end of this file.

---

## ISSUE 6 — Student pages had no guard  [FIXED, 1 file]

**The hole:** `/admin` was protected by middleware, but `/account/*` was not.
Every student page had to remember to call `getStudent()` itself. One forgotten
call and that page was silently public — including anything showing another
student's results.

**The fix:** `middleware.ts` now guards BOTH areas centrally.

Why this needed care: middleware runs on the Edge runtime, where Node's `crypto`
module doesn't exist. The student cookie is verified with the Web Crypto API
instead — same HMAC-SHA256, same secret, same token format, verified byte-for-byte
against `lib/student/session.ts`.

It also keeps a constant-time signature comparison, so the check can't leak the
signature through response timing.

**These four pages stay public, or nobody could ever sign in:**
  /account/login, /account/register, /account/forgot-password, /account/reset-password

Signed-out visitors hitting a protected page are redirected to login with a
`?next=` parameter, so they land back where they were heading.

⚠ TEST THIS FIRST: after installing, sign out and visit /account — you should be
bounced to login. Then sign in and confirm you can reach /account and
/account/history.

---

## ISSUE 5 — Category deletion destroyed content silently  [FIXED, 2 files]

**The risk:** deleting a Question Bank section cascades — it takes every
sub-section, every quiz inside those, and every question you have written. The
old dialog said "and everything inside it", which is true but easy to click
straight past. Months of authoring could vanish on one mis-click.

**The fix:** the confirmation now counts and lists exactly what will be lost:

    This will also permanently delete:
      • 3 sub-sections
      • 12 quizzes
      • 147 questions you have written
      • 6 external links
      • 89 student attempts and their results

...and the button itself reads **"Delete section and 15 items"** rather than a
bare "Delete", so the consequence is unmissable at the moment of clicking.

If the section is genuinely empty, it says so in green instead — no false alarm.

---

## ISSUE 4 — bcryptjs is in devDependencies  [YOU RUN 3 COMMANDS]

**The risk:** password hashing runs in production (`lib/auth.ts`,
`lib/student/auth.ts`) but the package is listed as a DEVELOPMENT dependency. It
works today because Vercel installs everything. If any build ever runs
`npm install --production`, ALL authentication breaks instantly — nobody, not
even you, could log in.

**I deliberately did NOT ship package.json.** Shipping that file from my copy is
exactly what broke your build twice this session. Run these instead — they edit
your own package.json correctly:

```
npm uninstall bcryptjs
npm install bcryptjs
```

That's it. The first removes it from devDependencies, the second adds it to
dependencies. Leave `@types/bcryptjs` where it is — types genuinely are
development-only.

Verify it worked — open package.json and confirm "bcryptjs" now appears under
"dependencies", not "devDependencies".

---

# INSTALL

1. Extract the CONTENTS -> Replace all (3 files).
2. Run the two npm commands above (Issue 4).
3. ```
   npx tsc --noEmit        <- expect no errors
   npm run dev
   ```
4. TEST, in this order:
   a. Sign OUT. Visit /account -> should redirect to login. 
   b. Sign IN. Visit /account and /account/history -> should work.
   c. Admin -> Question Bank -> try deleting a section that has quizzes in it.
      The dialog should list real numbers. CANCEL — don't actually delete.
5. ```
   git add .
   git commit -m "security: guard student routes, warn before cascade deletes, fix bcryptjs"
   git push
   ```

---

# ISSUE 3 — the Enum Trap (NOT in this drop, and why)

`BookCategory` and `ResourceCategory` are Postgres enums, so you can't add a book
or resource category without a developer.

Fixing it means changing a column type on tables holding your REAL books and
resources. If the migration goes wrong, that content is orphaned — it stops
appearing on the site and has to be re-filed by hand.

That's not a risk to take casually, and not something to bundle with other
changes. Before I build it I want:

  1. A Supabase backup taken and VERIFIED restorable (Supabase -> Database ->
     Backups). This is the safety net.
  2. To do it as its own drop, so if anything looks wrong we roll back one
     commit, not five.

The migration itself is staged so it's reversible at every point:
  - add the new category TABLES alongside the existing enums (nothing breaks)
  - backfill every existing book/resource to match its current category
  - switch the code to read the new tables
  - only once that's been live and healthy for a while, drop the old enum

Say the word once you've got a backup and I'll build stage 1.
