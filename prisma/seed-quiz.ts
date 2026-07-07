/**
 * Question Bank seed — idempotent (safe to run more than once).
 *
 * Seeds ONE category (NCLEX-RN) and ONE complete, ORIGINAL 10-question practice
 * quiz with full answer rationales, so the Question Bank works end-to-end
 * immediately. All content here is original, written in NCLEX style — it is NOT
 * copied from any exam or third-party site.
 *
 * Re-running updates in place: fixed ids for the category and quiz, and the
 * quiz's questions are rebuilt each run (old ones removed first) so there are
 * never duplicates.
 *
 * Run:  npx tsx prisma/seed-quiz.ts      (after `npx prisma db push`)
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CATEGORY_ID = "seed-quizcat-nclex-rn";
const QUIZ_ID = "seed-quiz-nclex-fundamentals-1";

type Q = {
  type: "SINGLE" | "MULTI" | "TRUE_FALSE";
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; correct?: boolean }[];
};

const QUESTIONS: Q[] = [
  {
    type: "SINGLE",
    topic: "Safety",
    stem: "A nurse is preparing to administer an oral medication. Which action is the priority before giving it?",
    explanation:
      "Verify the client's identity using two identifiers (such as name and date of birth) before any medication — a core safety step. Documenting happens after administration, not before. Asking about food allergies is unrelated to this safety check, and charting the next dose is not a pre-administration priority. In short: confirm the right client with two identifiers first.",
    choices: [
      { text: "Check the client's identity using two identifiers", correct: true },
      { text: "Document that the medication was given" },
      { text: "Ask the client whether they are allergic to any foods" },
      { text: "Chart the client's next scheduled dose" },
    ],
  },
  {
    type: "SINGLE",
    topic: "Pharmacology",
    stem: "A client is prescribed furosemide. Which laboratory value should the nurse monitor most closely?",
    explanation:
      "Furosemide is a loop diuretic that can cause potassium loss (hypokalemia), so potassium is the priority to monitor. Calcium, platelets, and bilirubin are not primarily affected. In short: loop diuretics → watch for low potassium.",
    choices: [
      { text: "Potassium", correct: true },
      { text: "Calcium" },
      { text: "Platelets" },
      { text: "Bilirubin" },
    ],
  },
  {
    type: "MULTI",
    topic: "Infection Control",
    stem: "Which actions follow standard precautions? Select all that apply.",
    explanation:
      "Hand hygiene before and after contact, wearing gloves when body-fluid contact is anticipated, and disposing of sharps in a puncture-resistant container are all standard precautions. Recapping needles by hand risks a needlestick and is avoided. Sharing an uncleaned blood pressure cuff between clients can transmit organisms. In short: standard precautions center on hand hygiene, appropriate PPE, and safe sharps handling.",
    choices: [
      { text: "Perform hand hygiene before and after client contact", correct: true },
      { text: "Wear gloves when contact with body fluids is anticipated", correct: true },
      { text: "Recap needles by hand after use" },
      { text: "Dispose of sharps in a puncture-resistant container", correct: true },
      { text: "Share a blood pressure cuff between clients without cleaning it" },
    ],
  },
  {
    type: "SINGLE",
    topic: "Cardiovascular",
    stem: "A client's blood pressure is 88/54 mmHg and they report dizziness when standing. What should the nurse do first?",
    explanation:
      "Safety first — help the client to sit or lie down to prevent a fall from orthostatic hypotension. An antihypertensive would worsen the low blood pressure, walking increases fall risk, and restricting fluids can worsen hypotension. In short: for symptomatic hypotension, protect the client from falling first.",
    choices: [
      { text: "Assist the client to sit or lie down", correct: true },
      { text: "Administer an antihypertensive medication" },
      { text: "Encourage the client to walk it off" },
      { text: "Restrict the client's fluids" },
    ],
  },
  {
    type: "TRUE_FALSE",
    topic: "Fundamentals",
    stem: "A rising respiratory rate can be an early sign of clinical deterioration.",
    explanation:
      "True. Respiratory rate is a sensitive early indicator; an increasing rate often appears before other signs of deterioration. In short: don't overlook a climbing respiratory rate.",
    choices: [{ text: "True", correct: true }, { text: "False" }],
  },
  {
    type: "SINGLE",
    topic: "Pharmacology",
    stem: "Before administering digoxin, the nurse should assess which of the following?",
    explanation:
      "Assess the apical pulse for one full minute before digoxin; hold the dose and notify the provider if it is below the ordered parameter (commonly under 60 bpm in adults). Temperature, pupillary response, and bowel sounds are not the priority digoxin check. In short: digoxin → check the apical rate first.",
    choices: [
      { text: "Apical heart rate for one full minute", correct: true },
      { text: "Oral temperature" },
      { text: "Pupillary response" },
      { text: "Bowel sounds" },
    ],
  },
  {
    type: "SINGLE",
    topic: "Infection Control",
    stem: "Which client requires airborne precautions?",
    explanation:
      "Suspected tuberculosis requires airborne precautions (a negative-pressure room and an N95 respirator). A urinary tract infection, a sprained ankle, and mild seasonal allergies do not. In short: TB, measles, and varicella are classic airborne-precaution conditions.",
    choices: [
      { text: "A client with suspected tuberculosis", correct: true },
      { text: "A client with a urinary tract infection" },
      { text: "A client with a sprained ankle" },
      { text: "A client with mild seasonal allergies" },
    ],
  },
  {
    type: "MULTI",
    topic: "Fundamentals",
    stem: "Which actions help prevent aspiration during feeding? Select all that apply.",
    explanation:
      "Positioning the client upright at 90 degrees, offering small bites with time to swallow, and confirming each swallow before the next bite all reduce aspiration risk. Lying flat while eating increases risk, and encouraging large mouthfuls is unsafe. In short: sit upright, go slow, and confirm each swallow.",
    choices: [
      { text: "Position the client upright at 90 degrees", correct: true },
      { text: "Offer small bites and allow time to swallow", correct: true },
      { text: "Have the client lie flat while eating" },
      { text: "Check for a swallow before offering the next bite", correct: true },
      { text: "Encourage large mouthfuls to finish quickly" },
    ],
  },
  {
    type: "SINGLE",
    topic: "Pharmacology",
    stem: "A client taking warfarin asks about diet. Which teaching by the nurse is correct?",
    explanation:
      "Keeping vitamin K intake consistent from day to day keeps anticoagulation stable; the goal is steady intake, not total avoidance of green vegetables. A client should never double a dose for a missed meal, and grapefruit juice is not required (and can alter some medications). In short: with warfarin, keep vitamin K steady rather than eliminating it.",
    choices: [
      { text: "Keep vitamin K intake consistent from day to day", correct: true },
      { text: "Completely avoid all green vegetables" },
      { text: "Double the dose if a meal is missed" },
      { text: "Take warfarin only with grapefruit juice" },
    ],
  },
  {
    type: "SINGLE",
    topic: "Safety",
    stem: "A nurse finds a client on the floor. After ensuring the scene is safe, what is the next priority?",
    explanation:
      "After confirming scene safety, assess the client's responsiveness and check for injuries before moving them. Completing an incident report and notifying family come afterward, and returning the client to bed immediately could worsen an unseen injury. In short: assess before you move, and document after.",
    choices: [
      { text: "Assess the client's responsiveness and injuries", correct: true },
      { text: "Complete an incident report" },
      { text: "Call the client's family" },
      { text: "Return the client to bed immediately" },
    ],
  },
];

async function main() {
  await prisma.quizCategory.upsert({
    where: { id: CATEGORY_ID },
    update: { title: "NCLEX-RN", description: "Practice questions in the style of the NCLEX-RN licensure exam.", published: true },
    create: {
      id: CATEGORY_ID,
      slug: "nclex-rn",
      title: "NCLEX-RN",
      description: "Practice questions in the style of the NCLEX-RN licensure exam.",
      icon: "Stethoscope",
      order: 1,
      published: true,
    },
  });

  await prisma.quiz.upsert({
    where: { id: QUIZ_ID },
    update: { title: "NCLEX-RN Fundamentals — Practice Set 1", published: true, featured: true },
    create: {
      id: QUIZ_ID,
      slug: "nclex-fundamentals-1",
      title: "NCLEX-RN Fundamentals — Practice Set 1",
      description:
        "A 10-question warm-up across safety, pharmacology, infection control, and fundamentals. Timed or study mode, with a topic breakdown and full rationales.",
      categoryId: CATEGORY_ID,
      difficulty: "Beginner",
      timeLimitSeconds: 900,
      passThreshold: 65,
      published: true,
      featured: true,
      order: 1,
    },
  });

  // Rebuild questions each run (cascade removes their choices) so no duplicates.
  await prisma.question.deleteMany({ where: { quizId: QUIZ_ID } });

  for (let i = 0; i < QUESTIONS.length; i++) {
    const q = QUESTIONS[i];
    await prisma.question.create({
      data: {
        quizId: QUIZ_ID,
        type: q.type as never,
        stem: q.stem,
        topic: q.topic,
        explanation: q.explanation,
        order: i,
        choices: {
          create: q.choices.map((c, ci) => ({
            text: c.text,
            isCorrect: !!c.correct,
            order: ci,
          })),
        },
      },
    });
  }

  console.log(`Seeded category "NCLEX-RN" and quiz "NCLEX-RN Fundamentals — Practice Set 1" with ${QUESTIONS.length} questions.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
