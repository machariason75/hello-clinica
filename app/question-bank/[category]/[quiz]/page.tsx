import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getQuizBySlug } from "@/lib/queries/quizzes";
import { QuizPlayer, type QuizPlayerData } from "@/components/quiz/QuizPlayer";

// Interactive; do not statically cache the player shell.
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ category: string; quiz: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { quiz } = await params;
  const q = await getQuizBySlug(quiz);
  if (!q) return buildMetadata({ title: "Quiz", path: "/question-bank" });
  return buildMetadata({
    title: q.title,
    description: q.description,
    path: `/question-bank/${q.category.slug}/${q.slug}`,
  });
}

export default async function QuizPage({ params }: Params) {
  const { quiz } = await params;
  const q = await getQuizBySlug(quiz);
  if (!q) notFound();

  // Shape the data for the client player (only what it needs).
  const data: QuizPlayerData = {
    id: q.id,
    slug: q.slug,
    title: q.title,
    description: q.description,
    categorySlug: q.category.slug,
    categoryTitle: q.category.title,
    timeLimitSeconds: q.timeLimitSeconds,
    passThreshold: q.passThreshold,
    difficulty: q.difficulty,
    questions: q.questions.map((question) => ({
      id: question.id,
      type: question.type,
      stem: question.stem,
      topic: question.topic,
      explanation: question.explanation,
      choices: question.choices.map((c) => ({
        id: c.id,
        text: c.text,
        isCorrect: c.isCorrect,
      })),
    })),
  };

  return <QuizPlayer quiz={data} />;
}
