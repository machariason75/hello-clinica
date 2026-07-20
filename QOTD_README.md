# Question of the Day + free daily set + shareable results

Replaces the earlier Question of the Day pack — extract this instead.

## How it works now

### The question
- Drawn from the WHOLE Question Bank, premium sections included. One question a
  day from paid content is a sample, not a giveaway, and it advertises the bank
  far better than restricting it to free sections would.
- NO exam or section label. It's presented as a plain clinical question, so it
  speaks to every visitor instead of signalling "not for you" to anyone sitting a
  different exam.
- Same question for everyone, changing daily — so it can be posted, discussed
  and linked to.
- Anyone can answer, account or not. Answering reveals the full rationale.

### The free set — the conversion moment
After answering:

  NOT SIGNED IN -> "Create a free account and take one complete set a day —
                    any section, including premium ones."
  SIGNED IN     -> "You've unlocked a free practice set today. Pick any set,
                    including premium sections." -> Choose your free set
  ALREADY USED  -> "Come back tomorrow — or get unlimited access."

The entitlement is CLAIMED when they open a quiz, not when they answer, so it's
spent on something they actually chose to start. Once claimed, that same quiz
stays open to them all day (they can finish it), but a second premium set that
day hits the normal lock.

WHY IT REQUIRES AN ACCOUNT: anonymous entitlement would be farmed by clearing
cookies. More importantly this is the natural conversion point — a curious
stranger becomes a registered user, and you capture the email.

### Admin data — one row per person per day, guaranteed
A new `daily_question_attempts` table with a UNIQUE index on
(identityKey, dayKey). Replaying the daily question UPDATES that row rather than
adding another, so duplicate entries are impossible at the DATABASE level, not
merely discouraged in code — exactly as you asked.

Identity is "student:<id>" when signed in, "visitor:<uuid>" (a cookie) when not,
so both cases are covered by one constraint.

Admin -> Analytics gains a "Question of the Day" panel:
  - people who answered (with movement vs the previous period)
  - percentage answering correctly
  - how many had accounts
  - free sets claimed
  - what share went on to take a full set  <- your funnel conversion rate

### Shareable results (unchanged from the previous pack)
After any quiz, a Share button. Native share sheet on mobile (WhatsApp,
Instagram, Messages); copies text and link on desktop.

## Install — IN ORDER
1. Extract the CONTENTS -> Replace all (11 files).
2. Add the new table:
       npx prisma db push
3. npx tsc --noEmit      <- expect no errors
   npm run dev
4. Test the whole funnel:
   a. SIGNED OUT, homepage -> answer the daily question -> you should see the
      rationale and a "create a free account" prompt.
   b. Register or sign in (as a NON-premium student) -> answer again -> you
      should now see "You've unlocked a free practice set today".
   c. Click through to any PREMIUM quiz -> it should open and play in full.
   d. Go to a DIFFERENT premium quiz -> it should show the premium lock.
   e. Return to the first quiz -> still open (so they can finish it).
   f. Admin -> Analytics -> the Question of the Day panel shows the numbers.
5. git add .
   git commit -m "growth: daily question with free daily set, shareable results"
   git push

## One thing to watch
Premium students are unaffected — they already have everything, so the free-set
logic never runs for them.
