import { prisma } from "@/lib/prisma";

export type BookmarkRow = {
  id: string;
  itemType: "book" | "resource";
  itemId: string;
  itemTitle: string;
  createdAt: Date;
};

export async function getBookmarks(studentId: string): Promise<BookmarkRow[]> {
  const rows = await (prisma as any).bookmark.findMany({
    where: { studentId },
    orderBy: { createdAt: "desc" },
  });
  if (rows.length === 0) return [];
  const bookIds = [...new Set(rows.filter((r: any) => r.itemType === "book").map((r: any) => r.itemId))];
  const resIds = [...new Set(rows.filter((r: any) => r.itemType === "resource").map((r: any) => r.itemId))];
  const [books, resources] = await Promise.all([
    (prisma as any).book.findMany({ where: { id: { in: bookIds } }, select: { id: true, title: true } }),
    (prisma as any).resource.findMany({ where: { id: { in: resIds } }, select: { id: true, title: true } }),
  ]);
  const titleOf = (t: string, id: string) =>
    (t === "book" ? books : resources).find((x: any) => x.id === id)?.title ?? "Untitled";
  return rows.map((r: any) => ({
    id: r.id,
    itemType: r.itemType,
    itemId: r.itemId,
    itemTitle: titleOf(r.itemType, r.itemId),
    createdAt: r.createdAt,
  }));
}
