"use client";

import { useState, useTransition } from "react";
import { Send, Plus, Clock } from "lucide-react";
import { toast } from "sonner";
import { createEngagement, updateStep, adminPostMessage, adminStartConversation } from "@/lib/actions/admin-engagements";
import type { EngagementFull, EngMessage } from "@/lib/queries/engagements";

const STATUSES = ["pending", "in_progress", "done"];

export function EngagementsAdmin({ items }: { items: EngagementFull[] }) {
  const [, start] = useTransition();
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Advising");
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("Scope\nOutline\nDraft\nReview\nFinal");

  function create() {
    start(async () => {
      const r = await createEngagement({ studentEmail: email, service, title, steps: steps.split("\n") });
      if (r.success) { toast.success("Engagement created."); setEmail(""); setTitle(""); }
      else toast.error(r.message ?? "Could not create.");
    });
  }

  return (
    <div className="space-y-8">
      <section className="surface-card p-6">
        <h2 className="text-lg font-semibold text-deep-blue">New engagement</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Student email" className="rounded-lg border border-border px-3 py-2 text-sm" />
          <input value={service} onChange={(e) => setService(e.target.value)} placeholder="Service (e.g. Thesis support)" className="rounded-lg border border-border px-3 py-2 text-sm" />
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="rounded-lg border border-border px-3 py-2 text-sm sm:col-span-2" />
          <textarea value={steps} onChange={(e) => setSteps(e.target.value)} rows={5} placeholder="One step per line" className="rounded-lg border border-border px-3 py-2 text-sm sm:col-span-2" />
        </div>
        <button type="button" onClick={create} className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
          <Plus className="h-4 w-4" /> Create engagement
        </button>
      </section>

      <MessageStudent />

      {items.map((e) => <AdminCard key={e.id} eng={e} />)}
      {items.length === 0 && <p className="text-muted-foreground">No engagements yet.</p>}
    </div>
  );
}

function MessageStudent() {
  const [, start] = useTransition();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  function send() {
    const t = body.trim(); if (!t) { toast.error("Write a message first."); return; }
    start(async () => {
      const r = await adminStartConversation(email, subject, t);
      if (r.success) { toast.success("Message sent to the student."); setEmail(""); setSubject(""); setBody(""); }
      else toast.error(r.message ?? "Could not send.");
    });
  }
  return (
    <section className="surface-card p-6">
      <h2 className="text-lg font-semibold text-deep-blue">Message a student</h2>
      <p className="text-sm text-muted-foreground">Start a direct conversation with an existing account holder. They get notified and can reply from their account.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Student email" className="rounded-lg border border-border px-3 py-2 text-sm" />
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject (optional)" className="rounded-lg border border-border px-3 py-2 text-sm" />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={3} placeholder="Your message…" className="rounded-lg border border-border px-3 py-2 text-sm sm:col-span-2" />
      </div>
      <button type="button" onClick={send} className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
        <Send className="h-4 w-4" /> Send message
      </button>
    </section>
  );
}

function AdminCard({ eng }: { eng: EngagementFull }) {
  const [, start] = useTransition();
  const [draft, setDraft] = useState("");
  const [msgs, setMsgs] = useState<EngMessage[]>(eng.messages);

  function setStatus(stepId: string, status: string) {
    start(async () => { await updateStep(stepId, { status }); });
  }
  function setDue(stepId: string, dueAt: string) {
    start(async () => { await updateStep(stepId, { dueAt: dueAt || null }); });
  }
  function send() {
    const t = draft.trim(); if (!t) return;
    setMsgs((m) => [...m, { id: `tmp-${Date.now()}`, sender: "admin", body: t, createdAt: new Date() }]);
    setDraft("");
    start(async () => { const r = await adminPostMessage(eng.id, t); if (!r.success) toast.error(r.message ?? "Couldn't send."); });
  }

  return (
    <section className="surface-card p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-coral">{eng.service}</p>
      <h3 className="text-h4 font-semibold text-deep-blue">{eng.title}</h3>
      {eng.student && <p className="text-sm text-muted-foreground">{eng.student.name}  {eng.student.email}</p>}

      <ul className="mt-4 space-y-2">
        {eng.steps.map((st) => (
          <li key={st.id} className="flex flex-wrap items-center gap-2 rounded-xl bg-brand-bg/50 px-3 py-2 text-sm">
            <span className="flex-1 text-deep-blue">{st.label}</span>
            <select defaultValue={st.status} onChange={(e) => setStatus(st.id, e.target.value)} className="rounded-lg border border-border px-2 py-1 text-xs">
              {STATUSES.map((s) => <option key={s} value={s}>{s.replace("_", " ")}</option>)}
            </select>
            <label className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <input type="date" defaultValue={st.dueAt ? new Date(st.dueAt).toISOString().slice(0, 10) : ""} onChange={(e) => setDue(st.id, e.target.value)} className="rounded border border-border px-1 py-0.5" />
            </label>
          </li>
        ))}
      </ul>

      <div className="mt-4 max-h-60 space-y-2 overflow-y-auto">
        {msgs.map((m) => (
          <div key={m.id} className={`flex ${m.sender === "admin" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.sender === "admin" ? "bg-medical-blue text-white" : "bg-brand-bg text-deep-blue"}`}>
              <p className="whitespace-pre-wrap">{m.body}</p>
              <p className={`mt-1 text-[11px] ${m.sender === "admin" ? "text-white/70" : "text-muted-foreground"}`}>{m.sender === "admin" ? "You" : eng.student?.name ?? "Student"}  {new Date(m.createdAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-end gap-2">
        <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={2} placeholder="Reply to the student" className="focus-ring flex-1 rounded-xl border border-border bg-white p-2.5 text-sm outline-none" />
        <button type="button" onClick={send} className="inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"><Send className="h-4 w-4" /> Send</button>
      </div>
    </section>
  );
}
