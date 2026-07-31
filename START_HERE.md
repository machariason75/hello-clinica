# Do this — Pathology Set 2

Two commands. About 3 minutes.

---

## STEP 1 — Unzip and paste

1. Double-click the zip in **Downloads**. **Ctrl + A**, then **Ctrl + C**.
2. Open your **hello-clinica** folder. **Ctrl + V**.
3. Choose **"Replace the files in the destination."**

Then in VS Code: **Terminal → New Terminal**.

---

## STEP 2 — Add Set 2

```
npx tsx prisma/seed-pathology-set-2.ts
```

**70 questions.** Pathology now holds **205**.

---

## STEP 3 — Regenerate the exams

```
npx tsx prisma/generate-exams.ts fs-pathology --size=70
```

At 205 in the pool, `--size=100` also works comfortably now.

⚠ Still do **not** run `npx tsx prisma/seed-pathology.ts` — the old file deletes
before it writes.

---

## OPTIONAL — save to project history

```
git add .
```
```
git commit -m "pathology set 2: core processes"
```
```
git push
```

---

# WHAT'S IN SET 2

Set 1 covered how cells are injured, die and repair. Set 2 covers what is built
on top of that. Ten topics, seven questions each:

oedema and effusions · thrombosis and embolism in depth · infarction and
ischaemia · shock and organ failure · vascular pathology · immunopathology ·
genetic basis of disease · carcinogenesis · infection and host response ·
environmental and nutritional pathology

As with Set 1, this goes **beneath** the existing five sets rather than beside
them. The old General Pathology Set 2 asks what Virchow's triad is; this asks
why arterial and venous thrombi differ in composition and what follows for
treatment — the reason antiplatelets dominate arterial disease and
anticoagulants dominate venous disease.

## Three areas worth pointing out

**Environmental and nutritional pathology is regionally weighted.** Kwashiorkor
versus marasmus gets a full question — the distinction that explains why a child
with oedema can look less thin while being more critically unwell, and why
rehydration needs care rather than the volumes used for simple dehydration.
Indoor cooking smoke is covered as a genuine cause of COPD in people who have
never smoked, disproportionately affecting women and young children. Silica
exposure is covered alongside its effect on tuberculosis risk.

**Tuberculosis pathology is treated properly.** The Ghon complex as the
anatomical basis of latency, and why post-primary disease favours the apices and
cavitates — high oxygen tension suiting an aerobe, and caseous material
discharging into a bronchus, which is the moment the patient becomes highly
infectious. The Infectious Diseases wave covered TB clinically; this covers what
is actually happening in the tissue.

**Shock is covered as mechanism rather than protocol.** Why the peripheries are
warm in septic shock and cold in cardiogenic shock, why hypotension is a late
sign marking failure of compensation rather than the onset of shock, and why
multi-organ dysfunction can progress after the original insult has been
controlled — the patient failing from the response rather than the cause.

---

# HOW IT WAS CHECKED

70 questions, 70 correct answers, 280 choices, ten topics of exactly seven, no
duplicates within the file.

Zero exact overlap with Pathology Set 1, the 32 existing pathology stems, or any
of the twelve sets across the other subjects.

One near-duplicate flagged at 0.33 — "the difference between AL and AA
amyloidosis" against "the difference between central and peripheral tolerance".
Same grammar, unrelated content. No action needed.

---

# WHERE PATHOLOGY STANDS

| | | |
|---|---|---|
| *(existing five sets)* | thematic | 75 |
| Set 1 | Foundations | 60 ✓ |
| Set 2 | Core Processes | 70 ✓ |
| Set 3 | Systemic Pathology | next |
| Sets 4–7 | | |

**205 questions.** Five more drops completes the ladder.
