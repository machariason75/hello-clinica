import { prisma } from "@/lib/prisma";

export type DashboardStats = {
  consultations: number;
  contactRequests: number;
  packageInquiries: number;
  newsletterSubscribers: number;
  resources: number;
  books: number;
  downloads: number;
  newConsultations: number; // status NEW (needs attention)
  quizCategories: number;
  quizzes: number;
  externalLinks: number;
  students: number;
  studentsWithAccess: number;
  accessRequests: number;
  pendingRequests: number; // needs attention
};

export type ActivityItem = {
  id: string;
  type: "Consultation" | "Contact" | "Inquiry" | "Subscriber";
  label: string;
  sublabel: string;
  createdAt: Date;
};

/** All dashboard card counts in a single round of parallel queries. */
export async function getDashboardStats(): Promise<DashboardStats> {
  const [
    consultations,
    contactRequests,
    packageInquiries,
    newsletterSubscribers,
    resources,
    books,
    downloads,
    newConsultations,
    quizCategories,
    quizzes,
    externalLinks,
    students,
    studentsWithAccess,
    accessRequests,
    pendingRequests,
  ] = await Promise.all([
    prisma.consultation.count({ where: { archived: false } }),
    prisma.contactRequest.count({ where: { archived: false } }),
    prisma.packageInquiry.count({ where: { archived: false } }),
    prisma.newsletterSubscriber.count({ where: { archived: false } }),
    prisma.resource.count({ where: { archived: false } }),
    prisma.book.count({ where: { archived: false } }),
    prisma.downloadLog.count(),
    prisma.consultation.count({ where: { archived: false, status: "NEW" } }),
    prisma.quizCategory.count(),
    prisma.quiz.count(),
    prisma.quizExternalLink.count(),
    prisma.student.count(),
    prisma.student.count({ where: { hasAccess: true } }),
    prisma.courseAccessRequest.count(),
    prisma.courseAccessRequest.count({ where: { status: "pending" } }),
  ]);

  return {
    consultations,
    contactRequests,
    packageInquiries,
    newsletterSubscribers,
    resources,
    books,
    downloads,
    newConsultations,
    quizCategories,
    quizzes,
    externalLinks,
    students,
    studentsWithAccess,
    accessRequests,
    pendingRequests,
  };
}

/** Most recent submissions across lead types, merged + sorted. */
export async function getRecentActivity(limit = 8): Promise<ActivityItem[]> {
  const [consultations, contacts, inquiries, subscribers] = await Promise.all([
    prisma.consultation.findMany({
      where: { archived: false },
      orderBy: { createdAt: "desc" },
      take: limit,
      select: { id: true, firstName: true, lastName: true, cadre: true, createdAt: true },
    }),
    prisma.contactRequest.findMany({
      where: { archived: false },
      orderBy: { createdAt: "desc" },
      take: limit,
      select: { id: true, firstName: true, lastName: true, reason: true, createdAt: true },
    }),
    prisma.packageInquiry.findMany({
      where: { archived: false },
      orderBy: { createdAt: "desc" },
      take: limit,
      select: { id: true, studentFirstName: true, studentLastName: true, createdAt: true },
    }),
    prisma.newsletterSubscriber.findMany({
      where: { archived: false },
      orderBy: { subscribedAt: "desc" },
      take: limit,
      select: { id: true, name: true, email: true, subscribedAt: true },
    }),
  ]);

  const items: ActivityItem[] = [
    ...consultations.map((c) => ({
      id: c.id,
      type: "Consultation" as const,
      label: `${c.firstName} ${c.lastName}`,
      sublabel: c.cadre,
      createdAt: c.createdAt,
    })),
    ...contacts.map((c) => ({
      id: c.id,
      type: "Contact" as const,
      label: `${c.firstName} ${c.lastName}`,
      sublabel: c.reason,
      createdAt: c.createdAt,
    })),
    ...inquiries.map((i) => ({
      id: i.id,
      type: "Inquiry" as const,
      label: `${i.studentFirstName} ${i.studentLastName}`,
      sublabel: "Package inquiry",
      createdAt: i.createdAt,
    })),
    ...subscribers.map((s) => ({
      id: s.id,
      type: "Subscriber" as const,
      label: s.name || s.email,
      sublabel: "Newsletter signup",
      createdAt: s.subscribedAt,
    })),
  ];

  return items
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
}
