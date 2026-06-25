import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { EmptyState } from "@/components/common/EmptyState";
import { BookCard } from "@/components/cards/BookCard";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { getBookCategoryBySlug } from "@/lib/data/book-categories";
import { getBooksByCategory } from "@/lib/queries/books";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const def = getBookCategoryBySlug(category);
  if (!def) return buildMetadata({ title: "Books", path: "/books" });
  return buildMetadata({ title: def.title, description: def.description, path: `/books/${def.slug}` });
}

export default async function BookCategoryPage({ params }: Params) {
  const { category } = await params;
  const def = getBookCategoryBySlug(category);
  if (!def) notFound();

  const books = await getBooksByCategory(def.enum);

  return (
    <PageTransition>
      <PageHero eyebrow="Books" title={def.title} description={def.description} />

      <Section ariaLabel={`${def.title} listing`}>
        <Link
          href="/books"
          className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All books
        </Link>

        {books.length === 0 ? (
          <EmptyState
            icon={<BookOpen className="h-7 w-7" />}
            title="No books here yet"
            description="Titles for this category are being added. Check back soon or subscribe below."
          />
        ) : (
          <StaggerGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {books.map((b) => (
              <StaggerItem key={b.id} className="h-full">
                <BookCard
                  data={{
                    title: b.title,
                    author: b.author,
                    category: def.title,
                    href: `/books/${def.slug}/${b.id}`,
                  }}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </Section>

      <NewsletterSection />
    </PageTransition>
  );
}
