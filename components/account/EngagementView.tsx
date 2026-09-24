"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Clock, CircleDot, CheckCircle2, Circle, Plus, X, Paperclip, CornerUpLeft, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { studentPostMessage, studentStartConversation, studentDeleteMessage } from "@/lib/actions/engagements";
import { ChatComposer, replySnippet } from "@/components/common/ChatComposer";
import type { EngagementFull, EngMessage } from "@/lib/queries/engagements";

const STATUS = {
  pending: { label: "Pending", cls: "text-deep-blue/40", Icon: Circle },
  in_progress: { label: "In progress", cls: "text-amber-500", Icon: CircleDot },
  done: { label: "Done", cls: "text-emerald-500", Icon: CheckCircle2 },
} as const;

function Attachment({ url, name, light }: { url: string; name?: string | null; light?: boolean }) {
  const isImage = /\.(png|jpe?g|gif|webp|svg)(\?|$)/i.test(url);
  if (isImage) return <a href={url} target="_blank" rel="noopener noreferrer" className="mt-2 block"><img src={url} alt={name ?? "attachment"} className="max-h-56 rounded-lg" /></a>;
  return <a href={url} target="_blank" rel="noopener noreferrer" className={`mt-2 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium ${light ? "border-white/30 text-white hover:bg-white/10" : "border-border text-deep-blue hover:bg-brand-bg"}`}><Paperclip className="h-3.5 w-3.5" /> {name ?? "Download file"}</a>;
}

export function EngagementView({ items }: { items: EngagementFull[] }) {
  const [starting, setStarting] = useState(false);
  return (
    <div className="space-y-6">
      {items.length > 0 && !starting && (
        <div className="flex justify-end">
          <button type="button" onClick={() => setStarting(true)} className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-medical-blue hover:bg-brand-bg"><Plus className="h-4 w-4" /> New message</button>
        </div>
      )}
      {(starting || items.length === 0) && <StartConversation onDone={() => setStarting(false)} showCancel={items.length > 0} />}
      {items.length > 0 && <div className="space-y-8">{items.map((e) => <Card key={e.id} eng={e} />)}</div>}
    </div>
  );
}

function StartConversation({ onDone, showCancel }: { onDone: () => void; showCancel: boolean }) {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [, start] = useTransition();
  function submit(text: string, fileUrl?: string, fileName?: string) {
    start(async () => {
      const r = await studentStartConversation(subject, text, fileUrl, fileName);
      if (r.success) { toast.success("Message sent — the team will reply here."); setSubject(""); onDone(); router.refresh(); }
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
        {showCancel && <button type="button" onClick={onDone} aria-label="Cancel" className="focus-ring rounded-lg p-1.5 text-muted-foreground hover:bg-brand-bg"><X className="h-4 w-4" /></button>}
      </div>
      <p className="text-body mt-2 text-muted-foreground">Ask a question, request support, or attach a file. Your tutor replies right here.</p>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject (optional)" className="focus-ring mb-3 mt-4 w-full rounded-xl border border-border bg-white p-3 text-sm outline-none dark:bg-transparent" />
      <ChatComposer onSend={submit} rows={3} placeholder="Write your message…" />
    </div>
  );
}

function Card({ eng }: { eng: EngagementFull }) {
  const [msgs, setMsgs] = useState<EngMessage[]>(eng.messages ?? []);
  const [replyTo, setReplyTo] = useState<{ id: string; preview: string } | null>(null);
  const [, start] = useTransition();

  function send(text: string, fileUrl?: string, fileName?: string) {
    const replyToId = replyTo?.id;
    setMsgs((m) => [...m, { id: `tmp-${Date.now()}`, sender: "student", body: text, createdAt: new Date(), fileUrl: fileUrl ?? null, fileName: fileName ?? null, replyToId: replyToId ?? null }]);
    setReplyTo(null);
    start(async () => { const r = await studentPostMessage(eng.id, text, fileUrl, fileName, replyToId); if (!r.success) toast.error(r.message ?? "Couldn't send."); });
  }
  function del(id: string) {
    if (!confirm("Delete this message?")) return;
    setMsgs((m) => m.filter((x) => x.id !== id));
    start(async () => { const r = await studentDeleteMessage(id); if (!r.success) toast.error(r.message ?? "Couldn't delete."); });
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
                {st.dueAt && <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" /> due {new Date(st.dueAt).toLocaleDateString()}</span>}
                <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
              </li>
            );
          })}
        </ol>
      )}
      <div className="mb-4 mt-6 space-y-3">
        {msgs.map((m) => {
          const quoted = m.replyToId ? msgs.find((x) => x.id === m.replyToId) : null;
          const mine = m.sender === "student";
          return (
            <div key={m.id} className={`group flex ${mine ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[80%]">
                <div className={`rounded-2xl px-4 py-2.5 text-sm ${mine ? "bg-medical-blue text-white" : "bg-brand-bg text-deep-blue"}`}>
                  {quoted && <div className={`mb-1.5 rounded-lg border-l-2 px-2 py-1 text-[11px] ${mine ? "border-white/50 bg-white/10 text-white/80" : "border-medical-blue/50 bg-white/60 text-deep-blue/70"}`}>{replySnippet(quoted)}</div>}
                  {m.body && <p className="whitespace-pre-wrap">{m.body}</p>}
                  {m.fileUrl && <Attachment url={m.fileUrl} name={m.fileName} light={mine} />}
                  <p className={`mt-1 text-[11px] ${mine ? "text-white/70" : "text-muted-foreground"}`}>{mine ? "You" : "Hello Clinica"} · {new Date(m.createdAt).toLocaleString()}</p>
                </div>
                <div className={`mt-1 flex gap-3 text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 ${mine ? "justify-end" : "justify-start"}`}>
                  <button type="button" onClick={() => setReplyTo({ id: m.id, preview: replySnippet(m) })} className="inline-flex items-center gap-1 hover:text-deep-blue"><CornerUpLeft className="h-3 w-3" /> Reply</button>
                  <button type="button" onClick={() => del(m.id)} className="inline-flex items-center gap-1 hover:text-red-600"><Trash2 className="h-3 w-3" /> Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatComposer onSend={send} placeholder="Message your tutor…" replyPreview={replyTo?.preview} onCancelReply={() => setReplyTo(null)} />
    </article>
  );
}
