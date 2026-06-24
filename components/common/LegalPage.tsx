import { PageHero } from "./PageHero";
import { Container } from "./Container";
import { PageTransition } from "@/components/motion/PageTransition";

export type LegalSection = { heading: string; body: string[] };

/** Shared layout for legal/policy pages — readable single-column prose. */
export function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <PageTransition>
      <PageHero eyebrow="Legal" title={title} description={intro} />
      <section className="section">
        <Container className="max-w-3xl">
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          <div className="mt-8 space-y-10">
            {sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="text-h3 text-deep-blue">
                  <span className="mr-2 text-medical-blue">{i + 1}.</span>
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-body text-muted-foreground">
                  {section.body.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 rounded-card border border-border bg-white p-5 text-sm text-muted-foreground">
            This page is provided for general informational purposes and does not constitute legal
            advice. For questions about how this policy applies to you, please contact us.
          </p>
        </Container>
      </section>
    </PageTransition>
  );
}
