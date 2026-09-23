import { Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/motion/Reveal";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

/**
 * Newsletter — "orbit" concept (Option 8): a concentric-ring motif with a mail
 * badge, a centred invitation, and the signup form. Distinctive and on-brand.
 */
export function NewsletterSection() {
  return (
    <section className="section">
      <Container>
        <Reveal variant="scaleIn">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-card border border-deep-blue/10 bg-white px-6 py-14 text-center shadow-card sm:px-10">
            {/* orbit rings */}
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-24 -z-0 -translate-x-1/2">
              <div className="h-64 w-64 rounded-full border border-medical-blue/10" />
              <div className="absolute inset-6 rounded-full border border-coral/10" />
              <span className="absolute right-2 top-10 h-2.5 w-2.5 rounded-full bg-coral/60" />
              <span className="absolute left-4 bottom-12 h-2 w-2 rounded-full bg-medical-blue/50" />
            </div>

            <div className="relative">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-md">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-coral">Newsletter</p>
              <h2 className="text-h2 mt-2 text-balance text-deep-blue">Join our newsletter</h2>
              <p className="mx-auto mt-3 max-w-md text-lg text-deep-blue/70">
                Get the latest resources, study tips, and education updates — no spam, unsubscribe anytime.
              </p>

              <div className="mx-auto mt-8 max-w-md text-left">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
