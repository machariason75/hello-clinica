import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Consultation",
  description:
    "Request a one-on-one consultation with Hello Clinica. Share your stage and goals, and our team will reach out to help you find the right support.",
  path: "/request-consultation",
});

const consultationFaqs = [
  {
    question: "What happens after I submit?",
    answer:
      "Your request is saved and our team is notified right away. We'll reach out using your preferred contact method to arrange next steps.",
  },
  {
    question: "Is there any cost to request a consultation?",
    answer:
      "No. Requesting a consultation is free. We'll discuss the right service or package for your goals before anything is arranged.",
  },
  {
    question: "How soon will I hear back?",
    answer: "We aim to respond within 1–2 business days.",
  },
];

export default function RequestConsultationPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Request a Consultation"
        title="Let's find the right support for you"
        description="Tell us where you are in your journey and how you'd like to be reached. A member of our team will follow up to help you take the next step."
      />

      <Section ariaLabel="Consultation form">
        <Reveal className="mx-auto max-w-2xl">
          <ConsultationForm />
        </Reveal>
      </Section>

      <Section ariaLabel="Frequently asked questions" className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Before you ask" align="center" className="mb-10" />
        <FaqAccordion items={consultationFaqs} />
      </Section>
    </PageTransition>
  );
}
