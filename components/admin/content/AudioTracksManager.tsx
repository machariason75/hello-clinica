"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, ExternalLink, Music } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { UploadField } from "@/components/admin/ui/UploadField";
import { audioTrackSchema, type AudioTrackFormInput } from "@/lib/admin/content-schemas";
import {
  createAudioTrack,
  updateAudioTrack,
  deleteAudioTrack,
  setAudioTrackPublished,
} from "@/lib/actions/admin-audio";

export type AudioTrackRow = {
  id: string;
  title: string;
  source: string;
  audioUrl: string | null;
  externalUrl: string | null;
  narrator: string | null;
  durationSeconds: number | null;
  order: number;
  published: boolean;
};

const empty: AudioTrackFormInput = {
  title: "",
  source: "upload",
  audioUrl: "",
  externalUrl: "",
  narrator: "",
  durationSeconds: 0,
  order: 0,
  published: true,
};

function mmss(total: number | null): string {
  if (!total) return "—";
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function AudioTracksManager({
  bookId,
  bookTitle,
  rows,
}: {
  bookId: string;
  bookTitle: string;
  rows: AudioTrackRow[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<AudioTrackFormInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toDelete, setToDelete] = useState<AudioTrackRow | null>(null);

  function openCreate() {
    setEditingId(null);
    setForm({ ...empty, order: rows.length });
    setErrors({});
    setOpen(true);
  }

  function openEdit(t: AudioTrackRow) {
    setEditingId(t.id);
    setForm({
      title: t.title,
      source: t.source === "external" ? "external" : "upload",
      audioUrl: t.audioUrl ?? "",
      externalUrl: t.externalUrl ?? "",
      narrator: t.narrator ?? "",
      durationSeconds: t.durationSeconds ?? 0,
      order: t.order,
      published: t.published,
    });
    setErrors({});
    setOpen(true);
  }

  function submit() {
    const parsed = audioTrackSchema.safeParse(form);
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
      const res = editingId
        ? await updateAudioTrack(editingId, parsed.data)
        : await createAudioTrack(bookId, parsed.data);
      if (res.success) {
        toast.success(editingId ? "Track updated." : "Track added.");
        setOpen(false);
        router.refresh();
      } else {
        toast.error(res.message || "Something went wrong.");
        if (res.fieldErrors) setErrors(res.fieldErrors);
      }
    });
  }

  function togglePublish(t: AudioTrackRow) {
    startTransition(async () => {
      const res = await setAudioTrackPublished(t.id, !t.published);
      if (res.success) router.refresh();
      else toast.error(res.message || "Could not update.");
    });
  }

  function doDelete() {
    if (!toDelete) return;
    startTransition(async () => {
      const res = await deleteAudioTrack(toDelete.id);
      if (res.success) {
        toast.success("Track deleted.");
        setToDelete(null);
        router.refresh();
      } else toast.error(res.message || "Could not delete.");
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-deep-blue">{bookTitle}</p>
          <p className="text-xs text-deep-blue/55">
            {rows.length} {rows.length === 1 ? "chapter" : "chapters"}
            {rows.length > 0 && " · listeners can play them in order or jump around"}
          </p>
        </div>
        <Button onClick={openCreate} size="sm">
          <Plus className="mr-1.5 h-4 w-4" /> Add chapter
        </Button>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-xl border border-dashed border-deep-blue/20 bg-white px-4 py-10 text-center">
          <Music className="mx-auto h-7 w-7 text-deep-blue/20" />
          <p className="mt-2 text-sm text-deep-blue/55">
            No audio yet. Add a chapter to give this book a &ldquo;Listen&rdquo; option.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-deep-blue/10 bg-white">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="bg-[#F3E9DD]/60 text-left text-deep-blue/70">
              <tr>
                <th className="px-4 py-2.5 font-medium">#</th>
                <th className="px-4 py-2.5 font-medium">Chapter</th>
                <th className="px-4 py-2.5 font-medium">Source</th>
                <th className="px-4 py-2.5 font-medium">Length</th>
                <th className="px-4 py-2.5 font-medium">Live</th>
                <th className="px-4 py-2.5" />
              </tr>
            </thead>
            <tbody>
              {rows.map((t, i) => (
                <tr key={t.id} className="border-t border-deep-blue/5">
                  <td className="px-4 py-2.5 tabular-nums text-deep-blue/40">{i + 1}</td>
                  <td className="px-4 py-2.5">
                    <div className="font-medium text-deep-blue">{t.title}</div>
                    {t.narrator && <div className="text-xs text-deep-blue/50">{t.narrator}</div>}
                  </td>
                  <td className="px-4 py-2.5">
                    {t.source === "external" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-amber-600">
                        <ExternalLink className="h-3 w-3" /> Link
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                        <Music className="h-3 w-3" /> Hosted
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 tabular-nums text-deep-blue/60">{mmss(t.durationSeconds)}</td>
                  <td className="px-4 py-2.5">
                    <button onClick={() => togglePublish(t)} disabled={isPending}>
                      <YesNoPill value={t.published} />
                    </button>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => openEdit(t)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setToDelete(t)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Editor */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>{editingId ? "Edit chapter" : "Add chapter"}</DialogTitle>
          <DialogDescription>
            Upload an audio file, or link to an audiobook hosted elsewhere.
          </DialogDescription>

          <div className="mt-4 space-y-4">
            <div>
              <Label>Chapter title</Label>
              <Input
                placeholder="e.g. Chapter 3 — Fluid &amp; Electrolyte Balance"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />
              {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
            </div>

            {/* Source switch */}
            <div>
              <Label>Where is the audio?</Label>
              <div className="mt-1.5 flex gap-2">
                {(["upload", "external"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, source: s }))}
                    className={
                      "focus-ring flex-1 rounded-xl px-3 py-2 text-sm font-medium transition " +
                      (form.source === s
                        ? "bg-gradient-to-r from-coral to-[#E8613F] text-white"
                        : "bg-white text-deep-blue/60 ring-1 ring-deep-blue/10")
                    }
                  >
                    {s === "upload" ? "Upload a file" : "Link elsewhere"}
                  </button>
                ))}
              </div>
            </div>

            {form.source === "upload" ? (
              <div>
                <UploadField
                  label="Audio file"
                  endpoint="bookAudio"
                  kind="file"
                  value={form.audioUrl ?? ""}
                  onChange={(url) => setForm((f) => ({ ...f, audioUrl: url }))}
                  error={errors.audioUrl}
                />
                <p className="mt-1 text-xs text-deep-blue/45">
                  Up to 64 MB per chapter. For anything longer, host it elsewhere and use a link instead.
                </p>
              </div>
            ) : (
              <div>
                <Label>Audiobook link</Label>
                <Input
                  placeholder="https://…"
                  value={form.externalUrl}
                  onChange={(e) => setForm((f) => ({ ...f, externalUrl: e.target.value }))}
                />
                {errors.externalUrl && <p className="mt-1 text-xs text-red-500">{errors.externalUrl}</p>}
                {errors.audioUrl && <p className="mt-1 text-xs text-red-500">{errors.audioUrl}</p>}
                <p className="mt-1 text-xs text-deep-blue/45">
                  Opens on the provider&apos;s own player in a new tab.
                </p>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <Label>Narrator</Label>
                <Input
                  placeholder="Optional"
                  value={form.narrator}
                  onChange={(e) => setForm((f) => ({ ...f, narrator: e.target.value }))}
                />
              </div>
              <div>
                <Label>Length (seconds)</Label>
                <Input
                  type="number"
                  min={0}
                  value={form.durationSeconds ?? 0}
                  onChange={(e) => setForm((f) => ({ ...f, durationSeconds: Number(e.target.value) }))}
                />
              </div>
              <div>
                <Label>Order</Label>
                <Input
                  type="number"
                  min={0}
                  value={form.order}
                  onChange={(e) => setForm((f) => ({ ...f, order: Number(e.target.value) }))}
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={form.published}
                onCheckedChange={(v) => setForm((f) => ({ ...f, published: !!v }))}
              />
              Published (listeners can play it)
            </label>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={submit} disabled={isPending}>
              {editingId ? "Save changes" : "Add chapter"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete */}
      <Dialog open={!!toDelete} onOpenChange={(o) => !o && setToDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Delete this chapter?</DialogTitle>
          <DialogDescription>
            {toDelete ? `"${toDelete.title}" will be removed, along with listeners' saved positions for it.` : ""}
          </DialogDescription>
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
