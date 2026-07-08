import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ListChecks, Clock, BarChart3, ChevronRight, Lock } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { EmptyState } from "@/components/common/EmptyState";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { ExternalLinkCard } from "@/components/cards/ExternalLinkCard";
import { PremiumLock } from "@/components/quiz/PremiumLock";
import { CourseRequestForm } from "@/components/account/CourseRequestForm";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { getQuizCategoryNode, getCategoryAncestors } from "@/lib/queries/quizzes";
import { getStudent } from "@/lib/student/auth";
import { resolveQuizIcon } from "@/lib/quiz-icons";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const node = await getQuizCategoryNode(category);
  if (!node) return buildMetadata({ title: "Question Bank", path: "/question-bank" });
  return buildMetadata({ title: node.title, description: node.description, path: `/question-bank/${node.slug}` });
}

function fmtTime(seconds?: number | null): string {
  if (!seconds) return "Untimed";
  return `${Math.round(seconds / 60)} min`;
}

export default async function QuizCategoryPage({ params }: Params) {
  const { category } = await params;
  const node = await getQuizCategoryNode(category);
  if (!node) notFound();

  const [ancestors, student] = await Promise.all([getCategoryAncestors(node.id), getStudent()]);
  const parent = ancestors.length > 1 ? ancestors[ancestors.length - 2] : null;
  const backHref = parent ? `/question-bank/${parent.slug}` : "/question-bank";
  const backLabel = parent ? parent.title : "All categories";

  const children = node.children ?? [];
  const quizzes = node.quizzes ?? [];
  const links = node.externalLinks ?? [];

  const isColleges = node.slug === "colleges-universities";
  const premiumBranch = node.premium || ancestors.some((a) => a.premium);
  const gated = premiumBranch && !student?.hasAccess && !isColleges;

  return (
    <PageTransition>
      <PageHero
        eyebrow={premiumBranch ? "Premium · Question Bank" : "Question Bank"}
        title={node.title}
        description={node.overview || node.description}
      />

      <Section ariaLabel={node.title}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/question-bank" className="focus-ring rounded hover:text-coral">Question Bank</Link>
          {ancestors.slice(0, -1).map((a) => (
            <span key={a.slug} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link href={`/question-bank/${a.slug}`} className="focus-ring rounded hover:text-coral">{a.title}</Link>
            </span>
          ))}
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="inline-flex items-center gap-1 font-medium text-deep-blue">
            {premiumBranch && <Lock className="h-3.5 w-3.5 text-coral" aria-hidden="true" />}
            {node.title}
          </span>
        </nav>

        <Link href={backHref} className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {backLabel}
        </Link>

        <div className="space-y-12">
          {/* Sub-folders always browsable */}
          {children.length > 0 && (
            <div>
              <h2 className="text-h3 mb-5 text-deep-blue">Browse sections</h2>
              <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {children.map((child) => {
                  const kids = child._count.children;
                  const qz = child._count.quizzes;
                  const meta = kids > 0 ? `${kids} ${kids === 1 ? "section" : "sections"}` : qz > 0 ? `${qz} ${qz === 1 ? "quiz" : "quizzes"}` : "";
                  return (
                    <StaggerItem key={child.id} className="h-full">
                      <ResourceCard
                        data={{
                          title: child.premium ? `${child.title} 🔒` : child.title,
                          description: meta ? `${child.description} (${meta})` : child.description,
                          href: `/question-bank/${child.slug}`,
                          icon: resolveQuizIcon(child.icon),
                        }}
                      />
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </div>
          )}

          {/* Colleges & Universities → request flow */}
          {isColleges ? (
            <div className="mx-auto max-w-2xl">
              {student ? (
                <>
                  <h2 className="text-h3 mb-5 text-center text-deep-blue">Request course access</h2>
                  <CourseRequestForm defaultUniversity={student.university ?? ""} />
                </>
              ) : (
                <PremiumLock signedIn={false} title="Sign in to request course access" />
              )}
            </div>
          ) : gated ? (
            <PremiumLock signedIn={!!student} />
          ) : (
            <>
              {quizzes.length > 0 && (
                <div>
                  <h2 className="text-h3 mb-5 text-deep-blue">Practice tests</h2>
                  <StaggerGroup className="grid gap-6 md:grid-cols-2">
                    {quizzes.map((quiz) => (
                      <StaggerItem key={quiz.id} className="h-full">
                        <Link href={`/question-bank/${node.slug}/${quiz.slug}`} className="surface-card-interactive focus-ring group flex h-full flex-col p-6">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-semibold text-deep-blue">{quiz.title}</h3>
                            {quiz.featured && <span className="shrink-0 rounded-full bg-coral/10 px-2.5 py-1 text-xs font-semibold text-coral">Featured</span>}
                          </div>
                          <p className="text-body mt-2 flex-1 text-muted-foreground">{quiz.description}</p>
                          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5"><ListChecks className="h-4 w-4 text-medical-blue" aria-hidden="true" />{quiz._count.questions} {quiz._count.questions === 1 ? "question" : "questions"}</span>
                            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-medical-blue" aria-hidden="true" />{fmtTime(quiz.timeLimitSeconds)}</span>
                            {quiz.difficulty && <span className="inline-flex items-center gap-1.5"><BarChart3 className="h-4 w-4 text-medical-blue" aria-hidden="true" />{quiz.difficulty}</span>}
                          </div>
                          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue">Start practice<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></span>
                        </Link>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              )}

              {links.length > 0 && (
                <div>
                  <h2 className="text-h3 mb-5 text-deep-blue">Recommended resources</h2>
                  <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {links.map((link) => (
                      <StaggerItem key={link.id} className="h-full">
                        <ExternalLinkCard data={{ title: link.title, url: link.url, description: link.description, thumbnailUrl: link.thumbnailUrl, source: link.source }} />
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              )}

              {children.length === 0 && quizzes.length === 0 && links.length === 0 && (
                <EmptyState icon={<ListChecks className="h-7 w-7" />} title="New material is on the way" description="We're preparing content for this section. Check back soon." />
              )}
            </>
          )}
        </div>
      </Section>
    </PageTransition>
  );
}
