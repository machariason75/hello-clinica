import Link from "next/link";
import { BookOpen } from "lucide-react";

/**
 * Opens a book or resource in the in-browser reader.
 *
 * Styled as a teal gradient rather than the coral used for Download, so the
 * visual hierarchy reads correctly: coral = the primary/premium action,
 * teal = the free "read it here" action sitting beside it.
 */
export function ReadOnlineButton({
  type,
  id,
  label = "Read online",
}: {
  type: "book" | "resource";
  id: string;
  label?: string;
}) {
  return (
    <Link
      href={`/read/${type}/${id}`}
      className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-medical-blue to-deep-blue px-5 py-2.5 font-semibold text-white shadow-sm transition hover:shadow-md"
    >
      <BookOpen className="h-4 w-4" aria-hidden="true" /> {label}
    </Link>
  );
}
