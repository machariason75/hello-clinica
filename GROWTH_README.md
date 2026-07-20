# Growth features — Question of the Day + shareable results

Two features that work together: one gives strangers a reason to arrive and
return, the other gives existing students a reason to bring their classmates.

## 1. Question of the Day (homepage)

One free question, the SAME for everyone, changing daily at midnight UTC.
Answerable with no account — the point is to prove the quality of your question
bank to a stranger in about twenty seconds.

  - Pick an answer -> instant right/wrong -> the FULL rationale
  - Then two buttons: the quiz it came from, and the Question Bank

Why the full rationale rather than a teaser: the rationale IS the product. A
truncated one reads as a bait-and-switch; a complete one demonstrates you write
better explanations than the free sites they're currently using.

TWO RULES IT ENFORCES:
  1. Only questions from FREE sections. It walks the whole category tree, so a
     question inside a free sub-section of a PREMIUM parent is correctly treated
     as premium and never shown. Your paid content is never given away.
  2. Deterministic — everyone sees the same question on the same day, so it can
     be posted, discussed and linked to.

It renders nothing at all if there are no eligible free questions, so it can
never appear broken or empty.

The homepage now revalidates hourly, otherwise the static build would freeze the
question forever.

### What to do with it
This is free daily content for social and email. Post the day's question to
Instagram/TikTok with "answer in the comments", then post the rationale later.
It costs you nothing to produce — it's already written.

## 2. Shareable results (quiz results screen)

After finishing any quiz, a "Share result" button.

  - On mobile: opens the NATIVE share sheet (WhatsApp, Instagram, Messages) —
    which is where cohorts actually talk
  - On desktop: copies the text and link, and confirms it copied

The message leads with the score and names the exam, because that's what makes a
classmate curious enough to click:

  "I scored 84% on the NCLEX-RN Fundamentals practice set on Hello Clinica.
   Free practice questions with full rationales: <link>"

Nursing and med cohorts are small, competitive, and constantly in group chats.
This is the cheapest acquisition channel you have.

## Install
1. Extract the CONTENTS -> Replace all (5 files).
2. npx tsc --noEmit      <- expect no errors
   npm run dev
3. Check:
   - Homepage: the Question of the Day card appears below the trust indicators.
     Answer it — the rationale should appear.
   - Take any quiz to the results screen -> "Share result" button.
     (Test the share sheet on a PHONE; desktop will copy instead.)
4. git add .
   git commit -m "growth: question of the day, shareable quiz results"
   git push

(No database change — no prisma db push.)

## If the Question of the Day doesn't appear
It means no FREE questions exist yet — every published question is inside a
premium section. Either mark one section as non-premium in
Admin -> Question Bank, or add a free taster set. That's working as intended:
it would rather show nothing than give away paid content.
