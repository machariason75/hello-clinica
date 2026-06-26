"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Plus, Pencil, Archive, ArchiveRestore, Trash2 } from "lucide-react";
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
import { faqSchema, faqCategoryValues, type FaqFormInput } from "@/lib/admin/content-schemas";
import {
  createFaq, updateFaq, setFaqArchived, deleteFaq,
} from "@/lib/actions/admin-catalog";

export type FaqRow = {
  id: string;
  category: string;
  question: string;
  answer: string;
  published: boolean;
  archived: boolean;
};

const categoryLabels: Record<string, string> = {
  GENERAL: "General",
  ADMISSIONS_ADVISING: "Admissions Advising",
  APPLICATION_REVIEW: "Application Review",
  INTERVIEW_COACHING: "Interview Coaching",
  CONSULTATION_PACKAGES: "Consultation Packages",
  BOOKS: "Books",
  RESOURCES: "Resources",
  CONTACT: "Contact",
};

const emptyForm: FaqFormInput = {
  category: "GENERAL", question: "", answer: "", published: true,
};

type Errors = Partial<Record<keyof FaqFormInput, string>>;

export function FaqsManager({ rows }: { rows: FaqRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [showArchived, setShowArchived] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FaqFormInput>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [confirmDelete, setConfirmDelete] = useState<FaqRow | null>(null);

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      if (r.archived !== showArchived) return false;
      if (categoryFilter !== "ALL" && r.category !== categoryFilter) return false;
      return true;
    });
  }, [rows, categoryFilter, showArchived]);

  function openCreate() {
    setEditingId(null);
    setForm({ ...emptyForm, category: (categoryFilter !== "ALL" ? categoryFilter : "GENERAL") as FaqFormInput["category"] });
    setErrors({});
    setDialogOpen(true);
  }

  function openEdit(r: FaqRow) {
    setEditingId(r.id);
    setForm({ category: r.category as FaqFormInput["category"], question: r.question, answer: r.answer, published: r.published });
    setErrors({});
    setDialogOpen(true);
  }

  function submit() {
    const parsed = faqSchema.safeParse(form);
    if (!parsed.success) {
      const e: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !e[k as keyof FaqFormInput]) e[k as keyof FaqFormInput] = issue.message;
      }
      setErrors(e);
      return;
    }
    setErrors({});
    startTransition(async () => {
      const res = editingId ? await updateFaq(editingId, parsed.data) : await createFaq(parsed.data);
      if (res.success) {
        toast.success(editingId ? "FAQ updated." : "FAQ created.");
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
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="sm:w-64"><SelectValue placeholder="Filter category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All categories</SelectItem>
            {faqCategoryValues.map((c) => (
              <SelectItem key={c} value={c}>{categoryLabels[c]}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setShowArchived((v) => !v)}>
            {showArchived ? "View active" : "View archived"}
          </Button>
          <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> New FAQ</Button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        {filtered.length} {showArchived ? "archived" : "active"} FAQ{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">No FAQs to show.</div>
      ) : (
        <div className="space-y-3">
          {filtered.map((r) => (
            <div key={r.id} className="surface-card p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-bg px-2 py-0.5 text-xs text-muted-foreground">
                      {categoryLabels[r.category] ?? r.category}
                    </span>
                    {!r.published && <span className="text-xs text-muted-foreground">(draft)</span>}
                  </div>
                  <p className="mt-2 font-medium text-deep-blue">{r.question}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.answer}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Button variant="ghost" size="sm" onClick={() => openEdit(r)} aria-label="Edit"><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" disabled={isPending}
                    onClick={() => runAction(() => setFaqArchived(r.id, !r.archived), r.archived ? "Restored." : "Archived.")}
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
            <DialogTitle>{editingId ? "Edit FAQ" : "New FAQ"}</DialogTitle>
            <DialogDescription>Group the question under a category.</DialogDescription>
          </div>
          <div className="space-y-4">
            <Field label="Category" error={errors.category}>
              <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v as FaqFormInput["category"] })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {faqCategoryValues.map((c) => (
                    <SelectItem key={c} value={c}>{categoryLabels[c]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Question" error={errors.question}>
              <Input value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} />
            </Field>
            <Field label="Answer" error={errors.answer}>
              <Textarea rows={4} value={form.answer} onChange={(e) => setForm({ ...form, answer: e.target.value })} />
            </Field>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v === true })} />
              Published (visible on site)
            </label>
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
            <DialogTitle>Delete this FAQ?</DialogTitle>
            <DialogDescription>This will be permanently removed. Archive instead if unsure.</DialogDescription>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirmDelete(null)} disabled={isPending}>Cancel</Button>
            <Button variant="destructive" disabled={isPending}
              onClick={() => {
                const t = confirmDelete;
                if (!t) return;
                runAction(() => deleteFaq(t.id), "FAQ deleted.");
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
