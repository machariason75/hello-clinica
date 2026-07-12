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

/**
 * Flat index of everything in the Question Bank, for the Quick Access panel.
 * Returning students use this to jump straight to an item instead of clicking
 * down through the folder tree.
 */
export async function getQuickAccessItems() {
  const [categories, quizzes, links] = await Promise.all([
    prisma.quizCategory.findMany({
      where: { published: true },
      select: { id: true, slug: true, title: true, premium: true, parentId: true },
      orderBy: { order: "asc" },
    }),
    prisma.quiz.findMany({
      where: { published: true },
      select: {
        id: true,
        slug: true,
        title: true,
        kind: true,
        timeLimitSeconds: true,
        category: { select: { slug: true, title: true, premium: true, parentId: true } },
        _count: { select: { questions: true } },
      },
      orderBy: { order: "asc" },
    }),
    prisma.quizExternalLink.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        url: true,
        source: true,
        category: { select: { title: true } },
      },
      orderBy: { order: "asc" },
    }),
  ]);

  // Build a "Parent › Child" path label for each category.
  const byId = new Map(categories.map((c) => [c.id, c]));
  const pathOf = (parentId: string | null | undefined, ownTitle?: string): string => {
    const parts: string[] = ownTitle ? [ownTitle] : [];
    let p = parentId ? byId.get(parentId) : undefined;
    let guard = 0;
    while (p && guard < 8) {
      parts.unshift(p.title);
      p = p.parentId ? byId.get(p.parentId) : undefined;
      guard++;
    }
    return parts.join(" › ");
  };

  const items: {
    id: string;
    kind: "section" | "practice" | "exam" | "link";
    title: string;
    subtitle: string;
    href: string;
    external?: boolean;
    meta?: string;
    premium?: boolean;
  }[] = [];

  for (const c of categories) {
    items.push({
      id: `cat-${c.id}`,
      kind: "section",
      title: c.title,
      subtitle: pathOf(c.parentId) || "Question Bank",
      href: `/question-bank/${c.slug}`,
      premium: c.premium,
    });
  }

  for (const q of quizzes) {
    const mins = q.timeLimitSeconds ? Math.round(q.timeLimitSeconds / 60) : 0;
    items.push({
      id: `quiz-${q.id}`,
      kind: q.kind === "EXAM" ? "exam" : "practice",
      title: q.title,
      subtitle: pathOf(q.category.parentId, q.category.title),
      href: `/question-bank/${q.category.slug}/${q.slug}`,
      meta: `${q._count.questions} questions${mins > 0 ? ` · ${mins} min` : " · untimed"}`,
      premium: q.category.premium,
    });
  }

  for (const l of links) {
    items.push({
      id: `link-${l.id}`,
      kind: "link",
      title: l.title,
      subtitle: l.category.title,
      href: l.url,
      external: true,
      meta: l.source ?? undefined,
    });
  }

  return items;
}
