"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Wand2, ArrowLeft, Check, GripVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import {
  quizSchema, questionSchema, suggestedMinutes,
  type QuizFormInput, type QuestionFormInput,
} from "@/lib/admin/content-schemas";
import { updateQuiz, saveQuestion, deleteQuestion, setQuizPublished } from "@/lib/actions/admin-content";

const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced", "Mixed"];
const TYPES: { value: QuestionFormInput["type"]; label: string }[] = [
  { value: "SINGLE", label: "Single answer" },
  { value: "MULTI", label: "Select all that apply" },
  { value: "TRUE_FALSE", label: "True / False" },
  { value: "FILL_BLANK", label: "Fill in the blank" },
];

export type EditorQuiz = {
  id: string; title: string; slug: string; categoryId: string; description: string;
  kind: string; difficulty: string; timeLimitSeconds: number | null; passThreshold: number;
  featured: boolean; published: boolean; order: number;
};
export type EditorQuestion = {
  id: string; type: string; stem: string; topic: string; explanation: string; points: number; order: number;
  choices: { id: string; text: string; isCorrect: boolean }[];
};
export type CategoryOption = { id: string; label: string };

const emptyQuestion: QuestionFormInput = {
  type: "SINGLE", stem: "", topic: "General", explanation: "", points: 1,
  choices: [{ text: "", isCorrect: true }, { text: "", isCorrect: false }],
};

export function QuizEditor({
  quiz, questions, categoryOptions,
}: {
  quiz: EditorQuiz; questions: EditorQuestion[]; categoryOptions: CategoryOption[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // ---- settings form ----
  const [settings, setSettings] = useState<QuizFormInput>({
    title: quiz.title, slug: quiz.slug, categoryId: quiz.categoryId, description: quiz.description,
    kind: (quiz.kind === "EXAM" ? "EXAM" : "PRACTICE"), difficulty: quiz.difficulty,
    timeLimitMinutes: quiz.timeLimitSeconds ? Math.round(quiz.timeLimitSeconds / 60) : 0,
    passThreshold: quiz.passThreshold, featured: quiz.featured, published: quiz.published, order: quiz.order,
  });
  const [sErrors, setSErrors] = useState<Record<string, string>>({});

  function saveSettings() {
    const parsed = quizSchema.safeParse(settings);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setSErrors(e); return;
    }
    setSErrors({});
    startTransition(async () => {
      const res = await updateQuiz(quiz.id, parsed.data);
      if (res.success) { toast.success("Quiz settings saved."); router.refresh(); }
      else { toast.error(res.message || "Could not save."); if (res.fieldErrors) setSErrors(res.fieldErrors); }
    });
  }

  const suggested = suggestedMinutes(questions.length);

  // ---- question dialog ----
  const [qOpen, setQOpen] = useState(false);
  const [qEditingId, setQEditingId] = useState<string | null>(null);
  const [qForm, setQForm] = useState<QuestionFormInput>(emptyQuestion);
  const [qErrors, setQErrors] = useState<Record<string, string>>({});
  const [qDelete, setQDelete] = useState<EditorQuestion | null>(null);

  function openCreateQ() {
    setQEditingId(null); setQForm(emptyQuestion); setQErrors({}); setQOpen(true);
  }
  function openEditQ(q: EditorQuestion) {
    setQEditingId(q.id);
    setQForm({
      type: q.type as QuestionFormInput["type"], stem: q.stem, topic: q.topic, explanation: q.explanation,
      points: q.points, choices: q.choices.map((c) => ({ text: c.text, isCorrect: c.isCorrect })),
    });
    setQErrors({}); setQOpen(true);
  }
  function setType(type: QuestionFormInput["type"]) {
    setQForm((f) => {
      if (type === "TRUE_FALSE") {
        return { ...f, type, choices: [{ text: "True", isCorrect: true }, { text: "False", isCorrect: false }] };
      }
      return { ...f, type };
    });
  }
  function updateChoice(i: number, patch: Partial<{ text: string; isCorrect: boolean }>) {
    setQForm((f) => {
      const choices = f.choices.map((c, idx) => (idx === i ? { ...c, ...patch } : c));
      // single-answer: only one correct
      if (patch.isCorrect && (f.type === "SINGLE" || f.type === "TRUE_FALSE")) {
        for (let k = 0; k < choices.length; k++) if (k !== i) choices[k].isCorrect = false;
      }
      return { ...f, choices };
    });
  }
  function addChoice() { setQForm((f) => ({ ...f, choices: [...f.choices, { text: "", isCorrect: false }] })); }
  function removeChoice(i: number) { setQForm((f) => ({ ...f, choices: f.choices.filter((_, idx) => idx !== i) })); }

  function submitQuestion() {
    const parsed = questionSchema.safeParse(qForm);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setQErrors(e); return;
    }
    setQErrors({});
    startTransition(async () => {
      const res = await saveQuestion(quiz.id, qEditingId, parsed.data);
      if (res.success) { toast.success(qEditingId ? "Question updated." : "Question added."); setQOpen(false); router.refresh(); }
      else { toast.error(res.message || "Could not save."); if (res.fieldErrors) setQErrors(res.fieldErrors); }
    });
  }
  function doDeleteQ() {
    if (!qDelete) return;
    startTransition(async () => {
      const res = await deleteQuestion(qDelete.id, quiz.id);
      if (res.success) { toast.success("Question deleted."); setQDelete(null); router.refresh(); }
      else toast.error(res.message || "Could not delete.");
    });
  }

  const singleCorrect = qForm.type === "SINGLE" || qForm.type === "TRUE_FALSE";

  return (
    <div className="space-y-6">
      <Link href="/admin/question-bank" className="inline-flex items-center gap-2 text-sm font-medium text-medical-blue hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Question Bank
      </Link>

      {/* Settings */}
      <div className="surface-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-h3 text-deep-blue">Quiz settings</h2>
          <button onClick={() => setQuizPublished(quiz.id, !settings.published).then(() => { setSettings((s) => ({ ...s, published: !s.published })); router.refresh(); })}>
            <YesNoPill value={settings.published} />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Title</Label>
            <Input value={settings.title} onChange={(e) => setSettings((s) => ({ ...s, title: e.target.value }))} />
            {sErrors.title && <p className="mt-1 text-xs text-red-500">{sErrors.title}</p>}
          </div>
          <div>
            <Label>Slug (URL)</Label>
            <Input value={settings.slug} onChange={(e) => setSettings((s) => ({ ...s, slug: e.target.value }))} />
            {sErrors.slug && <p className="mt-1 text-xs text-red-500">{sErrors.slug}</p>}
          </div>
          <div className="md:col-span-2">
            <Label>Description</Label>
            <Textarea rows={2} value={settings.description} onChange={(e) => setSettings((s) => ({ ...s, description: e.target.value }))} />
            {sErrors.description && <p className="mt-1 text-xs text-red-500">{sErrors.description}</p>}
          </div>
          <div>
            <Label>Section</Label>
            <Select value={settings.categoryId} onValueChange={(v) => setSettings((s) => ({ ...s, categoryId: v }))}>
              <SelectTrigger><SelectValue placeholder="Choose a section" /></SelectTrigger>
              <SelectContent>{categoryOptions.map((o) => <SelectItem key={o.id} value={o.id}>{o.label}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Type</Label>
            <Select value={settings.kind} onValueChange={(v) => setSettings((s) => ({ ...s, kind: v as "PRACTICE" | "EXAM" }))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="PRACTICE">Practice quiz</SelectItem>
                <SelectItem value="EXAM">Real exam</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Difficulty</Label>
            <Select value={settings.difficulty} onValueChange={(v) => setSettings((s) => ({ ...s, difficulty: v }))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{DIFFICULTIES.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Pass mark (%)</Label>
            <Input type="number" value={settings.passThreshold} onChange={(e) => setSettings((s) => ({ ...s, passThreshold: Number(e.target.value) }))} />
            {sErrors.passThreshold && <p className="mt-1 text-xs text-red-500">{sErrors.passThreshold}</p>}
          </div>
          <div>
            <Label>Time limit (minutes, 0 = untimed)</Label>
            <div className="flex items-center gap-2">
              <Input type="number" value={settings.timeLimitMinutes} onChange={(e) => setSettings((s) => ({ ...s, timeLimitMinutes: Number(e.target.value) }))} />
              <Button type="button" variant="secondary" size="sm" onClick={() => setSettings((s) => ({ ...s, timeLimitMinutes: suggested }))} title={`Suggest ${suggested} min for ${questions.length} questions`}>
                <Wand2 className="mr-1 h-4 w-4" /> {suggested}m
              </Button>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Suggested for {questions.length} question{questions.length === 1 ? "" : "s"}: ~{suggested} min.</p>
          </div>
          <div className="flex items-end gap-5">
            <label className="flex items-center gap-2 text-sm"><Checkbox checked={settings.featured} onCheckedChange={(v) => setSettings((s) => ({ ...s, featured: !!v }))} /> Featured</label>
            <div className="flex-1">
              <Label>Order</Label>
              <Input type="number" value={settings.order} onChange={(e) => setSettings((s) => ({ ...s, order: Number(e.target.value) }))} />
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Button onClick={saveSettings} disabled={isPending}>Save settings</Button>
        </div>
      </div>

      {/* Questions */}
      <div className="surface-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-h3 text-deep-blue">Questions ({questions.length})</h2>
          <Button onClick={openCreateQ}><Plus className="mr-1.5 h-4 w-4" /> Add question</Button>
        </div>
        {questions.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">No questions yet. Add your first one.</p>
        ) : (
          <ol className="space-y-2">
            {questions.map((q, idx) => (
              <li key={q.id} className="flex items-start gap-3 rounded-xl border border-deep-blue/5 bg-white/60 p-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-bg text-xs font-semibold text-medical-blue">{idx + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-deep-blue">{q.stem}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {TYPES.find((t) => t.value === q.type)?.label ?? q.type} · {q.topic} · {q.choices.length} choices · {q.choices.filter((c) => c.isCorrect).length} correct
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" onClick={() => openEditQ(q)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" onClick={() => setQDelete(q)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* Question dialog */}
      <Dialog open={qOpen} onOpenChange={setQOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl">
          <DialogTitle>{qEditingId ? "Edit question" : "New question"}</DialogTitle>
          <DialogDescription>Write the question, mark the correct answer(s), and add a rationale students see on review.</DialogDescription>
          <div className="mt-4 space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <Label>Type</Label>
                <Select value={qForm.type} onValueChange={(v) => setType(v as QuestionFormInput["type"])}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{TYPES.map((t) => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <Label>Points</Label>
                <Input type="number" value={qForm.points} onChange={(e) => setQForm((f) => ({ ...f, points: Number(e.target.value) }))} />
              </div>
            </div>
            <div>
              <Label>Question</Label>
              <Textarea rows={2} value={qForm.stem} onChange={(e) => setQForm((f) => ({ ...f, stem: e.target.value }))} />
              {qErrors.stem && <p className="mt-1 text-xs text-red-500">{qErrors.stem}</p>}
            </div>
            <div>
              <Label>Topic (for the results breakdown)</Label>
              <Input value={qForm.topic} onChange={(e) => setQForm((f) => ({ ...f, topic: e.target.value }))} />
              {qErrors.topic && <p className="mt-1 text-xs text-red-500">{qErrors.topic}</p>}
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between">
                <Label>{qForm.type === "FILL_BLANK" ? "Accepted answers (mark all correct)" : "Choices"}</Label>
                <span className="text-xs text-muted-foreground">{singleCorrect ? "Pick one correct" : "Mark all that are correct"}</span>
              </div>
              <div className="space-y-2">
                {qForm.choices.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateChoice(i, { isCorrect: !c.isCorrect })}
                      className={"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition " + (c.isCorrect ? "border-emerald-500 bg-emerald-500 text-white" : "border-deep-blue/20 text-transparent hover:border-emerald-400")}
                      title="Mark correct"
                      aria-label="Mark correct"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <Input value={c.text} placeholder={`Choice ${i + 1}`} onChange={(e) => updateChoice(i, { text: e.target.value })} disabled={qForm.type === "TRUE_FALSE"} />
                    {qForm.type !== "TRUE_FALSE" && qForm.choices.length > 2 && (
                      <Button variant="ghost" size="sm" onClick={() => removeChoice(i)}><Trash2 className="h-4 w-4 text-red-400" /></Button>
                    )}
                  </div>
                ))}
              </div>
              {qErrors.choices && <p className="mt-1 text-xs text-red-500">{qErrors.choices}</p>}
              {qForm.type !== "TRUE_FALSE" && (
                <Button variant="secondary" size="sm" className="mt-2" onClick={addChoice}><Plus className="mr-1 h-4 w-4" /> Add choice</Button>
              )}
            </div>

            <div>
              <Label>Rationale / more info (shown on review)</Label>
              <Textarea rows={3} value={qForm.explanation} onChange={(e) => setQForm((f) => ({ ...f, explanation: e.target.value }))} placeholder="Why the correct answer is right, and why the others aren't." />
              {qErrors.explanation && <p className="mt-1 text-xs text-red-500">{qErrors.explanation}</p>}
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setQOpen(false)}>Cancel</Button>
            <Button onClick={submitQuestion} disabled={isPending}>{qEditingId ? "Save question" : "Add question"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete question */}
      <Dialog open={!!qDelete} onOpenChange={(o) => !o && setQDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Delete question?</DialogTitle>
          <DialogDescription>{qDelete ? "This question and its choices will be removed." : ""}</DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setQDelete(null)}>Cancel</Button>
            <Button variant="destructive" onClick={doDeleteQ} disabled={isPending}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
