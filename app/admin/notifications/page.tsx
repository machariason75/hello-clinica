import { requireAdmin } from "@/lib/admin/auth-helpers";
import { getAdminNotifications } from "@/lib/actions/admin-notifications";
import { NotificationsAdmin } from "@/components/admin/NotificationsAdmin";

export const dynamic = "force-dynamic";

export default async function AdminNotificationsPage() {
  await requireAdmin();
  const items = await getAdminNotifications();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-deep-blue">Notifications</h1>
        <p className="text-muted-foreground">Send a notice to a student and see their replies. Routine notices (requests, access grants) are sent automatically.</p>
      </div>
      <NotificationsAdmin items={items} />
    </div>
  );
}
