"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { testimonialSchema, type TestimonialFormInput } from "@/lib/admin/content-schemas";
import {
  createTestimonial,
  updateTestimonial,
  setTestimonialPublished,
  deleteTestimonial,
} from "@/lib/actions/admin-content";

export type TestimonialRow = {
  id: string;
  studentName: string;
  program: string | null;
  headline: string;
  content: string;
  photo: string | null;
  featured: boolean;
  published: boolean;
};

const empty: TestimonialFormInput = {
  studentName: "",
  program: "",
  headline: "",
  content: "",
  photo: "",
  featured: false,
  published: true,
};

export function TestimonialsManager({ rows }: { rows: TestimonialRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<TestimonialFormInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toDelete, setToDelete] = useState<TestimonialRow | null>(null);

  function openCreate() {
    setEditingId(null);
    setForm(empty);
    setErrors({});
    setOpen(true);
  }

  function openEdit(t: TestimonialRow) {
    setEditingId(t.id);
    setForm({
      studentName: t.studentName,
      program: t.program ?? "",
      headline: t.headline,
      content: t.content,
      photo: t.photo ?? "",
      featured: t.featured,
      published: t.published,
    });
    setErrors({});
    setOpen(true);
  }

  function submit() {
    const parsed = testimonialSchema.safeParse(form);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) {
        const k = i.path[0];
        if (typeof k === "string" && !e[k]) e[k] = i.message;
      }
      setErrors(e);
      return;
    }
    startTransition(async () => {
      const res = editingId ? await updateTestimonial(editingId, parsed.data) : await createTestimonial(parsed.data);
      if (res.success) {
        toast.success(editingId ? "Review updated." : "Review added.");
        setOpen(false);
        router.refresh();
      } else {
        toast.error(res.message || "Something went wrong.");
        if (res.fieldErrors) setErrors(res.fieldErrors);
      }
    });
  }

  function togglePublish(t: TestimonialRow) {
    startTransition(async () => {
      const res = await setTestimonialPublished(t.id, !t.published);
      if (res.success) {
        toast.success(!t.published ? "Published." : "Hidden.");
        router.refresh();
      } else toast.error(res.message || "Could not update.");
    });
  }

  function doDelete() {
    if (!toDelete) return;
    startTransition(async () => {
      const res = await deleteTestimonial(toDelete.id);
      if (res.success) {
        toast.success("Review deleted.");
        setToDelete(null);
        router.refresh();
      } else toast.error(res.message || "Could not delete.");
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-deep-blue/60">
          {rows.length} review{rows.length === 1 ? "" : "s"}
        </p>
        <Button onClick={openCreate}>
          <Plus className="mr-1.5 h-4 w-4" /> New review
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {rows.length === 0 ? (
          <p className="col-span-full rounded-xl border border-deep-blue/10 bg-white px-4 py-10 text-center text-deep-blue/50">
            No reviews yet. Until you add one, the homepage shows the original starter reviews.
          </p>
        ) : (
          rows.map((t) => (
            <div key={t.id} className="rounded-xl border border-deep-blue/10 bg-white p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate font-semibold text-deep-blue">{t.headline}</h3>
                    {t.featured && <Star className="h-3.5 w-3.5 shrink-0 fill-coral text-coral" />}
                  </div>
                  <p className="text-xs text-deep-blue/50">
                    {t.studentName}
                    {t.program ? ` · ${t.program}` : ""}
                  </p>
                </div>
                <button onClick={() => togglePublish(t)} disabled={isPending}>
                  <YesNoPill value={t.published} />
                </button>
              </div>
              <p className="mt-2 line-clamp-3 text-sm text-deep-blue/70">{t.content}</p>
              <div className="mt-4 flex items-center gap-1">
                <Button variant="ghost" size="sm" onClick={() => openEdit(t)}>
                  <Pencil className="mr-1 h-4 w-4" /> Edit
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setToDelete(t)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Editor */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>{editingId ? "Edit review" : "New review"}</DialogTitle>
          <DialogDescription>These appear in the testimonials carousel on the homepage.</DialogDescription>
          <div className="mt-4 space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <Label>Student name</Label>
                <Input
                  value={form.studentName}
                  onChange={(e) => setForm((f) => ({ ...f, studentName: e.target.value }))}
                />
                {errors.studentName && <p className="mt-1 text-xs text-red-500">{errors.studentName}</p>}
              </div>
              <div>
                <Label>Program (optional)</Label>
                <Input
                  placeholder="e.g. NCLEX-RN Candidate"
                  value={form.program}
                  onChange={(e) => setForm((f) => ({ ...f, program: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <Label>Headline</Label>
              <Input
                placeholder="e.g. Passed the NCLEX on my first try."
                value={form.headline}
                onChange={(e) => setForm((f) => ({ ...f, headline: e.target.value }))}
              />
              {errors.headline && <p className="mt-1 text-xs text-red-500">{errors.headline}</p>}
            </div>
            <div>
              <Label>Review</Label>
              <Textarea
                rows={4}
                value={form.content}
                onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              />
              {errors.content && <p className="mt-1 text-xs text-red-500">{errors.content}</p>}
            </div>
            <div>
              <Label>Photo URL (optional)</Label>
              <Input
                placeholder="https://…"
                value={form.photo}
                onChange={(e) => setForm((f) => ({ ...f, photo: e.target.value }))}
              />
              {errors.photo && <p className="mt-1 text-xs text-red-500">{errors.photo}</p>}
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={form.featured}
                  onCheckedChange={(v) => setForm((f) => ({ ...f, featured: !!v }))}
                />
                Featured (shows first)
              </label>
              <label className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={form.published}
                  onCheckedChange={(v) => setForm((f) => ({ ...f, published: !!v }))}
                />
                Published
              </label>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={submit} disabled={isPending}>
              {editingId ? "Save changes" : "Add review"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete */}
      <Dialog open={!!toDelete} onOpenChange={(o) => !o && setToDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Delete review?</DialogTitle>
          <DialogDescription>{toDelete ? `"${toDelete.headline}" will be removed.` : ""}</DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setToDelete(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={doDelete} disabled={isPending}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
