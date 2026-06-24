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
          <div className="relative overflow-hidden rounded-card bg-brand-gradient px-6 py-14 text-center text-white sm:px-12 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <h2 className="text-h2 relative mx-auto max-w-2xl text-balance">{title}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">{description}</p>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white/70 bg-transparent text-white hover:bg-white/10">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
