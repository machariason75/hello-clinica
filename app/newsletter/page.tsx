import type { Metadata } from "next";
import { Mail, Sparkles, BookOpen, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Newsletter",
  description: "Join the Hello Clinica newsletter for study tips, new resources, and education updates.",
  path: "/newsletter",
});

const perks = [
  { icon: BookOpen, text: "New guides and resources as they publish" },
  { icon: Sparkles, text: "Study tips and application advice" },
  { icon: CalendarClock, text: "Timely reminders for key deadlines" },
];

export default function NewsletterPage() {
  return (
    <PageTransition>
      <PageHero eyebrow="Newsletter" title="Guidance in your inbox" description="No spam — just useful updates, and you can unsubscribe anytime." />
      <Section ariaLabel="Newsletter signup">
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal variant="fadeLeft" className="space-y-5">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-md">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="text-h3 text-deep-blue">What you'll get</h2>
            <ul className="space-y-3">
              {perks.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.text} className="flex items-center gap-3 text-deep-blue/80">
                    <Icon className="h-5 w-5 shrink-0 text-medical-blue" aria-hidden="true" />
                    {p.text}
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal variant="fadeRight" className="surface-card p-7">
            <NewsletterForm />
          </Reveal>
        </div>
      </Section>
    </PageTransition>
  );
}
