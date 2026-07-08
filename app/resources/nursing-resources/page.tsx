import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { resourceCategories } from "@/lib/data/resource-categories";
import { getResourceCountsByCategory } from "@/lib/queries/resources";

export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Nursing Resources",
  description:
    "Study aids and quick-reference guides for nursing students — anatomy, pharmacology, dosage calculations, NCLEX quick sheets, lab values, and more.",
  path: "/resources/nursing-resources",
});

export default async function NursingResourcesPage() {
  const counts = await getResourceCountsByCategory();
  const topics = resourceCategories.filter((c) => c.group === "nursing");

  return (
    <PageTransition>
      <PageHero
        eyebrow="Free Resources"
        title="Nursing Resources"
        description="Pick a topic folder to find study guides, quick sheets, and downloads — from anatomy and pharmacology to NCLEX prep and clinical skills."
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
    </PageTransition>
  );
}
