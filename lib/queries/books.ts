import { prisma } from "@/lib/prisma";
import type { BookCategory } from "@prisma/client";

const visible = { published: true, archived: false } as const;

export async function getAllPublishedBooks() {
  return prisma.book.findMany({
    where: visible,
    orderBy: [{ featured: "desc" }, { title: "asc" }],
  });
}

export async function getBooksByCategory(category: BookCategory) {
  return prisma.book.findMany({
    where: { ...visible, category },
    orderBy: [{ featured: "desc" }, { title: "asc" }],
  });
}

export async function getBookById(id: string) {
  const book = await prisma.book.findUnique({ where: { id } });
  if (!book || !book.published || book.archived) return null;
  return book;
}

export async function getRelatedBooks(book: { id: string; category: BookCategory }, limit = 4) {
  return prisma.book.findMany({
    where: { ...visible, category: book.category, NOT: { id: book.id } },
    take: limit,
    orderBy: { title: "asc" },
  });
}

export async function getBookCountsByCategory() {
  const grouped = await prisma.book.groupBy({
    by: ["category"],
    where: visible,
    _count: { _all: true },
  });
  const map = new Map<string, number>();
  for (const g of grouped) map.set(g.category, g._count._all);
  return map;
}
