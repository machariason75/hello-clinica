import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { SearchClient } from "@/components/search/SearchClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Search",
  description: "Search across Hello Clinica resources, books, services, and pages.",
  path: "/search",
});

type SearchParams = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: SearchParams) {
  const { q } = await searchParams;

  return (
    <PageTransition>
      <PageHero
        eyebrow="Search"
        title="Find what you need"
        description="Search across our resources, books, advising services, and pages."
      />
      <Section>
        <SearchClient initialQuery={q ?? ""} />
      </Section>
    </PageTransition>
  );
}
