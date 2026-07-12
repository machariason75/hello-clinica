import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { EmptyState } from "@/components/common/EmptyState";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { ListChecks } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getTopLevelQuizCategories, getQuickAccessItems } from "@/lib/queries/quizzes";
import { QuickAccess } from "@/components/quiz/QuickAccess";
import { resolveQuizIcon } from "@/lib/quiz-icons";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "Question Bank",
  description:
    "Free practice questions and timed practice tests for nursing and health students — NCLEX, HESI, and TEAS style — with instant scoring, topic breakdowns, and full answer rationales.",
  path: "/question-bank",
});

export default async function QuestionBankPage() {
  const [categories, quickItems] = await Promise.all([
    getTopLevelQuizCategories(),
    getQuickAccessItems(),
  ]);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Question Bank"
        title="Practice questions that show you where to focus"
        description="Take timed practice tests or study at your own pace. Every quiz scores instantly, breaks your results down by topic, and explains every answer."
      />

      <Section ariaLabel="Question bank categories">
        {categories.length === 0 ? (
          <EmptyState
            icon={<ListChecks className="h-7 w-7" />}
            title="Practice sets are on the way"
            description="We're preparing practice questions. Subscribe below to be notified when they're published."
          />
        ) : (
          <>
            {quickItems.length > 0 && (
              <div className="mb-12">
                <QuickAccess items={quickItems} />
              </div>
            )}

            <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const kids = cat._count.children;
              const quizzes = cat._count.quizzes;
              const meta =
                kids > 0
                  ? `${kids} ${kids === 1 ? "section" : "sections"}`
                  : quizzes > 0
                  ? `${quizzes} ${quizzes === 1 ? "quiz" : "quizzes"}`
                  : "";
              return (
                <StaggerItem key={cat.id} className="h-full">
                  <ResourceCard
                    data={{
                      title: cat.title,
                      description: meta ? `${cat.description} (${meta})` : cat.description,
                      href: `/question-bank/${cat.slug}`,
                      icon: resolveQuizIcon(cat.icon),
                    }}
                  />
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          </>
        )}
      </Section>
    </PageTransition>
  );
}
