"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Search as SearchIcon, FolderOpen, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BookCard } from "@/components/cards/BookCard";
import type { BookDisciplineDef } from "@/lib/data/book-disciplines";
import { bookCoverGradient } from "@/lib/book-cover";

export type ShelfBook = { id: string; title: string; author: string; discipline: string | null };
const OTHER = "other";

/** Generic browse-by-folder view for any book category that has sub-sections. */
export function CategoryShelf({
  books, disciplines, categorySlug,
}: { books: ShelfBook[]; disciplines: BookDisciplineDef[]; categorySlug: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const slugs = disciplines.map((d) => d.slug);
  const keyOf = (b: ShelfBook) => (b.discipline && slugs.includes(b.discipline) ? b.discipline : OTHER);

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const b of books) { const k = keyOf(b); m[k] = (m[k] || 0) + 1; }
    return m;
  }, [books]);

  const hasOther = (counts[OTHER] ?? 0) > 0;
  const folders = hasOther
    ? [...disciplines, { slug: OTHER, title: "Other", description: "Uncategorized titles." }]
    : disciplines;

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const shown = useMemo(() => books.filter((b) => {
    const k = keyOf(b);
    const matchesFolder = searching ? true : open === null ? false : k === open;
    const matchesText = !searching || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    return matchesFolder && matchesText;
  }), [books, open, q, searching]);

  const openTitle = open ? folders.find((d) => d.slug === open)?.title ?? "" : "";
  const labelFor = (slug: string | null) => (slug && disciplines.find((d) => d.slug === slug)?.title) || "Other";

  return (
    <div>
      <div className="mb-8">
        <div className="surface-card flex items-center gap-3 px-5 py-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-medical-blue" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Search by title or author"
            className="h-10 border-0 px-0 focus-visible:ring-0"
            aria-label="Search books"
          />
        </div>
      </div>

      {searching ? (
        shown.length === 0 ? (
          <p className="surface-card px-6 py-16 text-center text-muted-foreground">No books match {query}. Try a different term.</p>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {shown.map((b) => (
              <BookCard key={b.id} data={{ title: b.title, author: b.author, category: labelFor(b.discipline), href: `/books/${categorySlug}/${b.id}` }} />
            ))}
          </div>
        )
      ) : open === null ? (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {folders.map((d) => (
            <button key={d.slug} type="button" onClick={() => setOpen(d.slug)} className="surface-card-interactive focus-ring group flex h-full flex-col overflow-hidden text-left">
              <div className="flex aspect-[4/3] items-center justify-center p-6 text-center" style={{ backgroundImage: bookCoverGradient(d.title) }}>
                <div className="flex flex-col items-center gap-3 text-white">
                  <FolderOpen className="h-9 w-9 opacity-90" aria-hidden="true" />
                  <span className="text-base font-semibold leading-snug">{d.title}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-medical-blue">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {(counts[d.slug] ?? 0)} {(counts[d.slug] ?? 0) === 1 ? "book" : "books"}
                </span>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{d.description}</p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button type="button" onClick={() => setOpen(null)} className="focus-ring mb-6 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All sections
          </button>
          <h2 className="text-h3 mb-5 text-deep-blue">{openTitle}</h2>
          {shown.length === 0 ? (
            <p className="surface-card px-6 py-16 text-center text-muted-foreground">No books in this section yet.</p>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {shown.map((b) => (
                <BookCard key={b.id} data={{ title: b.title, author: b.author, category: openTitle, href: `/books/${categorySlug}/${b.id}` }} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
