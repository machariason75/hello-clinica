import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Streams an item's file INLINE for the in-browser reader (PDF, image, audio,
 * video, and — parsed client-side — Excel/Word).
 *   /api/read-file?type=book|resource&id=<id>
 *
 * Reading is free (this powers the reader). Downloading to a device is not
 * offered. Serving same-origin keeps the underlying storage URL hidden and lets
 * the viewers render without cross-origin issues. Range requests are forwarded so
 * audio and video stream and seek correctly.
 */
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);

  // Hotlink guard: block only a *cross-origin* referer. A missing referer is
  // normal (new tab / stripped referrer) and allowed.
  const referer = req.headers.get("referer");
  if (referer) {
    let refOrigin = "";
    try {
      refOrigin = new URL(referer).origin;
    } catch {
      refOrigin = "";
    }
    if (refOrigin && refOrigin !== url.origin) {
      return NextResponse.json({ error: "Not available" }, { status: 403 });
    }
  }

  const type = url.searchParams.get("type");
  const id = url.searchParams.get("id");
  if ((type !== "book" && type !== "resource") || !id) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  let fileUrl: string | null = null;
  let title = "document";
  if (type === "book") {
    const b = await prisma.book.findUnique({ where: { id }, select: { fileUrl: true, title: true } });
    fileUrl = b?.fileUrl ?? null;
    title = b?.title ?? title;
  } else {
    const r = await prisma.resource.findUnique({ where: { id }, select: { resourceFile: true, title: true } });
    fileUrl = r?.resourceFile ?? null;
    title = r?.title ?? title;
  }
  if (!fileUrl) return NextResponse.json({ error: "No file" }, { status: 404 });

  // Forward the browser's Range header so media can stream/seek.
  const range = req.headers.get("range");
  const upstream = await fetch(fileUrl, range ? { headers: { Range: range } } : undefined);
  if (!upstream.ok || !upstream.body) {
    return NextResponse.json({ error: "Unavailable" }, { status: 502 });
  }

  const contentType = upstream.headers.get("content-type") || "application/octet-stream";
  const safeName = title.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

  const headers: Record<string, string> = {
    "Content-Type": contentType,
    "Content-Disposition": `inline; filename="${safeName}"`,
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff",
    "Accept-Ranges": "bytes",
  };
  const contentRange = upstream.headers.get("content-range");
  if (contentRange) headers["Content-Range"] = contentRange;
  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers["Content-Length"] = contentLength;

  // 206 when the upstream honoured the range, otherwise 200.
  return new NextResponse(upstream.body, { status: upstream.status === 206 ? 206 : 200, headers });
}
