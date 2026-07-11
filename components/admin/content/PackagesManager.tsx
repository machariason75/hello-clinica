"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { packageSchema, type PackageFormInput } from "@/lib/admin/content-schemas";
import { createPackage, updatePackage, setPackagePublished, deletePackage } from "@/lib/actions/admin-content";

export type PackageRow = {
  id: string; packageName: string; description: string; totalHours: number; totalCost: number;
  features: string[]; buttonText: string; sortOrder: number; published: boolean;
};

type Form = Omit<PackageFormInput, "features"> & { featuresText: string };
const empty: Form = { packageName: "", description: "", totalHours: 0, totalCost: 0, featuresText: "", buttonText: "Get started", sortOrder: 0, published: true };

export function PackagesManager({ rows }: { rows: PackageRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toDelete, setToDelete] = useState<PackageRow | null>(null);

  function openCreate() { setEditingId(null); setForm(empty); setErrors({}); setOpen(true); }
  function openEdit(p: PackageRow) {
    setEditingId(p.id);
    setForm({
      packageName: p.packageName, description: p.description, totalHours: p.totalHours, totalCost: p.totalCost,
      featuresText: p.features.join("\n"), buttonText: p.buttonText, sortOrder: p.sortOrder, published: p.published,
    });
    setErrors({}); setOpen(true);
  }

  function submit() {
    const payload: PackageFormInput = {
      packageName: form.packageName, description: form.description, totalHours: Number(form.totalHours),
      totalCost: Number(form.totalCost), buttonText: form.buttonText, sortOrder: Number(form.sortOrder),
      published: form.published,
      features: form.featuresText.split("\n").map((s) => s.trim()).filter(Boolean),
    };
    const parsed = packageSchema.safeParse(payload);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setErrors(e); return;
    }
    startTransition(async () => {
      const res = editingId ? await updatePackage(editingId, parsed.data) : await createPackage(parsed.data);
      if (res.success) { toast.success(editingId ? "Package updated." : "Package created."); setOpen(false); router.refresh(); }
      else { toast.error(res.message || "Something went wrong."); if (res.fieldErrors) setErrors(res.fieldErrors); }
    });
  }
  function togglePublish(p: PackageRow) {
    startTransition(async () => {
      const res = await setPackagePublished(p.id, !p.published);
      if (res.success) { toast.success(!p.published ? "Published." : "Hidden."); router.refresh(); }
      else toast.error(res.message || "Could not update.");
    });
  }
  function doDelete() {
    if (!toDelete) return;
    startTransition(async () => {
      const res = await deletePackage(toDelete.id);
      if (res.success) { toast.success("Package deleted."); setToDelete(null); router.refresh(); }
      else toast.error(res.message || "Could not delete.");
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-deep-blue/60">{rows.length} package{rows.length === 1 ? "" : "s"}</p>
        <Button onClick={openCreate}><Plus className="mr-1.5 h-4 w-4" /> New package</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rows.length === 0 ? (
          <p className="col-span-full rounded-xl border border-deep-blue/10 bg-white px-4 py-10 text-center text-deep-blue/50">No packages yet.</p>
        ) : rows.map((p) => (
          <div key={p.id} className="rounded-xl border border-deep-blue/10 bg-white p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-deep-blue">{p.packageName}</h3>
                <p className="text-sm text-deep-blue/60">${p.totalCost.toLocaleString()} · {p.totalHours > 0 ? `${p.totalHours}h` : "self-paced"}</p>
              </div>
              <button onClick={() => togglePublish(p)} disabled={isPending}><YesNoPill value={p.published} /></button>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-deep-blue/70">{p.description}</p>
            <p className="mt-2 text-xs text-deep-blue/50">{p.features.length} benefit{p.features.length === 1 ? "" : "s"}</p>
            <div className="mt-4 flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => openEdit(p)}><Pencil className="mr-1 h-4 w-4" /> Edit</Button>
              <Button variant="ghost" size="sm" onClick={() => setToDelete(p)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
            </div>
          </div>
        ))}
      </div>

      {/* Editor dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>{editingId ? "Edit package" : "New package"}</DialogTitle>
          <DialogDescription>Set the price, hours, and the benefits shown on the Advising page.</DialogDescription>
          <div className="mt-4 space-y-4">
            <div>
              <Label>Name</Label>
              <Input value={form.packageName} onChange={(e) => setForm((f) => ({ ...f, packageName: e.target.value }))} />
              {errors.packageName && <p className="mt-1 text-xs text-red-500">{errors.packageName}</p>}
            </div>
            <div>
              <Label>Description</Label>
              <Textarea rows={2} value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
              {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label>Price ($)</Label>
                <Input type="number" value={form.totalCost} onChange={(e) => setForm((f) => ({ ...f, totalCost: Number(e.target.value) }))} />
              </div>
              <div>
                <Label>Advising hrs</Label>
                <Input type="number" value={form.totalHours} onChange={(e) => setForm((f) => ({ ...f, totalHours: Number(e.target.value) }))} />
              </div>
              <div>
                <Label>Order</Label>
                <Input type="number" value={form.sortOrder} onChange={(e) => setForm((f) => ({ ...f, sortOrder: Number(e.target.value) }))} />
              </div>
            </div>
            <div>
              <Label>Benefits (one per line)</Label>
              <Textarea rows={6} value={form.featuresText} onChange={(e) => setForm((f) => ({ ...f, featuresText: e.target.value }))} placeholder={"Full Question Bank access\nUnlimited practice & exams\n…"} />
              {errors.features && <p className="mt-1 text-xs text-red-500">{errors.features}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Button text</Label>
                <Input value={form.buttonText} onChange={(e) => setForm((f) => ({ ...f, buttonText: e.target.value }))} />
              </div>
              <label className="flex items-end gap-2 pb-2 text-sm"><Checkbox checked={form.published} onCheckedChange={(v) => setForm((f) => ({ ...f, published: !!v }))} /> Published</label>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={submit} disabled={isPending}>{editingId ? "Save changes" : "Create"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete */}
      <Dialog open={!!toDelete} onOpenChange={(o) => !o && setToDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Delete package?</DialogTitle>
          <DialogDescription>{toDelete ? `"${toDelete.packageName}" will be removed.` : ""}</DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setToDelete(null)}>Cancel</Button>
            <Button variant="destructive" onClick={doDelete} disabled={isPending}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
