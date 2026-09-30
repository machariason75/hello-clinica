import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Bookmark } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { EmptyState } from "@/components/common/EmptyState";
import { BookCard } from "@/components/cards/BookCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";
import { unstable_noStore as noStore } from "next/cache";
import { getStudent } from "@/lib/student/auth";
import { getBookmarkedBooks } from "@/lib/queries/books";
import { getBookCategoryByEnum } from "@/lib/data/book-categories";

export const dynamic = "force-dynamic"; // per-user, never cached

export const metadata: Metadata = buildMetadata({ title: "Bookmarks", description: "Books you've saved for quick access.", path: "/books/recommended-books" });

type BM = { id: string; title: string; author: string; category: string };
function hrefFor(b: BM) {
  const slug = getBookCategoryByEnum(b.category as never)?.slug ?? "medical-school-books";
  return `/books/${slug}/${b.id}`;
}

export default async function BookmarksPage() {
  noStore();
  const student = await getStudent();
  const books = (student ? await getBookmarkedBooks(student.id) : []) as BM[];

  return (
    <PageTransition>
      <PageHero eyebrow="Books" title="Bookmarks" description="Books you've saved, kept here for quick access." />
      <Section ariaLabel="Bookmarked books">
        <Link href="/books" className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All books
        </Link>

        {/* Who am I? — makes it obvious which account's bookmarks these are. */}
        {student && (
          <p className="mb-6 text-sm text-muted-foreground">
            Signed in as <span className="font-semibold text-deep-blue">{student.email}</span>
            {" "}· bookmarks are personal to your account.
          </p>
        )}

        {!student ? (
          <EmptyState icon={<Bookmark className="h-7 w-7" />} title="Sign in to see your bookmarks" description="Create a free account, then tap the bookmark icon on any book to save it here." />
        ) : books.length === 0 ? (
          <EmptyState icon={<Bookmark className="h-7 w-7" />} title="No bookmarks yet" description="Tap the bookmark icon on any book and it'll appear here instantly." />
        ) : (
          <StaggerGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {books.map((b) => (
              <StaggerItem key={b.id} className="h-full">
                <BookCard data={{ title: b.title, author: b.author, category: getBookCategoryByEnum(b.category as never)?.title ?? "Book", href: hrefFor(b) }} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </Section>
    </PageTransition>
  );
}
