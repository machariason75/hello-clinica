"use client";

import { useState, useMemo, useTransition } from "react";
import { Send, Plus, Clock, Archive, ArchiveRestore, Trash2, Ban, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import {
  createEngagement, updateStep, adminPostMessage, adminStartConversation,
  setEngagementArchived, setEngagementBlocked, deleteEngagement,
} from "@/lib/actions/admin-engagements";
import type { EngagementFull, EngMessage } from "@/lib/queries/engagements";

const STATUSES = ["pending", "in_progress", "done"];

export function EngagementsAdmin({ items }: { items: EngagementFull[] }) {
  const [tab, setTab] = useState<"active" | "archived">("active");
  const [, start] = useTransition();
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Advising");
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("Scope\nOutline\nDraft\nReview\nFinal");

  // newest activity first is already handled by the query; keep that order here.
  const filtered = useMemo(
    () => items.filter((e) => (tab === "archived" ? e.archived : !e.archived)),
    [items, tab]
  );

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

      <div className="flex items-center gap-2">
        {(["active", "archived"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${tab === t ? "bg-medical-blue text-white" : "border border-border text-deep-blue hover:bg-brand-bg"}`}
          >
            {t === "active" ? "Active" : "Archived"}
          </button>
        ))}
        <span className="ml-auto text-sm text-muted-foreground">{filtered.length} conversation{filtered.length === 1 ? "" : "s"}</span>
      </div>

      {filtered.map((e) => <AdminCard key={e.id} eng={e} />)}
      {filtered.length === 0 && <p className="text-muted-foreground">No {tab} conversations.</p>}
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

  // Title = client name + email (as recorded at sign-up); fall back to the engagement title.
  const displayName = eng.student?.name || eng.title;
  const displayEmail = eng.student?.email;

  function setStatus(stepId: string, status: string) { start(async () => { await updateStep(stepId, { status }); }); }
  function setDue(stepId: string, dueAt: string) { start(async () => { await updateStep(stepId, { dueAt: dueAt || null }); }); }
  function send() {
    const t = draft.trim(); if (!t) return;
    setMsgs((m) => [...m, { id: `tmp-${Date.now()}`, sender: "admin", body: t, createdAt: new Date() }]);
    setDraft("");
    start(async () => { const r = await adminPostMessage(eng.id, t); if (!r.success) toast.error(r.message ?? "Couldn't send."); });
  }
  function archive() { start(async () => { await setEngagementArchived(eng.id, !eng.archived); toast.success(eng.archived ? "Unarchived." : "Archived."); }); }
  function block() { start(async () => { await setEngagementBlocked(eng.id, !eng.blocked); toast.success(eng.blocked ? "Unblocked." : "Blocked."); }); }
  function remove() {
    if (!confirm("Delete this conversation permanently? This cannot be undone.")) return;
    start(async () => { const r = await deleteEngagement(eng.id); if (r.success) toast.success("Deleted."); else toast.error("Could not delete."); });
  }

  return (
    <section className={`surface-card p-6 ${eng.blocked ? "opacity-60" : ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-coral">{eng.service}</p>
          <h3 className="truncate text-lg font-semibold text-deep-blue">{displayName}</h3>
          {displayEmail && <p className="truncate text-sm text-muted-foreground">{displayEmail}</p>}
          {eng.blocked && <span className="mt-1 inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-950 dark:text-red-300">Blocked</span>}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button type="button" onClick={archive} title={eng.archived ? "Unarchive" : "Archive"} className="focus-ring rounded-lg p-2 text-muted-foreground hover:bg-brand-bg">
            {eng.archived ? <ArchiveRestore className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
          </button>
          <button type="button" onClick={block} title={eng.blocked ? "Unblock" : "Block as spam"} className="focus-ring rounded-lg p-2 text-muted-foreground hover:bg-brand-bg">
            {eng.blocked ? <ShieldCheck className="h-4 w-4" /> : <Ban className="h-4 w-4" />}
          </button>
          <button type="button" onClick={remove} title="Delete" className="focus-ring rounded-lg p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {eng.steps.length > 0 && (
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
      )}

      <div className="mt-4 max-h-60 space-y-2 overflow-y-auto">
        {msgs.map((m) => (
          <div key={m.id} className={`flex ${m.sender === "admin" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.sender === "admin" ? "bg-medical-blue text-white" : "bg-brand-bg text-deep-blue"}`}>
              <p className="whitespace-pre-wrap">{m.body}</p>
              <p className={`mt-1 text-[11px] ${m.sender === "admin" ? "text-white/70" : "text-muted-foreground"}`}>{m.sender === "admin" ? "You" : displayName} · {new Date(m.createdAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      {!eng.blocked && (
        <div className="mt-3 flex items-end gap-2">
          <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={2} placeholder="Reply to the student…" className="focus-ring flex-1 rounded-xl border border-border bg-white p-2.5 text-sm outline-none dark:bg-transparent" />
          <button type="button" onClick={send} className="inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"><Send className="h-4 w-4" /> Send</button>
        </div>
      )}
    </section>
  );
}
