import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { getAudioTracksForAdmin } from "@/lib/queries/audio";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import {
  AudioTracksManager,
  type AudioTrackRow,
} from "@/components/admin/content/AudioTracksManager";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ bookId: string }> };

/**
 * Audio chapters for one book.
 *
 * Deliberately reached from the Books table rather than given its own sidebar
 * entry — audio belongs to a book, and adding another top-level nav item would
 * clutter the admin for a feature most books won't use.
 */
export default async function AdminBookAudioPage({ params }: Params) {
  const admin = await requireAdmin();
  const { bookId } = await params;

  const book = await prisma.book.findUnique({
    where: { id: bookId },
    select: { id: true, title: true },
  });
  if (!book) notFound();

  const tracks = await getAudioTracksForAdmin(bookId);
  const rows: AudioTrackRow[] = tracks.map((t) => ({
    id: t.id,
    title: t.title,
    source: t.source,
    audioUrl: t.audioUrl,
    externalUrl: t.externalUrl,
    narrator: t.narrator,
    durationSeconds: t.durationSeconds,
    order: t.order,
    published: t.published,
  }));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <Link
          href="/admin/books"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-medical-blue hover:text-coral"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Books
        </Link>

        <AdminPageHeader
          title="Audiobook chapters"
          description="Add chapters as uploaded audio files, or link to audiobooks hosted elsewhere. As soon as one chapter is published, a “Listen” button appears on the book for visitors."
        />

        <AudioTracksManager bookId={book.id} bookTitle={book.title} rows={rows} />
      </div>
    </AdminShell>
  );
}
