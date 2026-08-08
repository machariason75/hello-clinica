/**
 * BIOCHEMISTRY — WAVE 1
 *
 * Rebuilds the Biochemistry subject to the standard framework: 7 practice sets
 * of 70-100 questions and 7 exams assembled from them, on the same ladder used
 * for Pathology and Pharmacology.
 *
 * OVERHAUL NOTE
 * -------------
 * An earlier version of this subject existed as two 30-question practice sets
 * with only four options per item, no select-all or true/false items, and at
 * least one factual slip (the "urea cycle" mislabeled as a "BUN cycle"). Seeding
 * with slugBase "biochemistry" upserts by slug, so these new sets cleanly
 * replace the old `biochemistry-practice-set-1/2` and repurpose the two old
 * exams into the proper seven-exam ladder. Every concept the old items covered
 * is re-covered here, corrected and expanded, with five options and a proper
 * item-type mix.
 *
 * PARTIAL MODE
 * ------------
 * Sets arrive two per wave. This runs in partial mode: it seeds whatever sets
 * exist and defers any exam whose source sets are not written yet. Each wave
 * adds set files, uncomments imports and blocks, and you re-run the command.
 * When Set 7 lands, change `partial: false` for full strictness.
 *
 * Run:  npx tsx prisma/seed-biochemistry.ts
 */

import { seedSubject, runWave, sample, merge, type Q } from "./_lib/qbank";

import { BIOCHEMISTRY_SET_1 } from "./biochemistry/set-1";
import { BIOCHEMISTRY_SET_2 } from "./biochemistry/set-2";
// import { BIOCHEMISTRY_SET_3 } from "./biochemistry/set-3";
// import { BIOCHEMISTRY_SET_4 } from "./biochemistry/set-4";
// import { BIOCHEMISTRY_SET_5 } from "./biochemistry/set-5";
// import { BIOCHEMISTRY_SET_6 } from "./biochemistry/set-6";
// import { BIOCHEMISTRY_SET_7 } from "./biochemistry/set-7";

/* ═══════════════════ PRACTICE SETS ═══════════════════ */

const SETS = [
  {
    n: 1,
    title: "Amino Acids, Proteins & Enzymes",
    description:
      "The building blocks and machines of the cell: amino acid chemistry, the four levels of protein structure, folding and denaturation, enzyme catalysis and Michaelis-Menten kinetics, the three classes of reversible inhibition, allosteric and covalent regulation, cofactors and coenzymes, specialized proteins such as hemoglobin and collagen, and diagnostic clinical enzymology.",
    difficulty: "Foundational" as const,
    questions: BIOCHEMISTRY_SET_1,
  },
  {
    n: 2,
    title: "Bioenergetics & Central Energy Metabolism",
    description:
      "How the cell makes ATP: thermodynamics and high-energy compounds, glycolysis and its regulation, the pyruvate dehydrogenase gateway, anaerobic lactate metabolism, the TCA cycle, the electron transport chain and oxidative phosphorylation, the classic inhibitors and uncouplers, mitochondrial shuttles, and tissue-specific fuel use.",
    difficulty: "Foundational" as const,
    questions: BIOCHEMISTRY_SET_2,
  },
  // { n: 3, title: "Carbohydrate Metabolism", …, questions: BIOCHEMISTRY_SET_3 },
  // { n: 4, title: "Lipid Metabolism", …, questions: BIOCHEMISTRY_SET_4 },
  // { n: 5, title: "Nitrogen Metabolism & Nucleotides", …, questions: BIOCHEMISTRY_SET_5 },
  // { n: 6, title: "Molecular Biology & Genetics", …, questions: BIOCHEMISTRY_SET_6 },
  // { n: 7, title: "Vitamins, Nutrition & Integrated Metabolism", …, questions: BIOCHEMISTRY_SET_7 },
];

/* ═══════════════════ EXAM LADDER ═══════════════════ */
/*
 * The same seven-exam shape used for every subject. Exams 1-3 partition the pool
 * into blocks (guaranteeing coverage); Exams 4-6 re-cut the material by
 * difficulty, item type and data interpretation; Exam 7 is everything.
 */

const EXAMS = [
  {
    n: 1,
    requires: [1, 2],
    title: "Foundations Block",
    description:
      "Proteins and enzymes plus bioenergetics and central energy metabolism — the chemistry and thermodynamics every pathway depends on.",
    difficulty: "Intermediate" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(1, 2),
  },
  {
    n: 2,
    requires: [3, 4],
    title: "Metabolism Block I",
    description:
      "Carbohydrate and lipid metabolism — synthesis, breakdown, storage and their regulation.",
    difficulty: "Intermediate" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(3, 4),
  },
  {
    n: 3,
    requires: [5, 6],
    title: "Metabolism Block II & Molecular Biology",
    description:
      "Nitrogen and nucleotide metabolism together with molecular biology and genetics.",
    difficulty: "Advanced" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(5, 6),
  },
  {
    n: 4,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Integration Challenge",
    description:
      "Vitamins, nutrition and integrated metabolism, combined with the most demanding multi-step items from every earlier set.",
    difficulty: "Advanced" as const,
    minutes: 130,
    draw: (p: any) => merge(p.fromSets(7), p.longestStems(40, p.fromSets(1, 2, 3, 4, 5, 6))),
  },
  {
    n: 5,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Select-All-That-Apply Drill",
    description:
      "Every multiple-response item in the subject, plus a sampled remainder. Partial knowledge scores poorly here by design.",
    difficulty: "Advanced" as const,
    minutes: 110,
    draw: (p: any) => merge(p.byType("MULTI"), sample(p.all(), 45, 5)),
  },
  {
    n: 6,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Data & Figure Interpretation",
    description:
      "Enzyme kinetics plots, metabolic maps, lab panels and pedigrees. Reading the data rather than recalling the fact.",
    difficulty: "Advanced" as const,
    minutes: 110,
    draw: (p: any) =>
      merge(
        p.withFigures(),
        p.byTopic(
          "Enzyme Kinetics",
          "Enzyme Inhibition",
          "Clinical Enzymology",
          "Regulation of Energy Metabolism"
        ),
        sample(p.all(), 90, 6)
      ),
  },
  {
    n: 7,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Comprehensive Final",
    description:
      "The entire Biochemistry question pool under exam conditions. Sit this last.",
    difficulty: "Advanced" as const,
    minutes: 240,
    draw: (p: any) => p.all(),
  },
];

/* ═══════════════════ RUN ═══════════════════ */

runWave(() =>
  seedSubject({
    subject: "Biochemistry",
    slugBase: "biochemistry",
    categorySlug: "fs-biochemistry",
    partial: true, // ← switch to false once Set 7 has landed
    sets: SETS,
    exams: EXAMS,
    footnote:
      "US conventional units and standard biochemical nomenclature throughout. Replaces the earlier four-option draft; every concept re-covered, corrected, and expanded.",
  })
);
