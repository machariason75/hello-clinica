import { prisma } from "@/lib/prisma";

export type DailyPoint = { date: string; label: string; count: number };
export type CategoryCount = { label: string; count: number };

export type AnalyticsData = {
  totals: {
    consultations: number;
    contacts: number;
    inquiries: number;
    subscribers: number;
    downloads: number;
  };
  last30: {
    consultations: number;
    contacts: number;
    subscribers: number;
  };
  submissionsByDay: DailyPoint[]; // last 14 days, all lead types combined
  consultationsByStatus: CategoryCount[];
  downloadsSplit: CategoryCount[]; // resource vs book downloads
};

function dayKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export async function getAnalytics(): Promise<AnalyticsData> {
  const now = new Date();
  const since30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const since14 = new Date(now.getTime() - 13 * 24 * 60 * 60 * 1000);
  since14.setHours(0, 0, 0, 0);

  const [
    consultationsTotal,
    contactsTotal,
    inquiriesTotal,
    subscribersTotal,
    downloadsTotal,
    consultations30,
    contacts30,
    subscribers30,
    consultationsForDay,
    contactsForDay,
    subscribersForDay,
    statusGroups,
    resourceDownloads,
    bookDownloads,
  ] = await Promise.all([
    prisma.consultation.count(),
    prisma.contactRequest.count(),
    prisma.packageInquiry.count(),
    prisma.newsletterSubscriber.count(),
    prisma.downloadLog.count(),
    prisma.consultation.count({ where: { createdAt: { gte: since30 } } }),
    prisma.contactRequest.count({ where: { createdAt: { gte: since30 } } }),
    prisma.newsletterSubscriber.count({ where: { subscribedAt: { gte: since30 } } }),
    prisma.consultation.findMany({ where: { createdAt: { gte: since14 } }, select: { createdAt: true } }),
    prisma.contactRequest.findMany({ where: { createdAt: { gte: since14 } }, select: { createdAt: true } }),
    prisma.newsletterSubscriber.findMany({ where: { subscribedAt: { gte: since14 } }, select: { subscribedAt: true } }),
    prisma.consultation.groupBy({ by: ["status"], _count: { _all: true } }),
    prisma.downloadLog.count({ where: { resourceId: { not: null } } }),
    prisma.downloadLog.count({ where: { bookId: { not: null } } }),
  ]);

  // Build 14-day buckets
  const buckets = new Map<string, number>();
  const labels: { key: string; label: string }[] = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date(since14.getTime() + i * 24 * 60 * 60 * 1000);
    const key = dayKey(d);
    buckets.set(key, 0);
    labels.push({ key, label: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) });
  }
  const bump = (dt: Date) => {
    const k = dayKey(dt);
    if (buckets.has(k)) buckets.set(k, (buckets.get(k) ?? 0) + 1);
  };
  consultationsForDay.forEach((r) => bump(r.createdAt));
  contactsForDay.forEach((r) => bump(r.createdAt));
  subscribersForDay.forEach((r) => bump(r.subscribedAt));

  const submissionsByDay: DailyPoint[] = labels.map((l) => ({
    date: l.key,
    label: l.label,
    count: buckets.get(l.key) ?? 0,
  }));

  const statusLabels: Record<string, string> = {
    NEW: "New",
    CONTACTED: "Contacted",
    FOLLOW_UP_REQUIRED: "Follow-up",
    CLOSED: "Closed",
  };
  const consultationsByStatus: CategoryCount[] = statusGroups.map((g) => ({
    label: statusLabels[g.status] ?? g.status,
    count: g._count._all,
  }));

  return {
    totals: {
      consultations: consultationsTotal,
      contacts: contactsTotal,
      inquiries: inquiriesTotal,
      subscribers: subscribersTotal,
      downloads: downloadsTotal,
    },
    last30: {
      consultations: consultations30,
      contacts: contacts30,
      subscribers: subscribers30,
    },
    submissionsByDay,
    consultationsByStatus,
    downloadsSplit: [
      { label: "Resource downloads", count: resourceDownloads },
      { label: "Book downloads", count: bookDownloads },
    ],
  };
}
