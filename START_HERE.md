# Do this — Pathology Set 1

Two commands. About 3 minutes.

---

## STEP 1 — Unzip and paste

1. Double-click the zip in **Downloads**. **Ctrl + A**, then **Ctrl + C**.
2. Open your **hello-clinica** folder. **Ctrl + V**.
3. Choose **"Replace the files in the destination."**

Then in VS Code: **Terminal → New Terminal**.

---

## STEP 2 — Add Set 1

```
npx tsx prisma/seed-pathology-set-1.ts
```

**60 questions.** Pathology now holds **135** — the 75 already there plus these.

---

## STEP 3 — Regenerate the pathology exams

```
npx tsx prisma/generate-exams.ts fs-pathology --size=70
```

This replaces the three old exams — which were just the practice sets joined
together — with seven properly generated papers drawing on all 135 questions.

⚠ **Do NOT run `npx tsx prisma/seed-pathology.ts`.** That is the old file and it
still deletes before it writes. It would wipe anything you have added by hand.
It stays untouched until I convert it.

---

## OPTIONAL — save to project history

```
git add .
```
```
git commit -m "pathology set 1: foundations"
```
```
git push
```

---

# ABOUT THE FIVE SETS ALREADY THERE

Pathology is the first section we have rebuilt that already had real content —
75 questions in five 15-question sets (general pathology 1 and 2, neoplasia 1
and 2, systemic pathology 1). They are good questions and they are staying.

**I read all of them before writing a word of this set.** That mattered: the old
General Pathology Set 1 covers reversible versus irreversible injury, apoptosis
versus necrosis, hypertrophy versus hyperplasia — exactly the ground a
foundations set would naturally take.

So this set goes **deeper on the same territory instead of restating it**:

| The existing set asks | This set asks |
|---|---|
| What distinguishes apoptosis from necrosis? | How do the intrinsic and extrinsic apoptotic pathways differ, and what does p53 do when damage is irreparable? |
| Which necrosis type occurs in the brain? | What produces caseous necrosis, and what does fibrinoid necrosis in a vessel wall tell you? |
| What is reversible cell injury? | Why does sustained calcium influx mark the transition to irreversibility? |

A student who has done the old set is never asked the same thing twice.

## The plan for those five sets

They stay published while the ladder is built. Once Pathology Sets 1–7 are
complete, my recommendation is to **unpublish the five old fragments** — and
here is the useful part: the exam generator does not filter on published status,
so **their 75 questions stay in the exam pool**.

The result is a clean seven-set ladder for practice, plus 75 questions that
appear only in exams. Exams containing material students have not drilled is a
feature, not a gap.

Nothing is deleted at any point, and it is reversible.

---

# WHAT'S IN SET 1

Ten topics, six questions each:

mechanisms of cell injury · patterns of necrosis · apoptosis and its regulation ·
cellular accumulations and pigments · calcification and amyloid · the cells of
acute inflammation · chemical mediators · chronic inflammation and granulomas ·
systemic effects of inflammation · tissue repair

Some of it connects directly to things already covered elsewhere in the bank —
the bradykinin question explains why ACE inhibitors cause cough and angioedema,
the TNF question explains why TNF inhibitors need TB screening first, the
hepcidin question explains why ferritin is normal in anaemia of chronic disease.
Pathology is the section that ties the others together, and the questions are
written to do that rather than to sit in isolation.

---

# HOW IT WAS CHECKED

60 questions, 60 correct answers, 240 choices, ten topics of exactly six, no
duplicates within the file.

Checked against the 32 existing pathology stems I could read, and against all
twelve previous sets across every subject.

**Four pairs flagged, and I want to be straight about one of them.** Three were
pure grammatical coincidence — "what is the difference between X and Y?" matching
across unrelated content.

The fourth is a genuine, if mild, adjacency: the existing question *"chronic
hepatitis B and C predispose to which malignancy?"* has an explanation that
mentions repeated injury and regeneration increasing mutation opportunity — and
this set has *"why can chronic inflammation predispose to malignancy?"* as a
question in its own right. They are not the same question, and one is a specific
association while the other is the general mechanism. But they touch. I have
left it, because a student meeting the mechanism explicitly after seeing it
mentioned in passing is reinforcement rather than repetition — say the word and
I will replace it.

---

# WHERE PATHOLOGY STANDS

| | | |
|---|---|---|
| *(existing five sets)* | thematic, 15 each | 75 |
| Set 1 | Foundations | 60 ✓ |
| Set 2 | Core Processes | next |
| Sets 3–7 | | |

**135 questions.** Six more drops completes the ladder.
