import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { resourceCategories } from "@/lib/data/resource-categories";
import { getResourceCountsByCategory } from "@/lib/queries/resources";

export const revalidate = 300; // cached, refreshed every 5 min

export const metadata: Metadata = buildMetadata({
  title: "Free Resources",
  description:
    "Free, practical guides for every stage of the medical school journey — admissions, essays, interviews, clinical experience, and more.",
  path: "/resources",
});

export default async function ResourcesPage() {
  const counts = await getResourceCountsByCategory();

  return (
    <PageTransition>
      <PageHero
        eyebrow="Free Resources"
        title="Guides for your medical school journey"
        description="A growing library of free, practical resources — from admissions and essays to interviews and clinical experience."
      />

      <Section ariaLabel="Resource categories">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCategories
            .filter((category) => category.group !== "nursing")
            .map((category) => {
            const count = counts.get(category.enum) ?? 0;
            return (
              <StaggerItem key={category.slug} className="h-full">
                <ResourceCard
                  data={{
                    title: category.title,
                    description:
                      count > 0
                        ? `${category.description} (${count} ${count === 1 ? "guide" : "guides"})`
                        : category.description,
                    href: `/resources/${category.slug}`,
                    icon: category.icon,
                  }}
                />
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      <NewsletterSection />
    </PageTransition>
  );
}
