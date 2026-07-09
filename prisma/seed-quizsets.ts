/**
 * Seeds 6 quiz sets (practice + real exam) across the Question Bank so premium
 * sections feel full. Idempotent: fixed quiz ids, questions rebuilt each run.
 *
 * ALL questions are original, written in exam style — not copied from any real
 * TEAS/HESI/NCLEX exam or third-party site. Edit or expand freely in the admin.
 *
 * Requires the category tree from seed-quizbank.ts to exist first.
 * Run:  npx tsx prisma/seed-quizsets.ts     (after `npx prisma db push`)
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type C = { t: string; c?: boolean };
type Q = { type: "SINGLE" | "MULTI" | "TRUE_FALSE"; stem: string; topic: string; explanation: string; choices: C[] };
type QuizDef = {
  id: string; slug: string; categoryId: string; title: string; description: string;
  kind: "PRACTICE" | "EXAM"; difficulty: string; passThreshold: number; minutes: number; questions: Q[];
};

const QUIZZES: QuizDef[] = [
  {
    id: "seed-set-teas-reading-1", slug: "teas-reading-practice-1", categoryId: "qbc-teas-reading",
    title: "TEAS Reading — Practice Set 1", description: "Main idea, context clues, structure, and inference.",
    kind: "PRACTICE", difficulty: "Beginner", passThreshold: 65, minutes: 12,
    questions: [
      { type: "SINGLE", topic: "Main idea", stem: "Passage: “Regular sleep improves memory, steadies mood, and supports the immune system. Adults who sleep seven to nine hours tend to focus better.” What is the main idea?",
        explanation: "The passage lists several benefits of adequate sleep, so the main idea is that sleep benefits the body and mind. The other options are single details or not stated.",
        choices: [{ t: "Adequate sleep benefits the body and mind", c: true }, { t: "Everyone should nap daily" }, { t: "Memory is the only thing sleep affects" }, { t: "Nine hours is too much sleep" }] },
      { type: "SINGLE", topic: "Context clues", stem: "“The directions were so convoluted that even the engineer struggled to follow them.” As used here, convoluted most nearly means:",
        explanation: "The clue “struggled to follow” signals something complicated. Convoluted means complex or twisted, not brief or clear.",
        choices: [{ t: "Complicated", c: true }, { t: "Brief" }, { t: "Clear" }, { t: "Colorful" }] },
      { type: "SINGLE", topic: "Text structure", stem: "A paragraph that explains how to assemble a shelf, listing Step 1, Step 2, and Step 3, uses which structure?",
        explanation: "Presenting ordered steps is a sequence (chronological) structure. It is not cause/effect or compare/contrast.",
        choices: [{ t: "Sequence / chronological", c: true }, { t: "Compare and contrast" }, { t: "Cause and effect" }, { t: "Problem and solution" }] },
      { type: "SINGLE", topic: "Fact vs. opinion", stem: "Which statement is an opinion?",
        explanation: "“Best” is a judgment that cannot be proven, so it is an opinion. The others are verifiable facts.",
        choices: [{ t: "Summer is the best season", c: true }, { t: "Water boils at 100°C at sea level" }, { t: "A week has seven days" }, { t: "The heart pumps blood" }] },
      { type: "SINGLE", topic: "Inference", stem: "“Before leaving the house, Maria grabbed an umbrella and her raincoat.” The reader can best infer that:",
        explanation: "Grabbing an umbrella and raincoat implies Maria expects rain. Nothing suggests the other options.",
        choices: [{ t: "Rain is likely", c: true }, { t: "Maria is going swimming" }, { t: "It is a hot, clear day" }, { t: "Maria forgot her keys" }] },
      { type: "TRUE_FALSE", topic: "Sources", stem: "A primary source is a firsthand account or original record of an event.",
        explanation: "True. A primary source (diary, interview, original data) is firsthand, unlike a secondary source that interprets it.",
        choices: [{ t: "True", c: true }, { t: "False" }] },
    ],
  },
  {
    id: "seed-set-teas-math-1", slug: "teas-math-practice-1", categoryId: "qbc-teas-math",
    title: "TEAS Mathematics — Practice Set 1", description: "Fractions, percentages, equations, and ratios.",
    kind: "PRACTICE", difficulty: "Beginner", passThreshold: 65, minutes: 12,
    questions: [
      { type: "SINGLE", topic: "Fractions", stem: "What is 3/4 + 1/8?",
        explanation: "Convert 3/4 to 6/8, then 6/8 + 1/8 = 7/8.",
        choices: [{ t: "7/8", c: true }, { t: "4/12" }, { t: "1" }, { t: "5/8" }] },
      { type: "SINGLE", topic: "Percentages", stem: "What is 20% of 150?",
        explanation: "20% = 0.20; 0.20 × 150 = 30.",
        choices: [{ t: "30", c: true }, { t: "15" }, { t: "45" }, { t: "300" }] },
      { type: "SINGLE", topic: "Algebra", stem: "Solve for x: 2x + 5 = 17.",
        explanation: "Subtract 5 → 2x = 12; divide by 2 → x = 6.",
        choices: [{ t: "6", c: true }, { t: "11" }, { t: "8" }, { t: "22" }] },
      { type: "SINGLE", topic: "Decimals & fractions", stem: "Which value is the largest: 0.45, 1/2, or 40%?",
        explanation: "1/2 = 0.50, which is greater than 0.45 and 40% (0.40).",
        choices: [{ t: "1/2", c: true }, { t: "0.45" }, { t: "40%" }, { t: "They are equal" }] },
      { type: "SINGLE", topic: "Ratios", stem: "A recipe uses 2 cups of flour for 4 servings. How many cups are needed for 6 servings?",
        explanation: "2 cups ÷ 4 servings = 0.5 cup per serving; 0.5 × 6 = 3 cups.",
        choices: [{ t: "3 cups", c: true }, { t: "2.5 cups" }, { t: "4 cups" }, { t: "1.5 cups" }] },
    ],
  },
  {
    id: "seed-set-hesi-anat-1", slug: "hesi-anatomy-exam-1", categoryId: "qbc-hesi-anatomy",
    title: "HESI A2 Anatomy & Physiology — Exam 1", description: "Body systems and core structures.",
    kind: "EXAM", difficulty: "Intermediate", passThreshold: 70, minutes: 15,
    questions: [
      { type: "SINGLE", topic: "Cardiovascular", stem: "Which organ pumps blood throughout the body?",
        explanation: "The heart is the muscular pump that circulates blood.",
        choices: [{ t: "Heart", c: true }, { t: "Liver" }, { t: "Lungs" }, { t: "Kidney" }] },
      { type: "SINGLE", topic: "Nervous system", stem: "What is the basic functional unit of the nervous system?",
        explanation: "The neuron is the basic signaling unit of the nervous system.",
        choices: [{ t: "Neuron", c: true }, { t: "Nephron" }, { t: "Alveolus" }, { t: "Osteocyte" }] },
      { type: "SINGLE", topic: "Skeletal", stem: "The femur is part of which body system?",
        explanation: "The femur is a bone, part of the skeletal system.",
        choices: [{ t: "Skeletal", c: true }, { t: "Muscular" }, { t: "Endocrine" }, { t: "Respiratory" }] },
      { type: "MULTI", topic: "Integumentary", stem: "Which are functions of the skin? Select all that apply.",
        explanation: "Skin protects, helps regulate temperature, and provides sensation. Producing insulin is a pancreatic function.",
        choices: [{ t: "Protection", c: true }, { t: "Temperature regulation", c: true }, { t: "Sensation", c: true }, { t: "Producing insulin" }] },
      { type: "SINGLE", topic: "Respiratory", stem: "Gas exchange in the lungs occurs in the:",
        explanation: "Oxygen and carbon dioxide exchange across the thin walls of the alveoli.",
        choices: [{ t: "Alveoli", c: true }, { t: "Trachea" }, { t: "Bronchi" }, { t: "Pharynx" }] },
      { type: "SINGLE", topic: "Cardiovascular", stem: "What is the largest artery in the body?",
        explanation: "The aorta is the largest artery, carrying blood from the left ventricle to the body.",
        choices: [{ t: "Aorta", c: true }, { t: "Pulmonary vein" }, { t: "Carotid artery" }, { t: "Femoral vein" }] },
    ],
  },
  {
    id: "seed-set-pharm-1", slug: "pharmacology-practice-1", categoryId: "qbc-ne-pharm",
    title: "Pharmacology — Practice Set 1", description: "Drug classes, safety, and monitoring.",
    kind: "PRACTICE", difficulty: "Intermediate", passThreshold: 65, minutes: 10,
    questions: [
      { type: "SINGLE", topic: "Anticoagulants", stem: "A client taking warfarin should keep a consistent intake of which nutrient?",
        explanation: "Vitamin K affects warfarin's action; consistent intake keeps anticoagulation stable.",
        choices: [{ t: "Vitamin K", c: true }, { t: "Vitamin C" }, { t: "Calcium" }, { t: "Iron" }] },
      { type: "MULTI", topic: "Cardiac drugs", stem: "Which are signs of digoxin toxicity? Select all that apply.",
        explanation: "Nausea, visual disturbances (yellow-green halos), and bradycardia are classic signs. Increased appetite is not.",
        choices: [{ t: "Nausea", c: true }, { t: "Visual changes", c: true }, { t: "Bradycardia", c: true }, { t: "Increased appetite" }] },
      { type: "SINGLE", topic: "Emergency", stem: "Which medication reverses an opioid overdose?",
        explanation: "Naloxone is an opioid antagonist used to reverse overdose.",
        choices: [{ t: "Naloxone", c: true }, { t: "Epinephrine" }, { t: "Atropine" }, { t: "Insulin" }] },
      { type: "SINGLE", topic: "Drug classes", stem: "A medication ending in “-pril” (e.g., lisinopril) belongs to which class?",
        explanation: "The “-pril” suffix indicates an ACE inhibitor used for blood pressure and heart failure.",
        choices: [{ t: "ACE inhibitor", c: true }, { t: "Beta blocker" }, { t: "Diuretic" }, { t: "Statin" }] },
      { type: "SINGLE", topic: "Monitoring", stem: "Before giving an aminoglycoside antibiotic, the nurse should monitor which function?",
        explanation: "Aminoglycosides can be nephrotoxic, so renal function is monitored closely.",
        choices: [{ t: "Renal function", c: true }, { t: "Bowel sounds" }, { t: "Pupil size" }, { t: "Hair growth" }] },
    ],
  },
  {
    id: "seed-set-fundamentals-1", slug: "fundamentals-exam-1", categoryId: "qbc-ne-fundamentals",
    title: "Fundamentals of Nursing — Exam 1", description: "Core safety and nursing-process concepts.",
    kind: "EXAM", difficulty: "Beginner", passThreshold: 70, minutes: 12,
    questions: [
      { type: "SINGLE", topic: "Nursing process", stem: "What is the first step of the nursing process?",
        explanation: "Assessment comes first — you gather data before diagnosing, planning, implementing, or evaluating.",
        choices: [{ t: "Assessment", c: true }, { t: "Evaluation" }, { t: "Implementation" }, { t: "Planning" }] },
      { type: "SINGLE", topic: "Infection control", stem: "What is the single most effective way to prevent the spread of infection?",
        explanation: "Hand hygiene is the most effective measure to prevent transmission.",
        choices: [{ t: "Hand hygiene", c: true }, { t: "Wearing a gown at all times" }, { t: "Antibiotics for everyone" }, { t: "Limiting fluids" }] },
      { type: "MULTI", topic: "Safety", stem: "Which actions support patient safety? Select all that apply.",
        explanation: "Two identifiers, a low bed, and a reachable call light all reduce risk. Raising all side rails to keep a patient in bed is a restraint and is not a routine safety measure.",
        choices: [{ t: "Use two identifiers", c: true }, { t: "Keep the bed in a low position", c: true }, { t: "Keep the call light within reach", c: true }, { t: "Raise all four side rails to keep the patient in bed" }] },
      { type: "SINGLE", topic: "Vital signs", stem: "What is the normal resting heart rate range for an adult?",
        explanation: "A normal adult resting heart rate is 60–100 beats per minute.",
        choices: [{ t: "60–100 bpm", c: true }, { t: "100–140 bpm" }, { t: "30–50 bpm" }, { t: "10–20 bpm" }] },
      { type: "SINGLE", topic: "Comfort", stem: "A client rates their pain 8/10. What is the nurse's priority?",
        explanation: "Assess and address the pain promptly; unrelieved severe pain is a priority.",
        choices: [{ t: "Assess and address the pain", c: true }, { t: "Document it and continue rounds" }, { t: "Wait for the next scheduled dose" }, { t: "Tell the client to rest" }] },
    ],
  },
  {
    id: "seed-set-nclexpn-1", slug: "nclex-pn-practice-1", categoryId: "qbc-nclex-pn",
    title: "NCLEX-PN — Practice Set 1", description: "A free taster of licensure-style practice.",
    kind: "PRACTICE", difficulty: "Beginner", passThreshold: 65, minutes: 10,
    questions: [
      { type: "SINGLE", topic: "Prioritization", stem: "A client suddenly becomes confused. What should the nurse check first?",
        explanation: "New confusion can signal low oxygen; check oxygenation and vital signs first (ABCs).",
        choices: [{ t: "Oxygenation and vital signs", c: true }, { t: "The client's meal tray" }, { t: "Visiting hours" }, { t: "The TV remote" }] },
      { type: "SINGLE", topic: "Aseptic technique", stem: "Which is a principle of sterile technique?",
        explanation: "A sterile field must stay within view and above waist level; below the waist is considered contaminated.",
        choices: [{ t: "Keep the sterile field above waist level", c: true }, { t: "Reach across the sterile field" }, { t: "Turn your back to the field" }, { t: "Place sterile items on the floor" }] },
      { type: "SINGLE", topic: "Positioning", stem: "Which position best helps a client who is short of breath?",
        explanation: "High Fowler's (sitting upright) eases breathing by allowing fuller lung expansion.",
        choices: [{ t: "High Fowler's (upright)", c: true }, { t: "Flat on the back" }, { t: "Trendelenburg" }, { t: "Prone" }] },
      { type: "TRUE_FALSE", topic: "Documentation", stem: "Care should be documented after it is provided, not before.",
        explanation: "True. Charting before providing care is falsification; document after the care is given.",
        choices: [{ t: "True", c: true }, { t: "False" }] },
      { type: "SINGLE", topic: "Client rights", stem: "A competent adult client refuses a medication. The nurse should:",
        explanation: "Respect the client's right to refuse, then document and notify the provider.",
        choices: [{ t: "Respect the refusal, document, and notify the provider", c: true }, { t: "Hide the medication in food" }, { t: "Give it anyway" }, { t: "Ignore the refusal" }] },
    ],
  },
];

async function main() {
  let total = 0;
  for (const qz of QUIZZES) {
    const cat = await prisma.quizCategory.findUnique({ where: { id: qz.categoryId } });
    if (!cat) { console.log(`Skipping ${qz.title} — category ${qz.categoryId} not found (run seed-quizbank first).`); continue; }

    await prisma.quiz.upsert({
      where: { id: qz.id },
      update: {
        title: qz.title, slug: qz.slug, categoryId: qz.categoryId, description: qz.description,
        kind: qz.kind, difficulty: qz.difficulty, passThreshold: qz.passThreshold,
        timeLimitSeconds: qz.minutes * 60, published: true, featured: false,
      },
      create: {
        id: qz.id, title: qz.title, slug: qz.slug, categoryId: qz.categoryId, description: qz.description,
        kind: qz.kind, difficulty: qz.difficulty, passThreshold: qz.passThreshold,
        timeLimitSeconds: qz.minutes * 60, published: true, featured: false,
      },
    });
    await prisma.question.deleteMany({ where: { quizId: qz.id } });
    for (let i = 0; i < qz.questions.length; i++) {
      const q = qz.questions[i];
      await prisma.question.create({
        data: {
          quizId: qz.id, type: q.type as never, stem: q.stem, topic: q.topic, explanation: q.explanation, order: i,
          choices: { create: q.choices.map((c, ci) => ({ text: c.t, isCorrect: !!c.c, order: ci })) },
        },
      });
    }
    total += qz.questions.length;
    console.log(`Seeded "${qz.title}" (${qz.questions.length} questions).`);
  }
  console.log(`Done — ${QUIZZES.length} quizzes, ${total} questions.`);
}

main().then(() => prisma.$disconnect()).catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
