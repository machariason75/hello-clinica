import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText, Sparkles } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { DownloadButton } from "@/components/common/DownloadButton";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { getResourceCategoryBySlug } from "@/lib/data/resource-categories";
import { getResourcesByCategory } from "@/lib/queries/resources";
import { getPlaceholderTopics } from "@/lib/data/resource-placeholders";

export const revalidate = 300; // cached, refreshed every 5 min

type Params = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const def = getResourceCategoryBySlug(category);
  if (!def) return buildMetadata({ title: "Resource", path: "/resources" });
  return buildMetadata({
    title: def.title,
    description: def.description,
    path: `/resources/${def.slug}`,
  });
}

export default async function ResourceCategoryPage({ params }: Params) {
  const { category } = await params;
  const def = getResourceCategoryBySlug(category);
  if (!def) notFound();

  const resources = await getResourcesByCategory(def.enum);
  // Shown only while a category has no published guides yet. As soon as the
  // admin publishes a real resource here, the real guides render instead.
  const placeholderTopics = resources.length === 0 ? getPlaceholderTopics(def.slug) : [];

  return (
    <PageTransition>
      <PageHero eyebrow="Free Resources" title={def.title} description={def.overview} />

      <Section ariaLabel={`${def.title} resources`}>
        <Link
          href="/resources"
          className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All resources
        </Link>

        {resources.length > 0 ? (
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <StaggerItem key={resource.id} className="h-full">
                <article className="surface-card flex h-full flex-col p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F1E8DC] text-medical-blue ring-1 ring-black/5">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-deep-blue">{resource.title}</h3>
                  <p className="text-body mt-2 flex-1 text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="mt-6">
                    <DownloadButton
                      type="resource"
                      id={resource.id}
                      fileUrl={resource.resourceFile}
                      label="Download guide"
                    />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : (
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#F1E8DC] px-4 py-1.5 text-sm font-medium text-medical-blue ring-1 ring-black/5">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Guides coming soon
            </div>
            <p className="text-body mb-8 max-w-2xl text-muted-foreground">
              We&apos;re preparing in-depth guides for this topic. Here&apos;s what to expect —
              published resources will appear here as soon as they&apos;re ready.
            </p>
            <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {placeholderTopics.map((topic) => (
                <StaggerItem key={topic.title} className="h-full">
                  <article className="surface-card flex h-full flex-col p-6 opacity-90">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-muted-foreground ring-1 ring-border">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-deep-blue">{topic.title}</h3>
                    <p className="text-body mt-2 flex-1 text-muted-foreground">
                      {topic.description}
                    </p>
                    <span className="mt-5 inline-flex w-fit items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      Coming soon
                    </span>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        )}
      </Section>

      <Section ariaLabel="Frequently asked questions" className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" className="mb-10" />
        <FaqAccordion items={def.faqs} />
      </Section>
    </PageTransition>
  );
}
