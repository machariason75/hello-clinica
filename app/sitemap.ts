import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { prisma } from "@/lib/prisma";
import { bookCategories } from "@/lib/data/book-categories";
import { resourceCategories } from "@/lib/data/resource-categories";
import { advisingServiceDefs } from "@/lib/data/advising-services";

/**
 * Sitemap — every page worth indexing, generated from real data.
 *
 * The previous version listed nine static routes and nothing else, so the pages
 * that would actually rank — individual quizzes, books, and topic sections —
 * were invisible to search engines. It didn't even include /question-bank.
 *
 * For an education site those long-tail pages ARE the acquisition channel:
 * people search "NCLEX pharmacology practice questions", not "medical education
 * platform". Everything here is derived, so it stays correct as you publish.
 */
export const revalidate = 3600; // refresh hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/question-bank`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/advising`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/books`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/search`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Derived from the data file, so new services appear automatically.
  const advisingRoutes: MetadataRoute.Sitemap = advisingServiceDefs.map((s) => ({
    url: `${base}/advising/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const bookCategoryRoutes: MetadataRoute.Sitemap = bookCategories.map((c) => ({
    url: `${base}/books/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const resourceCategoryRoutes: MetadataRoute.Sitemap = resourceCategories.map((c) => ({
    url: `${base}/resources/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  try {
    const [quizCategories, quizzes, books] = await Promise.all([
      prisma.quizCategory.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true, premium: true },
      }),
      prisma.quiz.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true, category: { select: { slug: true } } },
      }),
      prisma.book.findMany({
        where: { published: true, archived: false },
        select: { id: true, category: true, updatedAt: true },
      }),
    ]);

    const quizCategoryRoutes: MetadataRoute.Sitemap = quizCategories.map((c) => ({
      url: `${base}/question-bank/${c.slug}`,
      lastModified: c.updatedAt,
      changeFrequency: "weekly" as const,
      // Free sections win search traffic, so they rank higher than gated ones.
      priority: c.premium ? 0.7 : 0.85,
    }));

    const quizRoutes: MetadataRoute.Sitemap = quizzes.map((q) => ({
      url: `${base}/question-bank/${q.category.slug}/${q.slug}`,
      lastModified: q.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

    const bookRoutes: MetadataRoute.Sitemap = books.map((b) => {
      const cat = bookCategories.find((c) => c.enum === b.category);
      return {
        url: `${base}/books/${cat?.slug ?? "recommended-books"}/${b.id}`,
        lastModified: b.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.65,
      };
    });

    return [
      ...staticRoutes,
      ...advisingRoutes,
      ...quizCategoryRoutes,
      ...quizRoutes,
      ...bookCategoryRoutes,
      ...bookRoutes,
      ...resourceCategoryRoutes,
    ];
  } catch {
    // If the database is unreachable, still serve the static routes — a partial
    // sitemap beats a 500.
    return [...staticRoutes, ...advisingRoutes, ...bookCategoryRoutes, ...resourceCategoryRoutes];
  }
}
