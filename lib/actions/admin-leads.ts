"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminUser } from "@/lib/admin/auth-helpers";
import { recordAudit } from "@/lib/admin/audit";

export type AdminActionResult = { success: boolean; message?: string };

const CONSULTATION_STATUSES = ["NEW", "CONTACTED", "FOLLOW_UP_REQUIRED", "CLOSED"] as const;
export type ConsultationStatusValue = (typeof CONSULTATION_STATUSES)[number];

async function requireAdminId(): Promise<string | null> {
  const user = await getAdminUser();
  return user?.id ?? null;
}

export async function setConsultationStatus(
  id: string,
  status: ConsultationStatusValue
): Promise<AdminActionResult> {
  const adminId = await requireAdminId();
  if (!adminId) return { success: false, message: "Not authorized." };
  if (!CONSULTATION_STATUSES.includes(status)) {
    return { success: false, message: "Invalid status." };
  }
  try {
    await prisma.consultation.update({ where: { id }, data: { status } });
    await recordAudit({ adminId, action: `STATUS_${status}`, entity: "Consultation", entityId: id });
    revalidatePath("/admin/consultations");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch {
    return { success: false, message: "Could not update status." };
  }
}

export async function setConsultationArchived(
  id: string,
  archived: boolean
): Promise<AdminActionResult> {
  const adminId = await requireAdminId();
  if (!adminId) return { success: false, message: "Not authorized." };
  try {
    await prisma.consultation.update({ where: { id }, data: { archived } });
    await recordAudit({
      adminId,
      action: archived ? "ARCHIVE" : "UNARCHIVE",
      entity: "Consultation",
      entityId: id,
    });
    revalidatePath("/admin/consultations");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch {
    return { success: false, message: "Could not update record." };
  }
}

export async function setContactArchived(
  id: string,
  archived: boolean
): Promise<AdminActionResult> {
  const adminId = await requireAdminId();
  if (!adminId) return { success: false, message: "Not authorized." };
  try {
    await prisma.contactRequest.update({ where: { id }, data: { archived } });
    await recordAudit({
      adminId,
      action: archived ? "ARCHIVE" : "UNARCHIVE",
      entity: "ContactRequest",
      entityId: id,
    });
    revalidatePath("/admin/contact-requests");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch {
    return { success: false, message: "Could not update record." };
  }
}

export async function setSubscriberArchived(
  id: string,
  archived: boolean
): Promise<AdminActionResult> {
  const adminId = await requireAdminId();
  if (!adminId) return { success: false, message: "Not authorized." };
  try {
    await prisma.newsletterSubscriber.update({ where: { id }, data: { archived } });
    await recordAudit({
      adminId,
      action: archived ? "ARCHIVE" : "UNARCHIVE",
      entity: "NewsletterSubscriber",
      entityId: id,
    });
    revalidatePath("/admin/newsletter");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch {
    return { success: false, message: "Could not update record." };
  }
}

export async function setPackageInquiryArchived(
  id: string,
  archived: boolean
): Promise<AdminActionResult> {
  const adminId = await requireAdminId();
  if (!adminId) return { success: false, message: "Not authorized." };
  try {
    await prisma.packageInquiry.update({ where: { id }, data: { archived } });
    await recordAudit({
      adminId,
      action: archived ? "ARCHIVE" : "UNARCHIVE",
      entity: "PackageInquiry",
      entityId: id,
    });
    revalidatePath("/admin/package-inquiries");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch {
    return { success: false, message: "Could not update record." };
  }
}
