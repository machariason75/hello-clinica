# Do this — hide the empty stubs, add Pharmacology Set 2

Two commands after pasting. About 5 minutes.

---

## STEP 1 — Unzip and paste

1. Double-click the zip in **Downloads**. Press **Ctrl + A**, then **Ctrl + C**.
2. Open your **hello-clinica** folder. Press **Ctrl + V**.
3. Choose **"Replace the files in the destination."**

Then in VS Code: **Terminal → New Terminal**.

---

## STEP 2 — See the placeholder sections

```
npx tsx prisma/stub-check.ts
```

Changes nothing. It lists every quiz holding fewer than 15 questions and tells
you which are currently visible to students.

You'll see about eleven — NAPLEX with 3 questions, USMLE Step 1 with 4, TEAS
Reading with 6, and so on.

---

## STEP 3 — Hide them

```
npx tsx prisma/stub-check.ts --hide
```

This unpublishes those quizzes. **Nothing is deleted.** They come straight back
with:

```
npx tsx prisma/stub-check.ts --show
```

or automatically as soon as we fill them with real content.

**Why do this.** A student who opens "USMLE Step 1", finds four questions and a
scoreboard doesn't think *this section is incomplete*. They think *this site is
a shell* — and they don't stay to find out whether Haematology is any better.
Those eleven stubs are costing you more credibility than they earn in traffic,
and they'd keep costing it for the whole year it takes to fill them.

If you'd rather leave any of them visible, skip this step and hide individual
quizzes in Admin instead.

---

## STEP 4 — Add Pharmacology Set 2

```
npx tsx prisma/seed-pharmacology-set-2.ts
```

50 questions. Live immediately.

---

## OPTIONAL — save to project history

```
git add .
```
```
git commit -m "stub check, pharmacology set 2"
```
```
git push
```

---

# WHAT THE STOCKTAKE ACTUALLY TOLD US

Three things worth knowing.

**1. The bank is smaller than the numbers suggest.** 3,423 question placements,
but only **1,389 unique questions**. Nearly 60% is the same questions counted
twice, because exams were built by joining practice sets together. My own five
waves did this too — `infectious-diseases-exam-1` is practice set 1, question
for question. That was my error and it inflates every figure on the report.

**2. Eleven sections are placeholder stubs.** 3 to 6 questions each. That's what
steps 2 and 3 address, and it's the most urgent thing on the whole list — not
because it's the biggest gap, but because it's the one actively costing you
subscribers today.

**3. The "biggest gaps" ranking at the bottom of that report is the wrong work
order.** It sorts by emptiness, which is why MPJE and Pharmacy Calculations came
top. Emptiness isn't urgency. I've set out the order I'd actually work in below.

---

# THE PLAN, WITH REAL NUMBERS

The stocktake says **30,877 questions outstanding** against your specification.
At 100–150 per drop that's roughly 250 drops — about two years at a steady pace.

I don't think you should accept that number, because most of it comes from one
decision that I'd now push back on.

## The exam question

Your spec asks for 7 exam sets of 50 **completely separate** questions per
section. That's 350 exam questions per section — **half the entire build**, for
the half of the library students use least. A practice set gets worked through
repeatedly; an exam gets sat once or twice.

**What I'd recommend instead:** build 7 practice sets of 50 unique questions per
section — 350 genuinely unique questions, exactly as you specified — and
generate each exam paper as a different randomised 50-question selection from
that pool.

You still get:

- 7 practice sets, unique, laddered in difficulty, each independently extendable
- 7 exam papers, each a different mix, none identical to any practice set
- Every question reused rather than written once and rarely seen

And it halves the build from ~250 drops to ~125. When you later add 20 questions
to a set, every future exam paper draws on them too.

This is how the large commercial question banks work, and it needs no code
change — just different seed logic.

**Say the word and I'll build it that way. Otherwise I'll continue with fully
separate exam sets as you originally specified.** Both are legitimate; one is
twice the work.

## The order I'd build in

**Phase 1 — Stop the bleeding.** Hide the eleven stubs. Done in step 3 above.

**Phase 2 — Finish Pharmacology as the template.** It touches every clinical
specialty on the site and currently holds 15-question fragments. Sets 1 and 2
are done. Five more drops completes it, and it becomes the worked example every
other section is built against.

**Phase 3 — The six flagship sections.** Pathology, Microbiology, Physiology,
Anatomy, Internal Medicine, Paediatrics. These are what a prospective subscriber
opens first.

**Phase 4 — Everything else**, including the exam-prep sections once the medical
core is solid.

---

# WHAT'S IN SET 2

Tier 2 of 7 — the drug classes themselves, assuming the principles from Set 1
and not re-testing them.

antihypertensives · heart failure and antiarrhythmics · anticoagulants and
antiplatelets · antibiotic classes · antivirals, antifungals and antiparasitics ·
respiratory · gastrointestinal · psychotropics · antiepileptics ·
immunosuppressants and biologics

Checked before packaging: 50 questions, 50 correct answers, zero duplicates
within the set, and zero overlap with Set 1 or any earlier wave.
