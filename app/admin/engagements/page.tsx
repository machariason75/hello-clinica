import { requireAdmin } from "@/lib/admin/auth-helpers";
import { getAllEngagements } from "@/lib/queries/engagements";
import { EngagementsAdmin } from "@/components/admin/EngagementsAdmin";

export const dynamic = "force-dynamic";

export default async function AdminEngagementsPage() {
  await requireAdmin();
  const items = await getAllEngagements();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-deep-blue">Advising engagements</h1>
        <p className="text-muted-foreground">Create engagements, update the plan, set deadlines, and message students. They get notified automatically.</p>
      </div>
      <EngagementsAdmin items={items} />
    </div>
  );
}

