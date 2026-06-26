"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminUser } from "@/lib/admin/auth-helpers";
import { recordAudit } from "@/lib/admin/audit";
import { settingsSchema, type SettingsFormInput } from "@/lib/admin/settings-schema";
import type { ContentActionResult } from "./admin-content";

export async function updateSettings(
  settingsId: string,
  input: SettingsFormInput
): Promise<ContentActionResult> {
  const user = await getAdminUser();
  if (!user?.id) return { success: false, message: "Not authorized." };

  const parsed = settingsSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const i of parsed.error.issues) {
      const k = i.path[0];
      if (typeof k === "string" && !fieldErrors[k]) fieldErrors[k] = i.message;
    }
    return { success: false, message: "Please check the fields.", fieldErrors };
  }
  const d = parsed.data;

  try {
    await prisma.siteSettings.update({
      where: { id: settingsId },
      data: {
        siteName: d.siteName,
        siteEmail1: d.siteEmail1,
        siteEmail2: d.siteEmail2 || "",
        footerText: d.footerText || null,
        copyrightText: d.copyrightText || null,
        socialLinks: {
          instagram: d.instagram || "",
          facebook: d.facebook || "",
          tiktok: d.tiktok || "",
          youtube: d.youtube || "",
        },
      },
    });
    await recordAudit({ adminId: user.id, action: "UPDATE", entity: "SiteSettings", entityId: settingsId });
    revalidatePath("/admin/settings");
    revalidatePath("/");
    return { success: true };
  } catch {
    return { success: false, message: "Could not save settings." };
  }
}
