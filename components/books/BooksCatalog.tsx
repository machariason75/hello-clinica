"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BookCard } from "@/components/cards/BookCard";
import { cn } from "@/lib/utils";

export type CatalogBook = {
  id: string;
  title: string;
  author: string;
  categorySlug: string;
  categoryLabel: string;
};

type Filter = { slug: string; label: string };

/** Client-side book catalog with category filter + text search. */
export function BooksCatalog({
  books,
  filters,
}: {
  books: CatalogBook[];
  filters: Filter[];
}) {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((b) => {
      const matchesCat = active === "all" || b.categorySlug === active;
      const matchesText =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q);
      return matchesCat && matchesText;
    });
  }, [books, active, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <div className="surface-card flex items-center gap-3 px-5 py-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-medical-blue" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books by title or author"
            className="h-10 border-0 px-0 focus-visible:ring-0"
            aria-label="Search books"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Book categories">
          {[{ slug: "all", label: "All" }, ...filters].map((f) => (
            <button
              key={f.slug}
              type="button"
              role="tab"
              aria-selected={active === f.slug}
              onClick={() => setActive(f.slug)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === f.slug
                  ? "bg-medical-blue text-white"
                  : "bg-brand-bg text-deep-blue hover:bg-border/60"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="surface-card px-6 py-16 text-center text-muted-foreground">
          No books match your search yet. Try a different term or category.
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
