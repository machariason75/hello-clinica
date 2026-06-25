import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/download?type=resource|book&id=<id>
 * Logs the download (DownloadLog), increments book download counts, then
 * redirects to the stored file URL. Published + non-archived items only.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

  if (!id || (type !== "resource" && type !== "book")) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  let fileUrl: string | null = null;

  if (type === "resource") {
    const resource = await prisma.resource.findUnique({ where: { id } });
    if (!resource || !resource.published || resource.archived) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    fileUrl = resource.resourceFile;
    await prisma.downloadLog.create({ data: { resourceId: id, ipAddress: ip } });
  } else {
    const book = await prisma.book.findUnique({ where: { id } });
    if (!book || !book.published || book.archived) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    fileUrl = book.fileUrl;
    await prisma.$transaction([
      prisma.downloadLog.create({ data: { bookId: id, ipAddress: ip } }),
      prisma.book.update({ where: { id }, data: { downloadCount: { increment: 1 } } }),
    ]);
  }

  if (!fileUrl) {
    return NextResponse.json({ error: "No file attached" }, { status: 404 });
  }

  return NextResponse.redirect(fileUrl);
}
