"use server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/auth-helpers";

export type AdminAlert = { id: string; name: string; email: string; preview: string; at: string };

function isUnread(e: any): boolean {
  const last = e.messages?.[0];
  return !!last && last.sender === "student" && (!e.adminReadAt || new Date(e.adminReadAt) < new Date(last.createdAt));
}

export async function getAdminUnread(): Promise<AdminAlert[]> {
  await requireAdmin();
  const engs = await (prisma as any).engagement.findMany({
    where: { blocked: false },
    orderBy: { updatedAt: "desc" },
    take: 25,
    include: { messages: { orderBy: { createdAt: "desc" }, take: 1 }, student: { select: { name: true, email: true } } },
  });
  return engs.filter(isUnread).map((e: any) => ({
    id: e.id,
    name: e.student?.name ?? e.title ?? "Student",
    email: e.student?.email ?? "",
    preview: String(e.messages[0].body || (e.messages[0].fileName ? "📎 " + e.messages[0].fileName : "Attachment")).slice(0, 100),
    at: new Date(e.messages[0].createdAt).toISOString(),
  }));
}

export async function markEngagementRead(id: string) {
  await requireAdmin();
  await (prisma as any).engagement.update({ where: { id }, data: { adminReadAt: new Date() } });
  return { success: true };
}

/** Mark every currently-unread conversation as read — used when the admin opens the inbox. */
export async function markAllAdminRead() {
  await requireAdmin();
  const engs = await (prisma as any).engagement.findMany({
    where: { blocked: false },
    include: { messages: { orderBy: { createdAt: "desc" }, take: 1 } },
  });
  const ids = engs.filter(isUnread).map((e: any) => e.id);
  if (ids.length) await (prisma as any).engagement.updateMany({ where: { id: { in: ids } }, data: { adminReadAt: new Date() } });
  return { success: true, count: ids.length };
}
