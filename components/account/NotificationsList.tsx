"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Bell, Check, Send, CornerUpLeft } from "lucide-react";
import { toast } from "sonner";
import {
  markNotificationRead,
  markAllNotificationsRead,
  replyToNotification,
} from "@/lib/actions/notifications";
import type { NotificationRow } from "@/lib/queries/notifications";

export function NotificationsList({ items }: { items: NotificationRow[] }) {
  const [rows, setRows] = useState<NotificationRow[]>(items);
  const [, startTransition] = useTransition();
  const [replyFor, setReplyFor] = useState<string | null>(null);
  const [text, setText] = useState("");

  const unread = rows.filter((n) => !n.readAt).length;

  function readOne(id: string) {
    setRows((r) => r.map((n) => (n.id === id && !n.readAt ? { ...n, readAt: new Date() } : n)));
    startTransition(() => void markNotificationRead(id));
  }
  function readAll() {
    setRows((r) => r.map((n) => (n.readAt ? n : { ...n, readAt: new Date() })));
    startTransition(() => void markAllNotificationsRead());
  }
  async function send(id: string) {
    const clean = text.trim();
    if (!clean) return;
    const res = await replyToNotification(id, clean);
    if (res.success) {
      setRows((r) => r.map((n) => (n.id === id ? { ...n, reply: clean, repliedAt: new Date() } : n)));
      setReplyFor(null);
      setText("");
      toast.success("Reply sent to the team.");
    } else {
      toast.error(res.message ?? "Could not send your reply.");
    }
  }

  if (rows.length === 0) {
    return (
      <div className="surface-card flex flex-col items-center gap-3 p-10 text-center">
        <Bell className="h-8 w-8 text-medical-blue/50" aria-hidden="true" />
        <p className="font-semibold text-deep-blue">No notifications yet</p>
        <p className="text-body max-w-md text-muted-foreground">
          Updates about your access requests and account activity will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {unread > 0 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={readAll}
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg text-sm font-medium text-medical-blue hover:underline"
          >
            <Check className="h-4 w-4" aria-hidden="true" /> Mark all as read
          </button>
        </div>
      )}
      <ul className="space-y-3">
        {rows.map((n) => (
          <li
            key={n.id}
            className={`surface-card p-5 transition ${n.readAt ? "" : "ring-1 ring-medical-blue/30"}`}
            onMouseEnter={() => !n.readAt && readOne(n.id)}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1E8DC] text-medical-blue">
                  <Bell className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-deep-blue">
                    {n.title}
                    {!n.readAt && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-coral align-middle" aria-label="unread" />}
                  </p>
                  <p className="text-body mt-1 whitespace-pre-wrap text-deep-blue/80">{n.body}</p>
                  {n.actionUrl && (
                    <Link href={n.actionUrl} className="mt-2 inline-block text-sm font-semibold text-medical-blue hover:underline">
                      Open
                    </Link>
                  )}
                </div>
              </div>
              <time className="shrink-0 text-xs text-muted-foreground" dateTime={new Date(n.createdAt).toISOString()}>
                {new Date(n.createdAt).toLocaleString()}
              </time>
            </div>

            {n.reply ? (
              <div className="mt-3 rounded-xl bg-brand-bg/60 p-3 text-sm">
                <p className="flex items-center gap-1.5 font-medium text-deep-blue"><CornerUpLeft className="h-3.5 w-3.5" /> Your reply</p>
                <p className="mt-1 whitespace-pre-wrap text-deep-blue/80">{n.reply}</p>
              </div>
            ) : n.requiresReply ? (
              replyFor === n.id ? (
                <div className="mt-3 space-y-2">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={3}
                    placeholder="Write your reply to the team…"
                    className="focus-ring w-full rounded-xl border border-border bg-white p-3 text-sm outline-none"
                  />
                  <div className="flex gap-2">
                    <button type="button" onClick={() => send(n.id)} className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                      <Send className="h-4 w-4" /> Send reply
                    </button>
                    <button type="button" onClick={() => { setReplyFor(null); setText(""); }} className="focus-ring rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground hover:text-deep-blue">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button type="button" onClick={() => setReplyFor(n.id)} className="focus-ring mt-3 inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-medical-blue hover:underline">
                  <CornerUpLeft className="h-4 w-4" /> Reply
                </button>
              )
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
