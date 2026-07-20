# Fix — misplaced type block in analytics-departments.ts

## What went wrong
When I added the Question of the Day metrics, my edit matched the text
`communications: {` — which appears TWICE in the file: once in the TYPE
definition and once in the RETURN object. It landed in the return, so a type
declaration (using `;` and type names) ended up where values belong.

That's why you got six "',' expected" errors from one bad insert.

## The fix
The type block stays in the type definition (line ~78). The return object now
carries the actual values:

    dailyQuestion: {
      participants: trend(dailyNow, dailyPrev),
      correctPct: ...,
      freeSetsClaimed: dailyClaimed,
      conversionToSetPct: ...,
      signedInShare: dailySignedIn,
    },

## Verified before shipping
  - All 5 daily variables are queried, destructured AND used
  - Destructure order matches query order exactly (leads 7 -> daily 5 ->
    newsletter 4). Misalignment there would silently swap values between
    metrics, which is worse than a compile error because nothing would look
    broken.
  - Braces, parens and brackets all balanced.

## Install
1. Extract the CONTENTS -> Replace all (1 file:
   lib/admin/analytics-departments.ts).
2. npx tsc --noEmit     <- expect no errors
   npm run dev
3. git add .
   git commit -m "growth: daily question with free daily set, shareable results"
   git push
