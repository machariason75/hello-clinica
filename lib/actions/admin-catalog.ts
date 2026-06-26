"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminUser } from "@/lib/admin/auth-helpers";
import { recordAudit } from "@/lib/admin/audit";
import {
  packageSchema,
  testimonialSchema,
  faqSchema,
  type PackageFormInput,
  type TestimonialFormInput,
  type FaqFormInput,
} from "@/lib/admin/content-schemas";
import type { ContentActionResult } from "./admin-content";

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

/* ------------------------------- PACKAGES ------------------------------- */

function refreshPackages() {
  revalidatePath("/admin/packages");
  revalidatePath("/advising");
  revalidatePath("/admin/dashboard");
}

export async function createPackage(input: PackageFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = packageSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    const max = await prisma.package.aggregate({ _max: { sortOrder: true } });
    const created = await prisma.package.create({
      data: {
        packageName: d.packageName,
        description: d.description,
        totalHours: d.totalHours,
        totalCost: d.totalCost,
        features: d.features,
        buttonText: d.buttonText,
        published: d.published,
        sortOrder: (max._max.sortOrder ?? 0) + 1,
      },
    });
    await recordAudit({ adminId: id, action: "CREATE", entity: "Package", entityId: created.id });
    refreshPackages();
    return { success: true };
  } catch {
    return { success: false, message: "Could not create the package." };
  }
}

export async function updatePackage(packageId: string, input: PackageFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = packageSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    await prisma.package.update({
      where: { id: packageId },
      data: {
        packageName: d.packageName,
        description: d.description,
        totalHours: d.totalHours,
        totalCost: d.totalCost,
        features: d.features,
        buttonText: d.buttonText,
        published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "UPDATE", entity: "Package", entityId: packageId });
    refreshPackages();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update the package." };
  }
}

export async function setPackageArchived(packageId: string, archived: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.package.update({ where: { id: packageId }, data: { archived } });
    await recordAudit({ adminId: id, action: archived ? "ARCHIVE" : "UNARCHIVE", entity: "Package", entityId: packageId });
    refreshPackages();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function duplicatePackage(packageId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    const src = await prisma.package.findUnique({ where: { id: packageId } });
    if (!src) return { success: false, message: "Package not found." };
    const max = await prisma.package.aggregate({ _max: { sortOrder: true } });
    const copy = await prisma.package.create({
      data: {
        packageName: `${src.packageName} (Copy)`,
        description: src.description,
        totalHours: src.totalHours,
        totalCost: src.totalCost,
        features: src.features,
        buttonText: src.buttonText,
        published: false,
        sortOrder: (max._max.sortOrder ?? 0) + 1,
      },
    });
    await recordAudit({ adminId: id, action: "DUPLICATE", entity: "Package", entityId: copy.id });
    refreshPackages();
    return { success: true };
  } catch {
    return { success: false, message: "Could not duplicate." };
  }
}

export async function deletePackage(packageId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.package.delete({ where: { id: packageId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "Package", entityId: packageId });
    refreshPackages();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete. It may have related inquiries." };
  }
}

/** Move a package up/down by swapping sortOrder with its neighbor. */
export async function movePackage(packageId: string, direction: "up" | "down"): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    const all = await prisma.package.findMany({
      where: { archived: false },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    });
    const idx = all.findIndex((p) => p.id === packageId);
    if (idx === -1) return { success: false, message: "Not found." };
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= all.length) return { success: true }; // already at edge
    const a = all[idx];
    const b = all[swapIdx];
    await prisma.$transaction([
      prisma.package.update({ where: { id: a.id }, data: { sortOrder: b.sortOrder } }),
      prisma.package.update({ where: { id: b.id }, data: { sortOrder: a.sortOrder } }),
    ]);
    await recordAudit({ adminId: id, action: `REORDER_${direction.toUpperCase()}`, entity: "Package", entityId: packageId });
    refreshPackages();
    return { success: true };
  } catch {
    return { success: false, message: "Could not reorder." };
  }
}

/* ----------------------------- TESTIMONIALS ----------------------------- */

function refreshTestimonials() {
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function createTestimonial(input: TestimonialFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = testimonialSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    const created = await prisma.testimonial.create({
      data: {
        studentName: d.studentName,
        program: d.program || null,
        headline: d.headline,
        content: d.content,
        photo: d.photo || null,
        featured: d.featured,
        published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "CREATE", entity: "Testimonial", entityId: created.id });
    refreshTestimonials();
    return { success: true };
  } catch {
    return { success: false, message: "Could not create the testimonial." };
  }
}

export async function updateTestimonial(testimonialId: string, input: TestimonialFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = testimonialSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    await prisma.testimonial.update({
      where: { id: testimonialId },
      data: {
        studentName: d.studentName,
        program: d.program || null,
        headline: d.headline,
        content: d.content,
        photo: d.photo || null,
        featured: d.featured,
        published: d.published,
      },
    });
    await recordAudit({ adminId: id, action: "UPDATE", entity: "Testimonial", entityId: testimonialId });
    refreshTestimonials();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function setTestimonialFeatured(testimonialId: string, featured: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.testimonial.update({ where: { id: testimonialId }, data: { featured } });
    await recordAudit({ adminId: id, action: featured ? "FEATURE" : "UNFEATURE", entity: "Testimonial", entityId: testimonialId });
    refreshTestimonials();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function setTestimonialArchived(testimonialId: string, archived: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.testimonial.update({ where: { id: testimonialId }, data: { archived } });
    await recordAudit({ adminId: id, action: archived ? "ARCHIVE" : "UNARCHIVE", entity: "Testimonial", entityId: testimonialId });
    refreshTestimonials();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function deleteTestimonial(testimonialId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.testimonial.delete({ where: { id: testimonialId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "Testimonial", entityId: testimonialId });
    refreshTestimonials();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete." };
  }
}

/* -------------------------------- FAQs --------------------------------- */

function refreshFaqs() {
  revalidatePath("/admin/faqs");
  revalidatePath("/");
  revalidatePath("/faq");
  revalidatePath("/admin/dashboard");
}

export async function createFaq(input: FaqFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = faqSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    const max = await prisma.faq.aggregate({ where: { category: d.category }, _max: { sortOrder: true } });
    const created = await prisma.faq.create({
      data: {
        category: d.category,
        question: d.question,
        answer: d.answer,
        published: d.published,
        sortOrder: (max._max.sortOrder ?? 0) + 1,
      },
    });
    await recordAudit({ adminId: id, action: "CREATE", entity: "Faq", entityId: created.id });
    refreshFaqs();
    return { success: true };
  } catch {
    return { success: false, message: "Could not create the FAQ." };
  }
}

export async function updateFaq(faqId: string, input: FaqFormInput): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  const parsed = faqSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collectErrors(parsed.error.issues) };
  }
  const d = parsed.data;
  try {
    await prisma.faq.update({
      where: { id: faqId },
      data: { category: d.category, question: d.question, answer: d.answer, published: d.published },
    });
    await recordAudit({ adminId: id, action: "UPDATE", entity: "Faq", entityId: faqId });
    refreshFaqs();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function setFaqArchived(faqId: string, archived: boolean): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.faq.update({ where: { id: faqId }, data: { archived } });
    await recordAudit({ adminId: id, action: archived ? "ARCHIVE" : "UNARCHIVE", entity: "Faq", entityId: faqId });
    refreshFaqs();
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}

export async function deleteFaq(faqId: string): Promise<ContentActionResult> {
  const id = await adminId();
  if (!id) return { success: false, message: "Not authorized." };
  try {
    await prisma.faq.delete({ where: { id: faqId } });
    await recordAudit({ adminId: id, action: "DELETE", entity: "Faq", entityId: faqId });
    refreshFaqs();
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete." };
  }
}
