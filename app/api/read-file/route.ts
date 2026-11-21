import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { classify, detectFileKind, type DocKind } from "@/lib/reader/file-kind";

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

  // Storage often reports "application/octet-stream" for files with no
  // extension. With nosniff, browsers then DOWNLOAD instead of displaying, so we
  // work out the real type from the file's signature and serve that instead.
  const reported = (upstream.headers.get("content-type") || "").toLowerCase();
  const generic = !reported || /octet-stream|x-download|force-download|zip/.test(reported);
  let body: ReadableStream<Uint8Array> = upstream.body;
  let contentType = reported || "application/octet-stream";
  let kind: DocKind = "other";

  const startsAtZero = !range || /^bytes=0-/.test(range);
  if (startsAtZero) {
    // Peek at the first bytes of the stream we're already sending, then replay them.
    const reader = upstream.body.getReader();
    const head: Uint8Array[] = [];
    let got = 0;
    while (got < 16384) {
      const { done, value } = await reader.read();
      if (done || !value) break;
      head.push(value);
      got += value.length;
    }
    const joined = new Uint8Array(got);
    let o = 0;
    for (const c of head) { joined.set(c, o); o += c.length; }
    const c = classify(joined, reported, fileUrl);
    kind = c.kind;
    if (generic) contentType = c.mime;
    body = new ReadableStream<Uint8Array>({
      start(ctrl) { for (const c of head) ctrl.enqueue(c); },
      async pull(ctrl) {
        const { done, value } = await reader.read();
        if (done) ctrl.close(); else if (value) ctrl.enqueue(value);
      },
      cancel() { reader.cancel().catch(() => {}); },
    });
  } else if (generic) {
    const d = await detectFileKind(fileUrl);
    kind = d.kind;
    contentType = d.mime;
  }

  const ext: Partial<Record<DocKind, string>> = { pdf: ".pdf", word: ".docx", excel: ".xlsx", powerpoint: ".pptx", epub: ".epub", text: ".txt" };
  const safeName = title.replace(/[^a-z0-9]+/gi, "-").toLowerCase() + (ext[kind] ?? "");

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
  return new NextResponse(body, { status: upstream.status === 206 ? 206 : 200, headers });
}
