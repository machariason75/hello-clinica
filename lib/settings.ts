import { prisma } from "@/lib/prisma";

const DEFAULT_WA = "17178137793";

export async function getWhatsAppNumber(): Promise<string> {
  try {
    const s = await (prisma as any).siteSettings.findFirst();
    const digits = String(s?.whatsappNumber ?? DEFAULT_WA).replace(/[^0-9]/g, "");
    return digits || DEFAULT_WA;
  } catch {
    return DEFAULT_WA;
  }
}

export async function getWhatsAppRaw(): Promise<string> {
  try {
    const s = await (prisma as any).siteSettings.findFirst();
    return s?.whatsappNumber ?? DEFAULT_WA;
  } catch {
    return DEFAULT_WA;
  }
}
