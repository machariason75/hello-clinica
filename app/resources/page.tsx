import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Resources",
  description: "Free guides and resources covering medical school admissions, essays, interviews, and more.",
  path: "/resources",
});

/**
 * Resources hub — Phase 1 foundation shell only. The resource library, filters,
 * and article pages are built in the Resources phase and read from the
 * `resources` table. This shell keeps navigation working with no broken links.
 */
export default function ResourcesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Free Resources"
        title="Guides for your medical school journey"
        description="A growing library of free, practical resources — from admissions and essays to interviews and clinical experience."
      />
      <Section>
        <EmptyState
          icon={<FileText className="h-7 w-7" />}
          title="Resources are on the way"
          description="Our team is curating in-depth guides for every stage of the journey. In the meantime, explore our advising services or get in touch with a question."
          action={
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/advising">
                  Explore advising
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Ask a question</Link>
              </Button>
            </div>
          }
        />
      </Section>
    </PageTransition>
  );
}
