"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { quizSchema, type QuizFormInput } from "@/lib/admin/content-schemas";
import { createQuiz, deleteQuiz, setQuizPublished } from "@/lib/actions/admin-content";

export type QuizListRow = {
  id: string; title: string; slug: string; categoryTitle: string; kind: string;
  questionCount: number; published: boolean;
};
export type CategoryOption = { id: string; label: string };

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const emptyQuiz: QuizFormInput = {
  title: "", slug: "", categoryId: "", description: "", kind: "PRACTICE",
  difficulty: "Mixed", timeLimitMinutes: 0, passThreshold: 65, featured: false, published: false, order: 0,
};

export function QuizzesManager({ quizzes, categoryOptions }: { quizzes: QuizListRow[]; categoryOptions: CategoryOption[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<QuizFormInput>(emptyQuiz);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toDelete, setToDelete] = useState<QuizListRow | null>(null);

  function openCreate() { setForm(emptyQuiz); setErrors({}); setOpen(true); }

  function create() {
    const parsed = quizSchema.safeParse(form);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setErrors(e); return;
    }
    startTransition(async () => {
      const res = await createQuiz(parsed.data);
      if (res.success && res.quizId) { toast.success("Quiz created — add your questions."); setOpen(false); router.push(`/admin/question-bank/quiz/${res.quizId}`); }
      else { toast.error(res.message || "Could not create."); if (res.fieldErrors) setErrors(res.fieldErrors); }
    });
  }
  function togglePublish(q: QuizListRow) {
    startTransition(async () => {
      const res = await setQuizPublished(q.id, !q.published);
      if (res.success) { toast.success(!q.published ? "Published." : "Hidden."); router.refresh(); }
      else toast.error(res.message || "Could not update.");
    });
  }
  function doDelete() {
    if (!toDelete) return;
    startTransition(async () => {
      const res = await deleteQuiz(toDelete.id);
      if (res.success) { toast.success("Quiz deleted."); setToDelete(null); router.refresh(); }
      else toast.error(res.message || "Could not delete.");
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-h3 text-deep-blue">Quizzes ({quizzes.length})</h2>
        <Button onClick={openCreate}><Plus className="mr-1.5 h-4 w-4" /> New quiz</Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-deep-blue/10 bg-white">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-[#F3E9DD]/60 text-left text-deep-blue/70">
            <tr>
              <th className="px-4 py-3 font-medium">Quiz</th>
              <th className="px-4 py-3 font-medium">Section</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Questions</th>
              <th className="px-4 py-3 font-medium">Published</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.length === 0 ? (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-deep-blue/50">No quizzes yet. Create your first one.</td></tr>
            ) : quizzes.map((q) => (
              <tr key={q.id} className="border-t border-deep-blue/5">
                <td className="px-4 py-3"><div className="font-medium text-deep-blue">{q.title}</div><div className="text-xs text-deep-blue/50">/{q.slug}</div></td>
                <td className="px-4 py-3 text-deep-blue/70">{q.categoryTitle}</td>
                <td className="px-4 py-3">
                  <span className={"rounded-full px-2 py-0.5 text-xs font-medium " + (q.kind === "EXAM" ? "bg-coral/10 text-coral" : "bg-medical-blue/10 text-medical-blue")}>
                    {q.kind === "EXAM" ? "Exam" : "Practice"}
                  </span>
                </td>
                <td className="px-4 py-3 text-deep-blue/70">{q.questionCount}</td>
                <td className="px-4 py-3"><button onClick={() => togglePublish(q)} disabled={isPending}><YesNoPill value={q.published} /></button></td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <Link href={`/admin/question-bank/quiz/${q.id}`}><Button variant="ghost" size="sm"><Pencil className="h-4 w-4" /></Button></Link>
                    <Button variant="ghost" size="sm" onClick={() => setToDelete(q)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>New quiz</DialogTitle>
          <DialogDescription>Create the quiz, then you'll add its questions on the next screen.</DialogDescription>
          <div className="mt-4 space-y-4">
            <div>
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => { const title = e.target.value; setForm((f) => ({ ...f, title, slug: !f.slug || f.slug === slugify(f.title) ? slugify(title) : f.slug })); }} />
              {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
            </div>
            <div>
              <Label>Slug (URL)</Label>
              <Input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} />
              {errors.slug && <p className="mt-1 text-xs text-red-500">{errors.slug}</p>}
            </div>
            <div>
              <Label>Section</Label>
              <Select value={form.categoryId} onValueChange={(v) => setForm((f) => ({ ...f, categoryId: v }))}>
                <SelectTrigger><SelectValue placeholder="Choose a section" /></SelectTrigger>
                <SelectContent>{categoryOptions.map((o) => <SelectItem key={o.id} value={o.id}>{o.label}</SelectItem>)}</SelectContent>
              </Select>
              {errors.categoryId && <p className="mt-1 text-xs text-red-500">{errors.categoryId}</p>}
            </div>
            <div>
              <Label>Description</Label>
              <Textarea rows={2} value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
              {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
            </div>
            <div>
              <Label>Type</Label>
              <Select value={form.kind} onValueChange={(v) => setForm((f) => ({ ...f, kind: v as "PRACTICE" | "EXAM" }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="PRACTICE">Practice quiz</SelectItem>
                  <SelectItem value="EXAM">Real exam</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={create} disabled={isPending}>Create & add questions</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete */}
      <Dialog open={!!toDelete} onOpenChange={(o) => !o && setToDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Delete quiz?</DialogTitle>
          <DialogDescription>{toDelete ? `"${toDelete.title}" and all its questions will be removed. This cannot be undone.` : ""}</DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setToDelete(null)}>Cancel</Button>
            <Button variant="destructive" onClick={doDelete} disabled={isPending}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
