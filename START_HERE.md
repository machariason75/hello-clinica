# Do this — Histology and Dermatology

**Content only.** No website code changes, so this is short: three steps, about
5 minutes.

---

## STEP 1 — Unzip

The zip is in your **Downloads** folder.

1. Double-click it. You'll see a folder called `prisma` and this file.
2. Press **Ctrl + A**, then **Ctrl + C**.

---

## STEP 2 — Paste into your project

1. Open your **hello-clinica** folder.
2. Press **Ctrl + V**.
3. If Windows asks about existing files, choose **"Replace the files in the
   destination."**

You're only adding two new files. Nothing existing is overwritten.

---

## STEP 3 — Add the questions

In VS Code: **File → Open Folder** → `hello-clinica`, then
**Terminal → New Terminal**.

Paste these **one at a time**, waiting for each to finish:

```
npx tsx prisma/seed-histology.ts
```

```
npx tsx prisma/seed-dermatology.ts
```

Each ends with **"Done."**

The Dermatology one will also print a line near the top:

```
  + Created section: Clinical Specialties → Dermatology
```

That's expected — there was no Dermatology section in your Question Bank, so
this creates it. If you run the script again later it reuses that section rather
than making a second one.

**The questions are live on your website now.** No `git push`, no Vercel.

Check it:
- Question Bank → **Foundational Sciences → Anatomy → Histology**
- Question Bank → **Clinical Specialties → Dermatology**

---

## OPTIONAL — keep the files in your project history

Not required. The questions are already live either way; this just backs the
files up alongside the rest of your code.

```
git add .
```

```
git commit -m "histology and dermatology question banks"
```

```
git push
```

---

# IF IT DOESN'T WORK

**"Category fs-histology not found"** or **"Parent clinical-specialties not
found"** — your Question Bank structure is missing. Run this once, then try
again:

```
npx tsx prisma/seed-medical-taxonomy.ts
```

**A connection error** — the script retries three times by itself, so a
persistent failure means something else. Copy the whole message into the chat.

Nothing here can damage existing content. Each script only creates or replaces
its own four quizzes.

---

# WHAT YOU'RE GETTING

Each subject follows the same shape as Haematology:

| Quiz | Questions | Timing |
|---|---|---|
| Practice Set 1 | 30 | untimed |
| Practice Set 2 | 30 | untimed |
| Timed Exam 1 | 30 | 40 minutes |
| Timed Exam 2 — Comprehensive | 60 | 75 minutes |

**Histology** — Set 1 covers the four basic tissues (epithelium, connective
tissue, muscle, nerve, blood and marrow). Set 2 covers organ histology and
laboratory technique including stains.

**Dermatology** — Set 1 covers skin structure, eczema, psoriasis, acne and skin
infections. Set 2 covers skin cancer, pigmentary disorders, blistering diseases,
severe drug reactions and hair, nail and systemic signs.

The two practice sets in each subject share no questions, so Set 2 is genuine
retesting rather than a repeat. Every question has a written explanation, and
answer options are shuffled so the correct one isn't always in the same place.

Safe to run more than once.

---

# ONE THING WORTH KNOWING ABOUT THE DERMATOLOGY SET

Standard dermatology textbooks describe pale skin as the default. Students
trained only on those images consistently under-read severity and miss diagnoses
in the patients they'll actually be treating.

So this set gives sustained attention to pigmented skin throughout — how to judge
inflammation when redness is masked, why post-inflammatory pigment change is
often the patient's main concern, keloid risk, the dangers of skin-lightening
products, and the fact that the melanomas that matter most in African patients
arise on palms, soles and nail beds rather than sun-exposed skin.

That's a genuine differentiator for Hello Clinica against imported question
banks, and it's worth mentioning in how you describe the section to students.
