# Emails, newsletters, unsubscribe, admin & client account management

Everything is built and will start working THE MOMENT you add your Resend keys
(step 2 below). Until then, emails are safely logged as PENDING — nothing is lost,
and no user flow breaks.

## What you get
1. Email routing (BOTH directions), driven entirely by env vars — no code edits:
   - Form submissions (contact, consultation, inquiries) are delivered to YOUR
     Hello Clinica inbox  -> NOTIFY_EMAIL_PRIMARY / NOTIFY_EMAIL_SECONDARY
   - Everything sent to clients goes FROM your Hello Clinica address -> FROM_EMAIL
2. Newsletters: Admin -> Send Newsletters. Compose a subject + message, save as a
   draft, then Send — it goes to every active subscriber, in a branded template.
   Each send skips unsubscribed/archived people and records sent/failed counts.
3. Unsubscribe: every newsletter carries a personal unsubscribe link. One click,
   no login, instantly stops future sends.
4. Books download-gating: already enforced — free users can READ books online;
   only premium can download. (Same for resources.)
5. Admin account management: Admin -> Admin Account. Change your own name/email,
   change your password (requires current password), and add or remove other
   admins. You can't delete yourself or the last remaining admin.
6. Client password reset: "Forgot your password?" on the sign-in page -> they get
   an emailed reset link -> set a new password. Tokens expire in 60 minutes and
   can only be used once. For security, the page never reveals whether an email
   is registered.

## Install
1. Extract the CONTENTS into your project (do NOT create a nested hello-clinica
   folder) -> Replace all.
2. Update the database (adds unsubscribe fields, campaigns, reset tokens):
       npx prisma db push
3. Check it compiles, then push:
       npx tsc --noEmit      <- expect no errors
       npm run dev
       git add .
       git commit -m "emails, newsletters, unsubscribe, account management"
       git push

## YOU MUST DO THIS for emails to actually send
Nothing sends until Resend is configured. It's free to start.

1. Create an account at resend.com
2. Add your domain (helloclinica.com) and add the DNS records they give you to
   your domain provider. Wait for it to verify.
   (Shortcut to test first: Resend gives you an onboarding sender you can use
   immediately without a domain.)
3. Create an API key.
4. In VERCEL -> your project -> Settings -> Environment Variables, add:
       RESEND_API_KEY          = re_xxxxxxxx (from Resend)
       FROM_EMAIL              = Hello Clinica <noreply@helloclinica.com>
       NOTIFY_EMAIL_PRIMARY    = your Hello Clinica inbox (where forms land)
       NOTIFY_EMAIL_SECONDARY  = optional second inbox
       NEXT_PUBLIC_SITE_URL    = https://helloclinica.com
5. Redeploy (Vercel -> Deployments -> ... -> Redeploy).

Then test: submit the contact form (does it reach your inbox?), send a test
newsletter to yourself, and try "forgot password" on a student account.

## Note on sending volume
Newsletters send one message per subscriber. Resend's free tier allows a limited
number of emails per day/month — fine for a growing list, but check their limits
before a large blast.
