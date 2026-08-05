/**
 * PATHOLOGY — WAVE 1
 *
 * Seeds the Pathology subject: 7 practice sets of 70-100 questions and 7 exams
 * assembled from them.
 *
 * PARTIAL MODE
 * ------------
 * Sets arrive one package at a time. Rather than making you wait for all seven
 * before anything is visible, this runs in partial mode: it seeds whatever sets
 * exist and defers any exam whose source sets aren't written yet. Each new
 * package adds a set file, uncomments one line below, and you re-run the same
 * command — the new set appears on the site immediately.
 *
 * When Set 7 lands, change `partial: true` to `partial: false`. That switches
 * the validator back to full strictness: it will then insist on exactly seven
 * sets and seven exams, and will warn about any practice question that no exam
 * ever draws — the gap check.
 *
 * Run:  npx tsx prisma/seed-pathology.ts
 */

import { seedSubject, runWave, sample, merge, type Q } from "./_lib/qbank";

import { PATHOLOGY_SET_1 } from "./pathology/set-1";
import { PATHOLOGY_SET_2 } from "./pathology/set-2";
import { PATHOLOGY_SET_3 } from "./pathology/set-3";
import { PATHOLOGY_SET_4 } from "./pathology/set-4";
import { PATHOLOGY_SET_5 } from "./pathology/set-5";
import { PATHOLOGY_SET_6 } from "./pathology/set-6";
import { PATHOLOGY_SET_7 } from "./pathology/set-7";

/* ═══════════════════ PRACTICE SETS ═══════════════════ */

const SETS = [
  {
    n: 1,
    title: "Cell Injury, Cell Death & Cellular Adaptation",
    description:
      "Reversible and irreversible injury, the five patterns of necrosis, apoptosis, ischemia-reperfusion, free radical damage, and the four cellular adaptations. The foundation every later set builds on.",
    difficulty: "Foundational" as const,
    questions: PATHOLOGY_SET_1,
  },
  {
    n: 2,
    title: "Acute & Chronic Inflammation",
    description:
      "Vascular changes and edema, the leukocyte recruitment cascade, phagocytosis and killing, chemical mediators from histamine to the eicosanoids, complement, the acute phase response, and the granulomatous patterns of chronic inflammation.",
    difficulty: "Foundational" as const,
    questions: PATHOLOGY_SET_2,
  },
  {
    n: 3,
    title: "Tissue Repair, Regeneration & Wound Healing",
    description:
      "Regeneration versus scar, growth factors and the extracellular matrix, angiogenesis and granulation tissue, the phases of healing, wound strength over time, the factors that impair healing, abnormal healing from keloid to dehiscence, and organ fibrosis.",
    difficulty: "Intermediate" as const,
    questions: PATHOLOGY_SET_3,
  },
  {
    n: 4,
    title: "Hemodynamic Disorders, Thrombosis, Embolism & Shock",
    description:
      "Edema and the Starling forces, congestion and hemorrhage, hemostasis and the coagulation cascade, Virchow's triad and thrombophilia, embolic syndromes from pulmonary to amniotic fluid, infarction patterns, the shock states with their hemodynamic profiles, DIC, and coagulation lab interpretation.",
    difficulty: "Intermediate" as const,
    questions: PATHOLOGY_SET_4,
  },
  {
    n: 5,
    title: "Neoplasia I — Tumor Biology & Carcinogenesis",
    description:
      "Nomenclature and grading, the hallmarks of cancer, oncogenes and tumor suppressors, evasion of apoptosis and senescence, invasion and metastasis, tumor angiogenesis, chemical and radiation carcinogenesis, oncogenic viruses, and the inherited cancer syndromes.",
    difficulty: "Advanced" as const,
    questions: PATHOLOGY_SET_5,
  },
  {
    n: 6,
    title: "Neoplasia II — Clinical Oncology",
    description:
      "Tumor markers and paraneoplastic syndromes, cancer epidemiology and US screening programs, staging and prognosis in practice, the principles of chemotherapy, targeted and immunotherapy, radiation therapy, the oncologic emergencies, cachexia and supportive care, metastatic patterns, and histologic and molecular diagnostics.",
    difficulty: "Advanced" as const,
    questions: PATHOLOGY_SET_6,
  },
  {
    n: 7,
    title: "Systemic & Integrated Pathology",
    description:
      "Organ-by-organ disease drawing on everything established in Sets 1-6: cardiovascular, respiratory, gastrointestinal, hepatobiliary, renal, endocrine, neurologic, musculoskeletal, hematologic, dermatologic and reproductive pathology, closing with integrated reasoning across systems.",
    difficulty: "Advanced" as const,
    questions: PATHOLOGY_SET_7,
  },
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
      "Cell injury, death and adaptation, plus acute and chronic inflammation. The mechanisms every clinical diagnosis rests on.",
    difficulty: "Intermediate" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(1, 2),
  },
  {
    n: 2,
    requires: [3, 4],
    title: "Mechanisms Block",
    description:
      "Tissue repair and wound healing alongside hemodynamic disorders, thrombosis and shock.",
    difficulty: "Intermediate" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(3, 4),
  },
  {
    n: 3,
    requires: [5, 6],
    title: "Neoplasia Block",
    description:
      "Tumor biology, carcinogenesis, staging, tumor markers and paraneoplastic syndromes.",
    difficulty: "Advanced" as const,
    minutes: 120,
    draw: (p: any) => p.fromSets(5, 6),
  },
  {
    n: 4,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Integration Challenge",
    description:
      "Systemic pathology combined with the most demanding multi-step items from every earlier set. The hardest paper in the subject.",
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
          "Injury Marker Interpretation",
          "Inflammatory Marker Interpretation",
          "Coagulation Lab Interpretation",
          "Clinical Wound Assessment",
          "Histologic & Molecular Diagnostics",
          "Tumor Markers"
        ),
        sample(p.all(), 90, 6)
      ),
  },
  {
    n: 7,
    requires: [1, 2, 3, 4, 5, 6, 7],
    title: "Comprehensive Final",
    description:
      "The entire Pathology question pool under exam conditions. Sit this last.",
    difficulty: "Advanced" as const,
    minutes: 240,
    draw: (p: any) => p.all(),
  },
];

/* ═══════════════════ RUN ═══════════════════ */

runWave(() =>
  seedSubject({
    subject: "Pathology",
    slugBase: "pathology",
    categorySlug: "fs-pathology",
    partial: false, // Set 7 has landed — full strictness, including the gap check
    sets: SETS,
    exams: EXAMS,
    footnote:
      "US conventional units throughout (mg/dL, mEq/L, mmHg). Guideline references follow ACC/AHA, ADA and CAP conventions.",
  })
);
