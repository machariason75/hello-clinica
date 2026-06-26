"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Plus, Pencil, Archive, ArchiveRestore, Trash2, Copy, ArrowUp, ArrowDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { packageSchema, type PackageFormInput } from "@/lib/admin/content-schemas";
import {
  createPackage, updatePackage, setPackageArchived, duplicatePackage,
  deletePackage, movePackage,
} from "@/lib/actions/admin-catalog";

export type PackageRow = {
  id: string;
  packageName: string;
  description: string;
  totalHours: number;
  totalCost: number;
  features: string[];
  buttonText: string;
  published: boolean;
  archived: boolean;
};

type FormState = {
  packageName: string;
  description: string;
  totalHours: string;
  totalCost: string;
  featuresText: string;
  buttonText: string;
  published: boolean;
};

const emptyForm: FormState = {
  packageName: "", description: "", totalHours: "0", totalCost: "0",
  featuresText: "", buttonText: "Get Started", published: true,
};

type Errors = Partial<Record<string, string>>;

export function PackagesManager({ rows }: { rows: PackageRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showArchived, setShowArchived] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [confirmDelete, setConfirmDelete] = useState<PackageRow | null>(null);

  const visible = useMemo(
    () => rows.filter((r) => r.archived === showArchived),
    [rows, showArchived]
  );

  function openCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setDialogOpen(true);
  }

  function openEdit(r: PackageRow) {
    setEditingId(r.id);
    setForm({
      packageName: r.packageName,
      description: r.description,
      totalHours: String(r.totalHours),
      totalCost: String(r.totalCost),
      featuresText: r.features.join("\n"),
      buttonText: r.buttonText,
      published: r.published,
    });
    setErrors({});
    setDialogOpen(true);
  }

  function submit() {
    const candidate: PackageFormInput = {
      packageName: form.packageName,
      description: form.description,
      totalHours: Number(form.totalHours),
      totalCost: Number(form.totalCost),
      features: form.featuresText.split("\n").map((f) => f.trim()).filter(Boolean),
      buttonText: form.buttonText,
      published: form.published,
    };
    const parsed = packageSchema.safeParse(candidate);
    if (!parsed.success) {
      const e: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !e[k]) e[k] = issue.message;
      }
      setErrors(e);
      return;
    }
    setErrors({});
    startTransition(async () => {
      const res = editingId
        ? await updatePackage(editingId, parsed.data)
        : await createPackage(parsed.data);
      if (res.success) {
        toast.success(editingId ? "Package updated." : "Package created.");
        setDialogOpen(false);
        router.refresh();
      } else {
        if (res.fieldErrors) setErrors(res.fieldErrors);
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
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => setShowArchived((v) => !v)}>
          {showArchived ? "View active" : "View archived"}
        </Button>
        <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> New package</Button>
      </div>

      {!showArchived && (
        <p className="text-xs text-muted-foreground">
          Use the arrows to set the order packages appear on the site.
        </p>
      )}

      {visible.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">No packages to show.</div>
      ) : (
        <div className="space-y-3">
          {visible.map((r, i) => (
            <div key={r.id} className="surface-card p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-h3 text-deep-blue">{r.packageName}</h3>
                    {!r.published && (
                      <span className="rounded-full bg-brand-bg px-2 py-0.5 text-xs text-muted-foreground">Draft</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm">
                    <span className="font-semibold text-deep-blue">${r.totalCost.toLocaleString()}</span>
                    <span className="text-muted-foreground">{r.totalHours} hours</span>
                    <span className="text-muted-foreground">{r.features.length} feature{r.features.length === 1 ? "" : "s"}</span>
                  </div>
                  {r.features.length > 0 && (
                    <ul className="mt-3 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                      {r.features.map((f, fi) => (
                        <li key={fi} className="flex gap-2"><span className="text-medical-blue">•</span>{f}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  {!showArchived && (
                    <div className="flex flex-col">
                      <Button variant="ghost" size="sm" disabled={isPending || i === 0}
                        onClick={() => runAction(() => movePackage(r.id, "up"), "Moved up.")} aria-label="Move up">
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" disabled={isPending || i === visible.length - 1}
                        onClick={() => runAction(() => movePackage(r.id, "down"), "Moved down.")} aria-label="Move down">
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  <Button variant="ghost" size="sm" onClick={() => openEdit(r)} aria-label="Edit"><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" disabled={isPending}
                    onClick={() => runAction(() => duplicatePackage(r.id), "Duplicated.")} aria-label="Duplicate">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" disabled={isPending}
                    onClick={() => runAction(() => setPackageArchived(r.id, !r.archived), r.archived ? "Restored." : "Archived.")}
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

      {/* Create / Edit dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <div className="mb-2 space-y-1.5">
            <DialogTitle>{editingId ? "Edit package" : "New package"}</DialogTitle>
            <DialogDescription>Set pricing, hours, and the feature list (one per line).</DialogDescription>
          </div>
          <div className="space-y-4">
            <Field label="Package name" error={errors.packageName}>
              <Input value={form.packageName} onChange={(e) => setForm({ ...form, packageName: e.target.value })} />
            </Field>
            <Field label="Description" error={errors.description}>
              <Textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Total cost ($)" error={errors.totalCost}>
                <Input type="number" min={0} value={form.totalCost} onChange={(e) => setForm({ ...form, totalCost: e.target.value })} />
              </Field>
              <Field label="Total hours" error={errors.totalHours}>
                <Input type="number" min={0} value={form.totalHours} onChange={(e) => setForm({ ...form, totalHours: e.target.value })} />
              </Field>
            </div>
            <Field label="Features (one per line)" error={errors.features}>
              <Textarea rows={5} value={form.featuresText}
                onChange={(e) => setForm({ ...form, featuresText: e.target.value })}
                placeholder={"e.g.\nApplication review\n2 mock interviews\nEmail support"} />
            </Field>
            <Field label="Button text" error={errors.buttonText}>
              <Input value={form.buttonText} onChange={(e) => setForm({ ...form, buttonText: e.target.value })} />
            </Field>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v === true })} />
              Published (visible on site)
            </label>
          </div>
          <div className="mt-2 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setDialogOpen(false)} disabled={isPending}>Cancel</Button>
            <Button onClick={submit} disabled={isPending}>
              {isPending ? <LoadingSpinner label="Saving…" /> : editingId ? "Save changes" : "Create package"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete confirm */}
      <Dialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <div className="mb-2 space-y-1.5">
            <DialogTitle>Delete this package?</DialogTitle>
            <DialogDescription>
              “{confirmDelete?.packageName}” will be permanently removed. Archive instead if you may want it back.
            </DialogDescription>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirmDelete(null)} disabled={isPending}>Cancel</Button>
            <Button variant="destructive" disabled={isPending}
              onClick={() => {
                const t = confirmDelete;
                if (!t) return;
                runAction(() => deletePackage(t.id), "Package deleted.");
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
