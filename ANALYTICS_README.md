# Analytics — departmental performance view

## What was wrong before
The analytics page only measured LEADS (consultations, contacts, newsletter,
downloads). It was blind to the actual product: nobody could see whether the
Question Bank was being used, whether free users were converting to premium, or
which content was working.

## What you get now (added ABOVE the existing charts, nothing removed)

### Six department panels, each with period-over-period movement
Every panel leads with ONE headline number and whether it's up or down against
the previous 30 days — direction, not just a count.

1. QUESTION BANK — attempts, average score, pass rate, active learners,
   practice vs exam split
2. STUDENTS & CONVERSION — new registrations, total, premium count and
   CONVERSION RATE, people awaiting access
3. LIBRARY — downloads split books/resources, most downloaded titles,
   published counts
4. AUDIOBOOKS — listeners, chapters finished, completion rate, most listened
5. LEADS & ADVISING — consultations, contact requests, package inquiries,
   how many are still unhandled
6. COMMUNICATIONS — subscribers, unsubscribes, campaigns, and email delivery
   (sent / queued / failed)

### "Where students struggle most" — the most useful panel on the page
Aggregates the per-attempt topic breakdown across every attempt and ranks topics
by accuracy, weakest first, with a colour-coded bar. This tells you exactly where
to write new questions, add a resource, or focus a coaching session. No generic
analytics tool can give you this — it comes from your own question data.

Topics only appear once students have answered at least 5 questions in them, so
you're not reacting to noise.

### An alert you actually need
If email has never successfully sent, a warning banner appears at the top saying
so, with the queued count. Right now that will almost certainly fire — it's the
Resend key that was never configured, and it means newsletters, password resets
and form notifications are all silently going nowhere.

## Two bugs I found and fixed while building this
- DownloadLog uses `downloadDate`, not `createdAt`. Querying the wrong field
  would have thrown at runtime.
- Consultation.status is an ENUM (`NEW`), not the lowercase string `"new"`.
Both are now correct. Every model and field used was verified against your
schema.

## Install
1. Extract the CONTENTS -> Replace all (3 files; 2 are brand new).
2. npx tsc --noEmit      <- expect no errors
   npm run dev
   Open /admin/analytics.
3. git add .
   git commit -m "analytics: departmental performance and weak-topic insight"
   git push

(No database change — no prisma db push needed.)

## Note on empty panels
If a panel shows zeros, that's honest reporting, not a bug — it means there's no
data for that department yet. Weak topics need a handful of quiz attempts before
anything appears.
