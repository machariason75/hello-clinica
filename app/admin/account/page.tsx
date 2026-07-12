import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { AdminAccountManager, type AdminRow } from "@/components/admin/content/AdminAccountManager";

export const dynamic = "force-dynamic";

export default async function AdminAccountPage() {
  const me = await requireAdmin();
  const all = await prisma.admin.findMany({ orderBy: { createdAt: "asc" } });
  const admins: AdminRow[] = all.map((a) => ({
    id: a.id, name: a.name, email: a.email, isMe: a.id === me.id,
  }));
  const current = all.find((a) => a.id === me.id);

  return (
    <AdminShell adminName={me.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Admin Account"
          description="Change your login email and password, and manage who else can access the admin area."
        />
        <AdminAccountManager
          me={{ id: me.id, name: current?.name ?? me.name ?? "", email: current?.email ?? "" }}
          admins={admins}
        />
      </div>
    </AdminShell>
  );
}
