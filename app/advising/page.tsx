import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { advisingServices } from "@/lib/data/homepage-content";

export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Advising Services",
  description:
    "Personalized admissions advising, application review, exam coaching, and academic support for advanced-degree study.",
  path: "/advising",
});

export default function AdvisingPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Advising & Premium"
        title="One-on-one support for every stage"
        description="Work directly with advisors who shape their guidance around your goals — from admissions and exam prep to advanced-degree research and writing. Choose a service to see how it works."
      />

      <Section>
        <SectionHeading eyebrow="What we offer" title="Ways we can help" />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {advisingServices.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <ServiceCard data={service} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>
    </PageTransition>
  );
}
