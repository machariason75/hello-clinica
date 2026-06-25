import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { advisingServiceDefs } from "@/lib/data/advising-services";

export const metadata: Metadata = buildMetadata({
  title: "Advising Services",
  description:
    "Personalized admissions advising, application review, interview coaching, and flexible consultation packages.",
  path: "/advising",
});

export default function AdvisingPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Advising Services"
        title="One-on-one support, tailored to you"
        description="Work directly with advisors who shape their guidance around your goals, your stage, and your story."
      />

      <Section ariaLabel="Advising services">
        <SectionHeading eyebrow="What we offer" title="Ways we can help" className="mb-12" />
        <StaggerGroup className="grid gap-6 sm:grid-cols-2">
          {advisingServiceDefs.map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard
                data={{
                  title: service.title,
                  description: service.description,
                  href: `/advising/${service.slug}`,
                  icon: service.icon,
                }}
                className="h-full"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section gradient ariaLabel="Get started">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">Not sure which service fits?</h2>
          <p className="mt-4 text-lg text-white/85">
            Explore our consultation packages or reach out with a question — we'll help you find the
            right next step for your goals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="secondary">
              <Link href="/advising/consultation-packages">
                View packages
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              className="border-2 border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/contact">Ask a question</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </PageTransition>
  );
}
