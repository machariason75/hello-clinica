import { prisma } from "@/lib/prisma";
import type { SocialLinks } from "@/lib/admin/settings-schema";

export type SiteSettingsData = {
  id: string;
  siteName: string;
  siteEmail1: string;
  siteEmail2: string;
  footerText: string;
  copyrightText: string;
  social: SocialLinks;
};

/** Returns the single settings row, creating it with defaults if absent. */
export async function getOrCreateSettings(): Promise<SiteSettingsData> {
  let row = await prisma.siteSettings.findFirst();
  if (!row) {
    row = await prisma.siteSettings.create({ data: {} });
  }
  const social = (row.socialLinks as SocialLinks | null) ?? {};
  return {
    id: row.id,
    siteName: row.siteName,
    siteEmail1: row.siteEmail1,
    siteEmail2: row.siteEmail2,
    footerText: row.footerText ?? "",
    copyrightText: row.copyrightText ?? "",
    social: {
      instagram: social.instagram ?? "",
      facebook: social.facebook ?? "",
      tiktok: social.tiktok ?? "",
      youtube: social.youtube ?? "",
    },
  };
}
