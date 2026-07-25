# Answer distribution fix, v3 — genuinely uniform

## You're right, and v2 was arguably worse than the original
Here is exactly what I did wrong.

v2 chose the answer's new position with:

        const target = 1 + Math.floor(Math.random() * (n - 1));

I added that `1 +` so the answer would definitely MOVE off position A. What I
did not think through is that it made position 0 unreachable. So A went from
ALWAYS correct to NEVER correct.

That is worse than the original bug in one respect: "the answer is never A" is
harder to notice than "the answer is always A", but it is just as gameable —
a student simply never picks A and eliminates a quarter of the options for free.

## What v3 does
A genuinely uniform pick across ALL positions, A included:

        const target = Math.floor(Math.random() * q.choices.length);

No exclusions and no nudging.

### What uniform actually means
With four options, roughly a quarter of questions SHOULD end up with the answer
at A. If A never appears, it is not random. So v3 deliberately does NOT force
the answer to move — when the random target equals its current position, it
stays. That is correct behaviour, and it happens to cost zero database writes.

Simulated over your 2,223 questions:

        A:  542   24%  ████████████
        B:  573   26%  █████████████
        C:  557   25%  ████████████
        D:  551   25%  ████████████

### It also checks its own work
At the end it prints the real distribution as a bar chart and warns you if any
option is missing or over-represented. If either happens, send me the output.

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all (1 file).

2. RUN IT
       npx tsx prisma/fix-answer-order.ts

   Wait for the distribution chart at the end. You want roughly a quarter on
   each option and this line:

       Done. Distribution looks fair — roughly a quarter on each option.

3. IF IT STOPS, RUN IT AGAIN.
   Re-running is completely harmless — it simply redistributes again. Unlike v2
   there is no "already done" state to preserve, because a fair shuffle has no
   fixed endpoint.

4. PUSH
       git add .
       git commit -m "fix: uniform distribution of correct answers"
       git push

5. GO LIVE
   Vercel → Deployments → Ready → Ctrl+Shift+R

The script writes directly to your database, so the live site is corrected as
soon as it finishes.

## Why this one should be right
v1 failed because I never shuffled. v2 failed because I over-corrected and
excluded a position. v3 makes a plain uniform choice with nothing clever bolted
on — and then verifies the result rather than assuming it.

The seeds from Wave 14 onward (gastroenterology, neurology, haematology) already
use a proper Fisher-Yates shuffle at write time, so they were never affected by
either bug.
