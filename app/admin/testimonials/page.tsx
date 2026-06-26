import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { TestimonialsManager, type TestimonialRow } from "@/components/admin/content/TestimonialsManager";

export const dynamic = "force-dynamic";

export default async function AdminTestimonialsPage() {
  const admin = await requireAdmin();
  const records = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });

  const rows: TestimonialRow[] = records.map((r) => ({
    id: r.id,
    studentName: r.studentName,
    program: r.program,
    headline: r.headline,
    content: r.content,
    photo: r.photo,
    featured: r.featured,
    published: r.published,
    archived: r.archived,
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Testimonials"
          description="Create, edit, feature, archive, and remove student testimonials."
        />
        <TestimonialsManager rows={rows} />
      </div>
    </AdminShell>
  );
}
