"use server";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";
import { revalidatePath } from "next/cache";

type Kind = "book" | "resource";

export async function isBookmarked(itemType: Kind, itemId: string): Promise<boolean> {
  const s = await getStudent();
  if (!s) return false;
  const row = await (prisma as any).bookmark.findUnique({
    where: { studentId_itemType_itemId: { studentId: s.id, itemType, itemId } },
  });
  return !!row;
}

/** Toggle a bookmark. Requires an account (saving is a premium/account feature). */
export async function toggleBookmark(itemType: Kind, itemId: string) {
  const s = await getStudent();
  if (!s) return { success: false, needsAccount: true as const };
  const key = { studentId_itemType_itemId: { studentId: s.id, itemType, itemId } };
  const existing = await (prisma as any).bookmark.findUnique({ where: key });
  if (existing) {
    await (prisma as any).bookmark.delete({ where: key });
    revalidatePath("/account/bookmarks");
    return { success: true, bookmarked: false as const };
  }
  await (prisma as any).bookmark.create({ data: { studentId: s.id, itemType, itemId } });
  revalidatePath("/account/bookmarks");
  return { success: true, bookmarked: true as const };
}

export async function removeBookmark(id: string) {
  const s = await getStudent();
  if (!s) return { success: false };
  await (prisma as any).bookmark.deleteMany({ where: { id, studentId: s.id } });
  revalidatePath("/account/bookmarks");
  return { success: true };
}
