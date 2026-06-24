import type { Metadata } from "next";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { homepageFaqs } from "@/lib/data/homepage-content";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Hello Clinica. Ask about advising services, resources, or how we can support your journey.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Tell us where you are in your journey and how we can help. A member of our team will reach out shortly."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <Reveal variant="fadeLeft" className="space-y-6">
            <div>
              <h2 className="text-h3 text-deep-blue">Reach us directly</h2>
              <p className="text-body mt-3 text-muted-foreground">
                Prefer email? Send us a note and we'll get back to you. For detailed support, the form
                helps us route your message to the right place.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="surface-card flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-bg text-medical-blue">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-deep-blue">Email</p>
                  <a href={`mailto:${siteConfig.email.primary}`} className="text-medical-blue hover:underline">
                    {siteConfig.email.primary}
                  </a>
                </div>
              </li>
              <li className="surface-card flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-bg text-medical-blue">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-deep-blue">Response time</p>
                  <p className="text-muted-foreground">We aim to respond within 1–2 business days.</p>
                </div>
              </li>
              <li className="surface-card flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-bg text-medical-blue">
                  <MessageSquare className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-deep-blue">What to include</p>
                  <p className="text-muted-foreground">Your stage, your goals, and any specific questions.</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal variant="fadeRight">
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10">
          <FaqAccordion items={homepageFaqs} />
        </div>
      </Section>

      <NewsletterSection />
    </PageTransition>
  );
}
