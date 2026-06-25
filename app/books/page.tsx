import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { EmptyState } from "@/components/common/EmptyState";
import { BookOpen } from "lucide-react";
import { PageTransition } from "@/components/motion/PageTransition";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { BooksCatalog, type CatalogBook } from "@/components/books/BooksCatalog";
import { buildMetadata } from "@/lib/seo";
import { bookCategories, getBookCategoryByEnum } from "@/lib/data/book-categories";
import { getAllPublishedBooks } from "@/lib/queries/books";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Books",
  description:
    "A curated library of recommended books, medical school texts, study guides, and digital downloads for future clinicians.",
  path: "/books",
});

export default async function BooksPage() {
  const books = await getAllPublishedBooks();

  const catalog: CatalogBook[] = books.map((b) => {
    const cat = getBookCategoryByEnum(b.category);
    return {
      id: b.id,
      title: b.title,
      author: b.author,
      categorySlug: cat?.slug ?? "recommended-books",
      categoryLabel: cat?.title ?? "Books",
    };
  });

  const filters = bookCategories.map((c) => ({ slug: c.slug, label: c.title }));

  return (
    <PageTransition>
      <PageHero
        eyebrow="Books"
        title="Curated reading for future clinicians"
        description="Recommended books, core medical school texts, study guides, and digital downloads — organized to help you find the right resource fast."
      />

      <Section ariaLabel="Book catalog">
        {catalog.length === 0 ? (
          <EmptyState
            icon={<BookOpen className="h-7 w-7" />}
            title="The library is being stocked"
            description="We're preparing a curated collection of books and study guides. Subscribe below to hear when it launches."
          />
        ) : (
          <BooksCatalog books={catalog} filters={filters} />
        )}
      </Section>

      <NewsletterSection />
    </PageTransition>
  );
}
