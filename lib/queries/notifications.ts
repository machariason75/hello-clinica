import { prisma } from "@/lib/prisma";

export type NotificationRow = {
  id: string;
  kind: string;
  title: string;
  body: string;
  actionUrl: string | null;
  requiresReply: boolean;
  reply: string | null;
  repliedAt: Date | null;
  readAt: Date | null;
  createdAt: Date;
};

export async function getNotifications(studentId: string): Promise<NotificationRow[]> {
  return (prisma as any).notification.findMany({
    where: { studentId },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
}

export async function getUnreadNotificationCount(studentId: string): Promise<number> {
  return (prisma as any).notification.count({ where: { studentId, readAt: null } });
}
