"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowLeft, Download, StickyNote, X, Trash2, ExternalLink, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addReaderNote, deleteReaderNote } from "@/lib/reader/notes";

export type ReaderNoteItem = { id: string; content: string; page: number | null; createdAt: string };

export function ReaderView({
  itemType, itemId, title, fileUrl, backHref, signedIn, isPremium, initialNotes,
}: {
  itemType: "book" | "resource";
  itemId: string;
  title: string;
  fileUrl: string | null;
  backHref: string;
  signedIn: boolean;
  isPremium: boolean;
  initialNotes: ReaderNoteItem[];
}) {
  const [notesOpen, setNotesOpen] = useState(false);
  const [notes, setNotes] = useState<ReaderNoteItem[]>(initialNotes);
  const [draft, setDraft] = useState("");
  const [isPending, startTransition] = useTransition();

  const isPdf = !!fileUrl && /\.pdf($|\?)/i.test(fileUrl);

  function save() {
    const text = draft.trim();
    if (!text) return;
    startTransition(async () => {
      const res = await addReaderNote(itemType, itemId, text);
      if (res.success) {
        setNotes((n) => [{ id: `tmp-${Date.now()}`, content: text, page: null, createdAt: new Date().toISOString() }, ...n]);
        setDraft("");
        toast.success("Note saved.");
      } else toast.error(res.message || "Could not save.");
    });
  }
  function remove(id: string) {
    startTransition(async () => {
      const res = await deleteReaderNote(id);
      if (res.success) { setNotes((n) => n.filter((x) => x.id !== id)); toast.success("Note removed."); }
      else toast.error(res.message || "Could not delete.");
    });
  }

  return (
    <div className="flex h-[100dvh] flex-col bg-[#F3E9DD]/40">
      {/* Toolbar */}
      <header className="flex items-center gap-3 border-b border-deep-blue/10 bg-white/90 px-4 py-3 backdrop-blur">
        <Link href={backHref} className="focus-ring inline-flex items-center gap-1.5 rounded-lg text-sm font-medium text-medical-blue hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-deep-blue">{title}</p>
          <p className="hidden text-xs text-muted-foreground sm:block">Reading mode · use Ctrl/⌘+F to search inside the document</p>
        </div>
        <Button variant="secondary" size="sm" onClick={() => setNotesOpen((o) => !o)}>
          <StickyNote className="mr-1.5 h-4 w-4" /> Notes{notes.length > 0 ? ` (${notes.length})` : ""}
        </Button>
        {isPremium ? (
          <a href={`/api/download?type=${itemType}&id=${itemId}`} className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-coral px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            <Download className="h-4 w-4" /> Download
          </a>
        ) : (
          <Link href="/account?need=download" className="focus-ring inline-flex items-center gap-1.5 rounded-xl border-2 border-coral/40 px-4 py-2 text-sm font-semibold text-coral transition hover:bg-coral/5" title="Downloading is a premium feature">
            <Download className="h-4 w-4" /> Download
          </Link>
        )}
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Document */}
        <main className="min-w-0 flex-1">
          {!fileUrl ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <FileText className="h-10 w-10 text-medical-blue/40" />
              <p className="text-muted-foreground">This item doesn't have a file yet. Please check back soon.</p>
            </div>
          ) : isPdf ? (
            <iframe title={title} src={`${fileUrl}#toolbar=0&navpanes=0&view=FitH`} className="h-full w-full border-0" />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <FileText className="h-10 w-10 text-medical-blue/50" />
              <p className="text-muted-foreground">This file opens in a new tab.</p>
              <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2 text-sm font-semibold text-white">
                <ExternalLink className="h-4 w-4" /> Open document
              </a>
            </div>
          )}
        </main>

        {/* Notes panel */}
        {notesOpen && (
          <aside className="flex w-full max-w-sm flex-col border-l border-deep-blue/10 bg-white">
            <div className="flex items-center justify-between border-b border-deep-blue/10 px-4 py-3">
              <h2 className="font-semibold text-deep-blue">My notes</h2>
              <button onClick={() => setNotesOpen(false)} className="text-deep-blue/40 hover:text-deep-blue"><X className="h-4 w-4" /></button>
            </div>

            {signedIn ? (
              <div className="border-b border-deep-blue/10 p-4">
                <Textarea rows={3} placeholder="Jot a note as you read…" value={draft} onChange={(e) => setDraft(e.target.value)} />
                <Button className="mt-2 w-full" size="sm" onClick={save} disabled={isPending || !draft.trim()}>Save note</Button>
              </div>
            ) : (
              <div className="border-b border-deep-blue/10 p-4 text-sm text-muted-foreground">
                <Link href="/account/login" className="font-medium text-medical-blue hover:underline">Sign in</Link> to save notes as you read.
              </div>
            )}

            <div className="min-h-0 flex-1 overflow-y-auto p-4">
              {notes.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">No notes yet.</p>
              ) : (
                <ul className="space-y-3">
                  {notes.map((n) => (
                    <li key={n.id} className="group rounded-xl border border-deep-blue/10 bg-[#F3E9DD]/30 p-3">
                      <p className="whitespace-pre-wrap text-sm text-deep-blue">{n.content}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{new Date(n.createdAt).toLocaleDateString()}</span>
                        <button onClick={() => remove(n.id)} className="text-red-400 opacity-0 transition group-hover:opacity-100"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
