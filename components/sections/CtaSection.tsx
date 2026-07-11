import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

/** Reusable closing CTA band (Contact CTA on the homepage). */
export function CtaSection({
  title = "Ready to take the next step?",
  description = "Tell us where you are in your journey and we'll help you map the path ahead.",
  primaryHref = "/contact",
  primaryLabel = "Get in touch",
  secondaryHref = "/advising",
  secondaryLabel = "View advising services",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <Container>
        <Reveal variant="scaleIn">
          <div className="relative overflow-hidden rounded-card border border-deep-blue/10 bg-[#F5ECE1] px-6 py-14 text-center shadow-card sm:px-12 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-coral/15 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-medical-blue/10 blur-3xl" />
            <h2 className="text-h2 relative mx-auto max-w-2xl text-balance text-deep-blue">{title}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-deep-blue/70">{description}</p>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="border-2 border-medical-blue/30 bg-transparent text-medical-blue hover:bg-medical-blue/5">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
