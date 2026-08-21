"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search as SearchIcon, FolderOpen, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BookCard } from "@/components/cards/BookCard";
import { bookDisciplines } from "@/lib/data/book-disciplines";
import { cn } from "@/lib/utils";

export type ShelfBook = {
  id: string;
  title: string;
  author: string;
  discipline: string | null;
};

const OTHER = "reference-other";

/**
 * "Medical School Books" browse view: discipline folders you open to reveal the
 * books inside, plus a search box that looks across every discipline. Mirrors
 * the look of the main catalog (surface cards, medical-blue accents).
 */
export function MedicalSchoolShelf({ books }: { books: ShelfBook[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  // Count books per discipline (unknown/blank fall under Reference & Other).
  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const b of books) {
      const key = b.discipline && bookDisciplines.some((d) => d.slug === b.discipline) ? b.discipline : OTHER;
      m[key] = (m[key] || 0) + 1;
    }
    return m;
  }, [books]);

  // Only show folders that actually contain something.
  const folders = useMemo(
    () => bookDisciplines.filter((d) => (counts[d.slug] ?? 0) > 0),
    [counts]
  );

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const shown = useMemo(() => {
    return books.filter((b) => {
      const key = b.discipline && bookDisciplines.some((d) => d.slug === b.discipline) ? b.discipline : OTHER;
      const matchesFolder = searching ? true : open === null ? false : key === open;
      const matchesText =
        !searching || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      return matchesFolder && matchesText;
    });
  }, [books, open, q, searching]);

  const openDef = open ? bookDisciplines.find((d) => d.slug === open) : null;
  const openTitle = open === OTHER ? "Reference & Other" : openDef?.title ?? "";

  return (
    <div>
      {/* Search */}
      <div className="mb-8">
        <div className="surface-card flex items-center gap-3 px-5 py-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-medical-blue" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Search all medical school books by title or author"
            className="h-10 border-0 px-0 focus-visible:ring-0"
            aria-label="Search medical school books"
          />
        </div>
      </div>

      {/* Search results take over the view */}
      {searching ? (
        shown.length === 0 ? (
          <p className="surface-card px-6 py-16 text-center text-muted-foreground">
            No medical school books match “{query}”. Try a different term.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {shown.map((b) => (
              <BookCard
                key={b.id}
                data={{
                  title: b.title,
                  author: b.author,
                  category: labelFor(b.discipline),
                  href: `/books/medical-school-books/${b.id}`,
                }}
              />
            ))}
          </div>
        )
      ) : open === null ? (
        /* Folder grid */
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {folders.map((d) => (
            <button
              key={d.slug}
              type="button"
              onClick={() => setOpen(d.slug)}
              className="surface-card-interactive focus-ring group flex h-full flex-col overflow-hidden text-left"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-brand-gradient p-6 text-center">
                <div className="flex flex-col items-center gap-3 text-white">
                  <FolderOpen className="h-9 w-9 opacity-90" aria-hidden="true" />
                  <span className="text-base font-semibold leading-snug">{d.title}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-medical-blue">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {counts[d.slug]} {counts[d.slug] === 1 ? "book" : "books"}
                </span>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{d.description}</p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        /* Inside a folder */
        <div>
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="focus-ring mb-6 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All disciplines
          </button>
          <h2 className="text-h3 mb-5 text-deep-blue">{openTitle}</h2>
          {shown.length === 0 ? (
            <p className="surface-card px-6 py-16 text-center text-muted-foreground">
              No books in this discipline yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {shown.map((b) => (
                <BookCard
                  key={b.id}
                  data={{
                    title: b.title,
                    author: b.author,
                    category: openTitle,
                    href: `/books/medical-school-books/${b.id}`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function labelFor(slug: string | null): string {
  if (slug === OTHER || !slug) return "Reference & Other";
  return bookDisciplines.find((d) => d.slug === slug)?.title ?? "Medical School";
}
