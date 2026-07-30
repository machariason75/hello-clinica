# Drop — hero settling, promo cadence, palette conformance, Infectious Diseases

Six files. One requires a one-line edit in your own `app/page.tsx` (step 3).
No schema change. No new dependency. No `prisma db push`.

---

## 1. HERO PHOTO — solid on arrival, changes between visits

**What you reported:** arriving at the site, you meet the photos mid-transition.

**What was actually happening —** two separate causes, both in
`HeroSlideshow.tsx`:

1. The component rendered photo 0 on the server, then picked a *random* photo in
   a `useEffect` after mount and cross-dissolved into it. So the first thing a
   visitor saw was a transition already in progress.
2. The scale animation ran for `INTERVAL_MS / 1000 + 1.5` seconds — 61.5 seconds
   — so a slow zoom was *permanently* in motion. There was no moment at which the
   photo was still.

**The fix.** The photo is now chosen by which 10-minute window we are in, as a
pure function of the clock (`lib/hero-rotation.ts`), computed on the server and
passed in as a prop. That gives you all three behaviours you asked for at once:

- **Solid on arrival** — the correct photo is in the first HTML. Nothing swaps
  after paint, and the perpetual zoom is gone.
- **Never changes while you're on the dashboard** — there is no timer left to
  fire. This is not a suppression; the mechanism simply cannot change it.
- **New photo on returning** — go and use the Question Bank for a while, come
  back, and the window has moved on.
- **10-minute interval** as specified.

Tapping the photo no longer advances it. That interaction existed to serve the
old rotation and now contradicts "the photo stays put" — a cursor changing to a
pointer over a non-interactive image was also a small accessibility untruth.

## 2. QUESTION BANK PROMO — 5 minutes, 10 after dismissal

- Interval **3 → 5 minutes** (`INTERVAL_MS`).
- Dismissing with (×) now **backs off to 10 minutes** rather than silencing the
  promo for the session, which is what it did before. Your instruction is the
  better product decision: a dismissal usually means "not now", not "never".
- After a dismissal the promo waits a **full 10 minutes** before returning. It
  would otherwise have reappeared 6 seconds later via the first-show timer,
  which reads as ignoring the click.
- The back-off is remembered for the session, so it still applies after the
  visitor has been elsewhere and returned.
- Visible duration stays 9 seconds — you didn't ask to change it, and lengthening
  it while also making the promo return is two changes pulling in one direction.

## 3. ONE-LINE EDIT YOU NEED TO MAKE

`Hero` now takes a `slotIndex`. Compute it on the server, in `app/page.tsx`:

```tsx
import { heroSlotIndex } from "@/lib/hero-rotation";
// ...
<Hero slotIndex={heroSlotIndex()} />
```

If you skip this, nothing breaks — the hero shows a stable photo that never
rotates. Rotation needs the prop.

Why not compute it inside the component? It would run once on the server and
again on the client during hydration. Cross a 10-minute boundary between those
two moments and React sees a mismatch — reintroducing exactly the flicker this
drop removes. Deciding it once, on the server, closes that off.

## 4. PALETTE CONFORMANCE — three off-brand colours removed

Amendment Register v1.2 says the pre-override blues must not return. One had.

| Where | Was | Now |
|---|---|---|
| `Hero.tsx` glow blob | `#2563EB` — **a pre-override blue** | `bg-accent-blue/12` |
| `Hero.tsx` glow blob | `#F97360` (undocumented) | `bg-coral/15` |
| `HeroSlideshow.tsx` accents | `#E8613F`, `#E7A64B` (undocumented amber) | `bg-coral`, `bg-accent-blue`, `bg-medical-blue` |
| `PremiumBanner.tsx` | hardcoded `#0C3C4C` / `#C2461A` | the `medical-blue` / `coral` tokens |

Same visual intent, now driven by tokens — so the next palette amendment
propagates instead of leaving stragglers.

**Still outstanding, not in this drop:** `emailButton()` in
`lib/email-templates.ts` hardcodes `#F97360` for every email CTA. Emails need
literal hex (no stylesheets), so it can't use a token — it needs changing to
`#C2461A`, the AA-compliant CTA. Worth doing with the reset-expiry fix.

## 5. INFECTIOUS DISEASES — 60 questions, Haematology-shaped

`prisma/seed-infectious-diseases.ts` seeds into the **existing**
`cs-infectious-diseases` section — no new taxonomy node, nothing to reorganise:

| Quiz | Questions | Timing |
|---|---|---|
| Practice Set 1 | 30 | untimed |
| Practice Set 2 | 30 | untimed |
| Timed Exam 1 | 30 (Set 1) | 40 min |
| Timed Exam 2 — Comprehensive | 60 | 75 min |

Set 1: sepsis · HIV · tuberculosis · malaria · stewardship.
Set 2: bacterial · viral · tropical/parasitic · healthcare-associated infection ·
immunisation. No overlap between the sets, so Set 2 is genuine retesting.

Ten `topic` values across the two sets, each with several questions — that is
what makes the results breakdown and `/readiness` say something useful rather
than showing ten bars of one question each.

```
npx tsx prisma/seed-infectious-diseases.ts
```

Safe to re-run: upserts by quiz slug and rewrites that quiz's questions only.

⚠ Thresholds and first-line agents vary by national guideline. These test
mechanism and principle, which travel — but check anything numerical against your
local guidance before publishing. All editable in Admin.

## 6. A CONTENT BUG IN THE EARLIER WAVES — worth 10 minutes

Comparing the seed files turned this up. In pathology, microbiology, renal,
anatomy, respiratory, surgery, endocrinology and others, choices are inserted in
written order:

```ts
choices: { create: q.choices.map((c, i) => ({ ..., order: i })) }
```

and the correct answer is written first in every one of those files. The player
renders by `order`. **So the first option is the right one nearly every time in
those sets.** Haematology fixed it forward with a shuffle; the sets already
written were never repaired.

Students find that pattern fast, and once they have, those quizzes stop measuring
anything.

```
npx tsx prisma/fix-choice-order.ts            # audit — reports % per quiz, changes nothing
npx tsx prisma/fix-choice-order.ts --apply    # reshuffle the flagged sets
```

Run the audit first. It flags a set only at ≥60% answer-first (chance with four
options is ~25%), so it won't touch anything already varied. It changes only the
`order` column — never a choice's id, text or `isCorrect` — so past student
attempts still review correctly.

---

# INSTALL

```
1. Copy the 6 files in, keeping structure.
2. Make the one-line app/page.tsx edit (section 3).
3. npx tsc --noEmit          <- expect no errors
   npm run dev
4. CHECK:
   a. Load "/" — the photo is there, finished, and does not move. Wait a
      minute: still no movement.
   b. Go to /question-bank, come back. Same photo (same 10-min window) —
      that is correct. After the window turns over, a new one.
   c. Wait ~5 min on "/" — promo appears. Close it with (x). It should NOT
      return for 10 minutes, then should.
5. npx tsx prisma/fix-choice-order.ts        <- read the audit before applying
6. npx tsx prisma/seed-infectious-diseases.ts
7. git add .
   git commit -m "hero settles, promo backs off, palette conformance, infectious diseases wave"
   git push
```

---

# NEXT WAVES — what I did NOT do, and why

You listed five empty sections. I have done Infectious Diseases and stopped
deliberately.

Sixty questions to the Haematology standard means sixty original stems, sixty
written rationales, and 240 plausible distractors. Attempting all five in one
pass would produce recycled stems and thin one-line explanations — and the
explanations are the entire reason someone pays for this. One specialty per drop
is the honest rate.

Remaining, with a note on each:

| Section | Slug | Status |
|---|---|---|
| Infectious Diseases | `cs-infectious-diseases` | **done, this drop** |
| Biochemistry | `fs-biochemistry` | exists — seeds straight in |
| Histology | `fs-histology` | exists — seeds straight in |
| Dermatology | — | **no section exists.** Needs creating under `clinical-specialties`, the way Haematology created `cs-haematology`. |
| Fluids & Electrolytes | — | **no section exists,** and placement needs your call — see below. |

**Fluids & Electrolytes needs a decision from you.** `fs-renal-physiology` is
already titled "Renal & Fluid Balance" and covers filtration, electrolytes and
homeostasis. Adding a second fluids section next to it creates two overlapping
folders and a student who cannot tell which to open. My recommendation is a
clinically-framed `cs-fluids-electrolytes` under Internal Medicine — IV fluid
choice, replacement and maintenance, the dysnatraemias, potassium and calcium
emergencies, acid-base at the bedside — leaving the physiology where it is. Say
if you would rather it sat under Foundational Sciences and I will build it there.

Then the under-supplied earlier sections you wanted revisited, once these five
are complete.
