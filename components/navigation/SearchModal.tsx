"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, FileText, ArrowRight, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { searchablePages } from "@/lib/site-config";
import { searchAll, type SearchResult } from "@/lib/actions/search";

/**
 * Header search modal. Empty/short query shows the static page list; from two
 * characters it queries the SearchIndex (resources, books, FAQs, pages) via the
 * debounced server action. Every result links to a real route.
 */
export function SearchModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const staticResults: SearchResult[] = searchablePages.map((p) => ({
    title: p.title,
    type: p.type,
    url: p.href,
  }));

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    timer.current = setTimeout(async () => {
      const found = await searchAll(q);
      setResults(found);
      setLoading(false);
    }, 250);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [query]);

  // Reset when closed
  useEffect(() => {
    if (!open) {
      setQuery("");
      setResults([]);
      setLoading(false);
    }
  }, [open]);

  const isSearching = query.trim().length >= 2;
  const shown = isSearching ? results : staticResults;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showClose={false} className="top-[10vh] p-0">
        <DialogTitle className="sr-only">Search Hello Clinica</DialogTitle>
        <DialogDescription className="sr-only">
          Search across resources, advising services, books, and pages.
        </DialogDescription>

        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <Search className="h-5 w-5 shrink-0 text-medical-blue" aria-hidden="true" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources, services, books, and pages"
            className="h-10 border-0 px-0 focus-visible:ring-0"
            aria-label="Search query"
          />
          {loading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" aria-hidden="true" />}
        </div>

        <ul className="max-h-[55vh] overflow-y-auto p-2" aria-label="Search results">
          {isSearching && !loading && shown.length === 0 ? (
            <li className="px-4 py-10 text-center text-muted-foreground">
              No matches yet. Try a different term.
            </li>
          ) : (
            shown.map((result, i) => (
              <li key={`${result.url}-${i}`}>
                <Link
                  href={result.url}
                  onClick={() => onOpenChange(false)}
                  className="focus-ring group flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-brand-bg"
                >
                  <span className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-medical-blue/70" aria-hidden="true" />
                    <span className="font-medium text-deep-blue">{result.title}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-bg px-2.5 py-0.5 text-xs font-medium text-medical-blue">
                      {result.type}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
