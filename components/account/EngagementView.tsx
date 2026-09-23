"use client";

import { useState, useTransition } from "react";
import { Send, Clock, CircleDot, CheckCircle2, Circle, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { studentPostMessage, studentStartConversation } from "@/lib/actions/engagements";
import type { EngagementFull, EngMessage } from "@/lib/queries/engagements";

const STATUS = {
  pending: { label: "Pending", cls: "text-deep-blue/40", Icon: Circle },
  in_progress: { label: "In progress", cls: "text-amber-500", Icon: CircleDot },
  done: { label: "Done", cls: "text-emerald-500", Icon: CheckCircle2 },
} as const;

export function EngagementView({ items }: { items: EngagementFull[] }) {
  const [starting, setStarting] = useState(false);

  return (
    <div className="space-y-6">
      {items.length > 0 && !starting && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setStarting(true)}
            className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-medical-blue hover:bg-brand-bg"
          >
            <Plus className="h-4 w-4" /> New message
          </button>
        </div>
      )}

      {(starting || items.length === 0) && (
        <StartConversation onDone={() => setStarting(false)} showCancel={items.length > 0} />
      )}

      {items.length > 0 && <div className="space-y-8">{items.map((e) => <Card key={e.id} eng={e} />)}</div>}
    </div>
  );
}

function StartConversation({ onDone, showCancel }: { onDone: () => void; showCancel: boolean }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [pending, start] = useTransition();

  function send() {
    const t = body.trim();
    if (!t) { toast.error("Write a message first."); return; }
    start(async () => {
      const r = await studentStartConversation(subject, t);
      if (r.success) { toast.success("Message sent — the team will reply here."); setSubject(""); setBody(""); onDone(); }
      else toast.error(r.message ?? "Couldn't send.");
    });
  }

  return (
    <div className="surface-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-coral">Message the team</p>
          <h2 className="text-h3 mt-1 text-deep-blue">Start a conversation</h2>
        </div>
        {showCancel && (
          <button type="button" onClick={onDone} aria-label="Cancel" className="focus-ring rounded-lg p-1.5 text-muted-foreground hover:bg-brand-bg">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <p className="text-body mt-2 text-muted-foreground">
        Ask a question or request support. Your tutor replies right here, and you'll get a notification.
      </p>
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject (optional)"
        className="focus-ring mt-4 w-full rounded-xl border border-border bg-white p-3 text-sm outline-none dark:bg-transparent"
      />
      <div className="mt-3 flex items-end gap-2">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={3}
          placeholder="Write your message…"
          className="focus-ring flex-1 rounded-xl border border-border bg-white p-3 text-sm outline-none dark:bg-transparent"
        />
        <button type="button" onClick={send} disabled={pending} className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60">
          <Send className="h-4 w-4" /> {pending ? "Sending…" : "Send"}
        </button>
      </div>
    </div>
  );
}

function Card({ eng }: { eng: EngagementFull }) {
  const [draft, setDraft] = useState("");
  const [msgs, setMsgs] = useState<EngMessage[]>(eng.messages);
  const [, start] = useTransition();

  function send() {
    const t = draft.trim();
    if (!t) return;
    setMsgs((m) => [...m, { id: `tmp-${Date.now()}`, sender: "student", body: t, createdAt: new Date() }]);
    setDraft("");
    start(async () => {
      const r = await studentPostMessage(eng.id, t);
      if (!r.success) toast.error(r.message ?? "Couldn't send.");
    });
  }

  return (
    <article className="surface-card p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-coral">{eng.service}</p>
      <h2 className="text-h3 mt-1 text-deep-blue">{eng.title}</h2>

      {eng.steps.length > 0 && (
        <ol className="mt-5 space-y-2">
          {eng.steps.map((st) => {
            const s = STATUS[(st.status as keyof typeof STATUS)] ?? STATUS.pending;
            return (
              <li key={st.id} className="flex items-center gap-3 rounded-xl bg-brand-bg/50 px-4 py-2.5">
                <s.Icon className={`h-4 w-4 shrink-0 ${s.cls}`} />
                <span className="flex-1 text-deep-blue">{st.label}</span>
                {st.dueAt && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> due {new Date(st.dueAt).toLocaleDateString()}
                  </span>
                )}
                <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
              </li>
            );
          })}
        </ol>
      )}

      <div className="mt-6 space-y-3">
        {msgs.map((m) => (
          <div key={m.id} className={`flex ${m.sender === "student" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.sender === "student" ? "bg-medical-blue text-white" : "bg-brand-bg text-deep-blue"}`}>
              <p className="whitespace-pre-wrap">{m.body}</p>
              <p className={`mt-1 text-[11px] ${m.sender === "student" ? "text-white/70" : "text-muted-foreground"}`}>
                {m.sender === "student" ? "You" : "Hello Clinica"} · {new Date(m.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-end gap-2">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={2}
          placeholder="Message your tutor…"
          className="focus-ring flex-1 rounded-xl border border-border bg-white p-3 text-sm outline-none dark:bg-transparent"
        />
        <button type="button" onClick={send} className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90">
          <Send className="h-4 w-4" /> Send
        </button>
      </div>
    </article>
  );
}
