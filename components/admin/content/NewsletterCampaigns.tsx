"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Send, Plus, Trash2, Users, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { createCampaign, sendCampaign, deleteCampaign } from "@/lib/actions/newsletter-campaigns";

export type CampaignRow = {
  id: string;
  subject: string;
  body: string;
  status: string;
  sentAt: string | null;
  sentCount: number;
  failedCount: number;
};

export function NewsletterCampaigns({
  campaigns,
  activeSubscribers,
}: {
  campaigns: CampaignRow[];
  activeSubscribers: number;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [toSend, setToSend] = useState<CampaignRow | null>(null);

  function create() {
    startTransition(async () => {
      const res = await createCampaign(subject, body);
      if (res.success) {
        toast.success("Newsletter saved as a draft.");
        setOpen(false); setSubject(""); setBody("");
        router.refresh();
      } else toast.error(res.message || "Could not save.");
    });
  }

  function send() {
    if (!toSend) return;
    startTransition(async () => {
      const res = await sendCampaign(toSend.id);
      if (res.success) toast.success(res.message || "Sent.");
      else toast.error(res.message || "Could not send.");
      setToSend(null);
      router.refresh();
    });
  }

  function remove(id: string) {
    startTransition(async () => {
      const res = await deleteCampaign(id);
      if (res.success) { toast.success("Deleted."); router.refresh(); }
      else toast.error(res.message || "Could not delete.");
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-sm text-deep-blue/70">
          <Users className="h-4 w-4" />
          <strong className="text-deep-blue">{activeSubscribers}</strong> active subscriber{activeSubscribers === 1 ? "" : "s"}
          <span className="text-deep-blue/40">(unsubscribed people are always skipped)</span>
        </p>
        <Button onClick={() => setOpen(true)}><Plus className="mr-1.5 h-4 w-4" /> Write newsletter</Button>
      </div>

      {campaigns.length === 0 ? (
        <div className="rounded-xl border border-deep-blue/10 bg-white px-4 py-10 text-center text-deep-blue/50">
          No newsletters yet. Write one and send it to your subscribers.
        </div>
      ) : (
        <div className="space-y-3">
          {campaigns.map((c) => (
            <div key={c.id} className="rounded-xl border border-deep-blue/10 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-deep-blue">{c.subject}</span>
                    {c.status === "SENT" ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                        <CheckCircle2 className="h-3 w-3" /> Sent
                      </span>
                    ) : c.status === "FAILED" ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600">
                        <AlertCircle className="h-3 w-3" /> Failed
                      </span>
                    ) : (
                      <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-600">Draft</span>
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-deep-blue/70">
                    {c.body.replace(/<[^>]+>/g, " ").slice(0, 160)}
                  </p>
                  {c.status === "SENT" && (
                    <p className="mt-1 text-xs text-deep-blue/50">
                      Delivered to {c.sentCount}{c.failedCount ? `, ${c.failedCount} failed` : ""} ·{" "}
                      {c.sentAt ? new Date(c.sentAt).toLocaleString() : ""}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {c.status !== "SENT" && (
                    <Button size="sm" onClick={() => setToSend(c)} disabled={isPending}>
                      <Send className="mr-1.5 h-4 w-4" /> Send
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" onClick={() => remove(c.id)} disabled={isPending}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Composer */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>Write a newsletter</DialogTitle>
          <DialogDescription>
            Saved as a draft first — nothing is sent until you press Send. Every email automatically
            includes an unsubscribe link.
          </DialogDescription>
          <div className="mt-4 space-y-4">
            <div>
              <Label>Subject</Label>
              <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="What's new at Hello Clinica" />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea rows={10} value={body} onChange={(e) => setBody(e.target.value)} placeholder={"Write your update here.\n\nBasic HTML works: <p>, <strong>, <a href=\"...\">."} />
              <p className="mt-1 text-xs text-muted-foreground">
                Plain text is fine. Basic HTML tags also work if you want links or bold text.
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={create} disabled={isPending || !subject.trim() || !body.trim()}>Save draft</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Send confirm */}
      <Dialog open={!!toSend} onOpenChange={(o) => !o && setToSend(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Send this newsletter?</DialogTitle>
          <DialogDescription>
            {toSend
              ? `"${toSend.subject}" will be emailed to ${activeSubscribers} subscriber${activeSubscribers === 1 ? "" : "s"}. This can't be undone.`
              : ""}
          </DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setToSend(null)}>Cancel</Button>
            <Button onClick={send} disabled={isPending}>
              {isPending ? "Sending…" : "Send now"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
