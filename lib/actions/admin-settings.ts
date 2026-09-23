"use server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { revalidatePath } from "next/cache";

export async function updateWhatsAppNumber(value: string) {
  await requireAdmin();
  const existing = await (prisma as any).siteSettings.findFirst();
  if (existing) {
    await (prisma as any).siteSettings.update({ where: { id: existing.id }, data: { whatsappNumber: value } });
  } else {
    await (prisma as any).siteSettings.create({ data: { whatsappNumber: value } });
  }
  revalidatePath("/contact");
  revalidatePath("/admin/settings");
  return { success: true };
}
