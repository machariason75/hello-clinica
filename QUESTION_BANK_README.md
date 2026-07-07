# Question Bank — Drop 1 (the quiz engine)

A new "Question Bank" tab with a full practice-quiz experience, in your existing
site style. This drop proves the whole flow end-to-end with one ready-to-play
sample quiz. (Admin authoring, more question types, flashcards, saved progress,
and the AI tutor come in Drops 2–3.)

## What you get
- New top-nav tab: **Question Bank** -> category cards -> quiz list -> the player.
- Quiz player: **Timed mode** (countdown) and **Study mode** (instant feedback),
  a question-navigator grid, flag-for-review, single / select-all / true-false
  questions.
- On submit: a **scored report** with a **per-topic breakdown** (your strengths
  and weak spots) and a **review** screen with a full rationale for every answer.
- One complete ORIGINAL sample: category "NCLEX-RN" with a 10-question set.
- Finishing a quiz quietly saves an (anonymous) attempt — this sets up the
  "sign in to save progress" feature in Drop 2.

## Install — follow IN ORDER
1. Extract over your hello-clinica folder -> Replace all.

2. Add the new tables to the database (safe, additive):
       npx prisma db push

3. Load the sample quiz (safe to run once; re-running won't duplicate):
       npx tsx prisma/seed-quiz.ts
   You should see: Seeded category "NCLEX-RN" and quiz ... with 10 questions.

4. Test locally:
       npm run dev
   Go to the site -> Question Bank -> NCLEX-RN -> "NCLEX-RN Fundamentals —
   Practice Set 1". Try BOTH Timed and Study modes, submit, and check the
   topic breakdown + answer review.

5. Push live:
       git add .
       git commit -m "Question Bank Drop 1: quiz engine + NCLEX sample"
       git push

## Notes
- The sample questions are original, written in NCLEX style — not copied from any
  exam or site.
- No admin screen for quizzes yet (that's Drop 2). For now the sample is loaded by
  the seed above; tell me when Drop 1 looks good and I'll build the authoring UI
  plus HESI/TEAS banks and the AI features.
