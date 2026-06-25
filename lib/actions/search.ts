"use server";

import { prisma } from "@/lib/prisma";

export type SearchResult = { title: string; type: string; url: string };

/**
 * Global search over the SearchIndex table (resources, books, FAQs, pages,
 * categories). Case-insensitive substring match on title + body. Returns a
 * small, ranked-enough set for instant display. Per File 17 §E this uses
 * Postgres directly — no external search service.
 */
export async function searchAll(query: string): Promise<SearchResult[]> {
  const q = query.trim();
  if (q.length < 2) return [];

  const rows = await prisma.searchIndex.findMany({
    where: {
      OR: [
        { title: { contains: q, mode: "insensitive" } },
        { body: { contains: q, mode: "insensitive" } },
      ],
    },
    take: 12,
    orderBy: { title: "asc" },
  });

  return rows.map((r) => ({
    title: r.title,
    type: r.contentType,
    url: r.url ?? "/",
  }));
}
