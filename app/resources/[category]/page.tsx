import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EmptyState } from "@/components/common/EmptyState";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { DownloadButton } from "@/components/common/DownloadButton";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { getResourceCategoryBySlug } from "@/lib/data/resource-categories";
import { getResourcesByCategory } from "@/lib/queries/resources";

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

        {resources.length === 0 ? (
          <EmptyState
            icon={<FileText className="h-7 w-7" />}
            title="New guides are on the way"
            description="We're preparing in-depth resources for this topic. Subscribe below to be notified when they're published."
          />
        ) : (
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <StaggerItem key={resource.id} className="h-full">
                <article className="surface-card flex h-full flex-col p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white">
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
        )}
      </Section>

      <Section ariaLabel="Frequently asked questions" className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" className="mb-10" />
        <FaqAccordion items={def.faqs} />
      </Section>

      <NewsletterSection />
    </PageTransition>
  );
}
