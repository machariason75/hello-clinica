"use server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { createNotification } from "@/lib/actions/notifications";
import { revalidatePath } from "next/cache";

export async function createEngagement(input: {
  studentEmail: string; service: string; title: string; steps: string[];
}) {
  await requireAdmin();
  const email = input.studentEmail.trim().toLowerCase();
  const student = await (prisma as any).student.findUnique({ where: { email }, select: { id: true } });
  if (!student) return { success: false, message: "No student with that email." };
  const eng = await (prisma as any).engagement.create({
    data: {
      studentId: student.id,
      service: input.service.trim() || "Advising",
      title: input.title.trim() || "Engagement",
      steps: { create: input.steps.filter((l) => l.trim()).map((label, i) => ({ label: label.trim(), order: i })) },
    },
  });
  await createNotification(student.id, {
    kind: "engagement",
    title: "Your engagement has started",
    body: `We've set up "${eng.title}". Open it to see the plan and message your tutor.`,
    actionUrl: "/account/engagements",
  });
  revalidatePath("/admin/engagements");
  return { success: true };
}

/** Admin starts a direct conversation with an existing account holder. */
export async function adminStartConversation(studentEmail: string, subject: string, body: string) {
  await requireAdmin();
  const email = studentEmail.trim().toLowerCase();
  const student = await (prisma as any).student.findUnique({ where: { email }, select: { id: true } });
  if (!student) return { success: false, message: "No account with that email." };
  const text = body.trim();
  if (!text) return { success: false, message: "Write a message first." };
  await (prisma as any).engagement.create({
    data: {
      studentId: student.id,
      service: "Direct message",
      title: subject.trim() || "Message from Hello Clinica",
      messages: { create: { sender: "admin", body: text } },
    },
  });
  await createNotification(student.id, {
    kind: "engagement",
    title: "New message from Hello Clinica",
    body: text.length > 90 ? text.slice(0, 90) + "…" : text,
    actionUrl: "/account/engagements",
    requiresReply: true,
  });
  revalidatePath("/admin/engagements");
  revalidatePath("/account/engagements");
  return { success: true };
}

export async function updateStep(stepId: string, data: { status?: string; dueAt?: string | null }) {
  await requireAdmin();
  const step = await (prisma as any).engagementStep.update({
    where: { id: stepId },
    data: { ...(data.status ? { status: data.status } : {}), ...(data.dueAt !== undefined ? { dueAt: data.dueAt ? new Date(data.dueAt) : null } : {}) },
    include: { engagement: { select: { id: true, studentId: true, title: true } } },
  });
  const e = step.engagement;
  await createNotification(e.studentId, {
    kind: "engagement",
    title: `Update on "${e.title}"`,
    body: data.status ? `Step "${step.label}" is now ${step.status.replace("_", " ")}.` : `A deadline was set for "${step.label}".`,
    actionUrl: "/account/engagements",
  });
  revalidatePath("/admin/engagements");
  revalidatePath("/account/engagements");
  return { success: true };
}

export async function adminPostMessage(engagementId: string, body: string) {
  await requireAdmin();
  const text = body.trim();
  if (!text) return { success: false, message: "Write a message first." };
  const eng = await (prisma as any).engagement.findUnique({ where: { id: engagementId }, select: { studentId: true, title: true } });
  if (!eng) return { success: false, message: "Not found." };
  await (prisma as any).engagementMessage.create({ data: { engagementId, sender: "admin", body: text } });
  await (prisma as any).engagement.update({ where: { id: engagementId }, data: { updatedAt: new Date() } });
  await createNotification(eng.studentId, {
    kind: "engagement",
    title: `New message about "${eng.title}"`,
    body: text.length > 90 ? text.slice(0, 90) + "…" : text,
    actionUrl: "/account/engagements",
    requiresReply: true,
  });
  revalidatePath("/admin/engagements");
  revalidatePath("/account/engagements");
  return { success: true };
}
