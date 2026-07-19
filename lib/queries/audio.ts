import { prisma } from "@/lib/prisma";

/**
 * Audiobook reads.
 *
 * Mirrors the reader's security model: the real audio URL is resolved on the
 * server and never handed to the browser. The client gets an id and plays it
 * through /api/read-audio instead.
 */

export type PlayableTrack = {
  id: string;
  title: string;
  narrator: string | null;
  durationSeconds: number | null;
  order: number;
  /** true = plays through our own streaming endpoint */
  isHosted: boolean;
  /** only set for external tracks, which are public links anyway */
  externalUrl: string | null;
  /** where this student left off, in seconds */
  resumeAt: number;
  completed: boolean;
};

/** Does this book have anything to listen to? Used to show/hide the Listen button. */
export async function bookHasAudio(bookId: string): Promise<boolean> {
  const count = await prisma.audioTrack.count({
    where: { bookId, published: true },
  });
  return count > 0;
}

/** Every book id that has published audio — lets listing pages badge them cheaply. */
export async function bookIdsWithAudio(): Promise<Set<string>> {
  const rows = await prisma.audioTrack.findMany({
    where: { published: true },
    select: { bookId: true },
    distinct: ["bookId"],
  });
  return new Set(rows.map((r) => r.bookId));
}

/**
 * The playlist for one book, with this student's resume position folded in.
 * Pass studentId = null for signed-out visitors (they can listen, just not resume).
 */
export async function getBookPlaylist(
  bookId: string,
  studentId: string | null
): Promise<PlayableTrack[]> {
  const tracks = await prisma.audioTrack.findMany({
    where: { bookId, published: true },
    orderBy: { order: "asc" },
  });

  if (tracks.length === 0) return [];

  // One query for all progress rows rather than one per track.
  const progress = studentId
    ? await prisma.audioProgress.findMany({
        where: { studentId, trackId: { in: tracks.map((t) => t.id) } },
        select: { trackId: true, positionSeconds: true, completed: true },
      })
    : [];
  const byTrack = new Map(progress.map((p) => [p.trackId, p]));

  return tracks.map((t) => {
    const p = byTrack.get(t.id);
    return {
      id: t.id,
      title: t.title,
      narrator: t.narrator,
      durationSeconds: t.durationSeconds,
      order: t.order,
      isHosted: t.source === "upload" && !!t.audioUrl,
      externalUrl: t.source === "external" ? t.externalUrl : null,
      resumeAt: p?.positionSeconds ?? 0,
      completed: p?.completed ?? false,
    };
  });
}

/** Admin view: every track for a book, published or not. */
export async function getAudioTracksForAdmin(bookId: string) {
  return prisma.audioTrack.findMany({
    where: { bookId },
    orderBy: { order: "asc" },
  });
}

/**
 * Listening analytics for the admin.
 *
 * Counts come from audio_progress, which has a unique constraint on
 * (studentId, trackId) — so one student can only ever contribute ONE row per
 * track. That makes double-counting structurally impossible rather than
 * something we have to remember to guard against.
 */
export async function getAudioStats() {
  const [trackCount, listenerRows, completedCount, topTracks] = await Promise.all([
    prisma.audioTrack.count({ where: { published: true } }),
    prisma.audioProgress.findMany({ select: { studentId: true }, distinct: ["studentId"] }),
    prisma.audioProgress.count({ where: { completed: true } }),
    prisma.audioProgress.groupBy({
      by: ["trackId"],
      _count: { trackId: true },
      orderBy: { _count: { trackId: "desc" } },
      take: 5,
    }),
  ]);

  const titles = await prisma.audioTrack.findMany({
    where: { id: { in: topTracks.map((t) => t.trackId) } },
    select: { id: true, title: true, book: { select: { title: true } } },
  });
  const titleById = new Map(titles.map((t) => [t.id, t]));

  return {
    trackCount,
    listenerCount: listenerRows.length,
    completedCount,
    topTracks: topTracks.map((t) => ({
      trackId: t.trackId,
      listeners: t._count.trackId,
      title: titleById.get(t.trackId)?.title ?? "Removed track",
      bookTitle: titleById.get(t.trackId)?.book.title ?? "",
    })),
  };
}
