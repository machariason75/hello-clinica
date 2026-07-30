# The Library Standard

The specification every future content drop follows. Keep this file — it's what
makes 200 separate drops add up to one coherent library instead of a pile.

---

## THE TARGET

Per section:

- **7+ practice sets**, 50+ questions each — every question unique to its set
- **7+ exam sets**, 50+ questions each — every question unique to its set

That's **700 unique questions per section**. A student cannot finish a section in
an evening. That was the point.

---

## THE DIFFICULTY LADDER

Sets are not interchangeable. Each tier assumes the one before it and does not
re-test it — which is exactly what makes them independently extendable.

| Set | Tier | What it tests |
|---|---|---|
| 1 | **Foundations** | The concepts everything else is built on. Definitions, mechanisms, the "why" behind the rules. |
| 2 | **Core Classes** | The main categories, agents, or systems in the subject. Recognition and classification. |
| 3 | **Applied Therapeutics** | Putting it to work on a straightforward patient. First-line choices, standard management. |
| 4 | **Special Populations** | Pregnancy, children, elderly, renal and hepatic impairment, comorbidity. |
| 5 | **Toxicity & Complications** | What goes wrong, how it presents, how it's managed. Interactions and adverse effects. |
| 6 | **Clinical Reasoning** | Multi-step vignettes. Competing diagnoses, incomplete data, deciding what to do next. |
| 7 | **Expert / Edge Cases** | Rare presentations, exceptions to the rules, the questions that separate a good candidate from an excellent one. |

Exam sets follow the same ladder — Exam 1 draws on Tier 1–2 material at exam
pace, Exam 7 is genuinely hard — but with **their own questions**, never
recycled from practice.

**Difficulty field:** Sets 1–2 `Foundational`, 3–5 `Intermediate`, 6–7 `Advanced`.

---

## NAMING AND SLUGS

Fixed format, so sets sort correctly and can be found by script:

```
slug:   {section}-set-{n}-{tier-word}          practice
        {section}-exam-{n}-{tier-word}          exam

title:  {Section} — Set {n}: {Tier Name}
        {Section} — Exam {n}: {Tier Name}
```

Example: `pharmacology-set-1-foundations` → "Pharmacology — Set 1: Foundations"

The slug is the permanent identity of a set. **Never change it** — it's how a
re-run finds the set it owns, and how you'd add questions to it later.

---

## THE RULE THAT MAKES EXTENSION POSSIBLE

Every seed from now on imports `prisma/_seedkit.ts` and matches questions **by
stem**:

- stem already in the quiz → refreshed in place
- stem not there → added
- question in the quiz that the seed doesn't know about → **left alone**

So you can add 20 questions to Set 3 through Admin, and a later re-run of that
seed will keep all 20. Question ids survive updates, so past attempt reviews
stay intact.

Every seed written *before* this standard used `deleteMany` and would have
destroyed your additions silently. That's now fixed going forward — but do not
re-run any of the old seeds without checking, because they still behave the old
way.

If you ever genuinely want a clean rebuild: `--replace`. Deliberate, and never
the default.

---

## HONEST SCALE

I'd rather give you a real number than an encouraging one.

**Per section:** 700 unique questions — 700 stems, 700 written rationales, 2,800
plausible distractors.

**Across the bank:** run `npx tsx prisma/audit-question-bank.ts` for your exact
figure. On roughly 35 sections with content, the target is **around 24,000
questions**, against a current bank of a little over a thousand.

**Pace:** a drop can carry 100–150 questions before rationale quality visibly
drops — and the rationales are what students are paying for. So this is on the
order of **150–200 drops**. At two or three a week, the full build is a project
measured in a year, not weeks.

That's not a reason to aim lower. It is a reason to **sequence deliberately**.

---

## RECOMMENDED SEQUENCE

Rather than taking every section to 7×7 in parallel, my recommendation:

**Phase 1 — Depth where it's seen.** Take your 8–10 highest-traffic sections to
the full standard first. That's ~7,000 questions and perhaps 50–60 drops. At the
end of it those sections are genuinely world-class, and they're the ones
prospective subscribers actually open before deciding to pay.

**Phase 2 — Floor everywhere.** Bring every remaining section to at least 3 sets
and 3 exams of 50. No section looks abandoned. Roughly another 60 drops.

**Phase 3 — Complete the ladder.** Fill Sets 4–7 across the remaining sections.

The audit script ranks sections by outstanding questions, so Phase 1 can be
chosen on evidence rather than instinct.

---

## ONE ALTERNATIVE WORTH CONSIDERING

You asked for exam questions to be unique so sets can grow independently. That's
sound, and it's what I'm building.

It's worth knowing the trade-off, though: exams are consumed once or twice,
while practice sets are worked through repeatedly. Making exams entirely
separate doubles the writing for the half of the library that gets less use.

An alternative that preserves everything you want: build **7 practice sets of 50
plus one dedicated exam pool of 350 unique questions** per section, and generate
the 7 exam papers from that pool. Papers stay unique in content, the pool stays
independently extendable, and it's the same total volume — but every question
gets used more.

Both work. Say if you'd like to switch; otherwise I'll continue with fully
separate exam sets as specified.

---

## QUALITY BAR — non-negotiable per question

- One unambiguous correct answer
- Three plausible distractors — each wrong for a *reason*, not filler
- A rationale that explains why the answer is right **and** what makes the
  attractive wrong answer wrong
- A `topic` value shared with several other questions, so the results breakdown
  and `/readiness` report something meaningful
- No overlap with any other question anywhere in the bank

The audit script checks the last one across the whole library.
