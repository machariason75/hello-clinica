"use server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/auth-helpers";

export type AdminAlert = { id: string; name: string; email: string; preview: string; at: string };

/** Chats whose latest message is from the student and the admin hasn't seen yet. */
export async function getAdminUnread(): Promise<AdminAlert[]> {
  await requireAdmin();
  const engs = await (prisma as any).engagement.findMany({
    where: { blocked: false },
    orderBy: { updatedAt: "desc" },
    take: 25,
    include: {
      messages: { orderBy: { createdAt: "desc" }, take: 1 },
      student: { select: { name: true, email: true } },
    },
  });
  const out: AdminAlert[] = [];
  for (const e of engs) {
    const last = e.messages[0];
    if (last && last.sender === "student" && (!e.adminReadAt || new Date(e.adminReadAt) < new Date(last.createdAt))) {
      out.push({
        id: e.id,
        name: e.student?.name ?? e.title ?? "Student",
        email: e.student?.email ?? "",
        preview: String(last.body).slice(0, 100),
        at: new Date(last.createdAt).toISOString(),
      });
    }
  }
  return out;
}

export async function markEngagementRead(id: string) {
  await requireAdmin();
  await (prisma as any).engagement.update({ where: { id }, data: { adminReadAt: new Date() } });
  return { success: true };
}
