import { prisma } from "@/lib/prisma";

/** Top-level (parentless) published categories, in display order. */
export async function getTopLevelQuizCategories() {
  return prisma.quizCategory.findMany({
    where: { published: true, parentId: null },
    orderBy: [{ order: "asc" }, { title: "asc" }],
    include: {
      _count: { select: { children: true, quizzes: true, externalLinks: true } },
    },
  });
}

/** All published categories (used for admin parent pickers / counts). */
export async function getAllQuizCategories() {
  return prisma.quizCategory.findMany({
    orderBy: [{ order: "asc" }, { title: "asc" }],
  });
}

/**
 * A single category node with everything needed to render its page:
 * child folders, quizzes, and tagged external links. Returns null if missing
 * or unpublished.
 */
export async function getQuizCategoryNode(slug: string) {
  const node = await prisma.quizCategory.findFirst({
    where: { slug, published: true },
    include: {
      children: {
        where: { published: true },
        orderBy: [{ order: "asc" }, { title: "asc" }],
        include: { _count: { select: { children: true, quizzes: true, externalLinks: true } } },
      },
      quizzes: {
        where: { published: true },
        orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
        include: { _count: { select: { questions: true } } },
      },
      externalLinks: {
        where: { published: true },
        orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      },
    },
  });
  return node;
}

/** Walks up the parent chain to build breadcrumb items (root → current). */
export async function getCategoryAncestors(categoryId: string) {
  const chain: { slug: string; title: string; premium: boolean }[] = [];
  let current = await prisma.quizCategory.findUnique({
    where: { id: categoryId },
    select: { slug: true, title: true, premium: true, parentId: true },
  });
  while (current) {
    chain.unshift({ slug: current.slug, title: current.title, premium: current.premium });
    if (!current.parentId) break;
    current = await prisma.quizCategory.findUnique({
      where: { id: current.parentId },
      select: { slug: true, title: true, premium: true, parentId: true },
    });
  }
  return chain;
}

/** A single quiz with its questions + choices, ready for the player. */
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
