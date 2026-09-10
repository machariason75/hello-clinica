import { ImageResponse } from "next/og";
import { createElement as h } from "react";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

/**
 * Social share thumbnail for /read/<type>/<id>: the hero clinician photo beside
 * the book/resource title. Written with React.createElement (no JSX) so it
 * builds cleanly in a .ts route handler.
 */
export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const type = searchParams.get("type") === "book" ? "book" : "resource";
  const id = searchParams.get("id") ?? "";

  let title = "Hello Clinica";
  try {
    if (type === "book") {
      const b = await prisma.book.findUnique({ where: { id }, select: { title: true } });
      if (b?.title) title = b.title;
    } else {
      const r = await prisma.resource.findUnique({ where: { id }, select: { title: true } });
      if (r?.title) title = r.title;
    }
  } catch {
    /* keep default */
  }

  const label = type === "book" ? "Recommended reading" : "Free resource";
  // Change medic-1 to medic-2 … medic-5 to use a different hero photo.
  const photo = `${origin}/images/medics/medic-1.jpg`;

  const element = h(
    "div",
    { style: { display: "flex", width: "100%", height: "100%", fontFamily: "sans-serif" } },
    h("img", {
      src: photo,
      width: 520,
      height: 630,
      style: { width: "520px", height: "630px", objectFit: "cover" },
    }),
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "680px",
          height: "630px",
          padding: "56px",
          backgroundColor: "#FBF5EF",
        },
      },
      h("div", { style: { fontSize: 30, fontWeight: 700, color: "#0C3C4C" } }, "Hello Clinica"),
      h(
        "div",
        { style: { display: "flex", flexDirection: "column" } },
        h(
          "div",
          {
            style: {
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#C2461A",
              fontWeight: 600,
            },
          },
          label
        ),
        h(
          "div",
          { style: { fontSize: 54, fontWeight: 800, color: "#082C38", lineHeight: 1.1, marginTop: 16 } },
          title
        )
      ),
      h("div", { style: { fontSize: 22, color: "#5F6B70" } }, "Read it on the site")
    )
  );

  return new ImageResponse(element, { width: 1200, height: 630 });
}
