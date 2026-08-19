/**
 * Physical Chemistry — 7 practice sets + 7 exams.
 *
 * Grounded in standard physical-chemistry curricula (Atkins' Physical Chemistry;
 * Levine, Physical Chemistry; McQuarrie & Simon, Physical Chemistry: A Molecular
 * Approach). Original questions; no text is quoted from these sources.
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

import { PHYSICAL_SET_1 } from "./physical-chemistry/set-1";
import { PHYSICAL_SET_2 } from "./physical-chemistry/set-2";
// import { PHYSICAL_SET_3 } from "./physical-chemistry/set-3";
// import { PHYSICAL_SET_4 } from "./physical-chemistry/set-4";
// import { PHYSICAL_SET_5 } from "./physical-chemistry/set-5";
// import { PHYSICAL_SET_6 } from "./physical-chemistry/set-6";
// import { PHYSICAL_SET_7 } from "./physical-chemistry/set-7";

const config: SubjectConfig = {
  subject: "Physical Chemistry",
  slugBase: "physical-chemistry",
  categorySlug: "fs-physical-chemistry",
  minPerSet: 100,
  minPerExam: 90,
  partial: true, // ← switch to false once all seven sets have landed

  sets: [
    {
      n: 1,
      title: "Gases & the Kinetic Theory",
      description:
        "The gaseous state: the ideal gas law and its component gas laws, partial pressures and Dalton's law, the kinetic molecular theory, the Maxwell–Boltzmann distribution of molecular speeds, mean speeds and kinetic energy, effusion and diffusion (Graham's law), molecular collisions and mean free path, and the behaviour of real gases (compression factor, the van der Waals equation, critical constants and the principle of corresponding states). Equations are shown in inline notation.",
      difficulty: "Foundational" as const,
      questions: PHYSICAL_SET_1,
    },
    {
      n: 2,
      title: "First Law & Thermochemistry",
      description:
        "The first law of thermodynamics: internal energy, heat and work (including expansion work, reversible and irreversible), state versus path functions, enthalpy and the relation between ΔU and ΔH, heat capacities at constant volume and pressure, calorimetry, standard enthalpies of formation, reaction, combustion and their combination through Hess's law, bond enthalpies, and the temperature dependence of reaction enthalpy (Kirchhoff's law). Equations are shown in inline notation.",
      difficulty: "Intermediate" as const,
      questions: PHYSICAL_SET_2,
    },
    // { n: 3, title: "Second & Third Laws", …, questions: PHYSICAL_SET_3 },
    // { n: 4, title: "Phase Equilibria & Solutions", …, questions: PHYSICAL_SET_4 },
    // { n: 5, title: "Chemical Equilibrium & Electrochemistry", …, questions: PHYSICAL_SET_5 },
    // { n: 6, title: "Chemical Kinetics", …, questions: PHYSICAL_SET_6 },
    // { n: 7, title: "Quantum Chemistry & Spectroscopy", …, questions: PHYSICAL_SET_7 },
  ],

  exams: [
    {
      n: 1,
      requires: [1, 2],
      title: "Gases & the First Law",
      description:
        "Combines the gas laws and kinetic theory with the first law of thermodynamics and thermochemistry.",
      difficulty: "Foundational" as const,
      minutes: 90,
      draw: (p: any) => p.fromSets(1, 2),
    },
    {
      n: 2,
      requires: [3, 4],
      title: "Thermodynamics & Phase Equilibria",
      description:
        "The second and third laws with phase equilibria and the physical chemistry of solutions.",
      difficulty: "Intermediate" as const,
      minutes: 90,
      draw: (p: any) => p.fromSets(3, 4),
    },
    {
      n: 3,
      requires: [5, 6],
      title: "Equilibrium, Electrochemistry & Kinetics",
      description:
        "Chemical equilibrium and electrochemistry together with the rates and mechanisms of reactions.",
      difficulty: "Advanced" as const,
      minutes: 90,
      draw: (p: any) => p.fromSets(5, 6),
    },
    {
      n: 4,
      requires: [1, 2, 3, 4, 5, 6, 7],
      title: "Quantum & Spectroscopy Challenge",
      description:
        "Quantum chemistry and spectroscopy, with the most demanding problems drawn from across physical chemistry.",
      difficulty: "Advanced" as const,
      minutes: 120,
      draw: (p: any) =>
        merge(p.fromSets(7), p.longestStems(40, p.fromSets(1, 2, 3, 4, 5, 6))),
    },
    {
      n: 5,
      requires: [1, 2, 3, 4, 5, 6, 7],
      title: "Multiple-Response Drill",
      description:
        "Every multiple-response item across physical chemistry, plus a broad sample of the bank.",
      difficulty: "Advanced" as const,
      minutes: 120,
      draw: (p: any) => merge(p.byType("MULTI"), sample(p.all(), 45, 5)),
    },
    {
      n: 6,
      requires: [1, 2, 3, 4, 5, 6, 7],
      title: "Thermodynamics & Equilibrium Reasoning",
      description:
        "Reasoning-focused items on thermodynamics, equilibrium and spontaneity drawn from across the bank.",
      difficulty: "Advanced" as const,
      minutes: 120,
      draw: (p: any) =>
        merge(
          p.byTopic(
            "First Law",
            "Enthalpy & Thermochemistry",
            "Entropy & the Second Law",
            "Free Energy & Spontaneity",
            "Chemical Equilibrium",
            "Electrochemistry",
          ),
          sample(p.all(), 90, 6),
        ),
    },
    {
      n: 7,
      requires: [1, 2, 3, 4, 5, 6, 7],
      title: "Comprehensive Final",
      description:
        "The complete Physical Chemistry bank: all seven sets in a single comprehensive assessment.",
      difficulty: "Advanced" as const,
      minutes: 240,
      draw: (p: any) => p.all(),
    },
  ],

  footnote:
    "Grounded in standard physical chemistry curricula (Atkins; Levine; McQuarrie & Simon). Original questions; no text is quoted from these sources.",
};

runWave(() => seedSubject(config));
