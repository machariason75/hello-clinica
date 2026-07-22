# Free readiness assessment + payment scaffolding
(also includes the trimmed Question of the Day, so this supersedes that pack)

---

# 1. FREE READINESS ASSESSMENT   ->  /readiness

Twelve questions, no account, no timer, and an honest topic-by-topic report.

## Why it's built this way
- SAMPLES ACROSS TOPICS, not within one. It groups questions by topic and takes
  one from each in rotation, so you get genuine breadth. A naive random sample
  would over-represent whichever topic happens to have the most questions.
- THE EMAIL FORM COMES AFTER THE REPORT, never before it. Gating results behind
  a form is the standard move and it's the wrong one — people bounce, and the
  ones who don't feel tricked. Give the value, then ask.
- DYNAMIC, not a seeded quiz. It stays fresh as you add questions and needs no
  maintenance ever.

## What the student gets
  - A readiness score
  - A bar per topic, weakest first, colour-coded
  - "Where to focus first" naming their three weakest areas
  - A link straight into the Question Bank to practise them

That report is genuinely useful whether or not they ever pay — which is exactly
why it's worth an email address, and why it sells the Question Bank better than
any sales copy could.

Also added to the sitemap, with FAQ structured data for rich results.

## Where to promote it
This is your lead magnet. Link it from the homepage, your Instagram bio, and any
post about exam prep. "Find out where you stand in 12 questions" converts far
better than "sign up".

---

# 2. PAYMENT SCAFFOLDING

## ⚠ READ THIS FIRST — it is NOT live payment processing
This is the plumbing, not a connected processor. It cannot take money yet, and
the webhook DOES NOT VERIFY SIGNATURES. Keep granting access manually in
Admin -> Students until a provider is properly wired in.

## What's built
- lib/payments/subscriptions.ts — the access layer
- app/api/payments/webhook/[provider]/route.ts — a provider-agnostic endpoint
  that records every event idempotently
- (The Subscription and PaymentEvent tables already existed in your schema.)

## The key design decision
Subscriptions do NOT replace Student.hasAccess — they SET it.

Every premium gate in your app already reduces to `student.hasAccess`. Deriving
access at read time would mean rewriting all of them and adding a database call
to each. Setting the flag means:
  - every existing gate keeps working, untouched
  - reads stay fast
  - MANUAL GRANTS STILL WORK exactly as they do now, for anyone who pays by
    bank transfer, cash, or any route the processor doesn't cover

A deliberate asymmetry: a subscription can GRANT access automatically, but only
an admin can REVOKE it (or expireLapsedSubscriptions when a period genuinely
ends). Wrongly cutting off a paying student is far worse than briefly
over-granting.

## Your decision — which processor
You're in Kenya, and STRIPE DOES NOT SUPPORT PAYOUTS TO KENYAN BANK ACCOUNTS.
Realistic options:

  PAYSTACK     — now operates in Kenya, supports cards AND M-Pesa, good docs.
                 Probably your best first choice.
  FLUTTERWAVE  — broad African coverage, M-Pesa, cards.
  M-PESA DARAJA— direct Safaricom integration. Lowest fees, most integration
                 work, and no card support.

All three need a registered business and API keys that only you can obtain.

## What happens when you've chosen
Tell me the provider and I'll add: signature verification, the checkout
initiation flow, plan/pricing wiring to your existing Packages, and the admin
subscription view. That's a contained piece of work now the plumbing exists.

---

# INSTALL
1. Extract the CONTENTS -> Replace all (8 files).
2. npx prisma db push
   (adds nothing new if you already pushed — Subscription/PaymentEvent were
   already in your schema; this just makes sure.)
3. npx tsc --noEmit      <- expect no errors
   npm run dev
4. Test:
   - Visit /readiness -> answer the twelve questions -> check the report shows
     per-topic bars and names your weakest areas.
   - Submit the email form -> should say "you're on the list" and appear in
     Admin -> Newsletter.
5. git add .
   git commit -m "growth: readiness assessment, payment scaffolding"
   git push

## If /readiness says it isn't available
There are no published single-answer questions yet. Publish a quiz with a few
SINGLE type questions and it will populate automatically.
