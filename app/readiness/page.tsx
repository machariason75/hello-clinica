import type { Metadata } from "next";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/common/JsonLd";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildAssessment } from "@/lib/queries/readiness";
import { ReadinessAssessment } from "@/components/quiz/ReadinessAssessment";

export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Free Readiness Assessment",
  description:
    "Find out where you stand in 12 questions. A free diagnostic that shows which topics are costing you marks — no account needed.",
  path: "/readiness",
});

const faqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes. Twelve questions, a full topic-by-topic report, and no account required. We ask for your email only after you have seen your results, and only if you want study tips.",
  },
  {
    question: "Which exam is it for?",
    answer:
      "It samples across the whole Question Bank, so it works as a general diagnostic whether you are preparing for the NCLEX, TEAS, HESI, USMLE or the pharmacy boards. It is designed to find weak areas, not to mimic one specific exam.",
  },
  {
    question: "How long does it take?",
    answer: "About ten minutes. There is no timer — the point is an honest picture, not exam conditions.",
  },
  {
    question: "What do I get at the end?",
    answer:
      "A readiness score, a breakdown of how you did in each topic, and a short list of the areas to focus on first — the ones costing you the most marks right now.",
  },
];

export default async function ReadinessPage() {
  const questions = await buildAssessment();

  return (
    <PageTransition>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow="Free · No account needed"
        title="Where do you actually stand?"
        description="Twelve questions, about ten minutes, and an honest topic-by-topic report showing which areas are costing you the most marks."
      />
      <Section ariaLabel="Readiness assessment">
        <ReadinessAssessment questions={questions} />
      </Section>
    </PageTransition>
  );
}
