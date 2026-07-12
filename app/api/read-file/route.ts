import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Streams an item's file INLINE for the in-browser reader.
 *   /api/read-file?type=book|resource&id=<id>
 *
 * Reading is free (this powers the reader). Downloading to a device stays
 * premium-gated via /api/download. Serving same-origin lets pdf.js render the
 * file without cross-origin issues, and keeps the underlying storage URL hidden.
 */
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);

  // Only serve this to our own reader page. A pasted URL, a hotlink, or a direct
  // fetch from another site has no matching referer and is refused — so this
  // endpoint can't be used as a backdoor download link.
  const referer = req.headers.get("referer");
  const sameOrigin = !!referer && new URL(referer).origin === url.origin;
  if (!sameOrigin) {
    return NextResponse.json({ error: "Not available" }, { status: 403 });
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
    fileUrl = b?.fileUrl ?? null; title = b?.title ?? title;
  } else {
    const r = await prisma.resource.findUnique({ where: { id }, select: { resourceFile: true, title: true } });
    fileUrl = r?.resourceFile ?? null; title = r?.title ?? title;
  }
  if (!fileUrl) return NextResponse.json({ error: "No file" }, { status: 404 });

  const upstream = await fetch(fileUrl);
  if (!upstream.ok || !upstream.body) {
    return NextResponse.json({ error: "Unavailable" }, { status: 502 });
  }

  const contentType = upstream.headers.get("content-type") || "application/pdf";
  const safeName = title.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  return new NextResponse(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      // inline = render in the viewer; never "save to disk"
      "Content-Disposition": `inline; filename="${safeName}"`,
      // don't let the bytes sit in shared/CDN caches
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
