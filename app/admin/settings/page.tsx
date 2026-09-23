import { requireAdmin } from "@/lib/admin/auth-helpers";
import { getWhatsAppRaw } from "@/lib/settings";
import { SettingsForm } from "@/components/admin/SettingsForm";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  await requireAdmin();
  const whatsapp = await getWhatsAppRaw();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-deep-blue">Settings</h1>
        <p className="text-muted-foreground">Site-wide values you can update without a code change.</p>
      </div>
      <SettingsForm whatsapp={whatsapp} />
    </div>
  );
}
