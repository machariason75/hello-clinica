import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { TestimonialsManager, type TestimonialRow } from "@/components/admin/content/TestimonialsManager";

export const dynamic = "force-dynamic";

export default async function AdminTestimonialsPage() {
  const admin = await requireAdmin();
  const rows = await prisma.testimonial.findMany({
    where: { archived: false },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });
  const data: TestimonialRow[] = rows.map((t) => ({
    id: t.id,
    studentName: t.studentName,
    program: t.program,
    headline: t.headline,
    content: t.content,
    photo: t.photo,
    featured: t.featured,
    published: t.published,
  }));
  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Student Reviews"
          description="The testimonials shown on the homepage. Add real student reviews here — until you do, the original starter reviews are displayed."
        />
        <TestimonialsManager rows={data} />
      </div>
    </AdminShell>
  );
}
