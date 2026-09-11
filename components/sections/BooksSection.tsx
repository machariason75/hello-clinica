import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { BookCard, type BookCardData } from "@/components/cards/BookCard";
import { prisma } from "@/lib/prisma";
import { getBookCategoryByEnum } from "@/lib/data/book-categories";

/**
 * Homepage books row. Shows THREE books that rotate each day (like the question
 * of the day) drawn from across the library, so returning visitors keep seeing
 * fresh titles. Each card links straight to that book's own page.
 */
export async function BooksSection() {
  const all = await prisma.book.findMany({
    where: { published: true, archived: false },
    select: { id: true, title: true, author: true, category: true },
    orderBy: { createdAt: "asc" },
  });

  const n = all.length;
  if (n === 0) return null;

  // Deterministic daily rotation.
  const day = Math.floor(Date.now() / 86_400_000);
  const start = (day * 3) % n;
  const count = Math.min(3, n);
  const picks = Array.from({ length: count }, (_, i) => all[(start + i) % n]);

  const books: BookCardData[] = picks.map((b) => {
    const cat = getBookCategoryByEnum(b.category);
    return {
      title: b.title,
      author: b.author,
      category: cat?.title ?? "Book",
      href: `/books/${cat?.slug ?? "recommended-books"}/${b.id}`,
    };
  });

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Books"
          title="Curated reading to go deeper"
        />
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {books.map((book) => (
            <StaggerItem key={book.href} className="h-full">
              <BookCard data={book} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href="/books">
              Browse the library
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
