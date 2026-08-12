/**
 * EXPORT-BANK-ARCHITECTURE
 * Read-only snapshot of the entire question bank so the whole structure can be
 * reviewed at once. Writes ./bank-architecture.json in the project root.
 *
 * It does NOT change anything in the database — it only reads and summarizes.
 */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const norm = (s: string) => (s ?? "").trim().toLowerCase().replace(/\s+/g, " ");
const LET = "ABCDEFGHIJ".split("");

type AnyChoice = { text: string; isCorrect: boolean; order: number };
type AnyQ = { type: string | null; stem: string; topic: string | null; explanation: string | null; choices: AnyChoice[] };

function analyzeQuestions(questions: AnyQ[]) {
  const typeDist: Record<string, number> = {};
  const optDist: Record<number, number> = {};
  const posDist: Record<string, number> = {};        // position of correct answer as stored in DB
  let correctIsStrictLongest = 0;                     // the "longest = correct" tell
  let correctAboveAvgDistractor = 0;
  let sumCorrectLen = 0, sumDistractorLen = 0, singleMultiCount = 0;
  let shortExplanations = 0, missingExplanations = 0;

  for (const q of questions) {
    const type = q.type ?? "SINGLE";
    typeDist[type] = (typeDist[type] || 0) + 1;
    const choices = [...q.choices].sort((a, b) => a.order - b.order);
    if (type !== "TRUE_FALSE") optDist[choices.length] = (optDist[choices.length] || 0) + 1;
    if (!q.explanation) missingExplanations++;
    else if (q.explanation.trim().length < 80) shortExplanations++;

    const correct = choices.filter((c) => c.isCorrect);
    if (type === "SINGLE" && correct.length === 1) {
      const idx = choices.findIndex((c) => c.isCorrect);
      posDist[LET[idx] ?? "?"] = (posDist[LET[idx] ?? "?"] || 0) + 1;
    }
    if ((type === "SINGLE" || type === "MULTI") && correct.length >= 1) {
      const correctLens = correct.map((c) => (c.text ?? "").trim().length);
      const distractors = choices.filter((c) => !c.isCorrect).map((c) => (c.text ?? "").trim().length);
      if (distractors.length) {
        const maxCorrect = Math.max(...correctLens);
        const maxDistractor = Math.max(...distractors);
        const avgDistractor = distractors.reduce((a, b) => a + b, 0) / distractors.length;
        const avgCorrect = correctLens.reduce((a, b) => a + b, 0) / correctLens.length;
        if (maxCorrect > maxDistractor) correctIsStrictLongest++;
        if (avgCorrect > avgDistractor) correctAboveAvgDistractor++;
        sumCorrectLen += avgCorrect; sumDistractorLen += avgDistractor; singleMultiCount++;
      }
    }
  }
  return {
    count: questions.length,
    typeDist, optionCountDist: optDist, answerPositionDist_DB: posDist,
    lengthTell: {
      analyzed: singleMultiCount,
      pctCorrectIsStrictLongest: singleMultiCount ? +(correctIsStrictLongest / singleMultiCount * 100).toFixed(1) : 0,
      pctCorrectAboveAvgDistractor: singleMultiCount ? +(correctAboveAvgDistractor / singleMultiCount * 100).toFixed(1) : 0,
      avgCorrectLen: singleMultiCount ? +(sumCorrectLen / singleMultiCount).toFixed(1) : 0,
      avgDistractorLen: singleMultiCount ? +(sumDistractorLen / singleMultiCount).toFixed(1) : 0,
    },
    shortExplanations, missingExplanations,
  };
}

async function main() {
  const categories = await prisma.quizCategory.findMany({
    include: {
      parent: { select: { slug: true, title: true } },
      quizzes: {
        include: { questions: { include: { choices: true } } },
        orderBy: { order: "asc" },
      },
    },
    orderBy: [{ order: "asc" }, { slug: "asc" }],
  });

  const bank = {
    generatedAt: new Date().toISOString(),
    totals: { categories: 0, quizzes: 0, practiceQuizzes: 0, examQuizzes: 0, questions: 0, publishedQuizzes: 0, emptyCategories: 0 },
    emptyCategories: [] as any[],
    quizzesUnder100: [] as any[],
    bankWide: null as any,
    categories: [] as any[],
  };

  const allQuestionsFlat: AnyQ[] = [];

  for (const cat of categories) {
    bank.totals.categories++;
    const catQuizzes = cat.quizzes ?? [];
    if (catQuizzes.length === 0) {
      bank.totals.emptyCategories++;
      bank.emptyCategories.push({ slug: cat.slug, title: cat.title, parent: cat.parent?.slug ?? null, published: cat.published });
    }
    const quizzesOut: any[] = [];
    for (const qz of catQuizzes) {
      bank.totals.quizzes++;
      if (qz.kind === "EXAM") bank.totals.examQuizzes++; else bank.totals.practiceQuizzes++;
      if (qz.published) bank.totals.publishedQuizzes++;
      const qs = (qz.questions ?? []) as any as AnyQ[];
      bank.totals.questions += qs.length;
      allQuestionsFlat.push(...qs);
      const stats = analyzeQuestions(qs);
      if (qz.kind !== "EXAM" && qs.length < 100)
        bank.quizzesUnder100.push({ category: cat.slug, slug: qz.slug, title: qz.title, kind: qz.kind, questions: qs.length, shortfall: 100 - qs.length });
      quizzesOut.push({
        slug: qz.slug, title: qz.title, kind: qz.kind, difficulty: qz.difficulty ?? null,
        published: qz.published, order: qz.order ?? null, ...stats,
      });
    }
    bank.categories.push({
      slug: cat.slug, title: cat.title, parent: cat.parent?.slug ?? null,
      order: cat.order ?? null, published: cat.published, featured: cat.featured, premium: cat.premium,
      quizCount: catQuizzes.length,
      questionCount: catQuizzes.reduce((a, q) => a + (q.questions?.length ?? 0), 0),
      quizzes: quizzesOut,
    });
  }

  bank.bankWide = analyzeQuestions(allQuestionsFlat);

  const fs = await import("fs");
  fs.writeFileSync("bank-architecture.json", JSON.stringify(bank, null, 2), "utf8");

  // Human-readable console summary
  console.log("\n================  QUESTION-BANK ARCHITECTURE  ================");
  console.log(`Categories: ${bank.totals.categories}  |  Quizzes: ${bank.totals.quizzes} (practice ${bank.totals.practiceQuizzes}, exam ${bank.totals.examQuizzes})  |  Questions: ${bank.totals.questions}`);
  console.log(`Empty categories (no quizzes): ${bank.totals.emptyCategories}`);
  console.log(`Practice sets under 100 questions: ${bank.quizzesUnder100.length}`);
  console.log(`\n--- THE "LONGEST ANSWER = CORRECT" TELL (bank-wide) ---`);
  console.log(`Questions analyzed: ${bank.bankWide.lengthTell.analyzed}`);
  console.log(`Correct answer is the single longest option: ${bank.bankWide.lengthTell.pctCorrectIsStrictLongest}% of questions`);
  console.log(`Correct answer longer than the average distractor: ${bank.bankWide.lengthTell.pctCorrectAboveAvgDistractor}%`);
  console.log(`Avg correct length ${bank.bankWide.lengthTell.avgCorrectLen} chars vs avg distractor ${bank.bankWide.lengthTell.avgDistractorLen} chars`);
  console.log(`\n--- CORRECT-ANSWER POSITION AS STORED IN DB (reveals unrandomized content) ---`);
  console.log(JSON.stringify(bank.bankWide.answerPositionDist_DB));
  console.log(`\n--- OPTION-COUNT SPREAD (bank-wide) ---`);
  console.log(JSON.stringify(bank.bankWide.optionCountDist));
  if (bank.emptyCategories.length) {
    console.log(`\n--- EMPTY SECTIONS (fill candidates) ---`);
    bank.emptyCategories.forEach((c: any) => console.log(`   ${c.slug}  (${c.title})${c.parent ? "  ← " + c.parent : ""}`));
  }
  console.log(`\n✓ Wrote bank-architecture.json  — please upload THAT file back to me.`);
  console.log("==============================================================\n");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
