/**
 * Reshuffle stored answer order.
 *
 * THE PROBLEM THIS FIXES
 *
 * In the earlier content waves — pathology, microbiology, renal, anatomy,
 * respiratory, surgery, endocrinology and others — each question's choices were
 * inserted in the order they were written in the seed file:
 *
 *     choices: { create: q.choices.map((c, i) => ({ ..., order: i })) }
 *
 * and the correct answer is written FIRST in every one of those files, because
 * that is how they are readable to author and review. The consequence is that
 * the correct choice sits at order 0, and the player renders by order — so the
 * first option is right almost every time.
 *
 * Students find that pattern quickly, and once they have, the question bank
 * stops measuring knowledge. Haematology fixed it going forward by shuffling on
 * insert; this repairs the sets that were already written.
 *
 * WHY THIS IS SAFE FOR PAST ATTEMPTS
 *
 * QuizAttempt stores `answers` as a JSON snapshot of choice IDs, and this script
 * changes only the `order` column — never a choice's id, text or isCorrect. Past
 * attempts therefore still review correctly.
 *
 * Usage:
 *   npx tsx prisma/fix-choice-order.ts            # report only, changes nothing
 *   npx tsx prisma/fix-choice-order.ts --apply    # actually reshuffle
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const APPLY = process.argv.includes("--apply");

function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function main() {
  console.log(APPLY ? "Reshuffling answer order…\n" : "Auditing answer order (no changes)…\n");

  const quizzes = await prisma.quiz.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      questions: {
        select: {
          id: true,
          choices: { select: { id: true, order: true, isCorrect: true }, orderBy: { order: "asc" } },
        },
      },
    },
    orderBy: { slug: "asc" },
  });

  let totalQuestions = 0;
  let totalFirstPosition = 0;
  let quizzesTouched = 0;

  for (const quiz of quizzes) {
    // Only single-correct questions can be skewed in a way that matters here.
    const eligible = quiz.questions.filter((q) => q.choices.filter((c) => c.isCorrect).length === 1);
    if (eligible.length === 0) continue;

    const firstPosition = eligible.filter((q) => q.choices[0]?.isCorrect).length;
    const pct = Math.round((firstPosition / eligible.length) * 100);

    totalQuestions += eligible.length;
    totalFirstPosition += firstPosition;

    // With four options, chance alone puts the answer first about 25% of the
    // time. Anything at or above 60% is a seeding artefact, not luck.
    const skewed = pct >= 60;
    const flag = skewed ? "⚠" : " ";
    console.log(`${flag} ${quiz.slug} — answer first in ${firstPosition}/${eligible.length} (${pct}%)`);

    if (!APPLY || !skewed) continue;

    for (const q of eligible) {
      const order = shuffled(q.choices.map((c) => c.id));
      for (let i = 0; i < order.length; i++) {
        await prisma.choice.update({ where: { id: order[i] }, data: { order: i } });
      }
    }
    quizzesTouched++;
    console.log(`    → reshuffled ${eligible.length} questions`);
  }

  const overall = totalQuestions ? Math.round((totalFirstPosition / totalQuestions) * 100) : 0;
  console.log(
    `\nOverall: correct answer in first position for ${totalFirstPosition}/${totalQuestions} questions (${overall}%).`
  );
  console.log(APPLY ? `Reshuffled ${quizzesTouched} quiz(zes).` : "Re-run with --apply to fix the flagged sets.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
