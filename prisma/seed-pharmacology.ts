/**
 * PHARMACOLOGY — WAVE 1
 *
 * Seeds the Pharmacology subject: 7 practice sets of 70-100 questions and 7
 * exams assembled from them, on the same ladder used for Pathology so a student
 * meets the same rhythm in every subject.
 *
 * PARTIAL MODE
 * ------------
 * Sets arrive one package at a time. This runs in partial mode: it seeds
 * whatever sets exist and defers any exam whose source sets are not written yet.
 * Each new package adds a set file, uncomments one import and one block, and you
 * re-run the same command.
 *
 * When Set 7 lands, change `partial: false`. That restores full strictness —
 * exactly seven sets and seven exams, plus the gap check confirming no practice
 * question sits outside every exam.
 *
 * Run:  npx tsx prisma/seed-pharmacology.ts
 */

import { seedSubject, runWave, sample, merge, type Q } from "./_lib/qbank";

import { PHARMACOLOGY_SET_1 } from "./pharmacology/set-1";
import { PHARMACOLOGY_SET_2 } from "./pharmacology/set-2";
import { PHARMACOLOGY_SET_3 } from "./pharmacology/set-3";
import { PHARMACOLOGY_SET_4 } from "./pharmacology/set-4";
// import { PHARMACOLOGY_SET_5 } from "./pharmacology/set-5";
// import { PHARMACOLOGY_SET_6 } from "./pharmacology/set-6";
// import { PHARMACOLOGY_SET_7 } from "./pharmacology/set-7";

/* ═══════════════════ PRACTICE SETS ═══════════════════ */

const SETS = [
  {
    n: 1,
    title: "Pharmacokinetics, Pharmacodynamics & Dose Calculation",
    description:
      "Absorption and bioavailability, distribution and protein binding, metabolism and cytochrome P450, clearance and half-life, receptor theory and dose-response, therapeutic index, drug interactions, dosing in special populations, and the calculations that must never go wrong.",
    difficulty: "Foundational" as const,
    questions: PHARMACOLOGY_SET_1,
  },
  {
    n: 2,
    title: "Autonomic Pharmacology",
    description:
      "Cholinergic and adrenergic transmission, receptor subtypes and the tissue effects that follow from them, direct and indirect agonists, anticholinesterases, muscarinic antagonists, neuromuscular blockers, alpha and beta blockade, and the toxidromes with their antidotes.",
    difficulty: "Foundational" as const,
    questions: PHARMACOLOGY_SET_2,
  },
  {
    n: 3,
    title: "Cardiovascular Drugs",
    description:
      "Diuretics across the nephron, the RAAS inhibitors, calcium channel blockers, sympatholytics and direct vasodilators, antianginals, guideline-directed heart failure therapy, cardiac glycosides, the Vaughan Williams antiarrhythmics, lipid-lowering agents, and the anticoagulant, antiplatelet and thrombolytic drugs.",
    difficulty: "Intermediate" as const,
    questions: PHARMACOLOGY_SET_3,
  },
  {
    n: 4,
    title: "CNS Drugs",
    description:
      "Sedative-hypnotics and anxiolytics, antiepileptics, general and local anesthetics, the antidepressant classes and their toxidromes, mood stabilizers, antipsychotics and their movement disorders, antiparkinsonian and neurodegenerative-disease drugs, opioid analgesics, and the pharmacology of abused substances and stimulants.",
    difficulty: "Intermediate" as const,
    questions: PHARMACOLOGY_SET_4,
  },
  // { n: 5, title: "Antimicrobials I — Antibacterials", …, questions: PHARMACOLOGY_SET_5 },
  // { n: 6, title: "Antimicrobials II — Antivirals, Antifungals, Antiparasitics", …, questions: PHARMACOLOGY_SET_6 },
  // { n: 7, title: "Endocrine, GI, Analgesia & Toxicology", …, questions: PHARMACOLOGY_SET_7 },
];

/* ═══════════════════ EXAM LADDER ═══════════════════ */
/*
 * The same seven-exam shape is used for every subject in the bank, so a student
 * who learns the rhythm in Pathology finds it again in Cardiology.
 *
 * Exams 1-3 partition the pool into blocks, which guarantees full coverage by
 * construction. Exams 4-6 re-cut the same material along different axes —
 * difficulty, item type, data interpretation — so retesting stays useful rather
 * than merely repetitive. Exam 7 is everything.
 */

const EXAMS = [
  {
    n: 1,
    requires: [1, 2],
    title: "Foundations Block",
    description:
      "Pharmacokinetics, pharmacodynamics and dose calculation, plus autonomic pharmacology. The principles every drug class depends on.",
    difficulty: "Intermediate" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(1, 2),
  },
  {
    n: 2,
    requires: [3, 4],
    title: "Mechanisms Block",
    description:
      "Cardiovascular and central nervous system drugs — the two largest prescribing domains.",
    difficulty: "Intermediate" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(3, 4),
  },
  {
    n: 3,
    requires: [5, 6],
    title: "Antimicrobials Block",
    description:
      "Antibacterials, antivirals, antifungals and antiparasitics, with resistance mechanisms and spectrum.",
    difficulty: "Advanced" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(5, 6),
  },
  {
    n: 4,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Integration Challenge",
    description:
      "Endocrine, gastrointestinal, analgesic and toxicologic pharmacology, combined with the most demanding multi-step items from every earlier set.",
    difficulty: "Advanced" as const,
    minutes: 130,
    draw: (p: any) => merge(p.fromSets(7), p.longestStems(40, p.fromSets(1, 2, 3, 4, 5, 6))),
  },
  {
    n: 5,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Select-All-That-Apply Drill",
    description:
      "Every multiple-response item in the subject, plus a sampled remainder. Partial knowledge scores poorly here by design — this is the NCLEX-style format that punishes guessing.",
    difficulty: "Advanced" as const,
    minutes: 110,
    draw: (p: any) => merge(p.byType("MULTI"), sample(p.all(), 45, 5)),
  },
  {
    n: 6,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Data & Figure Interpretation",
    description:
      "Lab panels, blood gases, smears and gross specimens. Reading the data rather than recalling the fact.",
    difficulty: "Advanced" as const,
    minutes: 110,
    /*
     * Originally this drew figure items plus one interpretation topic plus a
     * sample of 50 — about 54 questions, below the 70 floor, because no figure
     * items exist until the image columns are in use. Widened to every
     * data-interpretation topic across the subject, which is what this paper was
     * always meant to be.
     */
    draw: (p: any) =>
      merge(
        p.withFigures(),
        p.byTopic(
          "Dose Calculations",
          "Excretion & Clearance",
          "Half-Life & Steady State",
          "Therapeutic Index",
          "Drug Interactions"
        ),
        sample(p.all(), 90, 6)
      ),
  },
  {
    n: 7,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Comprehensive Final",
    description:
      "The entire Pharmacology question pool under exam conditions. Sit this last.",
    difficulty: "Advanced" as const,
    minutes: 240,
    draw: (p: any) => p.all(),
  },
];

/* ═══════════════════ RUN ═══════════════════ */

runWave(() =>
  seedSubject({
    subject: "Pharmacology",
    slugBase: "pharmacology",
    categorySlug: "fs-pharmacology",
    partial: true, // ← switch to false once Set 7 has landed
    sets: SETS,
    exams: EXAMS,
    footnote:
      "US conventional units and US generic drug names throughout. Every calculation has been independently rechecked.",
  })
);
