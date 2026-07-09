import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";

/**
 * Download endpoint (premium-gated).
 *   /api/download?type=resource|book&id=<id>
 *
 * Free users can READ content on the site, but only premium students may
 * download the file to their device. Non-premium requests are redirected to
 * the account page with a friendly upgrade note. Premium requests are logged
 * and 307-redirected to the file.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type");
  const id = url.searchParams.get("id");
  const origin = url.origin;

  if ((type !== "resource" && type !== "book") || !id) {
    return NextResponse.redirect(`${origin}/`, { status: 307 });
  }

  // Resolve the file for this item.
  let fileUrl: string | null = null;
  if (type === "resource") {
    const r = await prisma.resource.findUnique({ where: { id }, select: { resourceFile: true } });
    fileUrl = r?.resourceFile ?? null;
  } else {
    const b = await prisma.book.findUnique({ where: { id }, select: { fileUrl: true } });
    fileUrl = b?.fileUrl ?? null;
  }

  if (!fileUrl) {
    return NextResponse.redirect(`${origin}/account?need=download`, { status: 307 });
  }

  // Premium gate.
  const student = await getStudent();
  if (!student?.hasAccess) {
    return NextResponse.redirect(`${origin}/account?need=download`, { status: 307 });
  }

  // Log the download (best-effort).
  try {
    const ipHeader = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
    const ipAddress = ipHeader ? ipHeader.split(",")[0]?.trim() || null : null;
    await prisma.downloadLog.create({
      data: {
        resourceId: type === "resource" ? id : null,
        bookId: type === "book" ? id : null,
        ipAddress,
      },
    });
  } catch {
    /* non-critical */
  }

  return NextResponse.redirect(fileUrl, { status: 307 });
}
