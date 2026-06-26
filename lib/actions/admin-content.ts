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
