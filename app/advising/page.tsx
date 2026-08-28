import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EmptyState } from "@/components/common/EmptyState";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PackagesBreakdown } from "@/components/packages/PackagesBreakdown";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { advisingServices } from "@/lib/data/homepage-content";
import { getPackages } from "@/lib/queries/packages";

export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Advising Services",
  description: "Personalized admissions advising, application review, interview coaching, and premium study packages.",
  path: "/advising",
});

export default async function AdvisingPage() {
  const packages = await getPackages();

  return (
    <PageTransition>
      <PageHero
        eyebrow="Advising & Premium"
        title="One-on-one support and premium study access"
        description="Work directly with advisors who shape their guidance around your goals — and unlock the full Question Bank, exams, and study tools."
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

      <div id="consultation-packages" className="scroll-mt-28" aria-hidden="true" />
      <Section className="bg-white/60" ariaLabel="Consultation packages">
        <SectionHeading
          eyebrow="Consultation Packages"
          title="An overview of our packages"
          intro="A quick look at each package — what it includes, the advising hours you get, and the investment — so you can choose the fit that matches your goals."
        />
        {packages.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              icon={<Sparkles className="h-7 w-7" />}
              title="Packages coming soon"
              description="We're finalizing packages with clear pricing. Reach out and we'll help you find the right fit."
              action={<Button asChild><Link href="/contact">Start a conversation<ArrowRight className="h-4 w-4" /></Link></Button>}
            />
          </div>
        ) : (
          <div className="mt-12">
            <PackagesBreakdown packages={packages} />
          </div>
        )}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices shown in USD. Already have a package?{" "}
          <Link href="/account/register" className="font-medium text-medical-blue hover:underline">Create your student account</Link> and we'll activate your access.
        </p>
      </Section>
    </PageTransition>
  );
}


