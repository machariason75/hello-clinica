import { prisma } from "@/lib/prisma";

export type FaqItem = { question: string; answer: string };

/**
 * Published, non-archived FAQs for a category (e.g. "ADMISSIONS_ADVISING"),
 * ordered for display. Returns [] when the admin hasn't added any yet — callers
 * fall back to their built-in defaults so a page is never empty.
 */
export async function getFaqs(category: string): Promise<FaqItem[]> {
  const rows = await (prisma as any).faq.findMany({
    where: { category, published: true, archived: false },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    select: { question: true, answer: true },
  });
  return rows as FaqItem[];
}
