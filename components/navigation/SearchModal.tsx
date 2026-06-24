"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, FileText, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { searchablePages } from "@/lib/site-config";

/**
 * Search modal.
 *
 * Phase 1 searches the published site pages/sections — every result links to a
 * real, existing route (no broken links). The frozen requirement to also search
 * resources, books and FAQs is fulfilled in later phases by extending the
 * result set from the SearchIndex table; the UI here does not change.
 */
export function SearchModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchablePages;
    return searchablePages.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.keywords.toLowerCase().includes(q)
    );
  }, [query]);

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
        </div>

        <ul className="max-h-[55vh] overflow-y-auto p-2" role="listbox" aria-label="Search results">
          {results.length === 0 ? (
            <li className="px-4 py-10 text-center text-muted-foreground">
              No matches yet. Try a different term — more content becomes searchable as it is published.
            </li>
          ) : (
            results.map((result) => (
              <li key={result.href} role="option" aria-selected="false">
                <Link
                  href={result.href}
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
