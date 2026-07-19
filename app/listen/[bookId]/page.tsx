import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";
import { getBookPlaylist } from "@/lib/queries/audio";
import { AudioPlayer } from "@/components/audio/AudioPlayer";
import { buildMetadata } from "@/lib/seo";
import { getBookCategoryByEnum } from "@/lib/data/book-categories";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ bookId: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { bookId } = await params;
  const book = await prisma.book.findUnique({
    where: { id: bookId },
    select: { title: true },
  });
  return buildMetadata({
    title: book ? `Listen: ${book.title}` : "Listen",
    path: `/listen/${bookId}`,
  });
}

/**
 * The audiobook player page.
 *
 * Listening is FREE, mirroring the rule that reading is free — the premium tier
 * is about downloading and the Question Bank. Signed-in students additionally
 * get their position remembered across devices.
 */
export default async function ListenPage({ params }: Params) {
  const { bookId } = await params;

  const book = await prisma.book.findUnique({
    where: { id: bookId },
    select: { id: true, title: true, author: true, coverImage: true, category: true, published: true },
  });
  if (!book?.published) notFound();

  const student = await getStudent();
  const tracks = await getBookPlaylist(bookId, student?.id ?? null);
  if (tracks.length === 0) notFound();

  return (
    <main className="min-h-screen bg-brand-bg px-4 py-8 sm:py-12">
      <AudioPlayer
        bookTitle={book.title}
        author={book.author}
        coverImage={book.coverImage}
        tracks={tracks}
        backHref={`/books/${getBookCategoryByEnum(book.category)?.slug ?? "recommended-books"}/${book.id}`}
        signedIn={!!student}
      />
    </main>
  );
}
