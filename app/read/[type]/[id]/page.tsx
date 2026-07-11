import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";
import { getReaderNotes } from "@/lib/reader/notes";
import { ReaderView, type ReaderNoteItem } from "@/components/reader/ReaderView";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ type: string; id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type, id } = await params;
  const title = await titleFor(type, id);
  return buildMetadata({ title: title ? `Reading: ${title}` : "Reader", path: `/read/${type}/${id}` });
}

async function titleFor(type: string, id: string): Promise<string | null> {
  if (type === "resource") return (await prisma.resource.findUnique({ where: { id }, select: { title: true } }))?.title ?? null;
  if (type === "book") return (await prisma.book.findUnique({ where: { id }, select: { title: true } }))?.title ?? null;
  return null;
}

export default async function ReaderPage({ params }: Params) {
  const { type, id } = await params;
  if (type !== "book" && type !== "resource") notFound();

  let title = "";
  let fileUrl: string | null = null;
  let backHref = "/resources";

  if (type === "resource") {
    const r = await prisma.resource.findUnique({ where: { id }, select: { title: true, resourceFile: true, published: true } });
    if (!r || !r.published) notFound();
    title = r.title; fileUrl = r.resourceFile; backHref = "/resources";
  } else {
    const b = await prisma.book.findUnique({ where: { id }, select: { title: true, fileUrl: true, published: true } });
    if (!b || !b.published) notFound();
    title = b.title; fileUrl = b.fileUrl; backHref = "/books";
  }

  const student = await getStudent();
  const notesRaw = await getReaderNotes(type, id);
  const initialNotes: ReaderNoteItem[] = notesRaw.map((n) => ({
    id: n.id, content: n.content, page: n.page, createdAt: n.createdAt.toISOString(),
  }));

  return (
    <ReaderView
      itemType={type}
      itemId={id}
      title={title}
      fileUrl={fileUrl}
      backHref={backHref}
      signedIn={!!student}
      isPremium={!!student?.hasAccess}
      initialNotes={initialNotes}
    />
  );
}
