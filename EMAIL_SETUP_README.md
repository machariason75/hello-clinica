# Email, newsletters, password reset & admin accounts

## What's included
1. NEWSLETTER CAMPAIGNS — Admin -> "Send Newsletters": write a newsletter, save it
   as a draft, then send it to all active subscribers. Each person gets their own
   email (nobody sees other addresses), with a working UNSUBSCRIBE link. Delivery
   counts are recorded. Unsubscribed people are always skipped.
2. UNSUBSCRIBE — /newsletter/unsubscribe?token=... One click, no login (as the
   anti-spam rules require).
3. CLIENT PASSWORD RESET — "Forgot your password?" on the sign-in page ->
   emailed link (expires in 1 hour, single use) -> set a new password.
   For safety it never reveals whether an email has an account.
4. ADMIN ACCOUNT — Admin -> "Admin Account": change your own login email and
   password, and add/remove other admins. (You can't delete yourself or the last
   admin.)
5. BOOKS DOWNLOAD GATING — already in place: free users can Read online; only
   premium can Download. Verified.
6. EMAIL ROUTING — all addresses are config-driven (see below), so pointing
   everything at your Hello Clinica inboxes is an env change, not a code change.

## Install
1. Extract the CONTENTS into your project (do NOT create a nested hello-clinica
   folder) -> Replace all.
2. Update the database:
       npx prisma db push
3. Check it compiles:
       npx tsc --noEmit
       npm run dev
4. Push:
       git add .
       git commit -m "email: newsletters, unsubscribe, password reset, admin accounts"
       git push

## IMPORTANT — emails will NOT send until you do this
Nothing here can deliver mail until Resend is configured. Right now every email is
logged as PENDING and never leaves.

A. Create a free account at resend.com.
B. Add and VERIFY your domain (helloclinica.com) — Resend gives you DNS records
   to paste into your domain provider. (To test before the domain is ready, Resend
   provides a sandbox sender you can use.)
C. Create an API key.
D. In VERCEL -> your project -> Settings -> Environment Variables, add:

       RESEND_API_KEY          = re_xxxxxxxxxxxxxxxx
       FROM_EMAIL             = Hello Clinica <noreply@helloclinica.com>
       NOTIFY_EMAIL_PRIMARY   = you@helloclinica.com      <- form submissions land here
       NOTIFY_EMAIL_SECONDARY = (optional second inbox)
       NEXT_PUBLIC_SITE_URL   = https://helloclinica.com  <- used to build reset/unsubscribe links

   Then REDEPLOY (Vercel -> Deployments -> ... -> Redeploy) so the new variables
   are picked up.

E. Also add the same values to your local .env (or .env.local) if you want to test
   email locally.

That's it — once those are set, newsletters, password resets, and form
notifications all start delivering, FROM your domain and TO your inbox.

## Testing after setup
- Subscribe with a real email on the homepage.
- Admin -> Send Newsletters -> write one -> Send -> check it arrives, and click the
  unsubscribe link at the bottom.
- Sign-in page -> "Forgot your password?" -> check the email arrives and the link
  lets you set a new password.
- Admin -> Admin Account -> change your password, then sign out and back in.
