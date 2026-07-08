"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, FolderTree, Link2, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import {
  quizCategorySchema, quizExternalLinkSchema,
  type QuizCategoryFormInput, type QuizExternalLinkFormInput,
} from "@/lib/admin/content-schemas";
import {
  createQuizCategory, updateQuizCategory, setQuizCategoryPublished, deleteQuizCategory,
  createQuizExternalLink, updateQuizExternalLink, deleteQuizExternalLink,
} from "@/lib/actions/admin-content";

const ICON_OPTIONS = [
  "Stethoscope", "Pill", "HeartPulse", "Brain", "Activity", "ClipboardList",
  "BookOpenCheck", "BookA", "FlaskConical", "Calculator", "Baby", "Syringe",
  "ListChecks", "Dna", "GraduationCap", "Users",
];

export type CategoryRow = {
  id: string; title: string; slug: string; description: string;
  overview: string | null; icon: string | null; parentId: string | null;
  parentTitle: string | null; order: number; featured: boolean; published: boolean;
  childCount: number; quizCount: number; linkCount: number;
};
export type LinkRow = {
  id: string; categoryId: string; categoryTitle: string; title: string; url: string;
  description: string | null; thumbnailUrl: string | null; source: string | null;
  order: number; published: boolean;
};
export type CategoryOption = { id: string; label: string };

const emptyCategory: QuizCategoryFormInput = {
  title: "", slug: "", description: "", overview: "", icon: "", parentId: "",
  order: 0, featured: false, published: true,
};
const emptyLink: QuizExternalLinkFormInput = {
  categoryId: "", title: "", url: "", description: "", thumbnailUrl: "", source: "",
  order: 0, published: true,
};

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function QuizBankManager({
  categories, links, categoryOptions,
}: {
  categories: CategoryRow[]; links: LinkRow[]; categoryOptions: CategoryOption[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [view, setView] = useState<"categories" | "links">("categories");

  // Category dialog state
  const [catOpen, setCatOpen] = useState(false);
  const [catEditingId, setCatEditingId] = useState<string | null>(null);
  const [catForm, setCatForm] = useState<QuizCategoryFormInput>(emptyCategory);
  const [catErrors, setCatErrors] = useState<Record<string, string>>({});
  const [catDelete, setCatDelete] = useState<CategoryRow | null>(null);

  // Link dialog state
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkEditingId, setLinkEditingId] = useState<string | null>(null);
  const [linkForm, setLinkForm] = useState<QuizExternalLinkFormInput>(emptyLink);
  const [linkErrors, setLinkErrors] = useState<Record<string, string>>({});
  const [linkDelete, setLinkDelete] = useState<LinkRow | null>(null);

  const parentOptions = useMemo(
    () => (catEditingId ? categoryOptions.filter((o) => o.id !== catEditingId) : categoryOptions),
    [categoryOptions, catEditingId],
  );

  /* ---------- category handlers ---------- */
  function openCreateCat() {
    setCatEditingId(null); setCatForm(emptyCategory); setCatErrors({}); setCatOpen(true);
  }
  function openEditCat(c: CategoryRow) {
    setCatEditingId(c.id);
    setCatForm({
      title: c.title, slug: c.slug, description: c.description, overview: c.overview ?? "",
      icon: c.icon ?? "", parentId: c.parentId ?? "", order: c.order, featured: c.featured, published: c.published,
    });
    setCatErrors({}); setCatOpen(true);
  }
  function submitCat() {
    const parsed = quizCategorySchema.safeParse(catForm);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setCatErrors(e); return;
    }
    startTransition(async () => {
      const res = catEditingId
        ? await updateQuizCategory(catEditingId, parsed.data)
        : await createQuizCategory(parsed.data);
      if (res.success) {
        toast.success(catEditingId ? "Section updated." : "Section created.");
        setCatOpen(false); router.refresh();
      } else {
        toast.error(res.message || "Something went wrong.");
        if (res.fieldErrors) setCatErrors(res.fieldErrors);
      }
    });
  }
  function togglePublishCat(c: CategoryRow) {
    startTransition(async () => {
      const res = await setQuizCategoryPublished(c.id, !c.published);
      if (res.success) { toast.success(!c.published ? "Published." : "Hidden."); router.refresh(); }
      else toast.error(res.message || "Could not update.");
    });
  }
  function doDeleteCat() {
    if (!catDelete) return;
    startTransition(async () => {
      const res = await deleteQuizCategory(catDelete.id);
      if (res.success) { toast.success("Section deleted."); setCatDelete(null); router.refresh(); }
      else toast.error(res.message || "Could not delete.");
    });
  }

  /* ---------- link handlers ---------- */
  function openCreateLink() {
    setLinkEditingId(null); setLinkForm(emptyLink); setLinkErrors({}); setLinkOpen(true);
  }
  function openEditLink(l: LinkRow) {
    setLinkEditingId(l.id);
    setLinkForm({
      categoryId: l.categoryId, title: l.title, url: l.url, description: l.description ?? "",
      thumbnailUrl: l.thumbnailUrl ?? "", source: l.source ?? "", order: l.order, published: l.published,
    });
    setLinkErrors({}); setLinkOpen(true);
  }
  function submitLink() {
    const parsed = quizExternalLinkSchema.safeParse(linkForm);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setLinkErrors(e); return;
    }
    startTransition(async () => {
      const res = linkEditingId
        ? await updateQuizExternalLink(linkEditingId, parsed.data)
        : await createQuizExternalLink(parsed.data);
      if (res.success) {
        toast.success(linkEditingId ? "Link updated." : "Link added.");
        setLinkOpen(false); router.refresh();
      } else {
        toast.error(res.message || "Something went wrong.");
        if (res.fieldErrors) setLinkErrors(res.fieldErrors);
      }
    });
  }
  function doDeleteLink() {
    if (!linkDelete) return;
    startTransition(async () => {
      const res = await deleteQuizExternalLink(linkDelete.id);
      if (res.success) { toast.success("Link deleted."); setLinkDelete(null); router.refresh(); }
      else toast.error(res.message || "Could not delete.");
    });
  }

  return (
    <div className="space-y-6">
      {/* View switch */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-lg border border-deep-blue/15 bg-white p-1">
          <button
            type="button"
            onClick={() => setView("categories")}
            className={"inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition " + (view === "categories" ? "bg-coral text-white" : "text-deep-blue/70 hover:text-deep-blue")}
          >
            <FolderTree className="h-4 w-4" /> Sections ({categories.length})
          </button>
          <button
            type="button"
            onClick={() => setView("links")}
            className={"inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition " + (view === "links" ? "bg-coral text-white" : "text-deep-blue/70 hover:text-deep-blue")}
          >
            <Link2 className="h-4 w-4" /> Resource links ({links.length})
          </button>
        </div>
        {view === "categories" ? (
          <Button onClick={openCreateCat}><Plus className="mr-1.5 h-4 w-4" /> New section</Button>
        ) : (
          <Button onClick={openCreateLink}><Plus className="mr-1.5 h-4 w-4" /> New link</Button>
        )}
      </div>

      {/* Categories table */}
      {view === "categories" && (
        <div className="overflow-hidden rounded-xl border border-deep-blue/10 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#F3E9DD]/60 text-left text-deep-blue/70">
              <tr>
                <th className="px-4 py-3 font-medium">Section</th>
                <th className="px-4 py-3 font-medium">Parent</th>
                <th className="px-4 py-3 font-medium">Contains</th>
                <th className="px-4 py-3 font-medium">Published</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-deep-blue/50">No sections yet. Create your first one.</td></tr>
              ) : categories.map((c) => (
                <tr key={c.id} className="border-t border-deep-blue/5">
                  <td className="px-4 py-3">
                    <div className="font-medium text-deep-blue">{c.title}{c.featured && <span className="ml-2 rounded-full bg-coral/10 px-2 py-0.5 text-xs text-coral">Featured</span>}</div>
                    <div className="text-xs text-deep-blue/50">/{c.slug}</div>
                  </td>
                  <td className="px-4 py-3 text-deep-blue/70">{c.parentTitle ?? "—"}</td>
                  <td className="px-4 py-3 text-deep-blue/70">
                    {[c.childCount ? `${c.childCount} sub` : "", c.quizCount ? `${c.quizCount} quiz` : "", c.linkCount ? `${c.linkCount} link` : ""].filter(Boolean).join(", ") || "empty"}
                  </td>
                  <td className="px-4 py-3"><button onClick={() => togglePublishCat(c)} disabled={isPending}><YesNoPill value={c.published} /></button></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => openEditCat(c)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => setCatDelete(c)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Links table */}
      {view === "links" && (
        <div className="overflow-hidden rounded-xl border border-deep-blue/10 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#F3E9DD]/60 text-left text-deep-blue/70">
              <tr>
                <th className="px-4 py-3 font-medium">Link</th>
                <th className="px-4 py-3 font-medium">In section</th>
                <th className="px-4 py-3 font-medium">Published</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {links.length === 0 ? (
                <tr><td colSpan={4} className="px-4 py-8 text-center text-deep-blue/50">No links yet. Tag an educational website or video.</td></tr>
              ) : links.map((l) => (
                <tr key={l.id} className="border-t border-deep-blue/5">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 font-medium text-deep-blue">
                      {l.title}
                      <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-medical-blue/70 hover:text-coral"><ExternalLink className="h-3.5 w-3.5" /></a>
                    </div>
                    <div className="text-xs text-deep-blue/50">{l.source || l.url}</div>
                  </td>
                  <td className="px-4 py-3 text-deep-blue/70">{l.categoryTitle}</td>
                  <td className="px-4 py-3"><YesNoPill value={l.published} /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => openEditLink(l)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => setLinkDelete(l)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Category dialog */}
      <Dialog open={catOpen} onOpenChange={setCatOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>{catEditingId ? "Edit section" : "New section"}</DialogTitle>
          <DialogDescription>Sections nest into a tree. Leave the parent empty for a top-level tab.</DialogDescription>
          <div className="mt-4 space-y-4">
            <div>
              <Label>Title</Label>
              <Input value={catForm.title} onChange={(e) => {
                const title = e.target.value;
                setCatForm((f) => ({ ...f, title, slug: !catEditingId && (!f.slug || f.slug === slugify(f.title)) ? slugify(title) : f.slug }));
              }} />
              {catErrors.title && <p className="mt-1 text-xs text-red-500">{catErrors.title}</p>}
            </div>
            <div>
              <Label>Slug (URL)</Label>
              <Input value={catForm.slug} onChange={(e) => setCatForm((f) => ({ ...f, slug: e.target.value }))} />
              {catErrors.slug && <p className="mt-1 text-xs text-red-500">{catErrors.slug}</p>}
            </div>
            <div>
              <Label>Short description</Label>
              <Input value={catForm.description} onChange={(e) => setCatForm((f) => ({ ...f, description: e.target.value }))} />
              {catErrors.description && <p className="mt-1 text-xs text-red-500">{catErrors.description}</p>}
            </div>
            <div>
              <Label>Overview (optional, shown on the page)</Label>
              <Textarea rows={3} value={catForm.overview} onChange={(e) => setCatForm((f) => ({ ...f, overview: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Parent section</Label>
                <Select value={catForm.parentId || "NONE"} onValueChange={(v) => setCatForm((f) => ({ ...f, parentId: v === "NONE" ? "" : v }))}>
                  <SelectTrigger><SelectValue placeholder="Top level" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NONE">Top level (no parent)</SelectItem>
                    {parentOptions.map((o) => <SelectItem key={o.id} value={o.id}>{o.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Icon</Label>
                <Select value={catForm.icon || "NONE"} onValueChange={(v) => setCatForm((f) => ({ ...f, icon: v === "NONE" ? "" : v }))}>
                  <SelectTrigger><SelectValue placeholder="Default" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NONE">Default</SelectItem>
                    {ICON_OPTIONS.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Order</Label>
                <Input type="number" value={catForm.order} onChange={(e) => setCatForm((f) => ({ ...f, order: Number(e.target.value) }))} />
              </div>
              <div className="flex items-end gap-4">
                <label className="flex items-center gap-2 text-sm"><Checkbox checked={catForm.featured} onCheckedChange={(v) => setCatForm((f) => ({ ...f, featured: !!v }))} /> Featured</label>
                <label className="flex items-center gap-2 text-sm"><Checkbox checked={catForm.published} onCheckedChange={(v) => setCatForm((f) => ({ ...f, published: !!v }))} /> Published</label>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setCatOpen(false)}>Cancel</Button>
            <Button onClick={submitCat} disabled={isPending}>{catEditingId ? "Save changes" : "Create"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Link dialog */}
      <Dialog open={linkOpen} onOpenChange={setLinkOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>{linkEditingId ? "Edit link" : "New resource link"}</DialogTitle>
          <DialogDescription>Tag a website, video, or social post to a section. Add a thumbnail image URL for the preview.</DialogDescription>
          <div className="mt-4 space-y-4">
            <div>
              <Label>Section</Label>
              <Select value={linkForm.categoryId} onValueChange={(v) => setLinkForm((f) => ({ ...f, categoryId: v }))}>
                <SelectTrigger><SelectValue placeholder="Choose a section" /></SelectTrigger>
                <SelectContent>{categoryOptions.map((o) => <SelectItem key={o.id} value={o.id}>{o.label}</SelectItem>)}</SelectContent>
              </Select>
              {linkErrors.categoryId && <p className="mt-1 text-xs text-red-500">{linkErrors.categoryId}</p>}
            </div>
            <div>
              <Label>Title</Label>
              <Input value={linkForm.title} onChange={(e) => setLinkForm((f) => ({ ...f, title: e.target.value }))} />
              {linkErrors.title && <p className="mt-1 text-xs text-red-500">{linkErrors.title}</p>}
            </div>
            <div>
              <Label>URL</Label>
              <Input placeholder="https://…" value={linkForm.url} onChange={(e) => setLinkForm((f) => ({ ...f, url: e.target.value }))} />
              {linkErrors.url && <p className="mt-1 text-xs text-red-500">{linkErrors.url}</p>}
            </div>
            <div>
              <Label>Description (optional)</Label>
              <Textarea rows={2} value={linkForm.description} onChange={(e) => setLinkForm((f) => ({ ...f, description: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Thumbnail image URL (optional)</Label>
                <Input placeholder="https://…" value={linkForm.thumbnailUrl} onChange={(e) => setLinkForm((f) => ({ ...f, thumbnailUrl: e.target.value }))} />
                {linkErrors.thumbnailUrl && <p className="mt-1 text-xs text-red-500">{linkErrors.thumbnailUrl}</p>}
              </div>
              <div>
                <Label>Source label (optional)</Label>
                <Input placeholder="e.g. youtube.com" value={linkForm.source} onChange={(e) => setLinkForm((f) => ({ ...f, source: e.target.value }))} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Order</Label>
                <Input type="number" value={linkForm.order} onChange={(e) => setLinkForm((f) => ({ ...f, order: Number(e.target.value) }))} />
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-2 text-sm"><Checkbox checked={linkForm.published} onCheckedChange={(v) => setLinkForm((f) => ({ ...f, published: !!v }))} /> Published</label>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setLinkOpen(false)}>Cancel</Button>
            <Button onClick={submitLink} disabled={isPending}>{linkEditingId ? "Save changes" : "Add link"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete confirmations */}
      <Dialog open={!!catDelete} onOpenChange={(o) => !o && setCatDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Delete section?</DialogTitle>
          <DialogDescription>
            {catDelete ? `"${catDelete.title}" and everything inside it (sub-sections, quizzes, links) will be removed. This cannot be undone.` : ""}
          </DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setCatDelete(null)}>Cancel</Button>
            <Button variant="destructive" onClick={doDeleteCat} disabled={isPending}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={!!linkDelete} onOpenChange={(o) => !o && setLinkDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Delete link?</DialogTitle>
          <DialogDescription>{linkDelete ? `"${linkDelete.title}" will be removed.` : ""}</DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setLinkDelete(null)}>Cancel</Button>
            <Button variant="destructive" onClick={doDeleteLink} disabled={isPending}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
