import { prisma } from "@/lib/prisma";
import { resourceCategories, getResourceCategoryByEnum } from "@/lib/data/resource-categories";
import { getBookCategoryByEnum } from "@/lib/data/book-categories";
import { searchablePages } from "@/lib/site-config";

/**
 * Rebuild the SearchIndex from current published content + static pages.
 * Called by the seed and (later) by the admin "Rebuild Search Index" action.
 * Safe to run repeatedly — it clears and repopulates.
 */
export async function buildSearchIndex(): Promise<number> {
  await prisma.searchIndex.deleteMany({});

  const rows: {
    contentType: string;
    contentId: string;
    title: string;
    body: string;
    url: string;
  }[] = [];

  // Static pages / sections
  for (const p of searchablePages) {
    rows.push({ contentType: p.type, contentId: p.href, title: p.title, body: p.keywords, url: p.href });
  }

  // Resource categories
  for (const c of resourceCategories) {
    rows.push({
      contentType: "Resource",
      contentId: `cat:${c.slug}`,
      title: c.title,
      body: c.description,
      url: `/resources/${c.slug}`,
    });
  }

  // Published resources
  const resources = await prisma.resource.findMany({
    where: { published: true, archived: false },
  });
  for (const r of resources) {
    const cat = getResourceCategoryByEnum(r.category);
    rows.push({
      contentType: "Resource",
      contentId: r.id,
      title: r.title,
      body: r.description,
      url: cat ? `/resources/${cat.slug}` : "/resources",
    });
  }

  // Published books (forward-compatible; refined in Books installment)
  const books = await prisma.book.findMany({
    where: { published: true, archived: false },
  });
  for (const b of books) {
    const bc = getBookCategoryByEnum(b.category);
    rows.push({
      contentType: "Book",
      contentId: b.id,
      title: b.title,
      body: `${b.author} ${b.description}`,
      url: bc ? `/books/${bc.slug}/${b.id}` : "/books",
    });
  }

  if (rows.length) {
    await prisma.searchIndex.createMany({ data: rows });
  }
  return rows.length;
}
