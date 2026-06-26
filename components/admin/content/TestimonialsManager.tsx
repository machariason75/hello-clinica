"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Search, Plus, Pencil, Archive, ArchiveRestore, Star, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { testimonialSchema, type TestimonialFormInput } from "@/lib/admin/content-schemas";
import {
  createTestimonial, updateTestimonial, setTestimonialFeatured,
  setTestimonialArchived, deleteTestimonial,
} from "@/lib/actions/admin-catalog";

export type TestimonialRow = {
  id: string;
  studentName: string;
  program: string | null;
  headline: string;
  content: string;
  photo: string | null;
  featured: boolean;
  published: boolean;
  archived: boolean;
};

const emptyForm: TestimonialFormInput = {
  studentName: "", program: "", headline: "", content: "",
  photo: "", featured: false, published: true,
};

type Errors = Partial<Record<keyof TestimonialFormInput, string>>;

export function TestimonialsManager({ rows }: { rows: TestimonialRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [showArchived, setShowArchived] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<TestimonialFormInput>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [confirmDelete, setConfirmDelete] = useState<TestimonialRow | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (r.archived !== showArchived) return false;
      if (!q) return true;
      return r.studentName.toLowerCase().includes(q) || r.headline.toLowerCase().includes(q);
    });
  }, [rows, query, showArchived]);

  function openCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setDialogOpen(true);
  }

  function openEdit(r: TestimonialRow) {
    setEditingId(r.id);
    setForm({
      studentName: r.studentName, program: r.program ?? "", headline: r.headline,
      content: r.content, photo: r.photo ?? "", featured: r.featured, published: r.published,
    });
    setErrors({});
    setDialogOpen(true);
  }

  function submit() {
    const parsed = testimonialSchema.safeParse(form);
    if (!parsed.success) {
      const e: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !e[k as keyof TestimonialFormInput]) e[k as keyof TestimonialFormInput] = issue.message;
      }
      setErrors(e);
      return;
    }
    setErrors({});
    startTransition(async () => {
      const res = editingId
        ? await updateTestimonial(editingId, parsed.data)
        : await createTestimonial(parsed.data);
      if (res.success) {
        toast.success(editingId ? "Testimonial updated." : "Testimonial created.");
        setDialogOpen(false);
        router.refresh();
      } else {
        if (res.fieldErrors) setErrors(res.fieldErrors as Errors);
        toast.error(res.message ?? "Something went wrong.");
      }
    });
  }

  function runAction(fn: () => Promise<{ success: boolean; message?: string }>, okMsg: string) {
    startTransition(async () => {
      const res = await fn();
      if (res.success) { toast.success(okMsg); router.refresh(); }
      else toast.error(res.message ?? "Action failed.");
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or headline…" className="pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setShowArchived((v) => !v)}>
            {showArchived ? "View active" : "View archived"}
          </Button>
          <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> New testimonial</Button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        {filtered.length} {showArchived ? "archived" : "active"} testimonial{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">No testimonials to show.</div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((r) => (
            <div key={r.id} className="surface-card flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-deep-blue">{r.studentName}</p>
                  {r.program && <p className="text-xs text-muted-foreground">{r.program}</p>}
                </div>
                <button type="button" disabled={isPending}
                  onClick={() => runAction(() => setTestimonialFeatured(r.id, !r.featured), r.featured ? "Unfeatured." : "Featured.")}
                  aria-label={r.featured ? "Unfeature" : "Feature"}>
                  <Star className={`h-5 w-5 ${r.featured ? "fill-coral text-coral" : "text-muted-foreground/40"}`} />
                </button>
              </div>
              <p className="mt-2 text-sm font-medium text-deep-blue">{r.headline}</p>
              <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{r.content}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Published: <YesNoPill value={r.published} />
                </span>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" onClick={() => openEdit(r)} aria-label="Edit"><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" disabled={isPending}
                    onClick={() => runAction(() => setTestimonialArchived(r.id, !r.archived), r.archived ? "Restored." : "Archived.")}
                    aria-label={r.archived ? "Restore" : "Archive"}>
                    {r.archived ? <ArchiveRestore className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setConfirmDelete(r)} aria-label="Delete">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <div className="mb-2 space-y-1.5">
            <DialogTitle>{editingId ? "Edit testimonial" : "New testimonial"}</DialogTitle>
            <DialogDescription>Photo accepts a link (URL).</DialogDescription>
          </div>
          <div className="space-y-4">
            <Field label="Student name" error={errors.studentName}>
              <Input value={form.studentName} onChange={(e) => setForm({ ...form, studentName: e.target.value })} />
            </Field>
            <Field label="Program (optional)" error={errors.program}>
              <Input value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} placeholder="e.g. Pre-Med, 2025" />
            </Field>
            <Field label="Headline" error={errors.headline}>
              <Input value={form.headline} onChange={(e) => setForm({ ...form, headline: e.target.value })} />
            </Field>
            <Field label="Story" error={errors.content}>
              <Textarea rows={4} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
            </Field>
            <Field label="Photo URL (optional)" error={errors.photo}>
              <Input value={form.photo} onChange={(e) => setForm({ ...form, photo: e.target.value })} placeholder="https://…" />
            </Field>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm">
                <Checkbox checked={form.featured} onCheckedChange={(v) => setForm({ ...form, featured: v === true })} />
                Featured
              </label>
              <label className="flex items-center gap-2 text-sm">
                <Checkbox checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v === true })} />
                Published (visible on site)
              </label>
            </div>
          </div>
          <div className="mt-2 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setDialogOpen(false)} disabled={isPending}>Cancel</Button>
            <Button onClick={submit} disabled={isPending}>
              {isPending ? <LoadingSpinner label="Saving…" /> : editingId ? "Save changes" : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <div className="mb-2 space-y-1.5">
            <DialogTitle>Delete this testimonial?</DialogTitle>
            <DialogDescription>
              {confirmDelete?.studentName}’s testimonial will be permanently removed. Archive instead if unsure.
            </DialogDescription>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirmDelete(null)} disabled={isPending}>Cancel</Button>
            <Button variant="destructive" disabled={isPending}
              onClick={() => {
                const t = confirmDelete;
                if (!t) return;
                runAction(() => deleteTestimonial(t.id), "Testimonial deleted.");
                setConfirmDelete(null);
              }}>
              Delete permanently
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
