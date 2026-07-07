import { prisma } from "@/lib/prisma";

/** Published quiz categories with a count of their published quizzes. */
export async function getQuizCategories() {
  return prisma.quizCategory.findMany({
    where: { published: true },
    orderBy: [{ order: "asc" }, { title: "asc" }],
    include: {
      _count: { select: { quizzes: { where: { published: true } } } },
    },
  });
}

export async function getQuizCategoryBySlug(slug: string) {
  return prisma.quizCategory.findFirst({ where: { slug, published: true } });
}

/** Published quizzes in a category, each with its question count. */
export async function getQuizzesByCategory(categoryId: string) {
  return prisma.quiz.findMany({
    where: { categoryId, published: true },
    orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    include: { _count: { select: { questions: true } } },
  });
}

/** A single published quiz with its questions + choices, fully ordered. */
export async function getQuizBySlug(slug: string) {
  return prisma.quiz.findFirst({
    where: { slug, published: true },
    include: {
      category: true,
      questions: {
        orderBy: { order: "asc" },
        include: { choices: { orderBy: { order: "asc" } } },
      },
    },
  });
}

/** For static params / sitemaps if needed later. */
export async function getAllPublishedQuizSlugs() {
  return prisma.quiz.findMany({
    where: { published: true },
    select: { slug: true, category: { select: { slug: true } } },
  });
}
