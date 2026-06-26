import { requireAdmin } from "@/lib/admin/auth-helpers";
import { getOrCreateSettings } from "@/lib/admin/settings-data";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { SettingsForm } from "@/components/admin/settings/SettingsForm";
import type { SettingsFormInput } from "@/lib/admin/settings-schema";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const admin = await requireAdmin();
  const settings = await getOrCreateSettings();

  const initial: SettingsFormInput = {
    siteName: settings.siteName,
    siteEmail1: settings.siteEmail1,
    siteEmail2: settings.siteEmail2,
    footerText: settings.footerText,
    copyrightText: settings.copyrightText,
    instagram: settings.social.instagram ?? "",
    facebook: settings.social.facebook ?? "",
    tiktok: settings.social.tiktok ?? "",
    youtube: settings.social.youtube ?? "",
  };

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Site Settings"
          description="Manage site name, contact emails, footer text, and social links."
        />
        <SettingsForm settingsId={settings.id} initial={initial} />
      </div>
    </AdminShell>
  );
}
