import { Download } from "lucide-react";

/**
 * Download link → /api/download (logs the download, then redirects to the file).
 * Coral styling per the approved button hierarchy (downloads = coral accent).
 * Renders a disabled-looking note when no file is attached yet.
 */
export function DownloadButton({
  type,
  id,
  fileUrl,
  label = "Download",
}: {
  type: "resource" | "book";
  id: string;
  fileUrl: string | null;
  label?: string;
}) {
  if (!fileUrl) {
    return (
      <span className="inline-flex h-11 items-center rounded-xl bg-brand-bg px-4 text-sm font-medium text-muted-foreground">
        Coming soon
      </span>
    );
  }

  return (
    <a
      href={`/api/download?type=${type}&id=${encodeURIComponent(id)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring inline-flex h-11 items-center gap-2 rounded-xl bg-coral px-5 font-semibold text-white shadow-sm transition-colors hover:bg-coral-dark"
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
