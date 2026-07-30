# Do this — Biochemistry questions

This one is **content only**. No website code changes, so it's much shorter than
the last drop: three steps, about 3 minutes.

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

You're only adding one new file: `prisma/seed-biochemistry.ts`. Nothing existing
is overwritten.

---

## STEP 3 — Add the questions

In VS Code: **File → Open Folder** → `hello-clinica`, then
**Terminal → New Terminal**.

Paste this into the bottom panel and press Enter:

```
npx tsx prisma/seed-biochemistry.ts
```

You should see four lines appear, then **"Done."**:

```
  ✓ Biochemistry — Practice Set 1 — 30 questions (answers shuffled)
  ✓ Biochemistry — Practice Set 2 — 30 questions (answers shuffled)
  ✓ Biochemistry — Timed Exam 1 — 30 questions (answers shuffled)
  ✓ Biochemistry — Timed Exam 2 (Comprehensive) — 60 questions (answers shuffled)
```

**That's it — the questions are live on your website now.** No `git push`, no
Vercel, no waiting. Questions go straight to your database.

Check it: open your live site → **Question Bank** → **Foundational Sciences** →
**Biochemistry**.

---

## OPTIONAL — keep the file in your project history

Not required, and the questions are already live either way. But it means the
file is backed up with the rest of your code rather than only on this computer:

```
git add .
```

```
git commit -m "biochemistry question bank"
```

```
git push
```

---

# IF IT DOESN'T WORK

**"Category fs-biochemistry not found"** — the Biochemistry section is missing
from your Question Bank. Run this first, then try again:

```
npx tsx prisma/seed-medical-taxonomy.ts
```

**"Cannot find module" or a connection error** — copy the whole message into the
chat. Most likely the database connection dropped; the script retries three times
on its own, so a persistent failure means something else.

**Anything else** — paste it into the chat. Nothing here can damage existing
content: the script only creates or replaces its own four Biochemistry quizzes.

---

# WHAT YOU'RE GETTING

| Quiz | Questions | Timing |
|---|---|---|
| Practice Set 1 | 30 | untimed |
| Practice Set 2 | 30 | untimed |
| Timed Exam 1 | 30 | 40 minutes |
| Timed Exam 2 — Comprehensive | 60 | 75 minutes |

Set 1 covers enzymes, carbohydrates, lipids, amino acids and vitamins.
Set 2 covers molecular biology, nucleotides, bioenergetics, metabolic
integration and inherited metabolic disease.

The two practice sets share no questions, so a student who finishes Set 1 gets 30
genuinely new ones in Set 2 — then the exams recombine them under time pressure.

Every question has a written explanation, and answer options are shuffled so the
correct one isn't always in the same position.

Safe to run more than once. It replaces its own four quizzes and touches nothing
else.
