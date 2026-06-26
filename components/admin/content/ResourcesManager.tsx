"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Search, Plus, Pencil, Archive, ArchiveRestore, Star, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { resourceSchema, resourceCategoryValues, type ResourceFormInput } from "@/lib/admin/content-schemas";
import { UploadField } from "@/components/admin/ui/UploadField";
import {
  createResource, updateResource, setResourceFeatured, setResourceArchived, deleteResource,
} from "@/lib/actions/admin-content";

export type ResourceRow = {
  id: string;
  title: string;
  description: string;
  body: string | null;
  category: string;
  thumbnail: string | null;
  resourceFile: string | null;
  featured: boolean;
  published: boolean;
  archived: boolean;
};

const categoryLabels: Record<string, string> = {
  MEDICAL_SCHOOL_ADMISSIONS: "Medical School Admissions",
  APPLICATION_TIMELINE: "Application Timeline",
  PERSONAL_STATEMENT_GUIDE: "Personal Statement Guide",
  INTERVIEW_GUIDE: "Interview Guide",
  CLINICAL_EXPERIENCE: "Clinical Experience",
  VOLUNTEER_GUIDE: "Volunteer Guide",
  SHADOWING_GUIDE: "Shadowing Guide",
  STUDY_RESOURCES: "Study Resources",
  CAREER_EXPLORATION: "Career Exploration",
};

const emptyForm: ResourceFormInput = {
  title: "", description: "", body: "", category: "MEDICAL_SCHOOL_ADMISSIONS",
  thumbnail: "", resourceFile: "", featured: false, published: true,
};

type Errors = Partial<Record<keyof ResourceFormInput, string>>;

export function ResourcesManager({ rows }: { rows: ResourceRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [showArchived, setShowArchived] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ResourceFormInput>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [confirmDelete, setConfirmDelete] = useState<ResourceRow | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (r.archived !== showArchived) return false;
      if (categoryFilter !== "ALL" && r.category !== categoryFilter) return false;
      if (!q) return true;
      return r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);
    });
  }, [rows, query, categoryFilter, showArchived]);

  function openCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setDialogOpen(true);
  }

  function openEdit(r: ResourceRow) {
    setEditingId(r.id);
    setForm({
      title: r.title, description: r.description, body: r.body ?? "",
      category: r.category as ResourceFormInput["category"],
      thumbnail: r.thumbnail ?? "", resourceFile: r.resourceFile ?? "",
      featured: r.featured, published: r.published,
    });
    setErrors({});
    setDialogOpen(true);
  }

  function submit() {
    const parsed = resourceSchema.safeParse(form);
    if (!parsed.success) {
      const e: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !e[k as keyof ResourceFormInput]) e[k as keyof ResourceFormInput] = issue.message;
      }
      setErrors(e);
      return;
    }
    setErrors({});
    startTransition(async () => {
      const res = editingId
        ? await updateResource(editingId, parsed.data)
        : await createResource(parsed.data);
      if (res.success) {
        toast.success(editingId ? "Resource updated." : "Resource created.");
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
      if (res.success) {
        toast.success(okMsg);
        router.refresh();
      } else {
        toast.error(res.message ?? "Action failed.");
      }
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title…" className="pl-9" />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="sm:w-64"><SelectValue placeholder="Filter category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All categories</SelectItem>
              {resourceCategoryValues.map((c) => (
                <SelectItem key={c} value={c}>{categoryLabels[c]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setShowArchived((v) => !v)}>
            {showArchived ? "View active" : "View archived"}
          </Button>
          <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> New resource</Button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        {filtered.length} {showArchived ? "archived" : "active"} resource{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">No resources to show.</div>
      ) : (
        <div className="surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Title</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Featured</th>
                  <th className="px-4 py-3 font-medium">Published</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((r) => (
                  <tr key={r.id} className="align-top">
                    <td className="px-4 py-3">
                      <div className="font-medium text-deep-blue">{r.title}</div>
                      <div className="line-clamp-1 text-xs text-muted-foreground">{r.description}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{categoryLabels[r.category] ?? r.category}</td>
                    <td className="px-4 py-3">
                      <button type="button" disabled={isPending}
                        onClick={() => runAction(() => setResourceFeatured(r.id, !r.featured), r.featured ? "Unfeatured." : "Featured.")}
                        className="inline-flex" aria-label={r.featured ? "Unfeature" : "Feature"}>
                        <Star className={`h-5 w-5 ${r.featured ? "fill-coral text-coral" : "text-muted-foreground/40"}`} />
                      </button>
                    </td>
                    <td className="px-4 py-3"><YesNoPill value={r.published} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => openEdit(r)} aria-label="Edit"><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="sm" disabled={isPending}
                          onClick={() => runAction(() => setResourceArchived(r.id, !r.archived), r.archived ? "Restored." : "Archived.")}
                          aria-label={r.archived ? "Restore" : "Archive"}>
                          {r.archived ? <ArchiveRestore className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setConfirmDelete(r)} aria-label="Delete">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <div className="mb-2 space-y-1.5">
            <DialogTitle>{editingId ? "Edit resource" : "New resource"}</DialogTitle>
            <DialogDescription>Thumbnail and file accept links (URLs).</DialogDescription>
          </div>
          <div className="space-y-4">
            <Field label="Title" error={errors.title}>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </Field>
            <Field label="Description" error={errors.description}>
              <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </Field>
            <Field label="Body (optional, longer text)" error={errors.body}>
              <Textarea rows={4} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} />
            </Field>
            <Field label="Category" error={errors.category}>
              <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v as ResourceFormInput["category"] })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {resourceCategoryValues.map((c) => (
                    <SelectItem key={c} value={c}>{categoryLabels[c]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <UploadField
              label="Thumbnail (optional)"
              endpoint="resourceThumbnail"
              kind="image"
              value={form.thumbnail}
              onChange={(url) => setForm({ ...form, thumbnail: url })}
              error={errors.thumbnail}
            />
            <UploadField
              label="Resource file (optional)"
              endpoint="resourceFile"
              kind="file"
              value={form.resourceFile}
              onChange={(url) => setForm({ ...form, resourceFile: url })}
              error={errors.resourceFile}
            />
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
              {isPending ? <LoadingSpinner label="Saving…" /> : editingId ? "Save changes" : "Create resource"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <div className="mb-2 space-y-1.5">
            <DialogTitle>Delete this resource?</DialogTitle>
            <DialogDescription>
              “{confirmDelete?.title}” will be permanently removed. This cannot be undone.
              Consider archiving instead if you may want it back.
            </DialogDescription>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirmDelete(null)} disabled={isPending}>Cancel</Button>
            <Button variant="destructive" disabled={isPending}
              onClick={() => {
                const target = confirmDelete;
                if (!target) return;
                runAction(() => deleteResource(target.id), "Resource deleted.");
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
