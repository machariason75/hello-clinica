import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, quizJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { getQuizBySlug, getCategoryAncestors } from "@/lib/queries/quizzes";
import { getStudent } from "@/lib/student/auth";
import { claimFreeSet, hasFreeSetFor } from "@/lib/student/daily-question";
import { QuizPlayer, type QuizPlayerData } from "@/components/quiz/QuizPlayer";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { PremiumLock } from "@/components/quiz/PremiumLock";
import { JsonLd } from "@/components/common/JsonLd";

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

  // Premium gate: if this quiz's category (or any ancestor) is premium and the
  // student lacks access, show the lock instead of the player.
  const [ancestors, student] = await Promise.all([getCategoryAncestors(q.categoryId), getStudent()]);
  const premiumBranch = ancestors.some((a) => a.premium);

  // The Question of the Day earns a signed-in student ONE complete set per day,
  // any section. Claiming happens here, on opening the quiz — so the entitlement
  // is spent on something they actually chose to start.
  let unlockedByDaily = false;
  if (premiumBranch && student && !student.hasAccess) {
    unlockedByDaily = (await hasFreeSetFor(q.id)) || (await claimFreeSet(q.id));
  }

  if (premiumBranch && !student?.hasAccess && !unlockedByDaily) {
    return (
      <PageTransition>
        <PageHero eyebrow="Premium · Question Bank" title={q.title} description={q.description} />
        <Section ariaLabel="Premium content">
          <PremiumLock signedIn={!!student} />
        </Section>
      </PageTransition>
    );
  }

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

  // Structured data: lets Google show this as a rich result rather than a
  // plain blue link. Emitted even for premium quizzes — the PAGE is indexable,
  // the questions are what's gated.
  const schema = quizJsonLd({
    title: q.title,
    description: q.description,
    path: `/question-bank/${q.category.slug}/${q.slug}`,
    questionCount: q.questions.length,
    isFree: !premiumBranch,
    category: q.category.title,
  });
  const crumbs = breadcrumbJsonLd([
    { name: "Question Bank", path: "/question-bank" },
    { name: q.category.title, path: `/question-bank/${q.category.slug}` },
    { name: q.title, path: `/question-bank/${q.category.slug}/${q.slug}` },
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={crumbs} />
      <QuizPlayer quiz={data} />
    </>
  );
}
