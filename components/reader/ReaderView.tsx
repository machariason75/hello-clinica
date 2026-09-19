"use client";
import type * as React from "react";

import { useEffect, useRef, useState, useCallback, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  ArrowLeft, StickyNote, X, Trash2, ExternalLink, FileText,
  ZoomIn, ZoomOut, Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/common/ShareButton";
import { BookmarkButton } from "@/components/common/BookmarkButton";
import { Textarea } from "@/components/ui/textarea";
import { addReaderNote, deleteReaderNote } from "@/lib/reader/notes";

export type ReaderNoteItem = { id: string; content: string; page: number | null; createdAt: string };

/* pdf.js is loaded from a CDN at runtime (no bundler dependency). */
const PDFJS_VERSION = "3.11.174";
const PDFJS_SRC = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
const PDFJS_WORKER = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;

let pdfjsLoader: Promise<any> | null = null;
function loadPdfJs(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  const w = window as any;
  if (w.pdfjsLib) return Promise.resolve(w.pdfjsLib);
  if (pdfjsLoader) return pdfjsLoader;
  pdfjsLoader = new Promise<any>((resolve, reject) => {
    const existing = document.getElementById("pdfjs-cdn") as HTMLScriptElement | null;
    const finish = () => {
      const lib = (window as any).pdfjsLib;
      if (!lib) return reject(new Error("pdfjs global missing"));
      lib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
      resolve(lib);
    };
    if (existing) { existing.addEventListener("load", finish); existing.addEventListener("error", () => reject(new Error("pdfjs load error"))); return; }
    const s = document.createElement("script");
    s.id = "pdfjs-cdn";
    s.src = PDFJS_SRC;
    s.async = true;
    s.onload = finish;
    s.onerror = () => reject(new Error("pdfjs load error"));
    document.body.appendChild(s);
  });
  return pdfjsLoader;
}

/**
 * In-app PDF viewer. Renders each page to a <canvas> with pdf.js, so the
 * browser's native PDF viewer (and its download button / right-click "Save as")
 * never appears. The underlying file URL is never exposed — pages are fetched
 * through the same-origin /api/read-file proxy and painted as images.
 *
 * This is strong deterrence against casual downloading, not DRM: someone with
 * developer tools can still capture what their browser renders. Downloading a
 * clean copy stays premium-gated via /api/download.
 */
function PdfDocument({ src, onUnsupported }: { src: string; onUnsupported?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<any>(null);
  const renderedRef = useRef<Set<number>>(new Set());
  const renderingRef = useRef<Set<number>>(new Set());
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [numPages, setNumPages] = useState(0);
  const [base, setBase] = useState<{ w: number; h: number } | null>(null);
  const [scale, setScale] = useState(1.15);
  const [page, setPage] = useState(1);
  const [zoomText, setZoomText] = useState("");

  const applyZoom = () => {
    const v = parseInt(zoomText, 10);
    if (!Number.isNaN(v)) {
      const clamped = Math.min(250, Math.max(60, v));
      setScale(+(clamped / 100).toFixed(2));
    }
    setZoomText("");
  };

  // Load the document once.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const lib = await loadPdfJs();
        const task = lib.getDocument({ url: src, disableStream: true, disableRange: true, withCredentials: true });
        const pdf = await task.promise;
        if (cancelled) return;
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        const p1 = await pdf.getPage(1);
        const vp = p1.getViewport({ scale: 1 });
        setBase({ w: vp.width, h: vp.height });
        setStatus("ready");
      } catch {
        if (!cancelled) {
          setStatus("error");
          onUnsupported?.();
        }
      }
    })();
    return () => { cancelled = true; };
  }, [src]);

  const renderPage = useCallback(async (n: number) => {
    const pdf = pdfRef.current;
    if (!pdf || renderedRef.current.has(n) || renderingRef.current.has(n)) return;
    const slot = containerRef.current?.querySelector<HTMLDivElement>(`[data-page="${n}"]`);
    if (!slot) return;
    renderingRef.current.add(n);
    try {
      const pg = await pdf.getPage(n);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const viewport = pg.getViewport({ scale: scale * dpr });
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      canvas.style.width = `${viewport.width / dpr}px`;
      canvas.style.height = `${viewport.height / dpr}px`;
      canvas.style.display = "block";
      canvas.style.margin = "0 auto";
      canvas.style.borderRadius = "4px";
      canvas.style.boxShadow = "0 1px 6px rgba(15,42,68,0.12)";
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      slot.innerHTML = "";
      slot.appendChild(canvas);
      await pg.render({ canvasContext: ctx, viewport }).promise;
      renderedRef.current.add(n);
    } catch {
      /* leave placeholder; will retry if it scrolls back */
    } finally {
      renderingRef.current.delete(n);
    }
  }, [scale]);

  // (Re)observe slots whenever the doc is ready or the scale changes.
  useEffect(() => {
    if (status !== "ready") return;
    const root = containerRef.current;
    if (!root) return;
    renderedRef.current.clear();
    root.querySelectorAll<HTMLDivElement>("[data-page]").forEach((s) => { s.innerHTML = ""; });
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          const n = Number((en.target as HTMLElement).dataset.page);
          if (en.isIntersecting) { void renderPage(n); setPage(n); }
        }
      },
      { root, rootMargin: "300px 0px", threshold: 0.02 }
    );
    root.querySelectorAll("[data-page]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [status, numPages, scale, renderPage]);

  const goto = (n: number) => {
    const t = Math.min(Math.max(1, n), numPages);
    containerRef.current?.querySelector<HTMLDivElement>(`[data-page="${t}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (status === "error") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
        <FileText className="h-10 w-10 text-medical-blue/40" />
        <p className="text-muted-foreground">This document couldn't be opened. Please refresh, or try again shortly.</p>
      </div>
    );
  }

  const slotH = base ? base.h * scale : 900;
  const slotW = base ? base.w * scale : 700;

  return (
    <div className="relative flex h-full flex-col">
      <div
        ref={containerRef}
        className="min-h-0 flex-1 overflow-y-auto bg-[#3a4a5a]/5 px-2 py-4"
        onContextMenu={(e) => e.preventDefault()}
      >
        {status === "loading" && (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <Loader2 className="h-7 w-7 animate-spin text-medical-blue" />
            <p className="text-sm text-muted-foreground">Preparing the document…</p>
          </div>
        )}
        {status === "ready" &&
          Array.from({ length: numPages }, (_, i) => i + 1).map((n) => (
            <div
              key={n}
              data-page={n}
              style={{ minHeight: `${slotH}px`, maxWidth: `${slotW}px`, margin: "0 auto 16px" }}
              className="flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground">Page {n}</span>
            </div>
          ))}
      </div>

      {/* Reader controls — page position + zoom. No download control here by design. */}
      {status === "ready" && (
        <div className="pointer-events-auto flex items-center justify-center gap-2 border-t border-deep-blue/10 bg-white/95 px-3 py-2 text-sm backdrop-blur">
          <button onClick={() => goto(page - 1)} className="focus-ring rounded-lg px-2 py-1 text-medical-blue hover:bg-medical-blue/5" aria-label="Previous page">‹</button>
          <span className="tabular-nums text-deep-blue">Page {page} / {numPages}</span>
          <button onClick={() => goto(page + 1)} className="focus-ring rounded-lg px-2 py-1 text-medical-blue hover:bg-medical-blue/5" aria-label="Next page">›</button>
          <span className="mx-2 h-4 w-px bg-deep-blue/15" />
          <button onClick={() => setScale((s) => Math.max(0.6, +(s - 0.15).toFixed(2)))} className="focus-ring rounded-lg p-1.5 text-medical-blue hover:bg-medical-blue/5" aria-label="Zoom out"><ZoomOut className="h-4 w-4" /></button>
          <span className="inline-flex items-center gap-0.5 text-deep-blue">
            <input
              type="text"
              inputMode="numeric"
              value={zoomText !== "" ? zoomText : String(Math.round(scale * 100))}
              onChange={(e) => setZoomText(e.target.value.replace(/[^0-9]/g, "").slice(0, 3))}
              onFocus={(e) => e.currentTarget.select()}
              onBlur={applyZoom}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  applyZoom();
                  e.currentTarget.blur();
                }
              }}
              aria-label="Zoom percent"
              className="focus-ring w-10 rounded-md border border-deep-blue/15 bg-white px-1 py-0.5 text-center tabular-nums outline-none"
            />
            <span className="tabular-nums">%</span>
          </span>
          <button onClick={() => setScale((s) => Math.min(2.5, +(s + 0.15).toFixed(2)))} className="focus-ring rounded-lg p-1.5 text-medical-blue hover:bg-medical-blue/5" aria-label="Zoom in"><ZoomIn className="h-4 w-4" /></button>
        </div>
      )}
    </div>
  );
}

type DocKind = "pdf" | "image" | "audio" | "video" | "excel" | "word" | "other";

function loadScriptOnce(id: string, src: string, globalKey: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const w = window as any;
    if (w[globalKey]) return resolve(w[globalKey]);
    const finish = () => {
      const g = (window as any)[globalKey];
      g ? resolve(g) : reject(new Error(globalKey + " missing"));
    };
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (el) {
      el.addEventListener("load", finish);
      el.addEventListener("error", () => reject(new Error("load error")));
      return;
    }
    el = document.createElement("script");
    el.id = id;
    el.src = src;
    el.async = true;
    el.onload = finish;
    el.onerror = () => reject(new Error("load error"));
    document.head.appendChild(el);
  });
}

function ViewerLoading({ label }: { label: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
      <Loader2 className="h-6 w-6 animate-spin text-medical-blue" />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

/** Excel/CSV rendered as HTML tables in-app (SheetJS via CDN). File URL never exposed. */
function SheetViewer({ src, onUnsupported }: { src: string; onUnsupported?: () => void }) {
  const [html, setHtml] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const XLSX = await loadScriptOnce(
          "xlsx-cdn",
          "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
          "XLSX"
        );
        const res = await fetch(src, { credentials: "include" });
        if (!res.ok) throw new Error("fetch failed");
        const buf = await res.arrayBuffer();
        const wb = XLSX.read(buf, { type: "array" });
        const parts: string[] = [];
        for (const name of wb.SheetNames as string[]) {
          const table = XLSX.utils.sheet_to_html(wb.Sheets[name]);
          parts.push('<h3 class="sheet-name">' + name + "</h3>" + table);
        }
        if (!cancelled) {
          setHtml(parts.join(""));
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
          onUnsupported?.();
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [src, onUnsupported]);
  if (status === "loading") return <ViewerLoading label="Opening spreadsheet…" />;
  if (status === "error") return null;
  return <div className="sheet-viewer h-full overflow-auto p-6 text-sm" dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Word (.docx) rendered as HTML in-app (mammoth via CDN). */
function DocxViewer({ src, onUnsupported }: { src: string; onUnsupported?: () => void }) {
  const [html, setHtml] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mammoth = await loadScriptOnce(
          "mammoth-cdn",
          "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js",
          "mammoth"
        );
        const res = await fetch(src, { credentials: "include" });
        if (!res.ok) throw new Error("fetch failed");
        const buf = await res.arrayBuffer();
        const out = await mammoth.convertToHtml({ arrayBuffer: buf });
        if (!cancelled) {
          setHtml((out && out.value) || "");
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
          onUnsupported?.();
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [src, onUnsupported]);
  if (status === "loading") return <ViewerLoading label="Opening document…" />;
  if (status === "error") return null;
  return <div className="docx-viewer prose mx-auto max-w-3xl p-8" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function ReaderView({
  itemType, itemId, title, hasFile, kind, backHref, signedIn, isPremium, initialNotes,
}: {
  itemType: "book" | "resource";
  itemId: string;
  title: string;
  hasFile: boolean;
  kind: DocKind;
  backHref: string;
  signedIn: boolean;
  isPremium: boolean;
  initialNotes: ReaderNoteItem[];
}) {
  const [notesOpen, setNotesOpen] = useState(false);
  const [unsupported, setUnsupported] = useState(false);
  const [notes, setNotes] = useState<ReaderNoteItem[]>(initialNotes);
  const [draft, setDraft] = useState("");
  const [isPending, startTransition] = useTransition();

  /**
   * Deterrence for non-premium readers: swallow the common "save/print"
   * shortcuts and the right-click menu so a casual Ctrl+S / Save-as doesn't pull
   * the file down. The PDF now renders as canvases (no native viewer), so there
   * is no built-in download button or "Save as" on the document itself.
   */
  useEffect(() => {
    if (isPremium) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      if (!mod) return;
      const key = e.key.toLowerCase();
      if (key === "s" || key === "p") {
        e.preventDefault();
        toast.info("Downloading and printing are premium features — reading is free.");
      }
    };
    const onContextMenu = (e: MouseEvent) => e.preventDefault();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("contextmenu", onContextMenu);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("contextmenu", onContextMenu);
    };
  }, [isPremium]);

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
          <p className="hidden text-xs text-muted-foreground sm:block">Reading mode</p>
        </div>
        <Button variant="secondary" size="sm" onClick={() => setNotesOpen((o) => !o)}>
          <StickyNote className="mr-1.5 h-4 w-4" /> Notes{notes.length > 0 ? ` (${notes.length})` : ""}
        </Button>
        <BookmarkButton itemType={itemType} itemId={itemId} signedIn={signedIn} canSave={isPremium} />
        <ShareButton
          type={itemType}
          id={itemId}
          title={title}
          className="focus-ring inline-flex items-center gap-1.5 rounded-xl border-2 border-medical-blue/30 px-4 py-2 text-sm font-semibold text-medical-blue transition hover:bg-medical-blue/5"
        />
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Document */}
        <main className="min-w-0 flex-1">
          {!hasFile ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <FileText className="h-10 w-10 text-medical-blue/40" />
              <p className="text-muted-foreground">This item doesn't have a file yet. Please check back soon.</p>
            </div>
          ) : unsupported ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <FileText className="h-10 w-10 text-medical-blue/50" />
              <p className="text-muted-foreground">This file format opens in a new tab.</p>
              <a href={`/api/read-file?type=${itemType}&id=${itemId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2 text-sm font-semibold text-white">
                <ExternalLink className="h-4 w-4" /> Open document
              </a>
            </div>
          ) : kind === "image" ? (
            <div className="flex min-h-full items-start justify-center p-4">
              <img
                src={`/api/read-file?type=${itemType}&id=${itemId}`}
                alt={title}
                className="mx-auto max-h-[calc(100dvh-140px)] max-w-full rounded-lg shadow"
              />
            </div>
          ) : kind === "audio" ? (
            <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
              <FileText className="h-10 w-10 text-medical-blue/50" />
              <p className="font-semibold text-deep-blue">{title}</p>
              <audio controls className="w-full max-w-xl" src={`/api/read-file?type=${itemType}&id=${itemId}`} />
            </div>
          ) : kind === "video" ? (
            <div className="flex h-full items-center justify-center p-4">
              <video
                controls
                className="max-h-[calc(100dvh-140px)] w-full max-w-4xl rounded-lg shadow"
                src={`/api/read-file?type=${itemType}&id=${itemId}`}
              />
            </div>
          ) : kind === "excel" ? (
            <SheetViewer
              src={`/api/read-file?type=${itemType}&id=${itemId}`}
              onUnsupported={() => setUnsupported(true)}
            />
          ) : kind === "word" ? (
            <DocxViewer
              src={`/api/read-file?type=${itemType}&id=${itemId}`}
              onUnsupported={() => setUnsupported(true)}
            />
          ) : (
            <PdfDocument
              src={`/api/read-file?type=${itemType}&id=${itemId}`}
              onUnsupported={() => setUnsupported(true)}
            />
          )}
        </main>

        {/* Notes panel */}
        {notesOpen && (
          <aside className="flex w-full max-w-sm flex-col border-l border-deep-blue/10 bg-white">
            <div className="flex items-center justify-between border-b border-deep-blue/10 px-4 py-3">
              <h2 className="font-semibold text-deep-blue">My notes</h2>
              <button onClick={() => setNotesOpen(false)} className="text-deep-blue/40 hover:text-deep-blue"><X className="h-4 w-4" /></button>
            </div>

            {isPremium ? (
              <div className="border-b border-deep-blue/10 p-4">
                <Textarea rows={3} placeholder="Jot a note as you read…" value={draft} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDraft(e.target.value)} />
                <Button className="mt-2 w-full" size="sm" onClick={save} disabled={isPending || !draft.trim()}>Save note</Button>
              </div>
            ) : (
              <div className="border-b border-deep-blue/10 p-4 text-sm text-muted-foreground">
                Notes unlock with premium access — <Link href="/account" className="font-medium text-medical-blue hover:underline">get access</Link>.
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

