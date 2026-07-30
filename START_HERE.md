# Do this — Fluids & Electrolytes

**Content only.** Three steps, about 3 minutes.

This is the last of the five empty sections you listed.

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

One new file only. Nothing existing is overwritten.

---

## STEP 3 — Add the questions

In VS Code: **File → Open Folder** → `hello-clinica`, then
**Terminal → New Terminal**.

Paste this and press Enter:

```
npx tsx prisma/seed-fluids-electrolytes.ts
```

Near the top you'll see:

```
  + Created section: Clinical Specialties → Internal Medicine → Fluids & Electrolytes
```

That's expected — the section doesn't exist yet, so this creates it. Run the
script again later and it reuses that section rather than making a second one.

Then four green ticks and **"Done."**

**Live on your website immediately.** No `git push`, no Vercel.

Check it: Question Bank → **Clinical Specialties → Internal Medicine → Fluids &
Electrolytes**.

---

## OPTIONAL — keep the file in your project history

```
git add .
```

```
git commit -m "fluids and electrolytes question bank"
```

```
git push
```

---

# IF IT DOESN'T WORK

**"Parent cs-internal-medicine not found"** — run this once, then try again:

```
npx tsx prisma/seed-medical-taxonomy.ts
```

**A connection error** — the script retries three times by itself. If it still
fails, copy the whole message into the chat.

Nothing here can damage existing content.

---

# WHERE IT SITS, AND WHY

You already have **Foundational Sciences → Renal & Fluid Balance**, which covers
the physiology — how the kidney filters, how the body maintains balance.

This new section is the **clinical** counterpart: what to hang, how much, how
fast, and what to do when a result is dangerous. Putting it under Internal
Medicine keeps the two from competing — a student looking for "how does the
kidney handle sodium" and one looking for "what do I do about a sodium of 118"
now land in different, correctly-named places.

---

# WHAT YOU'RE GETTING

| Quiz | Questions | Timing |
|---|---|---|
| Practice Set 1 | 30 | untimed |
| Practice Set 2 | 30 | untimed |
| Timed Exam 1 | 30 | 40 minutes |
| Timed Exam 2 — Comprehensive | 60 | 75 minutes |

Set 1 covers fluid compartments, choosing and prescribing IV fluid, sodium and
water disorders, bedside volume assessment, and fluids in heart failure, DKA,
refeeding and burns.

Set 2 covers potassium emergencies, calcium, magnesium and phosphate,
systematic acid-base interpretation, and rehydration in childhood diarrhoeal
illness.

---

# TWO THINGS WORTH KNOWING

**Oral rehydration gets a full topic, not a mention.** In this region childhood
diarrhoeal illness is the commonest life-threatening fluid problem a graduate
will actually meet, and ORS is among the highest-impact interventions in all of
medicine. Imported question banks treat it as a footnote. This set covers why
glucose is essential to the formulation, why low-osmolarity ORS replaced the old
one, the signs of severe dehydration in a child, zinc, and continued feeding.

**This is the most guideline-sensitive set so far — please review it.**
Correction rates, maintenance volumes and first-line fluids differ between
national guidelines and get revised. I wrote the questions to test *principles* —
why correct sodium slowly, why balanced crystalloid, why calcium doesn't lower
potassium — because principles travel and numbers don't. But before you promote
this section to students, it's worth having someone check anything numerical
against Kenyan guidance. Everything is editable in Admin → Question Bank.

---

# THAT COMPLETES THE FIVE

Infectious Diseases · Biochemistry · Histology · Dermatology · Fluids &
Electrolytes — **300 questions**, each section with two non-overlapping practice
sets and two timed exams.

Next up are the earlier sections that were under-supplied with practice and exam
sets, which you wanted revisited once these empty ones were filled.

Before that, two small jobs from the earlier review are still outstanding and
worth clearing:

1. **The answer-order fix** — if you haven't yet run
   `npx tsx prisma/fix-choice-order.ts`, the older sections still have the
   correct answer sitting first almost every time.
2. **Resend** — password reset emails still aren't sending. That one's only
   doable by you, and it's the last thing blocking student account recovery.
