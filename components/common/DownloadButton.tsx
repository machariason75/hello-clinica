import Link from "next/link";
import { BookOpen, Download } from "lucide-react";

/**
 * Primary "Read online" action opens the in-browser reader; the secondary
 * "Download" action goes through /api/download, which is premium-gated
 * (non-premium users are redirected to the account page with an upgrade note).
 *
 * Drop-in replacement for the previous download-only button — same props.
 */
export function DownloadButton({
  type,
  id,
  fileUrl,
  label = "Download",
}: {
  type: "resource" | "book";
  id: string;
  fileUrl?: string | null;
  label?: string;
}) {
  if (!fileUrl) {
    return (
      <p className="text-sm text-muted-foreground">
        This item will be available to read shortly.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={`/read/${type}/${id}`}
        className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-coral to-[#E8613F] px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
      >
        <BookOpen className="h-4 w-4" /> Read online
      </Link>
      <a
        href={`/api/download?type=${type}&id=${id}`}
        className="focus-ring inline-flex items-center gap-2 rounded-xl border-2 border-medical-blue/30 px-5 py-2.5 font-semibold text-medical-blue transition hover:bg-medical-blue/5"
        title="Downloading is a premium feature"
      >
        <Download className="h-4 w-4" /> {label}
      </a>
    </div>
  );
}
