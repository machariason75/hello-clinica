"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search as SearchIcon, FolderOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BookCard } from "@/components/cards/BookCard";
import { cn } from "@/lib/utils";

export type CatalogBook = {
  id: string;
  title: string;
  author: string;
  categorySlug: string;
  categoryLabel: string;
  discipline: string | null;
};

type Filter = { slug: string; label: string };

/**
 * Books landing catalog.
 * - "All" tab: flat, searchable grid across every book (quick lookup).
 * - Each category tab is a LINK to that category's page (/books/<slug>), where the
 *   books are shown in their sub-section folders.
 */
export function BooksCatalog({ books, filters }: { books: CatalogBook[]; filters: Filter[] }) {
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return books;
    return books.filter((b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
  }, [books, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <div className="surface-card flex items-center gap-3 px-5 py-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-medical-blue" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all books by title or author"
            className="h-10 border-0 px-0 focus-visible:ring-0"
            aria-label="Search books"
          />
        </div>

        {/* "All" shows the flat grid below; category chips open the foldered pages. */}
        <div className="flex flex-wrap gap-2" aria-label="Browse by category">
          <span className="rounded-full bg-medical-blue px-4 py-2 text-sm font-medium text-white">All</span>
          {filters.map((f) => (
            <Link
              key={f.slug}
              href={`/books/${f.slug}`}
              className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-brand-bg px-4 py-2 text-sm font-medium text-deep-blue transition-colors hover:bg-border/60"
            >
              <FolderOpen className="h-3.5 w-3.5 text-medical-blue" aria-hidden="true" />
              {f.label}
            </Link>
          ))}
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="surface-card px-6 py-16 text-center text-muted-foreground">
          No books match your search yet. Try a different term, or browse a category above.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {shown.map((b) => (
            <BookCard
              key={b.id}
              data={{
                title: b.title,
                author: b.author,
                category: b.categoryLabel,
                href: `/books/${b.categorySlug}/${b.id}`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
