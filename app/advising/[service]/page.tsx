import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, BookOpen, ShieldCheck, GraduationCap, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EmptyState } from "@/components/common/EmptyState";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { AcademicSupport } from "@/components/packages/AcademicSupport";
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
            <>
              <AcademicSupport packages={packages} />
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Prices shown in USD. Final scope and cost are confirmed after we discuss your
                requirements and deadline.
              </p>
            </>
          )
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <Reveal className="surface-card p-7 sm:p-8">
              <h2 className="text-h3 text-deep-blue">What's included</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {def.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-deep-blue/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 pt-6">
                {[
                  { icon: ShieldCheck, label: "Confidential" },
                  { icon: GraduationCap, label: "Experienced advisors" },
                  { icon: CalendarClock, label: "Flexible scheduling" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 text-sm text-deep-blue/75">
                    <Icon className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal variant="fadeLeft" className="surface-card h-fit p-7">
              <div className="rounded-2xl bg-brand-bg/60 p-5 text-center ring-1 ring-border/60">
                <p className="text-sm font-semibold text-deep-blue">Personalized quote</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Scope and pricing are confirmed after a quick chat about your goals.
                </p>
              </div>
              <h3 className="text-h3 mt-6 text-deep-blue">Ready to begin?</h3>
              <p className="text-body mt-2 text-muted-foreground">
                Reach out and we'll match {def.title} to your goals, stage, and timeline.
              </p>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href="/request-consultation">
                  Request this service
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
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


