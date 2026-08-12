/**
 * SEED — PHYSIOLOGY  (Foundational Sciences → fs-physiology)
 *
 * The flagship build at the new gold standard:
 *   • 100 questions per practice set (minPerSet: 100)
 *   • authentic 4–7 option mix, mixed formats (single-best, select-all,
 *     true/false, lab panels, data/graph interpretation, clinical scenarios)
 *   • Guyton & Hall / Ganong depth — second-order reasoning, quantitative and
 *     mechanism items, every distractor a defensible near-miss
 *   • answer positions randomized at seed time by the engine
 *   • answer-length parity enforced by the engine audit (the correct answer is
 *     not detectable by being the longest option)
 *
 * 7 practice sets → 7 exams drawn from those sets. Sets 1–2 active this wave;
 * flip the rest on as they land, then set partial:false.
 */
import { seedSubject, runWave, sample, merge, type Q } from "./_lib/qbank";

import { PHYSIOLOGY_SET_1 } from "./physiology/set-1";
import { PHYSIOLOGY_SET_2 } from "./physiology/set-2";
import { PHYSIOLOGY_SET_3 } from "./physiology/set-3";
import { PHYSIOLOGY_SET_4 } from "./physiology/set-4";
// import { PHYSIOLOGY_SET_5 } from "./physiology/set-5";
// import { PHYSIOLOGY_SET_6 } from "./physiology/set-6";
// import { PHYSIOLOGY_SET_7 } from "./physiology/set-7";

const SETS = [
  {
    n: 1,
    title: "Cell Physiology, Membrane Transport & Excitable Tissue",
    description:
      "The physical basis of life at the cell: membrane transport and the sodium-potassium pump, resting and action potentials, nerve conduction, synaptic transmission, skeletal, smooth, and cardiac excitation-contraction coupling, and the signal-transduction cascades that tie them together.",
    difficulty: "Intermediate" as const,
    questions: PHYSIOLOGY_SET_1,
  },
  {
    n: 2,
    title: "Cardiovascular Physiology",
    description:
      "The heart as a pump and the circulation it drives: cardiac electrophysiology and the action potentials of nodal and ventricular cells, the cardiac cycle and pressure-volume loop, cardiac output and its regulation, hemodynamics and the microcirculation, and the neural and hormonal control of arterial pressure.",
    difficulty: "Advanced" as const,
    questions: PHYSIOLOGY_SET_2,
  },
  {
    n: 3,
    title: "Respiratory Physiology",
    description:
      "The lung as a gas exchanger: lung volumes and capacities, the mechanics of breathing and surfactant, airway resistance and flow, alveolar ventilation and dead space, diffusion and gas exchange, ventilation-perfusion matching, the transport of oxygen and carbon dioxide, the control of breathing, and the responses to exercise and altitude.",
    difficulty: "Advanced" as const,
    questions: PHYSIOLOGY_SET_3,
  },
  {
    n: 4,
    title: "Renal Physiology, Body Fluids & Acid-Base",
    description:
      "The kidney as the guardian of the internal environment: body-fluid compartments, renal clearance and the glomerular filtration rate, glomerular filtration and its autoregulation, tubular reabsorption and secretion, the loop of Henle and countercurrent multiplication, the regulation of water and sodium, potassium, calcium and phosphate handling, and acid-base physiology and its disorders.",
    difficulty: "Advanced" as const,
    questions: PHYSIOLOGY_SET_4,
  },
  // { n: 5, title: "Gastrointestinal Physiology", …, questions: PHYSIOLOGY_SET_5 },
  // { n: 6, title: "Endocrine & Reproductive Physiology", …, questions: PHYSIOLOGY_SET_6 },
  // { n: 7, title: "Neurophysiology & Integrative Physiology", …, questions: PHYSIOLOGY_SET_7 },
];

const EXAMS = [
  {
    n: 1,
    requires: [1, 2],
    title: "Foundations Block: Excitable Tissue & Cardiovascular",
    description:
      "Cell and membrane physiology, nerve and muscle, and the cardiovascular system, drawn from Sets 1 and 2.",
    difficulty: "Intermediate" as const,
    minutes: 130,
    draw: (p: any) => p.fromSets(1, 2),
  },
  {
    n: 2,
    requires: [3, 4],
    title: "Respiratory & Renal Block",
    description: "Pulmonary and renal physiology, body fluids and acid-base, drawn from Sets 3 and 4.",
    difficulty: "Advanced" as const,
    minutes: 130,
    draw: (p: any) => p.fromSets(3, 4),
  },
  {
    n: 3,
    requires: [5, 6],
    title: "Gastrointestinal & Endocrine Block",
    description: "Gastrointestinal, endocrine, and reproductive physiology, drawn from Sets 5 and 6.",
    difficulty: "Advanced" as const,
    minutes: 130,
    draw: (p: any) => p.fromSets(5, 6),
  },
  {
    n: 4,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Integrative & Neurophysiology Challenge",
    description:
      "Neurophysiology and whole-body integration, weighted toward the longest multi-step reasoning items.",
    difficulty: "Advanced" as const,
    minutes: 130,
    draw: (p: any) => merge(p.fromSets(7), p.longestStems(40, p.fromSets(1, 2, 3, 4, 5, 6))),
  },
  {
    n: 5,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Select-All-That-Apply Drill",
    description: "Every multiple-response item across physiology, plus a sample of the rest.",
    difficulty: "Advanced" as const,
    minutes: 110,
    draw: (p: any) => merge(p.byType("MULTI"), sample(p.all(), 45, 5)),
  },
  {
    n: 6,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Data & Figure Interpretation",
    description:
      "Pressure-volume loops, spirometry and flow-volume curves, renal clearance data, hormone axes and lab panels — reading the data, not recalling the fact.",
    difficulty: "Advanced" as const,
    minutes: 110,
    draw: (p: any) =>
      merge(
        p.withFigures(),
        p.byTopic(
          "Cardiac Cycle & Pressure-Volume Loop",
          "Cardiac Output & Its Regulation",
          "Hemodynamics & the Microcirculation",
          "Signal Transduction"
        ),
        sample(p.all(), 90, 6)
      ),
  },
  {
    n: 7,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Comprehensive Final",
    description: "The whole of physiology — every question in the bank.",
    difficulty: "Advanced" as const,
    minutes: 240,
    draw: (p: any) => p.all(),
  },
];

const config = {
  subject: "Physiology",
  slugBase: "physiology",
  categorySlug: "fs-physiology",
  minPerSet: 100, // NEW gold standard — the seeder refuses to run if any set is under 100
  minPerExam: 90,
  partial: true, // ← switch to false once all seven sets have landed
  sets: SETS,
  exams: EXAMS,
  footnote:
    "Physiology practice sets and exams. Guyton & Hall / Ganong depth; answer positions randomized and answer lengths audited so no positional or length pattern is exploitable.",
};

runWave(() => seedSubject(config));
