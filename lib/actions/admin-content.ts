"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminUser } from "@/lib/admin/auth-helpers";
import { recordAudit } from "@/lib/admin/audit";
import { buildSearchIndex } from "@/lib/search-index";
import {
  bookSchema,
  resourceSchema,
  type BookFormInput,
  type ResourceFormInput,
} from "@/lib/admin/content-schemas";

export type ContentActionResult = {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
};

async function adminId(): Promise<string | null> {
  const u = await getAdminUser();
  return u?.id ?? null;
}

function collectErrors(issues: { path: (string | number)[]; message: string }[]) {
  const fieldErrors: Record<string, string> = {};
  for (const i of issues) {
    const k = i.path[0];
    if (typeof k === "string" && !fieldErrors[k]) fieldErrors[k] = i.message;
  }
  return fieldErrors;
}

function refreshBooks() {
  revalidatePath("/admin/books");
  revalidatePath("/books");
  revalidatePath("/admin/dashboard");
}

function refreshResources() {
  revalidatePath("/admin/resources");
  revalidatePath("/resources");
  revalidatePath("/admin/dashboard");
}

/* ------------------------------- BOOKS --------------------------------- */

export async function createBook(input: BookFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = bookSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    const created = await prisma.book.create({
      data: {
        title: d.title,
        author: d.author,
        description: d.description,
        category: d.category,
        coverImage: d.coverImage || null,
        fileUrl: d.fileUrl || null,
        featured: d.featured,
        published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "CREATE", entity: "Book", entityId: created.id });
    await buildSearchIndex();
    refreshBooks();
    return { success: true };
  } catch {
    return { success: false, message: "Could not create the book." };
  }
}

export async function updateBook(bookId: string, input: BookFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = bookSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    await prisma.book.update({
      where: { id: bookId },
      data: {
        title: d.title,
        author: d.author,
        description: d.description,
        category: d.category,
        coverImage: d.coverImage || null,
        fileUrl: d.fileUrl || null,
        featured: d.featured,
        published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "UPDATE", entity: "Book", entityId: bookId });
    await buildSearchIndex();
    refreshBooks();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update the book." };
  }
}

export async function setBookFeatured(bookId: string, featured: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.book.update({ where: { id: bookId }, data: { featured } });
    await recordAudit({ adminId: id, action: featured ? "FEATURE" : "UNFEATURE", entity: "Book", entityId: bookId });
    refreshBooks();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function setBookArchived(bookId: string, archived: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.book.update({ where: { id: bookId }, data: { archived } });
    await recordAudit({ adminId: id, action: archived ? "ARCHIVE" : "UNARCHIVE", entity: "Book", entityId: bookId });
    await buildSearchIndex();
    refreshBooks();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function deleteBook(bookId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.book.delete({ where: { id: bookId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "Book", entityId: bookId });
    await buildSearchIndex();
    refreshBooks();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete. It may have related download records." };
  }
}

/* ----------------------------- RESOURCES ------------------------------- */

export async function createResource(input: ResourceFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = resourceSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    const created = await prisma.resource.create({
      data: {
        title: d.title,
        description: d.description,
        body: d.body || null,
        category: d.category,
        thumbnail: d.thumbnail || null,
        resourceFile: d.resourceFile || null,
        featured: d.featured,
        published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "CREATE", entity: "Resource", entityId: created.id });
    await buildSearchIndex();
    refreshResources();
    return { success: true };
  } catch {
    return { success: false, message: "Could not create the resource." };
  }
}

export async function updateResource(resourceId: string, input: ResourceFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = resourceSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    await prisma.resource.update({
      where: { id: resourceId },
      data: {
        title: d.title,
        description: d.description,
        body: d.body || null,
        category: d.category,
        thumbnail: d.thumbnail || null,
        resourceFile: d.resourceFile || null,
        featured: d.featured,
        published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "UPDATE", entity: "Resource", entityId: resourceId });
    await buildSearchIndex();
    refreshResources();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update the resource." };
  }
}

export async function setResourceFeatured(resourceId: string, featured: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.resource.update({ where: { id: resourceId }, data: { featured } });
    await recordAudit({ adminId: id, action: featured ? "FEATURE" : "UNFEATURE", entity: "Resource", entityId: resourceId });
    refreshResources();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function setResourceArchived(resourceId: string, archived: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.resource.update({ where: { id: resourceId }, data: { archived } });
    await recordAudit({ adminId: id, action: archived ? "ARCHIVE" : "UNARCHIVE", entity: "Resource", entityId: resourceId });
    await buildSearchIndex();
    refreshResources();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function deleteResource(resourceId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.resource.delete({ where: { id: resourceId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "Resource", entityId: resourceId });
    await buildSearchIndex();
    refreshResources();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete. It may have related download records." };
  }
}

/* --------------------- QUESTION BANK (Slice 2) ------------------------- */

import {
  quizCategorySchema,
  quizExternalLinkSchema,
  type QuizCategoryFormInput,
  type QuizExternalLinkFormInput,
} from "@/lib/admin/content-schemas";

function refreshQuizBank() {
  revalidatePath("/admin/question-bank");
  revalidatePath("/question-bank");
  revalidatePath("/admin/dashboard");
}

export async function createQuizCategory(input: QuizCategoryFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = quizCategorySchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  const d = parsed.data;
  try {
    const created = await prisma.quizCategory.create({
      data: {
        title: d.title, slug: d.slug, description: d.description,
        overview: d.overview || null, icon: d.icon || null,
        parentId: d.parentId || null, order: d.order, featured: d.featured, published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "CREATE", entity: "QuizCategory", entityId: created.id });
    refreshQuizBank();
    return { success: true };
  } catch {
    return { success: false, message: "Could not create. The slug may already be in use." };
  }
}

export async function updateQuizCategory(categoryId: string, input: QuizCategoryFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = quizCategorySchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  const d = parsed.data;
  if (d.parentId && d.parentId === categoryId) {
    return { success: false, message: "A category cannot be its own parent." };
  }
  try {
    await prisma.quizCategory.update({
      where: { id: categoryId },
      data: {
        title: d.title, slug: d.slug, description: d.description,
        overview: d.overview || null, icon: d.icon || null,
        parentId: d.parentId || null, order: d.order, featured: d.featured, published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "UPDATE", entity: "QuizCategory", entityId: categoryId });
    refreshQuizBank();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update. The slug may already be in use." };
  }
}

export async function setQuizCategoryPublished(categoryId: string, published: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.quizCategory.update({ where: { id: categoryId }, data: { published } });
    await recordAudit({ adminId: id, action: published ? "PUBLISH" : "UNPUBLISH", entity: "QuizCategory", entityId: categoryId });
    refreshQuizBank();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function deleteQuizCategory(categoryId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.quizCategory.delete({ where: { id: categoryId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "QuizCategory", entityId: categoryId });
    refreshQuizBank();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete. Remove or move its sub-sections, quizzes, and links first." };
  }
}

export async function createQuizExternalLink(input: QuizExternalLinkFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = quizExternalLinkSchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  const d = parsed.data;
  try {
    const created = await prisma.quizExternalLink.create({
      data: {
        categoryId: d.categoryId, title: d.title, url: d.url,
        description: d.description || null, thumbnailUrl: d.thumbnailUrl || null,
        source: d.source || null, order: d.order, published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "CREATE", entity: "QuizExternalLink", entityId: created.id });
    refreshQuizBank();
    return { success: true };
  } catch {
    return { success: false, message: "Could not create the link." };
  }
}

export async function updateQuizExternalLink(linkId: string, input: QuizExternalLinkFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = quizExternalLinkSchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  const d = parsed.data;
  try {
    await prisma.quizExternalLink.update({
      where: { id: linkId },
      data: {
        categoryId: d.categoryId, title: d.title, url: d.url,
        description: d.description || null, thumbnailUrl: d.thumbnailUrl || null,
        source: d.source || null, order: d.order, published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "UPDATE", entity: "QuizExternalLink", entityId: linkId });
    refreshQuizBank();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update the link." };
  }
}

export async function deleteQuizExternalLink(linkId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.quizExternalLink.delete({ where: { id: linkId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "QuizExternalLink", entityId: linkId });
    refreshQuizBank();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete the link." };
  }
}

/* --------------------- STUDENTS & ACCESS (Slice 3) --------------------- */

function refreshStudents() {
  revalidatePath("/admin/students");
  revalidatePath("/admin/access-requests");
  revalidatePath("/admin/dashboard");
}

export async function setStudentAccess(studentId: string, hasAccess: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.student.update({ where: { id: studentId }, data: { hasAccess } });
    await recordAudit({ adminId: id, action: hasAccess ? "GRANT_ACCESS" : "REVOKE_ACCESS", entity: "Student", entityId: studentId });
    refreshStudents();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update access." };
  }
}

export async function setRequestStatus(requestId: string, status: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const allowed = ["pending", "contacted", "granted", "closed"];
  if (!allowed.includes(status)) return { success: false, message: "Invalid status." };
  try {
    const req = await prisma.courseAccessRequest.update({ where: { id: requestId }, data: { status } });
    // Granting a request grants the linked student access, if any.
    if (status === "granted" && req.studentId) {
      await prisma.student.update({ where: { id: req.studentId }, data: { hasAccess: true } });
    }
    await recordAudit({ adminId: id, action: "UPDATE", entity: "CourseAccessRequest", entityId: requestId });
    refreshStudents();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update the request." };
  }
}

export async function deleteAccessRequest(requestId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.courseAccessRequest.delete({ where: { id: requestId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "CourseAccessRequest", entityId: requestId });
    refreshStudents();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete." };
  }
}

/* --------------------- QUIZ AUTHORING (Drop A) ------------------------- */

import {
  quizSchema, questionSchema,
  type QuizFormInput, type QuestionFormInput,
} from "@/lib/admin/content-schemas";

function refreshQuizAuthoring(quizId?: string) {
  revalidatePath("/admin/question-bank");
  if (quizId) revalidatePath(`/admin/question-bank/quiz/${quizId}`);
  revalidatePath("/question-bank");
  revalidatePath("/admin/dashboard");
}

export async function createQuiz(input: QuizFormInput): Promise<ContentActionResult & { quizId?: string }> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = quizSchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  const d = parsed.data;
  try {
    const quiz = await prisma.quiz.create({
      data: {
        title: d.title, slug: d.slug, categoryId: d.categoryId, description: d.description,
        kind: d.kind, difficulty: d.difficulty,
        timeLimitSeconds: d.timeLimitMinutes > 0 ? d.timeLimitMinutes * 60 : null,
        passThreshold: d.passThreshold, featured: d.featured, published: d.published, order: d.order,
      },
    });
    await recordAudit({ adminId: id, action: "CREATE", entity: "Quiz", entityId: quiz.id });
    refreshQuizAuthoring(quiz.id);
    return { success: true, quizId: quiz.id };
  } catch {
    return { success: false, message: "Could not create. The slug may already be in use." };
  }
}

export async function updateQuiz(quizId: string, input: QuizFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = quizSchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  const d = parsed.data;
  try {
    await prisma.quiz.update({
      where: { id: quizId },
      data: {
        title: d.title, slug: d.slug, categoryId: d.categoryId, description: d.description,
        kind: d.kind, difficulty: d.difficulty,
        timeLimitSeconds: d.timeLimitMinutes > 0 ? d.timeLimitMinutes * 60 : null,
        passThreshold: d.passThreshold, featured: d.featured, published: d.published, order: d.order,
      },
    });
    await recordAudit({ adminId: id, action: "UPDATE", entity: "Quiz", entityId: quizId });
    refreshQuizAuthoring(quizId);
    return { success: true };
  } catch {
    return { success: false, message: "Could not update. The slug may already be in use." };
  }
}

export async function setQuizPublished(quizId: string, published: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.quiz.update({ where: { id: quizId }, data: { published } });
    await recordAudit({ adminId: id, action: published ? "PUBLISH" : "UNPUBLISH", entity: "Quiz", entityId: quizId });
    refreshQuizAuthoring(quizId);
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function deleteQuiz(quizId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.quiz.delete({ where: { id: quizId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "Quiz", entityId: quizId });
    refreshQuizAuthoring();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete the quiz." };
  }
}

/** Create or update a question and (re)write its choices atomically. */
export async function saveQuestion(
  quizId: string,
  questionId: string | null,
  input: QuestionFormInput,
): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = questionSchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the question.", fieldErrors: collectErrors(parsed.error.issues) };
  const d = parsed.data;
  try {
    if (questionId) {
      await prisma.$transaction([
        prisma.question.update({
          where: { id: questionId },
          data: { type: d.type as never, stem: d.stem, topic: d.topic, explanation: d.explanation, points: d.points },
        }),
        prisma.choice.deleteMany({ where: { questionId } }),
        prisma.choice.createMany({
          data: d.choices.map((c, i) => ({ questionId, text: c.text, isCorrect: c.isCorrect, order: i })),
        }),
      ]);
      await recordAudit({ adminId: id, action: "UPDATE", entity: "Question", entityId: questionId });
    } else {
      const count = await prisma.question.count({ where: { quizId } });
      await prisma.question.create({
        data: {
          quizId, type: d.type as never, stem: d.stem, topic: d.topic, explanation: d.explanation,
          points: d.points, order: count,
          choices: { create: d.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
        },
      });
      await recordAudit({ adminId: id, action: "CREATE", entity: "Question", entityId: quizId });
    }
    refreshQuizAuthoring(quizId);
    return { success: true };
  } catch {
    return { success: false, message: "Could not save the question." };
  }
}

export async function deleteQuestion(questionId: string, quizId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.question.delete({ where: { id: questionId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "Question", entityId: questionId });
    refreshQuizAuthoring(quizId);
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete the question." };
  }
}
