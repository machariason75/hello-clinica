"use server";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";
import { revalidatePath } from "next/cache";

// Lightweight anti-spam / anti-abuse: cap messages per user per minute.
async function tooMany(studentId: string) {
  const since = new Date(Date.now() - 60_000);
  const n = await (prisma as any).engagementMessage.count({
    where: { sender: "student", createdAt: { gte: since }, engagement: { studentId } },
  });
  return n >= 20;
}

export async function studentPostMessage(engagementId: string, body: string, fileUrl?: string, fileName?: string, replyToId?: string) {
  const s = await getStudent();
  if (!s) return { success: false, message: "Please sign in." };
  const text = body.trim();
  if (!text && !fileUrl) return { success: false, message: "Write a message or attach a file." };
  if (text.length > 5000) return { success: false, message: "Message is too long." };
  if (await tooMany(s.id)) return { success: false, message: "You're sending messages too fast. Please wait a moment." };
  const eng = await (prisma as any).engagement.findFirst({ where: { id: engagementId, studentId: s.id } });
  if (!eng) return { success: false, message: "Not found." };
  await (prisma as any).engagementMessage.create({ data: { engagementId, sender: "student", body: text, fileUrl: fileUrl ?? null, fileName: fileName ?? null, replyToId: replyToId ?? null } });
  await (prisma as any).engagement.update({ where: { id: engagementId }, data: { updatedAt: new Date() } });
  revalidatePath("/account/engagements"); revalidatePath("/admin/engagements");
  return { success: true };
}

export async function studentStartConversation(subject: string, body: string, fileUrl?: string, fileName?: string) {
  const s = await getStudent();
  if (!s) return { success: false, message: "Please sign in." };
  const text = body.trim();
  if (!text && !fileUrl) return { success: false, message: "Write a message or attach a file." };
  if (text.length > 5000) return { success: false, message: "Message is too long." };
  if (await tooMany(s.id)) return { success: false, message: "You're sending messages too fast. Please wait a moment." };
  await (prisma as any).engagement.create({
    data: { studentId: s.id, service: "Direct message", title: subject.trim() || "Conversation with the team", messages: { create: { sender: "student", body: text, fileUrl: fileUrl ?? null, fileName: fileName ?? null } } },
  });
  revalidatePath("/account/engagements"); revalidatePath("/admin/engagements");
  return { success: true };
}

/** A student may delete a message in their OWN conversation (no editing — delete only). */
export async function studentDeleteMessage(messageId: string) {
  const s = await getStudent();
  if (!s) return { success: false, message: "Please sign in." };
  const msg = await (prisma as any).engagementMessage.findUnique({ where: { id: messageId }, include: { engagement: { select: { studentId: true } } } });
  if (!msg || msg.engagement?.studentId !== s.id) return { success: false, message: "Not allowed." };
  await (prisma as any).engagementMessage.delete({ where: { id: messageId } });
  revalidatePath("/account/engagements"); revalidatePath("/admin/engagements");
  return { success: true };
}
