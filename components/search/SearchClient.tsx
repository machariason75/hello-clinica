"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search as SearchIcon, FileText, ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchAll, type SearchResult } from "@/lib/actions/search";

/** Interactive search used by the /search page. Debounced server-action search. */
export function SearchClient({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setSearched(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    timer.current = setTimeout(async () => {
      const found = await searchAll(q);
      setResults(found);
      setSearched(true);
      setLoading(false);
    }, 250);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [query]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="surface-card flex items-center gap-3 px-5 py-3">
        <SearchIcon className="h-5 w-5 shrink-0 text-medical-blue" aria-hidden="true" />
        <Input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search resources, books, services, and pages"
          className="h-10 border-0 px-0 focus-visible:ring-0"
          aria-label="Search query"
        />
        {loading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" aria-hidden="true" />}
      </div>

      <div className="mt-6" aria-live="polite">
        {query.trim().length < 2 ? (
          <p className="py-10 text-center text-muted-foreground">
            Type at least two characters to search.
          </p>
        ) : searched && results.length === 0 && !loading ? (
          <p className="py-10 text-center text-muted-foreground">
            No matches for “{query.trim()}”. Try a different term.
          </p>
        ) : (
          <ul className="space-y-2">
            {results.map((result, i) => (
              <li key={`${result.url}-${i}`}>
                <Link
                  href={result.url}
                  className="focus-ring surface-card-interactive group flex items-center justify-between gap-3 px-5 py-4"
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
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
