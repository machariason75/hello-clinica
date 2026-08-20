import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Streams an audiobook track without exposing the real storage URL.
 *
 *   /api/read-audio?trackId=<id>
 *
 * Same model as /api/read-file for PDFs: the browser only ever sees this
 * endpoint, so the underlying UploadThing URL can't be lifted from the page
 * source and shared as a permanent public download link.
 *
 * The one addition over the PDF route is RANGE support. Audio players seek by
 * asking for byte ranges; without forwarding those, the scrub bar and
 * skip-forward buttons don't work on most browsers.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const trackId = url.searchParams.get("trackId");
  if (!trackId) return new NextResponse("Not found", { status: 404 });

  // Hotlink guard. Block only a *cross-origin* referer (another site embedding
  // this endpoint). A missing referer is normal — a new-tab open or a referrer
  // policy that strips the header — and must be allowed, or the player breaks.
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

  const track = await prisma.audioTrack.findUnique({
    where: { id: trackId },
    select: { audioUrl: true, source: true, published: true },
  });

  if (!track?.published || track.source !== "upload" || !track.audioUrl) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Forward the browser's Range header so seeking works.
  const range = req.headers.get("range");
  const upstream = await fetch(track.audioUrl, {
    headers: range ? { Range: range } : {},
    cache: "no-store",
  });

  if (!upstream.ok || !upstream.body) {
    return new NextResponse("Unable to load audio", { status: 502 });
  }

  const headers = new Headers({
    "Content-Type": upstream.headers.get("content-type") ?? "audio/mpeg",
    "Content-Disposition": "inline",
    "Accept-Ranges": "bytes",
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff",
  });

  // Pass through the range metadata so the player knows the full length.
  const contentRange = upstream.headers.get("content-range");
  if (contentRange) headers.set("Content-Range", contentRange);
  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers.set("Content-Length", contentLength);

  return new NextResponse(upstream.body, {
    status: upstream.status === 206 ? 206 : 200,
    headers,
  });
}
