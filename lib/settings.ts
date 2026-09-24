import { prisma } from "@/lib/prisma";

/** Digits-only WhatsApp number, or "" if the admin cleared it (no fallback). */
export async function getWhatsAppNumber(): Promise<string> {
  try {
    const s = await (prisma as any).siteSettings.findFirst();
    return String(s?.whatsappNumber ?? "").replace(/[^0-9]/g, "");
  } catch {
    return "";
  }
}

/** Raw stored value (for the admin form); "" if unset. */
export async function getWhatsAppRaw(): Promise<string> {
  try {
    const s = await (prisma as any).siteSettings.findFirst();
    return s?.whatsappNumber ?? "";
  } catch {
    return "";
  }
}
