import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { BookCard } from "@/components/cards/BookCard";
import { featuredBooks } from "@/lib/data/homepage-content";

export function BooksSection() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Books"
          title="Curated reading to go deeper"
          intro="Carefully chosen books and study guides to complement your advising and self-study."
        />
        <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {featuredBooks.map((book) => (
            <StaggerItem key={book.title} className="h-full">
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
