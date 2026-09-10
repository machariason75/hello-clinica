"use client";

import { useEffect, useRef, useState } from "react";
import { Share2, Copy, Check } from "lucide-react";

/**
 * Share a book/resource. The link points at the reader page, so it's gated
 * exactly like reading: a shared resource still needs premium to open, a shared
 * book reads free — sharing never bypasses the premium wall. On phones the native
 * share sheet is used (WhatsApp, Instagram, Telegram, etc.); on desktop a small
 * menu offers the common networks plus copy-link.
 */
export function ShareButton({
  type,
  id,
  title = "",
  label = "Share",
  className,
}: {
  type: "book" | "resource";
  id: string;
  title?: string;
  label?: string;
  className?: string;
}) {
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") setUrl(`${window.location.origin}/read/${type}/${id}`);
  }, [type, id]);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const shareText = title
    ? `Check out "${title}" on Hello Clinica`
    : "Take a look at this on Hello Clinica";
  const enc = encodeURIComponent;
  const networks = [
    { name: "WhatsApp", href: `https://wa.me/?text=${enc(`${shareText} ${url}`)}` },
    { name: "Telegram", href: `https://t.me/share/url?url=${enc(url)}&text=${enc(shareText)}` },
    { name: "X (Twitter)", href: `https://twitter.com/intent/tweet?text=${enc(shareText)}&url=${enc(url)}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
  ];

  async function handleShare() {
    if (!url) return;
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title: "Hello Clinica", text: shareText, url });
        return;
      } catch {
        /* user cancelled or unsupported — fall through to menu */
      }
    }
    setOpen((o) => !o);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="relative inline-block" ref={boxRef}>
      <button
        type="button"
        onClick={handleShare}
        className={
          className ??
          "focus-ring inline-flex items-center gap-2 rounded-xl border-2 border-medical-blue/30 px-5 py-2.5 font-semibold text-medical-blue transition hover:bg-medical-blue/5"
        }
      >
        <Share2 className="h-4 w-4" aria-hidden="true" /> {label}
      </button>

      {open && (
        <div className="absolute left-0 z-30 mt-2 w-52 overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-lg">
          {networks.map((n) => (
            <a
              key={n.name}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl px-3 py-2 text-sm font-medium text-deep-blue hover:bg-brand-bg"
              onClick={() => setOpen(false)}
            >
              {n.name}
            </a>
          ))}
          <button
            type="button"
            onClick={copyLink}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium text-deep-blue hover:bg-brand-bg"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
            {copied ? "Link copied" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  );
}
