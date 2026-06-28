"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Search, Plus, Pencil, Archive, ArchiveRestore, Star, Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { UploadField } from "@/components/admin/ui/UploadField";
import { bookSchema, bookCategoryValues, type BookFormInput } from "@/lib/admin/content-schemas";
import {
  createBook, updateBook, setBookFeatured, setBookArchived, deleteBook,
} from "@/lib/actions/admin-content";

export type BookRow = {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  coverImage: string | null;
  fileUrl: string | null;
  featured: boolean;
  published: boolean;
  archived: boolean;
};

const categoryLabels: Record<string, string> = {
  RECOMMENDED_BOOKS: "Recommended Books",
  MEDICAL_SCHOOL_BOOKS: "Medical School Books",
  NURSING_BOOKS: "Nursing Books",
  NCLEX_BOOKS: "NCLEX Books",
  STUDY_GUIDES: "Study Guides",
  DIGITAL_DOWNLOADS: "Digital Downloads",
};

const emptyForm: BookFormInput = {
  title: "", author: "", description: "", category: "RECOMMENDED_BOOKS",
  coverImage: "", fileUrl: "", featured: false, published: true,
};

type Errors = Partial<Record<keyof BookFormInput, string>>;

export function BooksManager({ rows }: { rows: BookRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [showArchived, setShowArchived] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<BookFormInput>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [confirmDelete, setConfirmDelete] = useState<BookRow | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (r.archived !== showArchived) return false;
      if (categoryFilter !== "ALL" && r.category !== categoryFilter) return false;
      if (!q) return true;
      return r.title.toLowerCase().includes(q) || r.author.toLowerCase().includes(q);
    });
  }, [rows, query, categoryFilter, showArchived]);

  function openCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setDialogOpen(true);
  }

  function openEdit(r: BookRow) {
    setEditingId(r.id);
    setForm({
      title: r.title, author: r.author, description: r.description,
      category: r.category as BookFormInput["category"],
      coverImage: r.coverImage ?? "", fileUrl: r.fileUrl ?? "",
      featured: r.featured, published: r.published,
    });
    setErrors({});
    setDialogOpen(true);
  }

  function submit() {
    const parsed = bookSchema.safeParse(form);
    if (!parsed.success) {
      const e: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !e[k as keyof BookFormInput]) e[k as keyof BookFormInput] = issue.message;
      }
      setErrors(e);
      return;
    }
    setErrors({});
    startTransition(async () => {
      const res = editingId
        ? await updateBook(editingId, parsed.data)
        : await createBook(parsed.data);
      if (res.success) {
        toast.success(editingId ? "Book updated." : "Book created.");
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
      {/* Toolbar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title or author…" className="pl-9" />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="sm:w-56"><SelectValue placeholder="Filter category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All categories</SelectItem>
              {bookCategoryValues.map((c) => (
                <SelectItem key={c} value={c}>{categoryLabels[c]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setShowArchived((v) => !v)}>
            {showArchived ? "View active" : "View archived"}
          </Button>
          <Button size="sm" onClick={openCreate}>
            <Plus className="h-4 w-4" /> New book
          </Button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        {filtered.length} {showArchived ? "archived" : "active"} book{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">No books to show.</div>
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
                      <div className="text-xs text-muted-foreground">{r.author}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{categoryLabels[r.category] ?? r.category}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => runAction(() => setBookFeatured(r.id, !r.featured), r.featured ? "Unfeatured." : "Featured.")}
                        disabled={isPending}
                        className="inline-flex"
                        aria-label={r.featured ? "Unfeature" : "Feature"}
                      >
                        <Star className={`h-5 w-5 ${r.featured ? "fill-coral text-coral" : "text-muted-foreground/40"}`} />
                      </button>
                    </td>
                    <td className="px-4 py-3"><YesNoPill value={r.published} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => openEdit(r)} aria-label="Edit"><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="sm" disabled={isPending}
                          onClick={() => runAction(() => setBookArchived(r.id, !r.archived), r.archived ? "Restored." : "Archived.")}
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

      {/* Create / Edit dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <div className="mb-2 space-y-1.5">
            <DialogTitle>{editingId ? "Edit book" : "New book"}</DialogTitle>
            <DialogDescription>Add the book details. Upload a cover image and file, or paste links.</DialogDescription>
          </div>
          <div className="space-y-4">
            <Field label="Title" error={errors.title}>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </Field>
            <Field label="Author" error={errors.author}>
              <Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
            </Field>
            <Field label="Description" error={errors.description}>
              <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </Field>
            <Field label="Category" error={errors.category}>
              <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v as BookFormInput["category"] })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {bookCategoryValues.map((c) => (
                    <SelectItem key={c} value={c}>{categoryLabels[c]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <UploadField
              label="Cover image (optional)"
              endpoint="bookCover"
              kind="image"
              value={form.coverImage}
              onChange={(url) => setForm({ ...form, coverImage: url })}
              error={errors.coverImage}
            />
            <UploadField
              label="Book file (optional)"
              endpoint="bookFile"
              kind="file"
              value={form.fileUrl}
              onChange={(url) => setForm({ ...form, fileUrl: url })}
              error={errors.fileUrl}
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
              {isPending ? <LoadingSpinner label="Saving…" /> : editingId ? "Save changes" : "Create book"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete confirm */}
      <Dialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <div className="mb-2 space-y-1.5">
            <DialogTitle>Delete this book?</DialogTitle>
            <DialogDescription>
              “{confirmDelete?.title}” will be permanently removed. This cannot be undone.
              Consider archiving instead if you may want it back.
            </DialogDescription>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirmDelete(null)} disabled={isPending}>Cancel</Button>
            <Button
              variant="destructive"
              disabled={isPending}
              onClick={() => {
                const target = confirmDelete;
                if (!target) return;
                runAction(() => deleteBook(target.id), "Book deleted.");
                setConfirmDelete(null);
              }}
            >
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
