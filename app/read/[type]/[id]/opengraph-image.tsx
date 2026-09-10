import { ImageResponse } from "next/og";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const alt = "Hello Clinica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Thumbnail shown when a book/resource link is shared (WhatsApp, Telegram, etc.).
 * Renders the title on a branded gradient so shared links look intentional.
 */
export default async function OgImage({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  const { type, id } = await params;

  let title = "Hello Clinica";
  let kicker = "Free resource";
  try {
    if (type === "book") {
      const b = await prisma.book.findUnique({ where: { id }, select: { title: true } });
      if (b?.title) title = b.title;
      kicker = "Read online";
    } else {
      const r = await prisma.resource.findUnique({ where: { id }, select: { title: true } });
      if (r?.title) title = r.title;
      kicker = "Free resource";
    }
  } catch {
    /* fall back to defaults */
  }

  const gradient =
    type === "book"
      ? "linear-gradient(135deg, #1E4E4A 0%, #274156 100%)"
      : "linear-gradient(135deg, #C2461A 0%, #A93C15 100%)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundImage: gradient,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>Hello Clinica</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 26, textTransform: "uppercase", letterSpacing: 2, opacity: 0.85 }}>
            {kicker}
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        </div>
        <div style={{ fontSize: 26, opacity: 0.85 }}>helloclinica — read it on the site</div>
      </div>
    ),
    { ...size }
  );
}
