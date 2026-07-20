import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, BookOpen } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EmptyState } from "@/components/common/EmptyState";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PackagesWithInquiry } from "@/components/packages/PackagesWithInquiry";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/common/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { getAdvisingServiceBySlug } from "@/lib/data/advising-services";
import { getPublishedPackages } from "@/lib/queries/packages";
import type { PackageView } from "@/components/packages/PackageCard";

export const revalidate = 300; // cached, refreshed every 5 min

type Params = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service } = await params;
  const def = getAdvisingServiceBySlug(service);
  if (!def) return buildMetadata({ title: "Advising", path: "/advising" });
  return buildMetadata({ title: def.title, description: def.description, path: `/advising/${def.slug}` });
}

export default async function AdvisingServicePage({ params }: Params) {
  const { service } = await params;
  const def = getAdvisingServiceBySlug(service);
  if (!def) notFound();

  let packages: PackageView[] = [];
  if (def.isPackages) {
    const rows = await getPublishedPackages();
    packages = rows.map((p) => ({
      id: p.id,
      packageName: p.packageName,
      description: p.description,
      totalHours: p.totalHours,
      totalCost: p.totalCost,
      features: p.features,
      buttonText: p.buttonText,
    }));
  }

  return (
    <PageTransition>
      {/* FAQ markup is the highest-value schema on the site: Google renders
          these as expandable questions in the results, which takes up far more
          of the page than a plain link. */}
      {def.faqs.length > 0 && <JsonLd data={faqJsonLd(def.faqs)} />}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Advising", path: "/advising" },
          { name: def.title, path: `/advising/${def.slug}` },
        ])}
      />
      <PageHero eyebrow="Advising Services" title={def.title} description={def.overview} />

      <Section ariaLabel={def.title}>
        <Link
          href="/advising"
          className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All services
        </Link>

        {def.isPackages ? (
          packages.length === 0 ? (
            <EmptyState
              icon={<BookOpen className="h-7 w-7" />}
              title="Packages are being finalized"
              description="We're finalizing consultation packages with clear hours and pricing. Reach out and we'll help you find the right fit."
              action={
                <Button asChild>
                  <Link href="/contact">Start a conversation</Link>
                </Button>
              }
            />
          ) : (
            <PackagesWithInquiry packages={packages} />
          )
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <Reveal>
              <h2 className="text-h3 text-deep-blue">What's included</h2>
              <ul className="mt-5 space-y-3">
                {def.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-deep-blue">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-medical-blue" aria-hidden="true" />
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="fadeLeft" className="surface-card h-fit p-7">
              <h3 className="text-h3 text-deep-blue">Ready to begin?</h3>
              <p className="text-body mt-3 text-muted-foreground">
                Reach out and we'll match this service to your goals and stage.
              </p>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href="/contact">Get started</Link>
              </Button>
            </Reveal>
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
