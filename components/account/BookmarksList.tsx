"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Bookmark, BookOpen, FileText, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { removeBookmark } from "@/lib/actions/bookmarks";
import type { BookmarkRow } from "@/lib/queries/bookmarks";

export function BookmarksList({ items }: { items: BookmarkRow[] }) {
  const [rows, setRows] = useState<BookmarkRow[]>(items);
  const [, start] = useTransition();

  function remove(id: string) {
    setRows((r) => r.filter((x) => x.id !== id));
    start(async () => {
      const res = await removeBookmark(id);
      if (!res.success) toast.error("Couldn't remove bookmark.");
    });
  }

  if (rows.length === 0) {
    return (
      <div className="surface-card flex flex-col items-center gap-3 p-10 text-center">
        <Bookmark className="h-8 w-8 text-medical-blue/50" aria-hidden="true" />
        <p className="font-semibold text-deep-blue">No bookmarks yet</p>
        <p className="text-body max-w-md text-muted-foreground">
          Open a book or resource and tap <span className="font-medium">Bookmark</span> to save it here for later.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {rows.map((b) => (
        <li key={b.id} className="surface-card flex items-center gap-3 p-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center text-medical-blue">
            {b.itemType === "book" ? <BookOpen className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
          </span>
          <div className="flex-1">
            <Link href={`/read/${b.itemType}/${b.itemId}`} className="font-semibold text-deep-blue hover:underline">
              {b.itemTitle}
            </Link>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{b.itemType}</p>
          </div>
          <button
            type="button"
            onClick={() => remove(b.id)}
            className="focus-ring rounded-lg p-2 text-deep-blue/40 transition hover:text-red-500"
            aria-label="Remove bookmark"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </li>
      ))}
    </ul>
  );
}
