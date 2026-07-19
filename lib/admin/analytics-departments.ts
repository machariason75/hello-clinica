import { prisma } from "@/lib/prisma";

/**
 * Departmental analytics.
 *
 * The existing analytics page answers "how many leads did we get?". This answers
 * the harder questions: is the paid product actually being used, are free users
 * converting, which topics are students failing, and is anything quietly broken.
 *
 * Every metric carries a comparison against the PREVIOUS equivalent period, so
 * the page shows direction rather than just a number. A count on its own tells
 * you nothing; a count with "up 40% on the previous 30 days" tells you what to
 * do next.
 */

export type Trend = {
  current: number;
  previous: number;
  /** percent change; null when there's no previous baseline to compare against */
  changePct: number | null;
};

export type WeakTopic = {
  topic: string;
  correct: number;
  total: number;
  accuracyPct: number;
};

export type NamedCount = { label: string; count: number; sub?: string };

export type DepartmentAnalytics = {
  days: number;

  questionBank: {
    attempts: Trend;
    avgScore: number;
    passRate: number;
    uniqueLearners: number;
    weakTopics: WeakTopic[];
    topQuizzes: NamedCount[];
    practiceVsExam: { practice: number; exam: number };
  };

  students: {
    registrations: Trend;
    total: number;
    premium: number;
    conversionPct: number;
    activeLearners: number; // attempted a quiz in the period
    pendingAccessRequests: number;
  };

  library: {
    downloads: Trend;
    bookDownloads: number;
    resourceDownloads: number;
    topDownloads: NamedCount[];
    publishedBooks: number;
    publishedResources: number;
  };

  audio: {
    tracks: number;
    listeners: number;
    completions: number;
    completionPct: number;
    topTracks: NamedCount[];
  };

  leads: {
    consultations: Trend;
    contactRequests: Trend;
    packageInquiries: Trend;
    newConsultations: number; // status = new / unhandled
  };

  communications: {
    subscribers: Trend;
    totalSubscribers: number;
    unsubscribed: number;
    campaignsSent: number;
    emailsSent: number;
    emailsPending: number;
    emailsFailed: number;
    /** true when email is configured and actually delivering */
    emailHealthy: boolean;
  };
};

function trend(current: number, previous: number): Trend {
  const changePct =
    previous === 0 ? (current > 0 ? null : 0) : Math.round(((current - previous) / previous) * 100);
  return { current, previous, changePct };
}

/**
 * Aggregates the per-attempt topicBreakdown JSON into overall accuracy per topic.
 *
 * Capped at the most recent 1,000 attempts: enough for a stable signal, while
 * keeping this a bounded query rather than one that slows down as the site grows.
 */
function aggregateTopics(
  rows: { topicBreakdown: unknown }[]
): WeakTopic[] {
  const totals = new Map<string, { correct: number; total: number }>();

  for (const row of rows) {
    const bd = row.topicBreakdown;
    if (!bd || typeof bd !== "object") continue;
    for (const [topic, value] of Object.entries(bd as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const v = value as { correct?: unknown; total?: unknown };
      const correct = typeof v.correct === "number" ? v.correct : 0;
      const total = typeof v.total === "number" ? v.total : 0;
      if (total <= 0) continue;
      const acc = totals.get(topic) ?? { correct: 0, total: 0 };
      acc.correct += correct;
      acc.total += total;
      totals.set(topic, acc);
    }
  }

  return Array.from(totals.entries())
    .map(([topic, t]) => ({
      topic,
      correct: t.correct,
      total: t.total,
      accuracyPct: Math.round((t.correct / t.total) * 100),
    }))
    // Only topics with a meaningful sample, weakest first.
    .filter((t) => t.total >= 5)
    .sort((a, b) => a.accuracyPct - b.accuracyPct)
    .slice(0, 8);
}

export async function getDepartmentAnalytics(days = 30): Promise<DepartmentAnalytics> {
  const now = new Date();
  const start = new Date(now.getTime() - days * 86400000);
  const prevStart = new Date(now.getTime() - days * 2 * 86400000);

  const inPeriod = { gte: start };
  const inPrevPeriod = { gte: prevStart, lt: start };

  const [
    // Question Bank
    attemptsNow,
    attemptsPrev,
    attemptAgg,
    passedCount,
    learnerRows,
    topicRows,
    topQuizRows,
    practiceCount,
    examCount,
    // Students
    regsNow,
    regsPrev,
    totalStudents,
    premiumStudents,
    pendingRequests,
    // Library
    dlNow,
    dlPrev,
    bookDl,
    resourceDl,
    topBookDl,
    publishedBooks,
    publishedResources,
    // Audio
    audioTracks,
    audioListenerRows,
    audioCompletions,
    audioTop,
    // Leads
    consNow,
    consPrev,
    contactNow,
    contactPrev,
    inqNow,
    inqPrev,
    newConsultations,
    // Communications
    subsNow,
    subsPrev,
    totalSubs,
    unsubbed,
    campaignsSent,
    emailSent,
    emailPending,
    emailFailed,
  ] = await Promise.all([
    prisma.quizAttempt.count({ where: { createdAt: inPeriod } }),
    prisma.quizAttempt.count({ where: { createdAt: inPrevPeriod } }),
    prisma.quizAttempt.aggregate({ where: { createdAt: inPeriod }, _avg: { score: true } }),
    prisma.quizAttempt.count({ where: { createdAt: inPeriod, passed: true } }),
    prisma.quizAttempt.findMany({
      where: { createdAt: inPeriod, studentId: { not: null } },
      select: { studentId: true },
      distinct: ["studentId"],
    }),
    prisma.quizAttempt.findMany({
      where: { createdAt: inPeriod },
      select: { topicBreakdown: true },
      orderBy: { createdAt: "desc" },
      take: 1000,
    }),
    prisma.quizAttempt.groupBy({
      by: ["quizId"],
      where: { createdAt: inPeriod },
      _count: { quizId: true },
      orderBy: { _count: { quizId: "desc" } },
      take: 5,
    }),
    prisma.quizAttempt.count({ where: { createdAt: inPeriod, kind: "PRACTICE" } }),
    prisma.quizAttempt.count({ where: { createdAt: inPeriod, kind: "EXAM" } }),

    prisma.student.count({ where: { createdAt: inPeriod } }),
    prisma.student.count({ where: { createdAt: inPrevPeriod } }),
    prisma.student.count(),
    prisma.student.count({ where: { hasAccess: true } }),
    prisma.courseAccessRequest.count({ where: { status: "pending" } }),

    prisma.downloadLog.count({ where: { downloadDate: inPeriod } }),
    prisma.downloadLog.count({ where: { downloadDate: inPrevPeriod } }),
    prisma.downloadLog.count({ where: { downloadDate: inPeriod, bookId: { not: null } } }),
    prisma.downloadLog.count({ where: { downloadDate: inPeriod, resourceId: { not: null } } }),
    prisma.downloadLog.groupBy({
      by: ["bookId"],
      where: { downloadDate: inPeriod, bookId: { not: null } },
      _count: { bookId: true },
      orderBy: { _count: { bookId: "desc" } },
      take: 5,
    }),
    prisma.book.count({ where: { published: true, archived: false } }),
    prisma.resource.count({ where: { published: true, archived: false } }),

    prisma.audioTrack.count({ where: { published: true } }),
    prisma.audioProgress.findMany({ select: { studentId: true }, distinct: ["studentId"] }),
    prisma.audioProgress.count({ where: { completed: true } }),
    prisma.audioProgress.groupBy({
      by: ["trackId"],
      _count: { trackId: true },
      orderBy: { _count: { trackId: "desc" } },
      take: 5,
    }),

    prisma.consultation.count({ where: { createdAt: inPeriod } }),
    prisma.consultation.count({ where: { createdAt: inPrevPeriod } }),
    prisma.contactRequest.count({ where: { createdAt: inPeriod } }),
    prisma.contactRequest.count({ where: { createdAt: inPrevPeriod } }),
    prisma.packageInquiry.count({ where: { createdAt: inPeriod } }),
    prisma.packageInquiry.count({ where: { createdAt: inPrevPeriod } }),
    prisma.consultation.count({ where: { status: "NEW" } }),

    prisma.newsletterSubscriber.count({ where: { subscribedAt: inPeriod } }),
    prisma.newsletterSubscriber.count({ where: { subscribedAt: inPrevPeriod } }),
    prisma.newsletterSubscriber.count({ where: { unsubscribed: false, archived: false } }),
    prisma.newsletterSubscriber.count({ where: { unsubscribed: true } }),
    prisma.newsletterCampaign.count({ where: { status: "SENT" } }),
    prisma.emailLog.count({ where: { status: "SENT" } }),
    prisma.emailLog.count({ where: { status: "PENDING" } }),
    prisma.emailLog.count({ where: { status: "FAILED" } }),
  ]);

  // Resolve names for the "top" lists (ids alone are useless on screen).
  const [quizNames, bookNames, trackNames] = await Promise.all([
    prisma.quiz.findMany({
      where: { id: { in: topQuizRows.map((q) => q.quizId) } },
      select: { id: true, title: true, category: { select: { title: true } } },
    }),
    prisma.book.findMany({
      where: { id: { in: topBookDl.map((b) => b.bookId!).filter(Boolean) } },
      select: { id: true, title: true },
    }),
    prisma.audioTrack.findMany({
      where: { id: { in: audioTop.map((t) => t.trackId) } },
      select: { id: true, title: true, book: { select: { title: true } } },
    }),
  ]);

  const quizById = new Map(quizNames.map((q) => [q.id, q]));
  const bookById = new Map(bookNames.map((b) => [b.id, b]));
  const trackById = new Map(trackNames.map((t) => [t.id, t]));

  const audioProgressTotal = await prisma.audioProgress.count();

  return {
    days,

    questionBank: {
      attempts: trend(attemptsNow, attemptsPrev),
      avgScore: Math.round(attemptAgg._avg.score ?? 0),
      passRate: attemptsNow > 0 ? Math.round((passedCount / attemptsNow) * 100) : 0,
      uniqueLearners: learnerRows.length,
      weakTopics: aggregateTopics(topicRows),
      topQuizzes: topQuizRows.map((q) => ({
        label: quizById.get(q.quizId)?.title ?? "Removed quiz",
        sub: quizById.get(q.quizId)?.category.title,
        count: q._count.quizId,
      })),
      practiceVsExam: { practice: practiceCount, exam: examCount },
    },

    students: {
      registrations: trend(regsNow, regsPrev),
      total: totalStudents,
      premium: premiumStudents,
      conversionPct: totalStudents > 0 ? Math.round((premiumStudents / totalStudents) * 100) : 0,
      activeLearners: learnerRows.length,
      pendingAccessRequests: pendingRequests,
    },

    library: {
      downloads: trend(dlNow, dlPrev),
      bookDownloads: bookDl,
      resourceDownloads: resourceDl,
      topDownloads: topBookDl.map((b) => ({
        label: bookById.get(b.bookId ?? "")?.title ?? "Removed book",
        count: b._count.bookId,
      })),
      publishedBooks,
      publishedResources,
    },

    audio: {
      tracks: audioTracks,
      listeners: audioListenerRows.length,
      completions: audioCompletions,
      completionPct:
        audioProgressTotal > 0 ? Math.round((audioCompletions / audioProgressTotal) * 100) : 0,
      topTracks: audioTop.map((t) => ({
        label: trackById.get(t.trackId)?.title ?? "Removed track",
        sub: trackById.get(t.trackId)?.book.title,
        count: t._count.trackId,
      })),
    },

    leads: {
      consultations: trend(consNow, consPrev),
      contactRequests: trend(contactNow, contactPrev),
      packageInquiries: trend(inqNow, inqPrev),
      newConsultations,
    },

    communications: {
      subscribers: trend(subsNow, subsPrev),
      totalSubscribers: totalSubs,
      unsubscribed: unsubbed,
      campaignsSent,
      emailsSent: emailSent,
      emailsPending: emailPending,
      emailsFailed: emailFailed,
      // If nothing has ever sent but things are queued, email is not configured.
      emailHealthy: emailSent > 0 || (emailPending === 0 && emailFailed === 0),
    },
  };
}
