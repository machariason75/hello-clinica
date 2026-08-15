/**
 * Organic Chemistry — declarative 7×7 subject.
 *
 * Seven practice sets (100 questions each) and seven exams assembled FROM those
 * sets. Exams recombine existing questions; they never introduce new ones.
 *
 * Canonical anchors (grounding, not quoted): Clayden, Greeves & Warren
 * "Organic Chemistry"; McMurry "Organic Chemistry"; Vollhardt & Schore
 * "Organic Chemistry: Structure and Function"; Carey & Sundberg "Advanced
 * Organic Chemistry".
 *
 * Structures, formulae and mechanisms are shown in inline notation (condensed
 * formulae, charges, arrows, δ±, π/σ) so they render everywhere without images.
 *
 * Sets flip on as they land; set partial:false once all seven are present.
 */
import {
  seedSubject,
  runWave,
  Pool,
  merge,
  sample,
  type SubjectConfig,
} from "./_lib/qbank";

import { ORGANIC_SET_1 } from "./organic-chemistry/set-1";
import { ORGANIC_SET_2 } from "./organic-chemistry/set-2";
import { ORGANIC_SET_3 } from "./organic-chemistry/set-3";
import { ORGANIC_SET_4 } from "./organic-chemistry/set-4";
import { ORGANIC_SET_5 } from "./organic-chemistry/set-5";
import { ORGANIC_SET_6 } from "./organic-chemistry/set-6";
// import { ORGANIC_SET_7 } from "./organic-chemistry/set-7";

const config: SubjectConfig = {
  subject: "Organic Chemistry",
  slugBase: "organic-chemistry",
  categorySlug: "fs-organic-chemistry",
  minPerSet: 100,
  minPerExam: 90,
  partial: true, // ← switch to false once all seven sets have landed

  sets: [
    {
      n: 1,
      title: "Structure, Bonding & Hydrocarbons",
      description:
        "The foundations of organic structure: carbon hybridization (sp, sp², sp³), σ and π bonds, shapes and bond angles, electronegativity and bond polarity, resonance and delocalization, the classes of hydrocarbon (alkanes, alkenes, alkynes) and their IUPAC nomenclature, structural (constitutional) isomerism, degrees of unsaturation, and an introduction to conformations. Condensed structural formulae are shown throughout.",
      difficulty: "Foundational" as const,
      questions: ORGANIC_SET_1,
    },
    {
      n: 2,
      title: "Stereochemistry",
      description:
        "Three-dimensional organic chemistry: chirality and stereocentres, the R/S (Cahn–Ingold–Prelog) system, optical activity and specific rotation, enantiomers, diastereomers and meso compounds, E/Z alkene configuration, Fischer and Newman projections, conformational analysis of acyclic chains and of cyclohexane (chair, axial/equatorial, ring flip), and the stereochemical consequences of reactions.",
      difficulty: "Advanced" as const,
      questions: ORGANIC_SET_2,
    },
    {
      n: 3,
      title: "Reaction Mechanisms & Reactive Intermediates",
      description:
        "How organic reactions happen: curly-arrow notation and bond cleavage (homolysis vs heterolysis), nucleophiles and electrophiles, the reactive intermediates (carbocations, carbanions, radicals and carbenes) and their relative stabilities, 1,2-hydride and alkyl shifts, reaction types and energy profiles, transition states, the Hammond postulate, kinetic versus thermodynamic control, and organic acidity and basicity (pKa and the resonance, inductive, electronegativity and hybridisation factors behind them). Mechanisms and structures are shown in inline notation.",
      difficulty: "Intermediate" as const,
      questions: ORGANIC_SET_3,
    },
    {
      n: 4,
      title: "Substitution & Elimination",
      description:
        "The substitution and elimination chemistry of alkyl halides: SN2 (concerted, backside attack with inversion) and SN1 (stepwise, carbocation, racemisation), E2 (anti-periplanar, Zaitsev) and E1, Hofmann versus Zaitsev orientation, the substrate, nucleophile/base, leaving-group, solvent and temperature factors that decide the pathway, and the key transformations of alkyl halides (Williamson ethers, nitriles, amines, Grignard reagents, Finkelstein and radical halogenation). Mechanisms and structures are shown in inline notation.",
      difficulty: "Advanced" as const,
      questions: ORGANIC_SET_4,
    },
    {
      n: 5,
      title: "Addition & Aromatic Chemistry",
      description:
        "The reactions of π systems: electrophilic addition to alkenes (Markovnikov and anti-Markovnikov, HX, hydration, halogenation via the bromonium ion, halohydrins, rearrangements), the regio- and stereochemistry of hydroboration, oxymercuration, hydrogenation, ozonolysis, epoxidation and dihydroxylation, the chemistry of alkynes (acidity, addition, Lindlar and dissolving-metal reductions), aromaticity and Hückel's rule, and both electrophilic and nucleophilic aromatic substitution with directing and activating effects. Structures and mechanisms are shown in inline notation.",
      difficulty: "Advanced" as const,
      questions: ORGANIC_SET_5,
    },
    {
      n: 6,
      title: "Carbonyl Chemistry",
      description:
        "The chemistry of the carbonyl group: nucleophilic addition to aldehydes and ketones (Grignard and hydride additions, cyanohydrins, hydrates), acetals and their use as protecting groups, imines and enamines, reductive amination, the Wittig reaction, oxidation and reduction of carbonyls, enols and enolates, keto–enol tautomerism, α-halogenation and the haloform reaction, the aldol and Claisen condensations, conjugate (Michael, 1,4-) addition, and the carboxylic acids and their derivatives with the addition–elimination (nucleophilic acyl substitution) mechanism and reactivity order. Structures and mechanisms are shown in inline notation.",
      difficulty: "Advanced" as const,
      questions: ORGANIC_SET_6,
    },
    // { n: 7, title: "Spectroscopy, Synthesis & Biomolecules", …, questions: ORGANIC_SET_7 },
  ],

  exams: [
    {
      n: 1,
      requires: [1, 2],
      title: "Structure, Bonding & Stereochemistry",
      description:
        "A 200-question exam drawn from Sets 1 and 2: hydrocarbon structure, bonding and nomenclature together with the full treatment of stereochemistry.",
      difficulty: "Advanced" as const,
      minutes: 180,
      draw: (p: any) => p.fromSets(1, 2),
    },
    {
      n: 2,
      requires: [3, 4],
      title: "Mechanisms, Substitution & Elimination",
      description:
        "A 200-question exam drawn from Sets 3 and 4: reactive intermediates and mechanism, and the substitution/elimination manifold (SN1, SN2, E1, E2).",
      difficulty: "Advanced" as const,
      minutes: 180,
      draw: (p: any) => p.fromSets(3, 4),
    },
    {
      n: 3,
      requires: [5, 6],
      title: "Addition, Aromatic & Carbonyl Chemistry",
      description:
        "A 200-question exam drawn from Sets 5 and 6: electrophilic addition, aromaticity and aromatic substitution, and the chemistry of the carbonyl group.",
      difficulty: "Advanced" as const,
      minutes: 180,
      draw: (p: any) => p.fromSets(5, 6),
    },
    {
      n: 4,
      requires: [1, 2, 3, 4, 5, 6, 7],
      title: "Multistep Synthesis Challenge",
      description:
        "The hardest multi-step and synthetic items in the bank: Set 7 combined with the longest, most involved problems drawn from Sets 1–6.",
      difficulty: "Advanced" as const,
      minutes: 150,
      draw: (p: any) => merge(p.fromSets(7), p.longestStems(40, p.fromSets(1, 2, 3, 4, 5, 6))),
    },
    {
      n: 5,
      requires: [1, 2, 3, 4, 5, 6, 7],
      title: "Multiple-Response Drill",
      description:
        "Every multiple-response (select-all) item across the whole bank, plus a broad supporting sample — training precise, complete reasoning.",
      difficulty: "Advanced" as const,
      minutes: 150,
      draw: (p: any) => merge(p.byType("MULTI"), sample(p.all(), 45, 5)),
    },
    {
      n: 6,
      requires: [1, 2, 3, 4, 5, 6, 7],
      title: "Mechanistic Reasoning",
      description:
        "A focused exam on mechanism, stereochemistry and reactivity reasoning drawn from across the bank, plus a broad supporting sample.",
      difficulty: "Advanced" as const,
      minutes: 150,
      draw: (p: any) =>
        merge(
          p.byTopic(
            "Reaction Mechanisms",
            "Reactive Intermediates",
            "Acids & Bases in Organic Chemistry",
            "SN1 vs SN2",
            "E1 vs E2",
            "Substitution vs Elimination",
          ),
          sample(p.all(), 90, 6),
        ),
    },
    {
      n: 7,
      requires: [1, 2, 3, 4, 5, 6, 7],
      title: "Comprehensive Final",
      description:
        "The complete Organic Chemistry bank: all seven sets in a single comprehensive assessment.",
      difficulty: "Advanced" as const,
      minutes: 240,
      draw: (p: any) => p.all(),
    },
  ],

  footnote:
    "Grounded in standard organic chemistry curricula (Clayden; McMurry; Vollhardt & Schore; Carey & Sundberg). Original questions; no text is quoted from these sources.",
};

runWave(() => seedSubject(config));
