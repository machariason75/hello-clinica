import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Hello Clinica helps future healthcare professionals navigate their education with personalized advising, free resources, and curated books.",
  path: "/about",
});

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Honest, transparent guidance — we tell you what you need to hear, not just what's easy." },
  { icon: HeartHandshake, title: "Empathy", text: "Every journey is personal. We meet you where you are and support your specific goals." },
  { icon: Sparkles, title: "Excellence", text: "Thoughtful, high-quality resources and advising you can rely on at every milestone." },
  { icon: Users, title: "Accessibility", text: "A strong base of free resources so guidance is within reach, wherever you're starting." },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About Hello Clinica"
        title="Guidance built around your journey"
        description="We help students move through the healthcare education path with clarity, structure, and support that adapts to where they are."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal variant="fadeLeft" className="surface-card p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bg text-medical-blue">
              <Target className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="text-h3 mt-5 text-deep-blue">Our mission</h2>
            <p className="text-body mt-3 text-muted-foreground">
              To make expert guidance accessible to every aspiring healthcare professional — combining
              personalized advising with a free, trustworthy resource library that demystifies the path
              from pre-med to practice.
            </p>
          </Reveal>
          <Reveal variant="fadeRight" className="surface-card p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bg text-medical-blue">
              <Eye className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="text-h3 mt-5 text-deep-blue">Our vision</h2>
            <p className="text-body mt-3 text-muted-foreground">
              A future where no capable student is held back by a lack of guidance — where clear
              information and caring mentorship help more people reach their potential in medicine and
              allied health.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Our story"
          title="Why we built Hello Clinica"
          intro="The path into healthcare is full of unwritten rules. We started Hello Clinica to make that path clearer — pairing practical resources with advising that treats each student as an individual."
        />
        <Reveal className="mx-auto mt-10 max-w-3xl space-y-5 text-body text-muted-foreground">
          <p>
            Too many talented students stall not because they lack ability, but because they lack a
            map. Deadlines, essays, interviews, and experience requirements pile up, and generic advice
            rarely fits a real person's situation.
          </p>
          <p>
            Hello Clinica brings those pieces together. Our free resources cover the fundamentals, and
            our advising services provide the personalized, one-on-one support that helps students make
            confident decisions at each stage of the journey.
          </p>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our values" title="What guides our work" />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={value.title} className="h-full">
                <div className="surface-card flex h-full flex-col p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-deep-blue">{value.title}</h3>
                  <p className="text-body mt-2 text-muted-foreground">{value.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      <CtaSection
        title="Let's find your next step"
        description="Whether you're just starting out or deep into your application, we're here to help you move forward."
      />
    </PageTransition>
  );
}
