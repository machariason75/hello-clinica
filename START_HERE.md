# Do this — Pharmacology Set 4

Two commands. About 3 minutes.

---

## STEP 1 — Unzip and paste

1. Double-click the zip in **Downloads**. **Ctrl + A**, then **Ctrl + C**.
2. Open your **hello-clinica** folder. **Ctrl + V**.
3. Choose **"Replace the files in the destination."**

Then in VS Code: **Terminal → New Terminal**.

---

## STEP 2 — Add Set 4

```
npx tsx prisma/seed-pharmacology-set-4.ts
```

60 questions. Pharmacology now holds **221 unique questions** across four sets.

---

## STEP 3 — Refresh the exam papers

```
npx tsx prisma/generate-exams.ts fs-pharmacology --size=70
```

Worth doing after every new set. The papers are regenerated from the enlarged
pool, so all seven now draw on Set 4 as well — and because there are four tiers
to spread across instead of three, the difficulty gradient between Paper 1 and
Paper 7 is noticeably wider than last time.

**The pool now supports larger papers.** If you want the exams to bite harder:

```
npx tsx prisma/generate-exams.ts fs-pharmacology --size=100
```

100 questions in 2 hours. At 221 in the pool that still leaves plenty of
variation between papers.

---

## OPTIONAL — save to project history

```
git add .
```
```
git commit -m "pharmacology set 4: special populations"
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
| Set 5 | Toxicity & Overdose | next |
| Set 6 | Clinical Reasoning | |
| Set 7 | Expert & Edge Cases | |

**221 of roughly 380.** Three drops to finish.

---

# WHAT'S IN SET 4

This is the tier that separates someone who has memorised drug facts from
someone who can actually prescribe. Ten areas, six questions each:

pregnancy principles · prescribing in pregnancy · breastfeeding · neonates and
infants · children and adolescents · older adults · frailty and falls · obesity
and weight-based dosing · palliative and end-of-life care · multimorbidity and
guideline conflict

A few of these deserve saying out loud, because they're the ones most often
missing from imported question banks:

**Breastfeeding.** The default advice to "stop breastfeeding" is usually wrong
and causes real harm. The set covers what actually determines infant exposure,
why timing doses around feeds works, and which infant is genuinely vulnerable.

**Multimorbidity.** Four single-disease guidelines applied additively is how a
patient ends up on fifteen medicines that each look justified. Prescribing
cascades, treatment burden and time-to-benefit are covered as clinical concepts,
not as commentary.

**End-of-life care.** Anticipatory prescribing, the subcutaneous route, opioids
for breathlessness, and what to say to a family who fear that morphine will
hasten death. Under-treating pain out of that fear causes avoidable suffering,
and the reasoning is worth a student having ready.

---

# HOW IT WAS CHECKED

60 questions, 60 correct answers, 240 choices, ten topics evenly weighted.

Zero exact duplicates against Sets 1–3 or any of the five earlier subject waves.

I also ran a similarity check for questions that differ in wording but test the
same thing — Set 3 already covered organ impairment and older patients, so there
was real scope for overlap. Two pairs flagged; both turned out to share
vocabulary while testing entirely different things (heparin characteristics
versus heparin dosing in obesity). Nothing needed rewriting.

⚠ Specific agents and thresholds vary by guideline. These test the reasoning
that decides the choice, which travels — but review anything numerical against
Kenyan guidance before promoting the section.
