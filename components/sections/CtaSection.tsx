import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/motion/Reveal";
import { NeonButton } from "@/components/common/NeonButton";

/** Closing CTA — a single neon "Get in touch" button floating on the page. */
export function CtaSection({
  primaryHref = "/contact",
  primaryLabel = "Get in touch",
}: {
  primaryHref?: string;
  primaryLabel?: string;
  title?: string;
  description?: string;
  showSecondary?: boolean;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <Container>
        <Reveal variant="scaleIn" className="flex justify-center py-8">
          <NeonButton href={primaryHref}>
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NeonButton>
        </Reveal>
      </Container>
    </section>
  );
}
