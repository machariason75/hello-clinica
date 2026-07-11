"use client";

import { useState } from "react";
import { toast } from "sonner";
import { X, LinkIcon, FileText, UploadCloud } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing/client";
import type { OurFileRouter } from "@/lib/uploadthing/core";
import { cn } from "@/lib/utils";

type Endpoint = keyof OurFileRouter;

/**
 * Admin upload field. Uploads a file from the admin's computer via UploadThing
 * and stores the returned URL through `onChange`. Shows a live preview with a
 * remove control, and keeps a "paste a URL instead" fallback so existing links
 * still work and nothing is lost if an admin prefers to host elsewhere.
 */
export function UploadField({
  label,
  endpoint,
  kind,
  value,
  onChange,
  error,
}: {
  label: string;
  endpoint: Endpoint;
  kind: "image" | "file";
  value: string;
  onChange: (url: string) => void;
  error?: string;
}) {
  const [showUrl, setShowUrl] = useState(false);
  const hasValue = value.trim().length > 0;

  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      {hasValue ? (
        <div className="flex items-center gap-3 rounded-xl border border-border bg-white p-3">
          {kind === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value}
              alt="Current upload preview"
              className="h-16 w-16 shrink-0 rounded-lg object-cover"
            />
          ) : (
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-brand-bg text-medical-blue">
              <FileText className="h-7 w-7" />
            </span>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-deep-blue">
              {kind === "image" ? "Image attached" : "File attached"}
            </p>
            <a
              href={value}
              target="_blank"
              rel="noreferrer"
              className="block truncate text-xs text-medical-blue hover:underline"
            >
              {value}
            </a>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onChange("")}
            aria-label="Remove file"
          >
            <X className="h-4 w-4" /> Remove
          </Button>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-brand-bg/40 p-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <UploadCloud className="h-6 w-6 text-medical-blue" />
            <UploadButton
              endpoint={endpoint}
              onClientUploadComplete={(res) => {
                const url = res?.[0]?.url;
                if (url) {
                  onChange(url);
                  toast.success("Upload complete.");
                } else {
                  toast.error("Upload finished but no file URL was returned.");
                }
              }}
              onUploadError={(e: Error) => { toast.error(e.message || "Upload failed."); }}
              appearance={{
                button:
                  "ut-ready:bg-medical-blue ut-uploading:bg-medical-blue/70 bg-medical-blue text-white text-sm font-semibold rounded-xl px-4 h-10",
                allowedContent: "text-xs text-muted-foreground",
              }}
            />
            <button
              type="button"
              onClick={() => setShowUrl((v) => !v)}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-medical-blue"
            >
              <LinkIcon className="h-3 w-3" />
              {showUrl ? "Hide URL option" : "or paste a URL instead"}
            </button>
            {showUrl && (
              <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="https://…"
                className="mt-1"
              />
            )}
          </div>
        </div>
      )}

      {error && <p className={cn("text-sm text-destructive")}>{error}</p>}
    </div>
  );
}
