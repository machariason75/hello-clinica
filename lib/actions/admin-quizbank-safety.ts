"use server";

import { prisma } from "@/lib/prisma";
import { getAdminUser } from "@/lib/admin/auth-helpers";

/**
 * Works out exactly what deleting a Question Bank section would destroy.
 *
 * QuizCategory cascades on delete: removing a section silently takes every
 * sub-section beneath it, every quiz in those, and every question in those
 * quizzes. The confirmation dialog used to say "and everything inside it",
 * which is true but easy to click straight past. Real numbers are not.
 *
 * The tree is small (tens of rows), so it's walked in memory rather than with a
 * recursive SQL query — simpler, and avoids a database-specific construct.
 */

export type DeletionImpact = {
  subSections: number;
  quizzes: number;
  questions: number;
  links: number;
  attempts: number;
  /** true when nothing but the section itself would be lost */
  isEmpty: boolean;
};

export async function getCategoryDeletionImpact(
  categoryId: string
): Promise<DeletionImpact | null> {
  const admin = await getAdminUser();
  if (!admin) return null;

  try {
    // Pull the whole tree once, then walk it.
    const all = await prisma.quizCategory.findMany({
      select: { id: true, parentId: true },
    });

    const childrenOf = new Map<string, string[]>();
    for (const c of all) {
      if (!c.parentId) continue;
      const list = childrenOf.get(c.parentId) ?? [];
      list.push(c.id);
      childrenOf.set(c.parentId, list);
    }

    // Every descendant, plus the section itself.
    const doomed: string[] = [];
    const stack = [categoryId];
    let guard = 0;
    while (stack.length > 0 && guard < 5000) {
      guard++;
      const current = stack.pop()!;
      doomed.push(current);
      for (const child of childrenOf.get(current) ?? []) stack.push(child);
    }

    const [quizzes, links] = await Promise.all([
      prisma.quiz.findMany({
        where: { categoryId: { in: doomed } },
        select: { id: true },
      }),
      prisma.quizExternalLink.count({ where: { categoryId: { in: doomed } } }),
    ]);

    const quizIds = quizzes.map((q) => q.id);
    const [questions, attempts] = await Promise.all([
      quizIds.length > 0
        ? prisma.question.count({ where: { quizId: { in: quizIds } } })
        : Promise.resolve(0),
      quizIds.length > 0
        ? prisma.quizAttempt.count({ where: { quizId: { in: quizIds } } })
        : Promise.resolve(0),
    ]);

    const subSections = doomed.length - 1; // exclude the section itself

    return {
      subSections,
      quizzes: quizIds.length,
      questions,
      links,
      attempts,
      isEmpty: subSections === 0 && quizIds.length === 0 && links === 0,
    };
  } catch {
    return null;
  }
}
