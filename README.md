# Answer-order fix, v2 — RESUMABLE

## Why v1 stopped
Two mistakes, both mine.

1. MY RETRY MISSED THE ERROR.
   I checked for the word "Connection" with a capital C. The actual message was
   "Server has closed the connection" — lowercase. So P1017, the precise error
   the retry existed to catch, went straight past it and killed the run.

2. IT WASN'T RESUMABLE.
   2,223 questions (exams hold their own copies of questions, which is why the
   number is higher than 788) at four writes each is roughly 8,900 updates in
   one go. On a free-tier pooled connection that is asking for trouble — and a
   drop meant starting from zero.

## What v2 changes
  - RESUMABLE: it skips any question whose correct answer has already moved off
    position A. Your first run fixed roughly 200 questions and those are now
    permanently done. Re-running continues from there.
  - HALF THE WRITES: it swaps the correct answer into a random slot instead of
    rewriting every choice — two updates per question rather than four.
  - RETRY THAT ACTUALLY WORKS: matching is now case-insensitive and explicitly
    includes P1017 and timeouts, with five attempts and increasing backoff.
  - BREATHING ROOM: a short pause every 50 questions, which keeps a pooled
    connection far healthier over a long run.
  - If it does stop, it tells you plainly that progress is saved and to run it
    again.

## INSTALL — full commands

1. EXTRACT
   Open the zip → go INTO `hello-clinica` → drag the `prisma` folder into
   C:\Users\user\Documents\hello-clinica → Replace all (1 file).

2. RUN IT
       npx tsx prisma/fix-answer-order.ts

   It opens by telling you where it stands, e.g.

       2223 questions total
       213 already randomised (skipping)
       2010 still to fix

3. IF IT STOPS AGAIN, JUST RUN THE SAME COMMAND AGAIN.
   Each run completes more. Repeat until it prints:

       Correct answer positions now:  A:556   B:558   C:554   D:555
       Done. Answers are distributed across the options.

   If Supabase is paused, resume it in the dashboard first.

4. PUSH
       git add .
       git commit -m "fix: randomise correct answer positions across question bank"
       git push

5. GO LIVE
   Vercel → Deployments → Ready → Ctrl+Shift+R

The repair writes directly to your database, so the live site is corrected as
soon as the script finishes. The push is only for the script file itself.

## Note on the numbers
You will see about 2,223 questions rather than 788. That is expected — every
exam holds its own copies of the questions it contains, so the same item exists
several times in the database. All copies get fixed.
