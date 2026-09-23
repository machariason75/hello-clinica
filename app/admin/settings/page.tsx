import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { SettingsForm } from "@/components/admin/settings/SettingsForm";
import type { SettingsFormInput, SocialLinks } from "@/lib/admin/settings-schema";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  await requireAdmin();

  let s = await (prisma as any).siteSettings.findFirst();
  if (!s) s = await (prisma as any).siteSettings.create({ data: {} });

  const social = (s.socialLinks ?? {}) as SocialLinks;
  const initial: SettingsFormInput = {
    siteName: s.siteName ?? "Hello Clinica",
    siteEmail1: s.siteEmail1 ?? "",
    siteEmail2: s.siteEmail2 ?? "",
    footerText: s.footerText ?? "",
    copyrightText: s.copyrightText ?? "",
    whatsappNumber: s.whatsappNumber ?? "",
    instagram: social.instagram ?? "",
    facebook: social.facebook ?? "",
    tiktok: social.tiktok ?? "",
    youtube: social.youtube ?? "",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-deep-blue">Settings</h1>
        <p className="text-muted-foreground">Update site-wide values without a code change.</p>
      </div>
      <SettingsForm settingsId={s.id} initial={initial} />
    </div>
  );
}
