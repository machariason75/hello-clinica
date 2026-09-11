import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/motion/Reveal";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="section" aria-labelledby="newsletter-heading">
      <Container>
        <Reveal className="surface-card mx-auto max-w-3xl p-8 text-center sm:p-12">
          <p className="eyebrow">Newsletter</p>
          <h2 id="newsletter-heading" className="text-h2 mt-3 text-deep-blue">
            Guidance in your inbox
          </h2>
          <div className="mx-auto mt-8 max-w-xl text-left">
            <NewsletterForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

