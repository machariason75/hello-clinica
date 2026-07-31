# Do this — Pharmacology Set 6

Two commands. About 3 minutes.

---

## STEP 1 — Unzip and paste

1. Double-click the zip in **Downloads**. **Ctrl + A**, then **Ctrl + C**.
2. Open your **hello-clinica** folder. **Ctrl + V**.
3. Choose **"Replace the files in the destination."**

Then in VS Code: **Terminal → New Terminal**.

---

## STEP 2 — Add Set 6

```
npx tsx prisma/seed-pharmacology-set-6.ts
```

**70 questions.** Pharmacology now holds **361 unique questions** across six sets.

That figure passes the 350 target for a completed section — with one set still
to come.

---

## STEP 3 — Regenerate the exams

```
npx tsx prisma/generate-exams.ts fs-pharmacology --size=100
```

With six tiers in the pool the difficulty gradient is now close to its full
range. `--size=120` is comfortable at this pool size if you want the later
papers to be a genuine endurance test.

---

## OPTIONAL — save to project history

```
git add .
```
```
git commit -m "pharmacology set 6: clinical reasoning"
```
```
git push
```

---

# THIS SET IS WRITTEN DIFFERENTLY

Sets 1–5 test whether a fact is known. Set 6 tests whether facts can be
**combined under uncertainty**. Every question is a situation, and the answer
requires holding two or three things at once — the drug, the patient, and what
else could explain what you are seeing.

The stems are roughly twice as long as earlier sets, because a reasoning
question needs a scenario before it can ask anything.

**The wrong answers are deliberately tempting.** Several are exactly what a
competent person would do if they stopped thinking one step too early:

- reaching for a diuretic when a calcium channel blocker caused the ankle oedema
- switching to an ARB for a cough in a patient who is actually decompensating
- escalating asthma treatment past an unrecognised inhaler technique problem
- broadening the antibiotic when the real problem is an undrained abscess
- increasing an insulin dose when the readings and the HbA1c disagree
- withholding anticoagulation from a faller whose stroke risk is far higher

That failure mode — stopping one step early — is the whole reason this tier
exists.

---

# THE TEN AREAS

is this the drug? · the deteriorating patient on treatment · treatment failure
or non-adherence · competing risks and trade-offs · the confused older patient ·
interpreting the number · handover, transitions and error · emergency decisions
under uncertainty · stopping, switching or continuing · when guidelines don't fit

Two are worth pointing out.

**Interpreting the number** covers the situations where the result and the
patient disagree: a level taken at the wrong time, a therapeutic phenytoin level
in a patient with low albumin who is clearly toxic, a raised CK after a weekend
of heavy work, an eGFR flattered by low muscle mass. Treating the number instead
of the person is one of the most reliable ways to cause harm.

**Handover and error** includes what to do in the minutes after realising you
have given a tenfold overdose. The correct sequence — patient first, then
openness, then reporting — is worth a student having rehearsed before they need
it, because the instinct to reach for paperwork or silence is strong and both
delay the only action that changes the outcome.

---

# HOW IT WAS CHECKED

70 questions, 70 correct answers, 280 choices, ten topics of exactly seven.

Zero exact duplicates against Sets 1–5 or the five earlier subject waves.

The similarity scan initially flagged one pair — a Set 3 question about
prescribing an unfamiliar drug in organ impairment shared its phrasing with a
question here about prescribing overnight with incomplete records. Different
content, but the wording collided, so I rewrote the new one. Highest remaining
similarity to any prior question is now below the threshold.

Average stem length confirms the intended shift: 57 characters in Set 1, 108
here.

⚠ Local availability and guideline specifics vary. These test the reasoning
process, which travels — but review anything numerical against Kenyan guidance
before promoting the section.
