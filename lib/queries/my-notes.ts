import { prisma } from "@/lib/prisma";

export type MyNote = {
  id: string;
  itemType: "book" | "resource";
  itemId: string;
  itemTitle: string;
  page: number | null;
  content: string;
  createdAt: Date;
};

export type MyNotesGroup = {
  itemType: "book" | "resource";
  itemId: string;
  itemTitle: string;
  notes: MyNote[];
};

/**
 * All of a student's reader notes, grouped by the book/resource they were taken
 * on, newest item first. Titles are resolved so the account can show which
 * material each note belongs to.
 */
export async function getMyNotesGrouped(studentId: string): Promise<MyNotesGroup[]> {
  const rows = await (prisma as any).readerNote.findMany({
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
  const titleOf = (type: string, id: string): string => {
    const list = type === "book" ? books : resources;
    return list.find((x: any) => x.id === id)?.title ?? "Untitled";
  };

  const groups = new Map<string, MyNotesGroup>();
  for (const r of rows) {
    const key = `${r.itemType}:${r.itemId}`;
    const note: MyNote = {
      id: r.id,
      itemType: r.itemType,
      itemId: r.itemId,
      itemTitle: titleOf(r.itemType, r.itemId),
      page: r.page,
      content: r.content,
      createdAt: r.createdAt,
    };
    const g = groups.get(key);
    if (g) g.notes.push(note);
    else groups.set(key, { itemType: note.itemType, itemId: note.itemId, itemTitle: note.itemTitle, notes: [note] });
  }
  return [...groups.values()];
}
