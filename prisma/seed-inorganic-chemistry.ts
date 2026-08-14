/**
 * SEED — INORGANIC CHEMISTRY  (Foundational Sciences → Chemistry → Inorganic Chemistry)
 * =====================================================================================
 * A declarative 7-set / 7-exam subject built on the shared qbank engine.
 *
 * Scholarly anchors (for depth and phrasing, not for quotation): Weller, Overton,
 * Rourke & Armstrong "Inorganic Chemistry" (the successor to Shriver & Atkins);
 * Housecroft & Sharpe "Inorganic Chemistry"; Miessler, Fischer & Tarr; J. D. Lee
 * "Concise Inorganic Chemistry"; Cotton & Wilkinson "Advanced Inorganic Chemistry";
 * and Greenwood & Earnshaw "Chemistry of the Elements".
 *
 * Gold standard, per the physiology build:
 *   - 100 questions per set; option counts vary authentically 4–6 (plus true/false);
 *   - answer positions are randomized by the engine (orderedChoices), and answer
 *     LENGTHS are audited so the correct choice is never perceptibly the longest;
 *   - real difficulty (mechanism, periodic reasoning, quantitative), not recall.
 *
 * Sets flip on as they land; set partial:false once all seven are present.
 */

import { seedSubject, runWave, merge, sample } from "./_lib/qbank";

import { INORGANIC_SET_1 } from "./inorganic-chemistry/set-1";
import { INORGANIC_SET_2 } from "./inorganic-chemistry/set-2";
import { INORGANIC_SET_3 } from "./inorganic-chemistry/set-3";
import { INORGANIC_SET_4 } from "./inorganic-chemistry/set-4";
import { INORGANIC_SET_5 } from "./inorganic-chemistry/set-5";
import { INORGANIC_SET_6 } from "./inorganic-chemistry/set-6";
// import { INORGANIC_SET_7 } from "./inorganic-chemistry/set-7";

const SETS = [
  {
    n: 1,
    title: "Atomic Structure & Quantum Theory",
    description:
      "The quantum foundation of the atom: fundamental particles and isotopes, the early quantum theory of Planck, Einstein and Bohr, line spectra and the Rydberg equation, wave–particle duality and the uncertainty principle, the four quantum numbers, the shapes and nodes of atomic orbitals, and the ground-state electron configurations of atoms and ions.",
    difficulty: "Advanced" as const,
    questions: INORGANIC_SET_1,
  },
  {
    n: 2,
    title: "Periodicity & Periodic Trends",
    description:
      "The periodic table as the organizing principle of chemistry: the structure of the table and its s-, p-, d- and f-blocks, effective nuclear charge and Slater's rules, and the periodic trends in atomic and ionic radii, ionization energy, electron affinity and electronegativity, together with their irregularities, the diagonal relationship, and the lanthanide contraction.",
    difficulty: "Advanced" as const,
    questions: INORGANIC_SET_2,
  },
  {
    n: 3,
    title: "Chemical Bonding I — Ionic & Covalent",
    description:
      "How atoms combine: ionic bonding and lattice formation, lattice energy and the Born–Landé equation, the Born–Haber cycle, Fajans' rules and covalent character, Lewis structures, resonance and formal charge, exceptions to the octet, VSEPR geometry and bond angles, hybridization, bond polarity and dipole moments, and the bond-order / bond-length / bond-energy relationships. Chemical formulae and equations are shown in full notation.",
    difficulty: "Advanced" as const,
    questions: INORGANIC_SET_3,
  },
  {
    n: 4,
    title: "Chemical Bonding II — MO Theory & Metallic Bonding",
    description:
      "The molecular-orbital picture of bonding: LCAO and bonding/antibonding orbitals, bond order from molecular orbitals, the period-2 homonuclear diatomics and s–p mixing, the paramagnetism of O₂, MO electron configurations, heteronuclear diatomics (CO, NO, HF), valence-bond versus MO theory, metallic bonding and band theory, conductors, semiconductors, insulators and doping, delocalized π systems, and magnetic properties.",
    difficulty: "Advanced" as const,
    questions: INORGANIC_SET_4,
  },
  {
    n: 5,
    title: "Coordination Chemistry & Crystal Field Theory",
    description:
      "The chemistry of coordination compounds: Werner's theory and the coordination sphere, ligands, denticity and the chelate effect, nomenclature, coordination numbers and geometries, structural and stereoisomerism including optical isomers, crystal field theory in octahedral, tetrahedral and square-planar fields, Δ and CFSE, high- versus low-spin complexes and the spectrochemical series, colour and d–d transitions, the Jahn–Teller effect, magnetic moments, stability constants, bio-coordination chemistry and organometallics. Formulae of complex ions are shown in full notation.",
    difficulty: "Advanced" as const,
    questions: INORGANIC_SET_5,
  },
  {
    n: 6,
    title: "Descriptive Main-Group Chemistry",
    description:
      "The systematic descriptive chemistry of the s- and p-block: the anomalous position of hydrogen and the hydrides, the alkali and alkaline-earth metals and their trends, the beryllium anomaly and diagonal relationships, the boron group and electron-deficient bonding, the carbon and nitrogen groups, catenation, allotropy and the inert pair effect, the oxygen and halogen groups with their oxoacids, the noble gases and their compounds, and the periodic trends in oxide acid–base character. Formulae and equations are shown in full notation.",
    difficulty: "Advanced" as const,
    questions: INORGANIC_SET_6,
  },
  // { n: 7, title: "Transition Metals, Redox & Acid–Base", …, questions: INORGANIC_SET_7 },
];

const EXAMS = [
  {
    n: 1,
    requires: [1, 2],
    title: "Atomic Structure & Periodicity",
    description:
      "Quantum theory, electron configuration, and the periodic trends, drawn from Sets 1 and 2.",
    difficulty: "Intermediate" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(1, 2),
  },
  {
    n: 2,
    requires: [3, 4],
    title: "Chemical Bonding",
    description:
      "Ionic and covalent bonding, VSEPR and hybridization, molecular-orbital theory and metals, drawn from Sets 3 and 4.",
    difficulty: "Advanced" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(3, 4),
  },
  {
    n: 3,
    requires: [5, 6],
    title: "Coordination & Descriptive Inorganic",
    description:
      "Coordination compounds and crystal field theory with descriptive main-group chemistry, drawn from Sets 5 and 6.",
    difficulty: "Advanced" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(5, 6),
  },
  {
    n: 4,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Transition Metals & Reaction Chemistry Challenge",
    description:
      "The d-block, redox and inorganic acid–base chemistry, weighted toward the longest multi-step reasoning items.",
    difficulty: "Advanced" as const,
    minutes: 120,
    draw: (p: any) => merge(p.fromSets(7), p.longestStems(40, p.fromSets(1, 2, 3, 4, 5, 6))),
  },
  {
    n: 5,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Multiple-Response Drill",
    description: "Every multiple-response item across inorganic chemistry, plus a sample of the rest.",
    difficulty: "Advanced" as const,
    minutes: 100,
    draw: (p: any) => merge(p.byType("MULTI"), sample(p.all(), 45, 5)),
  },
  {
    n: 6,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Calculations & Periodic Reasoning",
    description:
      "Rydberg and photon-energy calculations, effective nuclear charge, lattice-energy and Born–Haber cycles, crystal-field splitting and magnetic moments — working the numbers, not recalling the fact.",
    difficulty: "Advanced" as const,
    minutes: 100,
    draw: (p: any) =>
      merge(
        p.byTopic(
          "Early Quantum Theory",
          "Line Spectra & the Rydberg Equation",
          "Effective Nuclear Charge & Shielding",
          "Ionization Energy",
          "Applications & Calculations"
        ),
        sample(p.all(), 90, 6)
      ),
  },
  {
    n: 7,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Comprehensive Final",
    description: "The whole of inorganic chemistry — every question in the bank.",
    difficulty: "Advanced" as const,
    minutes: 220,
    draw: (p: any) => p.all(),
  },
];

const config = {
  subject: "Inorganic Chemistry",
  slugBase: "inorganic-chemistry",
  categorySlug: "fs-inorganic-chemistry",
  minPerSet: 100,
  minPerExam: 90,
  partial: true, // ← switch to false once all seven sets have landed
  sets: SETS,
  exams: EXAMS,
  footnote:
    "Inorganic chemistry practice sets and exams at the depth of Weller/Housecroft/Miessler and J. D. Lee. Answer positions randomized and answer lengths audited so no positional or length pattern is exploitable.",
};

runWave(() => seedSubject(config));
