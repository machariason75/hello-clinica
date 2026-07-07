import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ListChecks, Clock, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { EmptyState } from "@/components/common/EmptyState";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { getQuizCategoryBySlug, getQuizzesByCategory } from "@/lib/queries/quizzes";

export const revalidate = 300;

type Params = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const cat = await getQuizCategoryBySlug(category);
  if (!cat) return buildMetadata({ title: "Question Bank", path: "/question-bank" });
  return buildMetadata({
    title: cat.title,
    description: cat.description,
    path: `/question-bank/${cat.slug}`,
  });
}

function fmtTime(seconds?: number | null): string {
  if (!seconds) return "Untimed";
  const m = Math.round(seconds / 60);
  return `${m} min`;
}

export default async function QuizCategoryPage({ params }: Params) {
  const { category } = await params;
  const cat = await getQuizCategoryBySlug(category);
  if (!cat) notFound();

  const quizzes = await getQuizzesByCategory(cat.id);

  return (
    <PageTransition>
      <PageHero eyebrow="Question Bank" title={cat.title} description={cat.description} />

      <Section ariaLabel={`${cat.title} quizzes`}>
        <Link
          href="/question-bank"
          className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All categories
        </Link>

        {quizzes.length === 0 ? (
          <EmptyState
            icon={<ListChecks className="h-7 w-7" />}
            title="New practice sets are on the way"
            description="We're preparing quizzes for this category. Subscribe below to be notified when they're published."
          />
        ) : (
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {quizzes.map((quiz) => (
              <StaggerItem key={quiz.id} className="h-full">
                <Link
                  href={`/question-bank/${cat.slug}/${quiz.slug}`}
                  className="surface-card-interactive focus-ring group flex h-full flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-deep-blue">{quiz.title}</h3>
                    {quiz.featured && (
                      <span className="shrink-0 rounded-full bg-coral/10 px-2.5 py-1 text-xs font-semibold text-coral">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-body mt-2 flex-1 text-muted-foreground">{quiz.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <ListChecks className="h-4 w-4 text-medical-blue" aria-hidden="true" />
                      {quiz._count.questions} {quiz._count.questions === 1 ? "question" : "questions"}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-medical-blue" aria-hidden="true" />
                      {fmtTime(quiz.timeLimitSeconds)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BarChart3 className="h-4 w-4 text-medical-blue" aria-hidden="true" />
                      {quiz.difficulty}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue">
                    Start practice
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </Section>

      <NewsletterSection />
    </PageTransition>
  );
}
