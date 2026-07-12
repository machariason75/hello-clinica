import { prisma } from "@/lib/prisma";
import { testimonials as fallbackTestimonials } from "@/lib/data/homepage-content";
import type { TestimonialData } from "@/components/cards/TestimonialCard";

/**
 * Published testimonials for the homepage.
 *
 * Reads from the database so you can add/edit student reviews in the admin
 * without touching code. If none are published yet, the original hand-written
 * set is used as a fallback — so the homepage never shows an empty section.
 */
export async function getTestimonials(): Promise<TestimonialData[]> {
  const rows = await prisma.testimonial.findMany({
    where: { published: true, archived: false },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    take: 12,
  });

  if (rows.length === 0) return fallbackTestimonials;

  return rows.map((t) => ({
    studentName: t.studentName,
    program: t.program ?? "",
    headline: t.headline,
    story: t.content,
  }));
}
