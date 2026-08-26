import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { DownloadButton } from "@/components/common/DownloadButton";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { resourceCategories } from "@/lib/data/resource-categories";
import {
  getResourceCountsByCategory,
  getResourcesByCategory,
} from "@/lib/queries/resources";

export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Nursing Resources",
  description:
    "Study aids and quick-reference guides for nursing students — anatomy, pharmacology, dosage calculations, NCLEX quick sheets, lab values, and more.",
  path: "/resources/nursing-resources",
});

export default async function NursingResourcesPage() {
  // Two things in parallel: per-folder counts for the topic cards, and the
  // resources filed directly under the NURSING_RESOURCES category itself.
  const [counts, generalResources] = await Promise.all([
    getResourceCountsByCategory(),
    getResourcesByCategory("NURSING_RESOURCES"),
  ]);

  const topics = resourceCategories.filter((c) => c.group === "nursing");

  return (
    <PageTransition>
      <PageHero
        eyebrow="Free Resources"
        title="Nursing Resources"
        description="Browse topic folders for focused study guides and quick sheets, or scroll down for the full library of nursing resources and downloads."
      />

      <Section ariaLabel="Nursing resource topics">
        <Link
          href="/resources"
          className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All resources
        </Link>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const count = counts.get(topic.enum) ?? 0;
            return (
              <StaggerItem key={topic.slug} className="h-full">
                <ResourceCard
                  data={{
                    title: topic.title,
                    description:
                      count > 0
                        ? `${topic.description} (${count} ${count === 1 ? "item" : "items"})`
                        : topic.description,
                    href: `/resources/${topic.slug}`,
                    icon: topic.icon,
                  }}
                />
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      {/*
        Resources filed directly under the NURSING_RESOURCES category. Without
        this section, anything an admin assigns to "Nursing Resources" (rather
        than one of the topic sub-folders) would be published but have nowhere
        to appear, because this static page shadows the dynamic [category] page
        for the /resources/nursing-resources URL.
      */}
      {generalResources.length > 0 && (
        <Section ariaLabel="All nursing resources" className="bg-white">
          <SectionHeading
            eyebrow="Library"
            title="All nursing resources"
            align="center"
            className="mb-10"
          />
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {generalResources.map((resource) => (
              <StaggerItem key={resource.id} className="h-full">
                <article className="surface-card flex h-full flex-col p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-medical-blue/10 text-medical-blue ring-1 ring-medical-blue/15">
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
        </Section>
      )}
    </PageTransition>
  );
}
