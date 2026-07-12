"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  ListChecks,
  FolderTree,
  ExternalLink,
  Timer,
  GraduationCap,
  X,
  Zap,
} from "lucide-react";

/**
 * Quick Access — a flat, searchable index of everything in the Question Bank.
 *
 * The tree is good for browsing, but a returning student already knows what they
 * want. This lets them type a couple of letters and jump straight there, instead
 * of clicking down through folders every time.
 */

export type QuickItem = {
  id: string;
  kind: "section" | "practice" | "exam" | "link";
  title: string;
  subtitle: string; // where it lives, e.g. "USMLE Revision › Step 1"
  href: string;
  external?: boolean;
  meta?: string; // e.g. "12 questions · 15 min"
  premium?: boolean;
};

const FILTERS = [
  { key: "all", label: "Everything" },
  { key: "practice", label: "Practice" },
  { key: "exam", label: "Exams" },
  { key: "section", label: "Sections" },
  { key: "link", label: "Resources" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

const kindIcon = {
  section: FolderTree,
  practice: ListChecks,
  exam: Timer,
  link: ExternalLink,
};

const kindStyle = {
  section: "bg-medical-blue/10 text-medical-blue",
  practice: "bg-emerald-500/10 text-emerald-600",
  exam: "bg-coral/10 text-coral",
  link: "bg-amber-500/10 text-amber-600",
};

export function QuickAccess({ items }: { items: QuickItem[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterKey>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (filter !== "all" && item.kind !== filter) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        (item.meta ?? "").toLowerCase().includes(q)
      );
    });
  }, [items, query, filter]);

  return (
    <div className="surface-card overflow-hidden">
      {/* Header */}
      <div className="border-b border-deep-blue/10 bg-gradient-to-r from-[#F3E9DD]/80 to-white px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-coral to-[#E8613F] text-white">
            <Zap className="h-4 w-4" />
          </span>
          <div>
            <h2 className="font-semibold text-deep-blue">Quick Access</h2>
            <p className="text-xs text-muted-foreground">
              Jump straight to any quiz, exam, or resource — no clicking through folders.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-deep-blue/40" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: TEAS, pharmacology, Step 1, calculations…"
            aria-label="Search the Question Bank"
            className="focus-ring w-full rounded-xl border border-deep-blue/15 bg-white py-2.5 pl-9 pr-9 text-sm text-deep-blue outline-none placeholder:text-deep-blue/35"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-deep-blue/35 transition hover:text-deep-blue"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={
                  "focus-ring rounded-full px-3 py-1 text-xs font-medium transition " +
                  (active
                    ? "bg-gradient-to-r from-coral to-[#E8613F] text-white shadow-sm"
                    : "bg-white text-deep-blue/60 ring-1 ring-deep-blue/10 hover:text-deep-blue")
                }
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="max-h-[26rem] overflow-y-auto">
        {results.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-muted-foreground">
            Nothing matches “{query}”. Try a broader word.
          </p>
        ) : (
          <ul className="divide-y divide-deep-blue/5">
            {results.map((item) => {
              const Icon = kindIcon[item.kind];
              const inner = (
                <>
                  <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg " + kindStyle[item.kind]}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5">
                      <span className="truncate font-medium text-deep-blue">{item.title}</span>
                      {item.premium && (
                        <span className="shrink-0 rounded-full bg-coral/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-coral">
                          Premium
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                      <span className="truncate">{item.subtitle}</span>
                      {item.meta && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{item.meta}</span>
                        </>
                      )}
                    </span>
                  </span>
                  {item.external && <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" aria-hidden="true" />}
                </>
              );

              return (
                <li key={item.id}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring flex items-center gap-3 px-5 py-3 transition hover:bg-[#F3E9DD]/40 sm:px-6"
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="focus-ring flex items-center gap-3 px-5 py-3 transition hover:bg-[#F3E9DD]/40 sm:px-6"
                    >
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Footer count */}
      <div className="border-t border-deep-blue/10 bg-white/60 px-5 py-2.5 text-xs text-muted-foreground sm:px-6">
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
          {results.length} {results.length === 1 ? "item" : "items"}
          {filter !== "all" && ` in ${FILTERS.find((f) => f.key === filter)?.label.toLowerCase()}`}
        </span>
      </div>
    </div>
  );
}
