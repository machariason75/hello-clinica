# Fix — nullable providerRef in the payment webhook

## The error
    Type 'string | null' is not assignable to type 'string'

## What it was really telling us
This wasn't just a type annoyance — TypeScript caught a genuine design fault.

The unique index is on (provider, eventType, providerRef), and providerRef is
nullable. In Postgres, NULL never equals NULL, so two rows with a null reference
do NOT conflict. An upsert keyed on that index is therefore meaningless when the
reference is missing: it would never match, and could silently create duplicate
event rows — which for a PAYMENT webhook means a retry could grant a second
subscription period.

## The fix
Two explicit branches:
  - providerRef PRESENT -> upsert on the unique index (proper deduplication),
    and if the row is already marked processed, acknowledge and STOP. That's
    what stops a provider retry granting access twice.
  - providerRef ABSENT  -> just create the row. There is nothing to deduplicate
    against, and pretending otherwise would be worse than admitting it.

Every later write now addresses the row BY ID rather than by updateMany on the
same fields — with a null providerRef, updateMany would have matched every event
that happened to have no reference, and stamped them all.

## Install
1. Extract the CONTENTS -> Replace all
   (1 file: app/api/payments/webhook/[provider]/route.ts).
2. npx tsc --noEmit     <- expect no errors
   npm run dev
3. git add .
   git commit -m "growth: readiness assessment, payment scaffolding"
   git push

## Still true
This webhook remains SCAFFOLDING. It does not verify signatures, so it must not
be relied on to grant paid access. Keep granting manually in Admin -> Students
until you pick a processor and I wire it up properly.
