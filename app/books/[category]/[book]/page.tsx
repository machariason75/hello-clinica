import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, User, Headphones } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BookCard } from "@/components/cards/BookCard";
import { DownloadButton } from "@/components/common/DownloadButton";
import { bookHasAudio } from "@/lib/queries/audio";
import { ReadOnlineButton } from "@/components/reader/ReadOnlineButton";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { getBookCategoryBySlug, getBookCategoryByEnum } from "@/lib/data/book-categories";
import { getBookById, getRelatedBooks } from "@/lib/queries/books";

export const revalidate = 300; // cached, refreshed every 5 min

type Params = { params: Promise<{ category: string; book: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, book: bookId } = await params;
  const book = await getBookById(bookId);
  if (!book) return buildMetadata({ title: "Book", path: "/books" });
  return buildMetadata({
    title: book.title,
    description: book.description,
    path: `/books/${category}/${book.id}`,
  });
}

export default async function BookDetailPage({ params }: Params) {
  const { category, book: bookId } = await params;
  const def = getBookCategoryBySlug(category);
  const book = await getBookById(bookId);
  if (!def || !book) notFound();

  // Show the Listen button only when this book actually has published audio.
  const hasAudio = await bookHasAudio(book.id);

  const catLabel = getBookCategoryByEnum(book.category)?.title ?? def.title;
  const related = await getRelatedBooks({ id: book.id, category: book.category });

  return (
    <PageTransition>
      <Section ariaLabel={book.title}>
        <Link
          href={`/books/${def.slug}`}
          className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to {def.title}
        </Link>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          {/* Cover */}
          <Reveal className="mx-auto w-full max-w-[320px]">
            <div className="surface-card flex aspect-[3/4] items-center justify-center overflow-hidden bg-brand-gradient p-8 text-center">
              <div className="flex flex-col items-center gap-4 text-white">
                <BookOpen className="h-12 w-12 opacity-90" aria-hidden="true" />
                <span className="text-lg font-semibold leading-snug">{book.title}</span>
              </div>
            </div>
          </Reveal>

          {/* Details */}
          <Reveal variant="fadeLeft">
            <span className="text-xs font-semibold uppercase tracking-wide text-medical-blue">
              {catLabel}
            </span>
            <h1 className="text-h2 mt-2 text-deep-blue">{book.title}</h1>
            <p className="mt-3 inline-flex items-center gap-2 text-lg text-muted-foreground">
              <User className="h-4 w-4" aria-hidden="true" />
              {book.author}
            </p>
            <p className="text-body mt-6 text-muted-foreground">{book.description}</p>

            <div className="mt-8">
              {book.fileUrl && (
                <div className="mb-3">
                  <ReadOnlineButton type="book" id={book.id} label="Read online" />
                </div>
              )}
              {hasAudio && (
                <div className="mb-3">
                  <Link
                    href={`/listen/${book.id}`}
                    className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-coral to-[#E8613F] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
                  >
                    <Headphones className="h-4 w-4" aria-hidden="true" />
                    Listen to the audiobook
                  </Link>
                </div>
              )}
              <DownloadButton
                type="book"
                id={book.id}
                fileUrl={book.fileUrl}
                label="Download book"
              />
              {!book.fileUrl && (
                <p className="mt-3 text-sm text-muted-foreground">
                  This title is part of our recommended reading. A download will appear here when available.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      {related.length > 0 && (
        <Section ariaLabel="Related books" className="bg-white">
          <SectionHeading eyebrow="Related" title={`More in ${def.title}`} align="left" className="mb-8" />
          <StaggerGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((b) => (
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
        </Section>
      )}
    </PageTransition>
  );
}
