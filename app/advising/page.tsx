import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, Crown, Sparkles } from "lucide-react";
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

      <Section className="bg-white/60">
        <SectionHeading eyebrow="Packages" title="Choose your plan" />
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
          <StaggerGroup className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {packages.map((pkg, idx) => {
              const featured = idx === 1 || pkg.packageName.toLowerCase().includes("premium");
              return (
                <StaggerItem key={pkg.id} className="h-full">
                  <div className={"surface-card relative flex h-full flex-col p-7 " + (featured ? "ring-2 ring-coral" : "")}>
                    {featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-coral to-[#E8613F] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        Most popular
                      </span>
                    )}
                    <div className="flex items-center gap-2">
                      <Crown className={"h-5 w-5 " + (featured ? "text-coral" : "text-medical-blue")} />
                      <h3 className="text-xl font-semibold text-deep-blue">{pkg.packageName}</h3>
                    </div>
                    <p className="text-body mt-2 text-muted-foreground">{pkg.description}</p>

                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-4xl font-bold text-deep-blue">${pkg.totalCost.toLocaleString()}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {pkg.totalHours > 0 ? `${pkg.totalHours} advising hour${pkg.totalHours === 1 ? "" : "s"} included` : "Self-paced access"}
                    </div>

                    <ul className="mt-6 flex-1 space-y-2.5">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-deep-blue/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/request-consultation?package=${encodeURIComponent(pkg.packageName)}`}
                      className={"focus-ring mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition " + (featured ? "bg-gradient-to-r from-coral to-[#E8613F] text-white hover:opacity-90" : "border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-blue/5")}
                    >
                      {pkg.buttonText || "Get started"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        )}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices shown in USD. Already have a package?{" "}
          <Link href="/account/register" className="font-medium text-medical-blue hover:underline">Create your student account</Link> and we'll activate your access.
        </p>
      </Section>
    </PageTransition>
  );
}
