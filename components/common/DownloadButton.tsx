import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ShareButton } from "@/components/common/ShareButton";

/**
 * "Read online" (teal, matching the site) + "Share". Download has been replaced
 * by sharing; a shared link points at the reader, so it stays gated like reading.
 */
export function DownloadButton({
  type,
  id,
  fileUrl,
  title,
}: {
  type: "resource" | "book";
  id: string;
  fileUrl?: string | null;
  title?: string;
  label?: string;
}) {
  if (!fileUrl) {
    return <p className="text-sm text-muted-foreground">This item will be available to read shortly.</p>;
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={`/read/${type}/${id}`}
        className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-medical-blue to-deep-blue px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
      >
        <BookOpen className="h-4 w-4" aria-hidden="true" /> Read online
      </Link>
      <ShareButton type={type} id={id} title={title} />
    </div>
  );
}
