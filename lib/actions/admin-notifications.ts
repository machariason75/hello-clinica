"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { revalidatePath } from "next/cache";

export async function pushNotificationByEmail(email: string, title: string, body: string, requiresReply = false) {
  await requireAdmin();
  const t = title.trim(), b = body.trim(), e = email.trim().toLowerCase();
  if (!e || !t || !b) return { success: false, message: "Email, title and message are required." };
  const student = await (prisma as any).student.findUnique({ where: { email: e }, select: { id: true } });
  if (!student) return { success: false, message: "No student account with that email." };
  await (prisma as any).notification.create({
    data: { studentId: student.id, kind: "admin", title: t, body: b, requiresReply },
  });
  revalidatePath("/admin/notifications");
  return { success: true };
}

export async function getAdminNotifications() {
  await requireAdmin();
  return (prisma as any).notification.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
    include: { student: { select: { name: true, email: true } } },
  });
}
