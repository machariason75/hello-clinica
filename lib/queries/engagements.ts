import { prisma } from "@/lib/prisma";

export type EngStep = { id: string; label: string; status: string; order: number; dueAt: Date | null };
export type EngMessage = { id: string; sender: string; body: string; createdAt: Date };
export type EngagementFull = {
  id: string; service: string; title: string; status: string; createdAt: Date;
  steps: EngStep[]; messages: EngMessage[];
  student?: { name: string; email: string };
};

export async function getStudentEngagements(studentId: string): Promise<EngagementFull[]> {
  return (prisma as any).engagement.findMany({
    where: { studentId },
    orderBy: { createdAt: "desc" },
    include: { steps: { orderBy: { order: "asc" } }, messages: { orderBy: { createdAt: "asc" } } },
  });
}

export async function getEngagementForStudent(id: string, studentId: string): Promise<EngagementFull | null> {
  return (prisma as any).engagement.findFirst({
    where: { id, studentId },
    include: { steps: { orderBy: { order: "asc" } }, messages: { orderBy: { createdAt: "asc" } } },
  });
}

export async function getAllEngagements(): Promise<EngagementFull[]> {
  return (prisma as any).engagement.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      steps: { orderBy: { order: "asc" } },
      messages: { orderBy: { createdAt: "asc" } },
      student: { select: { name: true, email: true } },
    },
  });
}
