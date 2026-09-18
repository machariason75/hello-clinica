"use client";

import { useState, useTransition } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { pushNotificationByEmail } from "@/lib/actions/admin-notifications";

type AdminNote = {
  id: string;
  kind: string;
  title: string;
  body: string;
  reply: string | null;
  createdAt: string | Date;
  student: { name: string; email: string };
};

export function NotificationsAdmin({ items }: { items: AdminNote[] }) {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [requiresReply, setRequiresReply] = useState(false);
  const [pending, start] = useTransition();

  function push() {
    start(async () => {
      const res = await pushNotificationByEmail(email.trim(), title.trim(), body.trim(), requiresReply);
      if (res.success) {
        toast.success("Notification sent.");
        setEmail(""); setTitle(""); setBody(""); setRequiresReply(false);
      } else {
        toast.error(res.message ?? "Could not send.");
      }
    });
  }

  return (
    <div className="space-y-8">
      <section className="surface-card p-6">
        <h2 className="text-lg font-semibold text-deep-blue">Send a notification</h2>
        <div className="mt-4 grid gap-3">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Student email" className="rounded-lg border border-border px-3 py-2 text-sm" />
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="rounded-lg border border-border px-3 py-2 text-sm" />
          <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Message" rows={3} className="rounded-lg border border-border px-3 py-2 text-sm" />
          <label className="flex items-center gap-2 text-sm text-deep-blue">
            <input type="checkbox" checked={requiresReply} onChange={(e) => setRequiresReply(e.target.checked)} />
            Invite a reply
          </label>
          <div>
            <button type="button" onClick={push} disabled={pending} className="inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60">
              <Send className="h-4 w-4" /> {pending ? "Sending…" : "Send notification"}
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-deep-blue">Recent notifications & replies</h2>
        <ul className="mt-4 space-y-3">
          {items.map((n) => (
            <li key={n.id} className="surface-card p-4 text-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-deep-blue">{n.title} <span className="ml-2 text-xs font-normal text-muted-foreground">{n.kind}</span></p>
                <time className="text-xs text-muted-foreground">{new Date(n.createdAt).toLocaleString()}</time>
              </div>
              <p className="text-muted-foreground">{n.student.name} · {n.student.email}</p>
              <p className="mt-1 text-deep-blue/80">{n.body}</p>
              {n.reply && (
                <div className="mt-2 rounded-lg bg-brand-bg/60 p-2">
                  <span className="font-medium text-deep-blue">Reply:</span> <span className="text-deep-blue/80">{n.reply}</span>
                </div>
              )}
            </li>
          ))}
          {items.length === 0 && <li className="text-muted-foreground">No notifications yet.</li>}
        </ul>
      </section>
    </div>
  );
}
