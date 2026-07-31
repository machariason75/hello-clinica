# Do this — Pharmacology Set 7 (the last one)

Two commands. About 3 minutes.

---

## STEP 1 — Unzip and paste

1. Double-click the zip in **Downloads**. **Ctrl + A**, then **Ctrl + C**.
2. Open your **hello-clinica** folder. **Ctrl + V**.
3. Choose **"Replace the files in the destination."**

Then in VS Code: **Terminal → New Terminal**.

---

## STEP 2 — Add Set 7

```
npx tsx prisma/seed-pharmacology-set-7.ts
```

**70 questions.**

---

## STEP 3 — Generate the full exam suite

```
npx tsx prisma/generate-exams.ts fs-pharmacology --size=120
```

With all seven tiers in the pool, the difficulty gradient across the seven
papers is now at its full range — Paper 1 sits mostly on foundations, Paper 7 on
expert material, each with a deliberate minority from elsewhere.

120 questions is 2 hours 24 minutes per paper. At 430 in the pool that still
leaves plenty of variation between papers.

---

## STEP 4 — Confirm

```
npx tsx prisma/audit-question-bank.ts
```

Pharmacology should now show a **✓** and the word COMPLETE.

---

## OPTIONAL — save to project history

```
git add .
```
```
git commit -m "pharmacology set 7: expert and edge cases — section complete"
```
```
git push
```

---

# PHARMACOLOGY IS COMPLETE

| | | |
|---|---|---|
| Set 1 | Foundations | 51 |
| Set 2 | Core Drug Classes | 50 |
| Set 3 | Applied Therapeutics | 60 |
| Set 4 | Special Populations | 60 |
| Set 5 | Toxicity & Overdose | 70 |
| Set 6 | Clinical Reasoning | 70 |
| Set 7 | Expert & Edge Cases | 70 |
| | **7 sets** | **430 questions** |

**430 written, 430 unique — zero duplicates across the whole section.** The
target was 350. Plus seven generated exam papers of up to 120 questions each.

It started at 30 questions in two 15-question fragments.

---

# WHAT SET 7 DOES THAT THE OTHERS COULDN'T

**The exceptions.** Sets 1–6 taught rules. This set covers where each one stops
applying:

- *start low and go slow* — except in sepsis or status epilepticus, where
  cautious titration is under-treatment with a reassuring name
- *reduce the dose in renal impairment* — except in augmented renal clearance,
  where a young septic or burns patient clears drug **faster** than normal and
  standard doses are sub-therapeutic
- *narrow the antibiotic once sensitivities are known* — except in polymicrobial
  infection, profound neutropenia, or where a combination is deliberate
- *beta blockers are contraindicated in asthma* — too absolute; cardioselective
  agents are often tolerated and the cardiac benefit can outweigh the risk
- *stop the drug if a reaction occurs* — except in tuberculosis therapy, where
  interruption breeds resistance and mild reactions are often treated through

Knowing where a rule ends is a different kind of knowledge from knowing the rule,
and it is what this tier is for.

**The depth a strong candidate has.** Pharmacogenomics with the alleles that
actually change practice — HLA-B*57:01 before abacavir, HLA-B*15:02 before
carbamazepine, DPYD before fluorouracil, and why warfarin genotyping never
replaced the INR. How to read the evidence behind a drug: relative versus
absolute risk, what number needed to treat depends on, why surrogate endpoints
mislead, what a non-inferiority trial actually claims. Resistance mechanisms
beyond naming them. And the modalities that postdate most textbooks — checkpoint
inhibitors and immune-related toxicity, CAR-T and cytokine release syndrome,
biosimilars, antibody-drug conjugates.

One area is regionally weighted again: **substandard and falsified medicines**
are covered as a clinical problem, not a regulatory footnote — because a
sub-potent antimalarial looks exactly like treatment failure and drives
resistance while doing it.

---

# HOW IT WAS CHECKED

70 questions, 70 correct answers, 280 choices, ten topics of exactly seven.

Zero exact duplicates against Sets 1–6 or the five earlier subject waves.

Highest similarity to any prior question was 0.33 — "what is the difference
between an agonist and an antagonist" against "what is the difference between
off-label and unlicensed use". Identical grammar, unrelated content. No action
needed.

Across the whole section: **430 questions written, 430 unique.** Not one
duplicate in seven sets.

---

# WHAT NEXT

Pharmacology is now the worked template. Every future section follows its shape:
seven laddered practice sets, 50 minimum and more where the content is broad,
exam papers generated from the pool.

Two things worth doing before starting the next section:

**1. Run the audit** and send me the output. The picture has changed since the
first one — the stubs are hidden, exams are generated rather than written, and
the outstanding figure is roughly half what it was. It will rank sections by
closest-to-complete, which is the right order to work in.

**2. Decide the order.** My suggestion, unless the audit says otherwise:
Pathology and Microbiology next. Both already hold five practice sets, both
underpin every clinical specialty on the site, and both are what a prospective
subscriber opens to judge whether the question bank is serious.

And still outstanding from much earlier, in case it has slipped:

- **Resend** — password reset emails still are not sending. Only you can do it.
- **The cron route** — `pruneOldAttempts()` and `expireLapsedSubscriptions()`
  are written and still called by nothing. A lapsed subscription currently keeps
  access forever.
