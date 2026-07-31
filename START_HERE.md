# Do this — Pharmacology Set 5

Two commands. About 3 minutes.

---

## STEP 1 — Unzip and paste

1. Double-click the zip in **Downloads**. **Ctrl + A**, then **Ctrl + C**.
2. Open your **hello-clinica** folder. **Ctrl + V**.
3. Choose **"Replace the files in the destination."**

Then in VS Code: **Terminal → New Terminal**.

---

## STEP 2 — Add Set 5

```
npx tsx prisma/seed-pharmacology-set-5.ts
```

**70 questions.** Pharmacology now holds **291 unique questions** across five
sets.

---

## STEP 3 — Regenerate the exams, bigger

```
npx tsx prisma/generate-exams.ts fs-pharmacology --size=100
```

At 291 in the pool, 100-question papers now have real room to differ from each
other — and with five tiers to spread across, the gap between Paper 1 and Paper 7
is wider again.

If you want to push further, `--size=120` still works comfortably at this pool
size. Each paper runs to 2 hours 24 minutes at that length, which is a serious
sitting.

---

## OPTIONAL — save to project history

```
git add .
```
```
git commit -m "pharmacology set 5: toxicity and overdose"
```
```
git push
```

---

# WHERE PHARMACOLOGY STANDS

| | | |
|---|---|---|
| Set 1 | Foundations | 51 ✓ |
| Set 2 | Core Drug Classes | 50 ✓ |
| Set 3 | Applied Therapeutics | 60 ✓ |
| Set 4 | Special Populations | 60 ✓ |
| Set 5 | Toxicity & Overdose | 70 ✓ |
| Set 6 | Clinical Reasoning | next |
| Set 7 | Expert & Edge Cases | |

**291 questions. Two drops to finish.**

---

# ONE TOPIC IS DELIBERATELY DIFFERENT

Seven of these seventy questions cover **Environmental & Non-Pharmaceutical
Poisoning**, and they were chosen for where your students will actually practise
rather than for what appears in an American question bank:

- organophosphate pesticide, and why under-dosing atropine is what kills —
  the requirement can be many times any dose used elsewhere, and unfamiliarity
  with that quantity is the usual error
- paraffin ingestion in a child, and why inducing vomiting makes it worse
- snakebite first aid, including the interventions that cause harm
- methanol in illicit alcohol, and why one case should prompt a search for others
- traditional and herbal remedy toxicity in unexplained organ failure — asked
  about directly, because patients don't volunteer it
- corrosive ingestion, and why neutralising burns twice
- carbon monoxide, and why the oximeter reads normal

Elsewhere in the set, the G6PD question lists the oxidant drugs to avoid, which
matters here where both G6PD deficiency and antimalarial prescribing are common.

That regional weighting is a genuine differentiator against imported banks, and
it's worth saying explicitly when you describe the section to students.

---

# HOW IT WAS CHECKED

70 questions, 70 correct answers, 280 choices, ten topics of exactly seven.

Zero exact duplicates against Sets 1–4 or any of the five earlier subject waves.

I also ran a similarity scan for questions worded differently but testing the
same thing. Five pairs flagged — all turned out to share only grammatical shape
("which features suggest X toxicity" for digoxin versus lithium), not content.
The closest, SSRI versus benzodiazepine tapering, tests different mechanisms and
different consequences: one is a discontinuation syndrome mistaken for relapse,
the other is seizure risk over a months-long taper. Nothing needed rewriting.

Careful attention was paid to not repeating earlier material. Set 1 already
covered the paracetamol mechanism, so this set covers level timing, risk factors,
the acetylcysteine infusion reaction and markers of established liver failure
instead. Set 2 covered the tricyclic overdose mechanism, so this covers its
management. Set 2 covered digoxin's toxic features, so this covers reversal and
the role of potassium.

⚠ Antidote doses, decontamination thresholds and dialysis criteria vary by
guideline and by what is actually stocked. These test recognition and reasoning,
which travel — but check specifics against your own poisons service and
formulary before promoting the section.
