import { prisma } from "@/lib/prisma";

export type SocialOverrides = { instagram?: string; facebook?: string; tiktok?: string; youtube?: string };

export async function getSocialLinks(): Promise<SocialOverrides> {
  try {
    const s = await (prisma as any).siteSettings.findFirst();
    return (s?.socialLinks ?? {}) as SocialOverrides;
  } catch {
    return {};
  }
}
