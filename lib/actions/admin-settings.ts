"use server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { revalidatePath } from "next/cache";
import { settingsSchema, type SettingsFormInput } from "@/lib/admin/settings-schema";

export async function updateSettings(id: string, data: SettingsFormInput) {
  await requireAdmin();
  const parsed = settingsSchema.safeParse(data);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const i of parsed.error.issues) {
      const k = i.path[0];
      if (typeof k === "string" && !fieldErrors[k]) fieldErrors[k] = i.message;
    }
    return { success: false, message: "Please check the fields.", fieldErrors };
  }
  const d = parsed.data;
  await (prisma as any).siteSettings.update({
    where: { id },
    data: {
      siteName: d.siteName,
      siteEmail1: d.siteEmail1,
      siteEmail2: d.siteEmail2 || "",
      footerText: d.footerText || null,
      copyrightText: d.copyrightText || null,
      whatsappNumber: d.whatsappNumber || null,
      socialLinks: {
        instagram: d.instagram || "",
        facebook: d.facebook || "",
        tiktok: d.tiktok || "",
        youtube: d.youtube || "",
      },
    },
  });
  revalidatePath("/admin/settings");
  revalidatePath("/contact");
  revalidatePath("/");
  return { success: true };
}
