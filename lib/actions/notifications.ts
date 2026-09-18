"use server";

import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";
import { revalidatePath } from "next/cache";

/** Internal helper — create a notification for a student (used by auto-events & admin). */
export async function createNotification(
  studentId: string,
  data: { kind?: string; title: string; body: string; actionUrl?: string; requiresReply?: boolean }
): Promise<void> {
  await (prisma as any).notification.create({
    data: {
      studentId,
      kind: data.kind ?? "system",
      title: data.title,
      body: data.body,
      actionUrl: data.actionUrl ?? null,
      requiresReply: data.requiresReply ?? false,
    },
  });
}

export async function markNotificationRead(id: string) {
  const s = await getStudent();
  if (!s) return { success: false };
  await (prisma as any).notification.updateMany({ where: { id, studentId: s.id }, data: { readAt: new Date() } });
  revalidatePath("/account/notifications");
  revalidatePath("/account");
  return { success: true };
}

export async function markAllNotificationsRead() {
  const s = await getStudent();
  if (!s) return { success: false };
  await (prisma as any).notification.updateMany({ where: { studentId: s.id, readAt: null }, data: { readAt: new Date() } });
  revalidatePath("/account/notifications");
  revalidatePath("/account");
  return { success: true };
}

export async function replyToNotification(id: string, text: string) {
  const s = await getStudent();
  if (!s) return { success: false, message: "Please sign in." };
  const clean = text.trim();
  if (!clean) return { success: false, message: "Please write a reply." };
  const n = await (prisma as any).notification.findFirst({ where: { id, studentId: s.id } });
  if (!n) return { success: false, message: "Notification not found." };
  await (prisma as any).notification.update({ where: { id }, data: { reply: clean, repliedAt: new Date() } });
  revalidatePath("/account/notifications");
  return { success: true };
}
