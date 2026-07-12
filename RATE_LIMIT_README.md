# Login rate limiting + form anti-spam

## What this stops
Password guessing (brute force) against your admin and student logins, and bots
spamming your public forms.

## How it works
Attempts are counted in your OWN database (the `login_attempts` table, which
already existed but was never used). NO external service, NO new API key, NO new
dependency, no monthly cost — one less thing to leak or break.

Rules:
  - 5 failed logins for one email in 15 minutes -> that account is locked for
    15 minutes.
  - An IP gets more headroom (20 failures), so a shared campus/office network
    isn't punished for one careless user.
  - A SUCCESSFUL login wipes the failure count — remember your password at last
    and you're not left sitting near a lockout.
  - Public forms: contact and newsletter capped at 5 per IP per 15 min;
    password-reset requests capped at 3 (spamming that costs you email sends and
    fills someone's inbox).

Two deliberate design choices:
  1. FAIL OPEN. If the limiter itself errors (database hiccup), logins are
     ALLOWED through. A broken security check must never lock every user out of
     your site.
  2. The admin login gives the SAME generic failure whether the password was
     wrong or the account is locked — so an attacker can't tell the difference
     and gets no feedback to work with.

## Protected
  - Admin login          (lib/auth.ts)
  - Student login        (lib/student/auth.ts)
  - Password reset       (lib/student/password-reset.ts)
  - Contact form         (lib/actions/contact.ts)
  - Newsletter signup    (lib/actions/newsletter.ts)

## Install
1. Extract the CONTENTS into your project -> Replace all (6 files).
   NOTE: adds a new folder `lib/security/`.
2. npx tsc --noEmit      <- expect no errors
   npm run dev
3. TEST IT: on /account/login, enter a real email with a WRONG password 5 times.
   The 6th attempt should say "Too many failed attempts. Please try again in
   15 minutes." Then wait it out, or clear it from the database if you lock
   yourself out while testing.
4. git add .
   git commit -m "security: rate limit logins and public forms"
   git push

(No schema change — the login_attempts table already exists. No prisma db push.)

## STILL THE MOST IMPORTANT THING
Use a LONG, UNIQUE admin password (16+ characters, from a password manager).
Rate limiting slows an attacker down; a strong password makes guessing hopeless
even if the limiter were bypassed. The two together are what make you safe.
