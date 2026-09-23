"use server";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";
import { revalidatePath } from "next/cache";

/** Student posts a message in their engagement thread. */
export async function studentPostMessage(engagementId: string, body: string) {
  const s = await getStudent();
  if (!s) return { success: false, message: "Please sign in." };
  const text = body.trim();
  if (!text) return { success: false, message: "Write a message first." };
  const eng = await (prisma as any).engagement.findFirst({ where: { id: engagementId, studentId: s.id } });
  if (!eng) return { success: false, message: "Not found." };
  await (prisma as any).engagementMessage.create({ data: { engagementId, sender: "student", body: text } });
  await (prisma as any).engagement.update({ where: { id: engagementId }, data: { updatedAt: new Date() } });
  revalidatePath(`/account/engagements`);
  return { success: true };
}
