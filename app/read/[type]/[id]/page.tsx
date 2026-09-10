import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";
import { getReaderNotes } from "@/lib/reader/notes";
import { ReaderView, type ReaderNoteItem } from "@/components/reader/ReaderView";
import { PremiumLock } from "@/components/quiz/PremiumLock";
import { buildMetadata } from "@/lib/seo";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ type: string; id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type, id } = await params;
  const title = await titleFor(type, id);
  const base = buildMetadata({ title: title ? `Reading: ${title}` : "Reader", path: `/read/${type}/${id}` });
  const h = await headers();
  const host = h.get("host") ?? "";
  const proto = host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https";
  const origin = host ? `${proto}://${host}` : "";
  const ogUrl = `${origin}/api/og/read?type=${type}&id=${encodeURIComponent(id)}`;
  const ogTitle = title ?? "Hello Clinica";
  return {
    ...base,
    openGraph: { ...(base.openGraph ?? {}), title: ogTitle, images: [{ url: ogUrl, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: ogTitle, images: [ogUrl] },
  };
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

  // Reading a resource's content online is premium (matching downloads). The
  // listing pages stay free — only opening the file requires access. Non-premium
  // visitors get the upgrade prompt instead of the reader.
  if (type === "resource" && !student?.hasAccess) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <PremiumLock signedIn={!!student} title="Reading this guide is a premium feature" />
      </div>
    );
  }

  const notesRaw = await getReaderNotes(type, id);
  const initialNotes: ReaderNoteItem[] = notesRaw.map((n) => ({
    id: n.id, content: n.content, page: n.page, createdAt: n.createdAt.toISOString(),
  }));

  return (
    <ReaderView
      itemType={type}
      itemId={id}
      title={title}
      hasFile={!!fileUrl}
      isPdf={!!fileUrl && /\.pdf($|\?)/i.test(fileUrl)}
      backHref={backHref}
      signedIn={!!student}
      isPremium={!!student?.hasAccess}
      initialNotes={initialNotes}
    />
  );
}

