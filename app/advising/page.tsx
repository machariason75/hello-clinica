import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EmptyState } from "@/components/common/EmptyState";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { advisingServices } from "@/lib/data/homepage-content";

export const metadata: Metadata = buildMetadata({
  title: "Advising Services",
  description: "Personalized admissions advising, application review, interview coaching, and consultation packages.",
  path: "/advising",
});

/**
 * Advising hub — Phase 1 shows the service overview (reusing foundation content)
 * so the page is useful immediately. Bookable packages and the inquiry workflow
 * are wired up in the Advising phase from the `packages` table.
 */
export default function AdvisingPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Advising Services"
        title="One-on-one support, tailored to you"
        description="Work directly with advisors who shape their guidance around your goals, your stage, and your story."
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

      <Section className="bg-white">
        <EmptyState
          icon={<Compass className="h-7 w-7" />}
          title="Detailed packages coming soon"
          description="We're finalizing consultation packages with clear hours and pricing. Reach out now and we'll help you find the right fit for your goals."
          action={
            <Button asChild>
              <Link href="/contact">
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          }
        />
      </Section>
    </PageTransition>
  );
}
