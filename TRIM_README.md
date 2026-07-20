# Question of the Day — removed the duplicate account pitch

## What changed (1 file)
The "Want a full practice set, free? / Create a free account / Sign in" block is
GONE. You were right — it was making the same ask as the premium banner that
already drifts in, and two pitches on one screen is one too many.

For signed-out visitors the card is now purely question -> answer -> rationale.
Nothing else. The premium banner does the converting, as you intended.

## One thing I kept, and why
Signed-in students still see a SINGLE quiet line:

    "You have a free practice set today — pick any set."

It's one line of normal body text with a small icon, not a coloured call-to-action
panel. The reason: without it, a logged-in student has no way of knowing the
entitlement exists, and the feature would be invisible — they'd never use the
thing we just built. That's information, not advertising.

If you'd rather it disappeared entirely too, say so and I'll remove it — but then
we'd want the free set surfaced somewhere else (the account page, or a note on
the Question Bank), or nobody will find it.

Also removed the now-unused ArrowRight and LogIn icon imports.

## Install
1. Extract the CONTENTS -> Replace all (1 file:
   components/sections/QuestionOfTheDay.tsx).
2. npx tsc --noEmit     <- expect no errors
   npm run dev
   Check the homepage SIGNED OUT: question, answer, rationale, and nothing else.
3. git add .
   git commit -m "growth: trim duplicate account pitch from question of the day"
   git push
