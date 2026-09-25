import { requireAdmin } from "@/lib/admin/auth-helpers";
import { getAllEngagements } from "@/lib/queries/engagements";
import { EngagementsAdmin } from "@/components/admin/EngagementsAdmin";
import { MarkInboxRead } from "@/components/admin/MarkInboxRead";

export const dynamic = "force-dynamic";

export default async function AdminEngagementsPage() {
  await requireAdmin();
  const items = await getAllEngagements();
  return (
    <div className="space-y-6">
      <MarkInboxRead />
      <div>
        <h1 className="text-2xl font-bold text-deep-blue">Messages &amp; engagements</h1>
        <p className="text-muted-foreground">Create engagements, message students, and manage conversations. Opening this page marks new messages as read.</p>
      </div>
      <EngagementsAdmin items={items} />
    </div>
  );
}
