/**
 * Practice + Real Exam sets for the USMLE and Pharmacy sections — idempotent.
 *
 * Every question here is ORIGINAL, written in the style of the exam. Nothing is
 * copied from any real exam or question bank. Each carries a rationale, so a
 * student reviewing an attempt learns why the answer is right.
 *
 * Pattern per topic: one PRACTICE set (untimed, teaching) and one EXAM set
 * (timed, checks readiness). Add more anytime in Admin -> Question Bank.
 *
 * Run:  npx tsx prisma/seed-usmle-pharmacy-quizzes.ts
 *       (run seed-usmle-pharmacy.ts first — it creates the categories)
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

type Set = {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  description: string;
  kind: "PRACTICE" | "EXAM";
  difficulty: string;
  timeLimitMinutes: number; // 0 = untimed
  passThreshold: number;
  questions: Q[];
};

const SETS: Set[] = [
  // ───────────── USMLE STEP 1 ─────────────
  {
    id: "qz-usmle1-practice",
    slug: "usmle-step-1-practice",
    title: "Step 1 — Practice Set",
    categoryId: "qbc-usmle-step1",
    description: "Untimed basic-science practice with full rationales. Learn the mechanism, not the label.",
    kind: "PRACTICE",
    difficulty: "Intermediate",
    timeLimitMinutes: 0,
    passThreshold: 60,
    questions: [
      {
        stem: "A patient's arterial blood shows a low pH with a raised bicarbonate. Which disturbance best explains this pattern?",
        topic: "Acid–base physiology",
        explanation:
          "A low pH means acidaemia. If bicarbonate is raised rather than low, the kidney is compensating for a primary respiratory problem — retained CO2. So this is a respiratory acidosis with metabolic compensation. In a primary metabolic acidosis the bicarbonate would be low, not high.",
        choices: [
          { text: "Respiratory acidosis with metabolic compensation", isCorrect: true },
          { text: "Metabolic acidosis with respiratory compensation", isCorrect: false },
          { text: "Respiratory alkalosis", isCorrect: false },
          { text: "Metabolic alkalosis", isCorrect: false },
        ],
      },
      {
        stem: "Which cell type presents antigen to naive T lymphocytes most effectively?",
        topic: "Immunology",
        explanation:
          "Dendritic cells are the professional antigen-presenting cells that activate naive T cells — they migrate to lymph nodes and express high levels of MHC II and co-stimulatory molecules. Macrophages and B cells present antigen, but chiefly to already-primed T cells.",
        choices: [
          { text: "Dendritic cell", isCorrect: true },
          { text: "Neutrophil", isCorrect: false },
          { text: "Erythrocyte", isCorrect: false },
          { text: "Platelet", isCorrect: false },
        ],
      },
      {
        stem: "A drug competitively inhibits an enzyme. What happens to the apparent Km and the Vmax?",
        topic: "Pharmacology",
        explanation:
          "A competitive inhibitor competes for the active site, so more substrate is needed for the same rate — the apparent Km rises. Because enough substrate can still outcompete the inhibitor, Vmax is unchanged. (A non-competitive inhibitor does the opposite: Vmax falls, Km unchanged.)",
        choices: [
          { text: "Km increases, Vmax unchanged", isCorrect: true },
          { text: "Km decreases, Vmax unchanged", isCorrect: false },
          { text: "Km unchanged, Vmax decreases", isCorrect: false },
          { text: "Both Km and Vmax decrease", isCorrect: false },
        ],
      },
      {
        stem: "Which vitamin deficiency classically causes a megaloblastic anaemia together with neurological signs?",
        topic: "Biochemistry",
        explanation:
          "Vitamin B12 (cobalamin) deficiency causes megaloblastic anaemia AND neurological damage (subacute combined degeneration), because B12 is needed for myelin maintenance. Folate deficiency causes the same anaemia but WITHOUT the neurological signs — that distinction is the point of the question.",
        choices: [
          { text: "Vitamin B12", isCorrect: true },
          { text: "Folate", isCorrect: false },
          { text: "Vitamin C", isCorrect: false },
          { text: "Vitamin K", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "qz-usmle1-exam",
    slug: "usmle-step-1-exam",
    title: "Step 1 — Real Exam",
    categoryId: "qbc-usmle-step1",
    description: "Timed exam conditions. Check whether your Step 1 basic science is exam-ready.",
    kind: "EXAM",
    difficulty: "Advanced",
    timeLimitMinutes: 10,
    passThreshold: 70,
    questions: [
      {
        stem: "A patient on long-term corticosteroids abruptly stops them and becomes hypotensive and hypoglycaemic. What is the mechanism?",
        topic: "Endocrinology",
        explanation:
          "Chronic exogenous steroid suppresses the hypothalamic–pituitary–adrenal axis; the adrenal cortex atrophies. Stopping abruptly leaves the patient unable to mount a cortisol response — an adrenal crisis. This is why steroids are tapered rather than stopped.",
        choices: [
          { text: "Suppression of the HPA axis with adrenal atrophy", isCorrect: true },
          { text: "Direct toxicity to the adrenal medulla", isCorrect: false },
          { text: "Autoimmune destruction of the adrenal cortex", isCorrect: false },
          { text: "Excess ACTH secretion from a pituitary adenoma", isCorrect: false },
        ],
      },
      {
        stem: "Which change in the cardiac cycle most directly raises stroke volume?",
        topic: "Cardiovascular physiology",
        explanation:
          "Stroke volume rises with increased preload (more ventricular filling stretches the myofibrils, increasing contraction force — the Frank–Starling relationship). Increased afterload OPPOSES ejection and lowers stroke volume, which is why hypertension eventually strains the heart.",
        choices: [
          { text: "Increased preload", isCorrect: true },
          { text: "Increased afterload", isCorrect: false },
          { text: "Decreased contractility", isCorrect: false },
          { text: "Increased heart rate alone", isCorrect: false },
        ],
      },
      {
        stem: "Select ALL findings you would expect in an upper motor neuron lesion.",
        topic: "Neurology",
        explanation:
          "Upper motor neuron lesions release the spinal cord from cortical inhibition, producing spasticity, hyperreflexia and an extensor plantar (Babinski) response. Muscle wasting and fasciculations are LOWER motor neuron signs, because the muscle loses its direct innervation.",
        choices: [
          { text: "Spasticity", isCorrect: true },
          { text: "Hyperreflexia", isCorrect: true },
          { text: "Babinski sign", isCorrect: true },
          { text: "Fasciculations", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────── USMLE STEP 2 CK ─────────────
  {
    id: "qz-usmle2-practice",
    slug: "usmle-step-2-practice",
    title: "Step 2 CK — Practice Set",
    categoryId: "qbc-usmle-step2",
    description: "Clinical vignettes, untimed, with reasoning explained. Build your 'next best step' instinct.",
    kind: "PRACTICE",
    difficulty: "Intermediate",
    timeLimitMinutes: 0,
    passThreshold: 60,
    questions: [
      {
        stem: "A patient arrives with crushing central chest pain radiating to the jaw. What is the single most important immediate investigation?",
        topic: "Cardiology",
        explanation:
          "A 12-lead ECG within 10 minutes is the priority — it decides immediately whether this is a STEMI needing urgent reperfusion. Troponin matters, but it takes time and a normal early troponin does not exclude an evolving infarct. In 'next best step' questions, ask what changes management fastest.",
        choices: [
          { text: "12-lead ECG", isCorrect: true },
          { text: "Chest X-ray", isCorrect: false },
          { text: "Echocardiogram", isCorrect: false },
          { text: "Exercise stress test", isCorrect: false },
        ],
      },
      {
        stem: "A patient with type 2 diabetes has a persistently raised HbA1c despite lifestyle change. Which first-line medication is usually started?",
        topic: "Endocrinology",
        explanation:
          "Metformin is first-line: it lowers hepatic glucose production, does not cause hypoglycaemia on its own, is weight-neutral or favourable, and has the longest safety record. Insulin is reserved for when oral agents fail or glucose is very high.",
        choices: [
          { text: "Metformin", isCorrect: true },
          { text: "Insulin glargine", isCorrect: false },
          { text: "Hydrochlorothiazide", isCorrect: false },
          { text: "Atorvastatin", isCorrect: false },
        ],
      },
      {
        stem: "A postoperative patient becomes suddenly short of breath with a raised respiratory rate and clear lungs. What must you exclude first?",
        topic: "Respiratory",
        explanation:
          "Sudden dyspnoea and tachypnoea with a clear chest after surgery is pulmonary embolism until proven otherwise — surgery and immobility are strong risk factors. It is the diagnosis that kills quickest if missed, which is why it is excluded first.",
        choices: [
          { text: "Pulmonary embolism", isCorrect: true },
          { text: "Asthma exacerbation", isCorrect: false },
          { text: "Pneumonia", isCorrect: false },
          { text: "Anxiety", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "qz-usmle2-exam",
    slug: "usmle-step-2-exam",
    title: "Step 2 CK — Real Exam",
    categoryId: "qbc-usmle-step2",
    description: "Timed clinical exam. Manage the clock as well as the diagnosis.",
    kind: "EXAM",
    difficulty: "Advanced",
    timeLimitMinutes: 10,
    passThreshold: 70,
    questions: [
      {
        stem: "A patient with a severe asthma attack becomes drowsy and their arterial CO2 rises to normal from a previously low value. What does this indicate?",
        topic: "Respiratory",
        explanation:
          "In an asthma attack the patient hyperventilates, so CO2 should be LOW. A CO2 rising back to 'normal' means they are tiring and no longer ventilating adequately — this is impending respiratory failure and a reason to escalate urgently, not reassurance.",
        choices: [
          { text: "Impending respiratory failure — escalate urgently", isCorrect: true },
          { text: "The attack is resolving", isCorrect: false },
          { text: "Over-treatment with bronchodilators", isCorrect: false },
          { text: "A normal finding requiring no action", isCorrect: false },
        ],
      },
      {
        stem: "Which is the most appropriate initial management of anaphylaxis?",
        topic: "Emergency medicine",
        explanation:
          "Intramuscular adrenaline (epinephrine) into the anterolateral thigh is first-line and life-saving — it reverses airway oedema and hypotension. Antihistamines and steroids are adjuncts and act far too slowly to be relied on first.",
        choices: [
          { text: "Intramuscular adrenaline", isCorrect: true },
          { text: "Oral antihistamine", isCorrect: false },
          { text: "Intravenous corticosteroid alone", isCorrect: false },
          { text: "Nebulised saline", isCorrect: false },
        ],
      },
      {
        stem: "A screening test has high sensitivity. What does a negative result allow you to do?",
        topic: "Biostatistics",
        explanation:
          "A highly SENSITIVE test rarely misses disease, so a NEGATIVE result confidently rules it OUT (the mnemonic: SnNout). High specificity works the other way — a positive result rules disease IN. Step 2 tests this reasoning routinely.",
        choices: [
          { text: "Confidently rule the disease out", isCorrect: true },
          { text: "Confidently rule the disease in", isCorrect: false },
          { text: "Conclude the test is useless", isCorrect: false },
          { text: "Nothing — sensitivity says nothing about negatives", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────── NAPLEX ─────────────
  {
    id: "qz-naplex-practice",
    slug: "naplex-practice",
    title: "NAPLEX — Practice Set",
    categoryId: "qbc-naplex",
    description: "Untimed therapeutics and safety practice, with the reasoning spelled out.",
    kind: "PRACTICE",
    difficulty: "Intermediate",
    timeLimitMinutes: 0,
    passThreshold: 60,
    questions: [
      {
        stem: "A patient on warfarin is started on an antibiotic and their INR rises sharply. What is the most likely mechanism?",
        topic: "Drug interactions",
        explanation:
          "Many antibiotics inhibit the cytochrome P450 enzymes that metabolise warfarin, so warfarin accumulates and the INR climbs — raising bleeding risk. Some also kill gut flora that produce vitamin K, compounding the effect. This is a classic interaction to counsel on and monitor.",
        choices: [
          { text: "Inhibition of warfarin metabolism (CYP450)", isCorrect: true },
          { text: "Induction of warfarin metabolism", isCorrect: false },
          { text: "Reduced warfarin absorption", isCorrect: false },
          { text: "Increased vitamin K synthesis", isCorrect: false },
        ],
      },
      {
        stem: "Which counselling point is essential for a patient starting an oral bisphosphonate?",
        topic: "Patient counselling",
        explanation:
          "Take it on an empty stomach with a full glass of plain water and stay upright for at least 30 minutes. Bisphosphonates are poorly absorbed and can cause oesophageal irritation or ulceration if the patient lies down — so this instruction is a safety issue, not a nicety.",
        choices: [
          { text: "Take with water and remain upright for 30 minutes", isCorrect: true },
          { text: "Take with milk at bedtime", isCorrect: false },
          { text: "Take with a high-fat meal", isCorrect: false },
          { text: "Crush and take with antacid", isCorrect: false },
        ],
      },
      {
        stem: "Which laboratory value most requires monitoring in a patient on long-term lithium?",
        topic: "Therapeutic monitoring",
        explanation:
          "Lithium is renally cleared and has a narrow therapeutic index, so renal function (and lithium level, plus thyroid function) must be monitored. Dehydration, NSAIDs and diuretics can all raise lithium levels into toxicity.",
        choices: [
          { text: "Serum creatinine / renal function", isCorrect: true },
          { text: "Serum amylase", isCorrect: false },
          { text: "Serum bilirubin", isCorrect: false },
          { text: "Serum uric acid", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "qz-naplex-exam",
    slug: "naplex-exam",
    title: "NAPLEX — Real Exam",
    categoryId: "qbc-naplex",
    description: "Timed exam covering therapeutics, safety, and calculations.",
    kind: "EXAM",
    difficulty: "Advanced",
    timeLimitMinutes: 10,
    passThreshold: 75,
    questions: [
      {
        stem: "A prescription reads 250 mg. The stock solution is 125 mg per 5 mL. What volume should be dispensed?",
        topic: "Calculations",
        explanation:
          "250 mg ÷ 125 mg = 2 doses of 5 mL, so 10 mL. Set it out as a proportion every time rather than doing it in your head — under exam pressure that discipline is what prevents a decimal-point error.",
        choices: [
          { text: "10 mL", isCorrect: true },
          { text: "5 mL", isCorrect: false },
          { text: "12.5 mL", isCorrect: false },
          { text: "20 mL", isCorrect: false },
        ],
      },
      {
        stem: "A patient taking an ACE inhibitor develops a persistent dry cough. What is the most appropriate action?",
        topic: "Therapeutics",
        explanation:
          "ACE inhibitors reduce bradykinin breakdown, and the accumulation causes a dry cough in a minority of patients. Switching to an ARB gives the same blood-pressure and renal benefit without the bradykinin effect, so the cough resolves.",
        choices: [
          { text: "Switch to an angiotensin receptor blocker (ARB)", isCorrect: true },
          { text: "Add a cough suppressant and continue", isCorrect: false },
          { text: "Double the ACE inhibitor dose", isCorrect: false },
          { text: "Stop all antihypertensives", isCorrect: false },
        ],
      },
      {
        stem: "Select ALL medications that require counselling about photosensitivity.",
        topic: "Patient safety",
        explanation:
          "Tetracyclines (e.g. doxycycline), fluoroquinolones and amiodarone all cause photosensitivity — patients should use sun protection. Metformin does not. Grouping side effects by drug class rather than memorising drug-by-drug makes these questions much faster.",
        choices: [
          { text: "Doxycycline", isCorrect: true },
          { text: "Ciprofloxacin", isCorrect: true },
          { text: "Amiodarone", isCorrect: true },
          { text: "Metformin", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────── MPJE ─────────────
  {
    id: "qz-mpje-practice",
    slug: "mpje-practice",
    title: "MPJE — Practice Set",
    categoryId: "qbc-mpje",
    description: "Pharmacy law practice. Federal principles explained — always confirm your own state's rules.",
    kind: "PRACTICE",
    difficulty: "Intermediate",
    timeLimitMinutes: 0,
    passThreshold: 60,
    questions: [
      {
        stem: "Under federal law, which schedule of controlled substance has NO accepted medical use in the United States?",
        topic: "Controlled substances",
        explanation:
          "Schedule I substances are defined as having a high potential for abuse and NO currently accepted medical use, which is why they cannot be prescribed. Schedules II–V all have accepted medical uses, with decreasing abuse potential as the number rises.",
        choices: [
          { text: "Schedule I", isCorrect: true },
          { text: "Schedule II", isCorrect: false },
          { text: "Schedule III", isCorrect: false },
          { text: "Schedule V", isCorrect: false },
        ],
      },
      {
        stem: "When federal law and state pharmacy law conflict, which does the pharmacist follow?",
        topic: "Federal vs state law",
        explanation:
          "The pharmacist follows the STRICTER of the two. Federal law sets a floor, not a ceiling — a state may impose tighter requirements, and you must meet both. This principle is tested constantly on the MPJE.",
        choices: [
          { text: "Whichever is stricter", isCorrect: true },
          { text: "Always federal law", isCorrect: false },
          { text: "Always state law", isCorrect: false },
          { text: "Whichever is more convenient for the patient", isCorrect: false },
        ],
      },
      {
        stem: "What is the purpose of a patient's Notice of Privacy Practices under HIPAA?",
        topic: "Privacy law",
        explanation:
          "It tells patients how their protected health information may be used and disclosed, and sets out their rights over it. HIPAA governs the handling of health information — it does not set drug prices or determine formulary coverage.",
        choices: [
          { text: "To explain how their health information may be used and their rights over it", isCorrect: true },
          { text: "To list the prices of their medications", isCorrect: false },
          { text: "To record their insurance claims", isCorrect: false },
          { text: "To authorise generic substitution", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────── PHARMACY CALCULATIONS ─────────────
  {
    id: "qz-pharmcalc-practice",
    slug: "pharmacy-calculations-practice",
    title: "Pharmacy Calculations — Practice Set",
    categoryId: "qbc-pharm-calc",
    description: "Work the method until it's automatic. Every answer shows the full working.",
    kind: "PRACTICE",
    difficulty: "Intermediate",
    timeLimitMinutes: 0,
    passThreshold: 70,
    questions: [
      {
        stem: "How many grams of drug are in 500 mL of a 2% w/v solution?",
        topic: "Concentrations",
        explanation:
          "2% w/v means 2 g per 100 mL. In 500 mL that is 5 × 2 g = 10 g. Anchor yourself on the definition — percent w/v is always grams per 100 mL — and these questions become mechanical.",
        choices: [
          { text: "10 g", isCorrect: true },
          { text: "2 g", isCorrect: false },
          { text: "5 g", isCorrect: false },
          { text: "20 g", isCorrect: false },
        ],
      },
      {
        stem: "An IV bag of 1,000 mL is to run over 8 hours. What is the rate in mL per hour?",
        topic: "IV rates",
        explanation:
          "1,000 mL ÷ 8 hours = 125 mL/hour. Infusion-rate questions are almost always volume divided by time — the difficulty is unit conversion, so convert everything to the units the answer is asked in before you divide.",
        choices: [
          { text: "125 mL/hour", isCorrect: true },
          { text: "80 mL/hour", isCorrect: false },
          { text: "150 mL/hour", isCorrect: false },
          { text: "100 mL/hour", isCorrect: false },
        ],
      },
      {
        stem: "A child weighs 20 kg. The dose is 15 mg/kg/day divided into 3 doses. How much is each dose?",
        topic: "Weight-based dosing",
        explanation:
          "20 kg × 15 mg = 300 mg per day. Divided into 3 doses = 100 mg per dose. Always compute the DAILY total first, then divide — reversing the order is the most common way candidates go wrong.",
        choices: [
          { text: "100 mg", isCorrect: true },
          { text: "300 mg", isCorrect: false },
          { text: "50 mg", isCorrect: false },
          { text: "150 mg", isCorrect: false },
        ],
      },
    ],
  },
];

async function main() {
  let created = 0;

  for (const set of SETS) {
    const timeLimitSeconds = set.timeLimitMinutes > 0 ? set.timeLimitMinutes * 60 : null;

    await prisma.quiz.upsert({
      where: { id: set.id },
      update: {
        slug: set.slug,
        title: set.title,
        categoryId: set.categoryId,
        description: set.description,
        kind: set.kind,
        difficulty: set.difficulty,
        timeLimitSeconds,
        passThreshold: set.passThreshold,
        published: true,
      },
      create: {
        id: set.id,
        slug: set.slug,
        title: set.title,
        categoryId: set.categoryId,
        description: set.description,
        kind: set.kind,
        difficulty: set.difficulty,
        timeLimitSeconds,
        passThreshold: set.passThreshold,
        published: true,
      },
    });

    // Rewrite questions so re-running keeps the set in sync (no duplicates).
    await prisma.question.deleteMany({ where: { quizId: set.id } });

    for (const [i, q] of set.questions.entries()) {
      const multi = q.choices.filter((c) => c.isCorrect).length > 1;
      await prisma.question.create({
        data: {
          quizId: set.id,
          type: (multi ? "MULTI" : "SINGLE") as never,
          stem: q.stem,
          topic: q.topic,
          explanation: q.explanation,
          points: 1,
          order: i,
          choices: {
            create: q.choices.map((c, ci) => ({ text: c.text, isCorrect: c.isCorrect, order: ci })),
          },
        },
      });
    }
    created++;
  }

  console.log(`Seeded ${created} USMLE + pharmacy quiz sets.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
