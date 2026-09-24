"use client";

import { useState } from "react";
import { Send, Paperclip, X, CornerUpLeft } from "lucide-react";
import { toast } from "sonner";
import { UploadButton } from "@/lib/uploadthing/client";

export function ChatComposer({
  onSend,
  placeholder = "Message…",
  rows = 2,
  replyPreview,
  onCancelReply,
}: {
  onSend: (text: string, fileUrl?: string, fileName?: string) => void;
  placeholder?: string;
  rows?: number;
  replyPreview?: string;
  onCancelReply?: () => void;
}) {
  const [draft, setDraft] = useState("");
  const [staged, setStaged] = useState<{ url: string; name: string } | null>(null);

  function submit() {
    const t = draft.trim();
    if (!t && !staged) return;
    onSend(t, staged?.url, staged?.name);
    setDraft("");
    setStaged(null);
  }

  return (
    <div className="rounded-xl border border-border bg-white p-2 focus-within:ring-2 focus-within:ring-accent-blue/40 dark:bg-transparent">
      {replyPreview && (
        <div className="mb-2 flex items-center gap-2 rounded-lg border-l-2 border-medical-blue bg-brand-bg px-2.5 py-1.5 text-xs text-deep-blue">
          <CornerUpLeft className="h-3.5 w-3.5 shrink-0 text-medical-blue" />
          <span className="truncate">Replying to: {replyPreview}</span>
          <button type="button" onClick={onCancelReply} aria-label="Cancel reply" className="ml-auto rounded p-0.5 hover:bg-white/60"><X className="h-3.5 w-3.5" /></button>
        </div>
      )}
      {staged && (
        <div className="mb-2 flex items-center gap-2 rounded-lg bg-brand-bg px-2.5 py-1.5 text-xs text-deep-blue">
          <Paperclip className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{staged.name}</span>
          <button type="button" onClick={() => setStaged(null)} aria-label="Remove file" className="ml-auto rounded p-0.5 hover:bg-white/60"><X className="h-3.5 w-3.5" /></button>
        </div>
      )}
      <div className="flex items-end gap-1.5">
        <div className="shrink-0">
          <UploadButton
            endpoint="messageAttachment"
            onClientUploadComplete={(res) => { const f = res?.[0]; if (f) setStaged({ url: (f as any).url, name: (f as any).name }); }}
            onUploadError={() => { toast.error("Upload failed."); }}
            appearance={{ button: "ut-ready:bg-transparent ut-ready:text-medical-blue h-9 w-9 p-0", allowedContent: "hidden" }}
            content={{ button: <Paperclip className="h-4 w-4" /> }}
          />
        </div>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); } }}
          rows={rows}
          placeholder={placeholder}
          className="flex-1 resize-none border-0 bg-transparent p-1.5 text-sm text-deep-blue outline-none placeholder:text-muted-foreground"
        />
        <button type="button" onClick={submit} aria-label="Send" className="focus-ring inline-flex items-center gap-1.5 rounded-lg bg-medical-blue px-3.5 py-2 text-sm font-semibold text-white hover:opacity-90">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/** Short label for a message being quoted in a reply. */
export function replySnippet(m: { body?: string; fileName?: string | null }) {
  const t = (m.body ?? "").trim();
  if (t) return t.length > 60 ? t.slice(0, 60) + "…" : t;
  if (m.fileName) return "📎 " + m.fileName;
  return "Attachment";
}
