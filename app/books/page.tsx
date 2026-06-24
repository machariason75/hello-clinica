import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Books",
  description: "Curated books and study guides to support your medical education journey.",
  path: "/books",
});

/**
 * Books hub — Phase 1 foundation shell only. The catalog, categories, and
 * downloads are built in the Books phase from the `books` table. This shell
 * keeps the frozen navigation working with no broken links.
 */
export default function BooksPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Books"
        title="Curated reading for future clinicians"
        description="A selection of recommended books, study guides, and digital downloads to complement your advising and self-study."
      />
      <Section>
        <EmptyState
          icon={<BookOpen className="h-7 w-7" />}
          title="The library is being stocked"
          description="We're preparing a curated collection of books and study guides. Check back soon, or subscribe to our newsletter to hear when it launches."
          action={
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/resources">
                  Browse free resources
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          }
        />
      </Section>
    </PageTransition>
  );
}
