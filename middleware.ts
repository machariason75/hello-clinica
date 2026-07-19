import { withAuth } from "next-auth/middleware";
import { NextResponse, type NextRequest, type NextFetchEvent } from "next/server";

/**
 * Route protection for BOTH private areas.
 *
 * Admin   — NextAuth session (JWT), handled by withAuth.
 * Student — the custom `hc_student` signed cookie.
 *
 * Why students needed adding: previously only /admin was guarded here, and every
 * student page had to remember to call getStudent() itself. One forgotten call
 * and that page is silently public. This closes that hole centrally.
 *
 * Note on crypto: middleware runs on the Edge runtime, where Node's `crypto`
 * module isn't available — so the token is verified with the Web Crypto API
 * instead. Same HMAC-SHA256, same secret, same result.
 */

const SECRET = process.env.NEXTAUTH_SECRET || "dev-insecure-secret-change-me";
const STUDENT_COOKIE = "hc_student";

/** Account pages that MUST stay reachable while signed out. */
const PUBLIC_ACCOUNT_PATHS = [
  "/account/login",
  "/account/register",
  "/account/forgot-password",
  "/account/reset-password",
];

function toBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string): string {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  return atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
}

/**
 * Verifies the student cookie. Returns the student id, or null.
 * Mirrors lib/student/session.ts exactly: base64url(payload).base64url(HMAC).
 */
async function verifyStudentToken(token: string | undefined): Promise<string | null> {
  if (!token || !token.includes(".")) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;

  try {
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(SECRET),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body));
    const expected = toBase64Url(signature);

    // Length check first, then a constant-time comparison: never bail out on the
    // first differing character, or the timing itself leaks the signature.
    if (expected.length !== sig.length) return null;
    let diff = 0;
    for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
    if (diff !== 0) return null;

    const payload = JSON.parse(fromBase64Url(body));
    if (typeof payload.sub !== "string") return null;
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return null;
    return payload.sub;
  } catch {
    return null;
  }
}

const adminAuth = withAuth({ pages: { signIn: "/admin/login" } });

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname, search } = req.nextUrl;

  // ---- ADMIN ----
  if (pathname.startsWith("/admin")) {
    if (pathname.startsWith("/admin/login")) return NextResponse.next();
    return (adminAuth as unknown as (r: NextRequest, e: NextFetchEvent) => Promise<Response>)(req, event);
  }

  // ---- STUDENT ----
  if (pathname.startsWith("/account")) {
    if (PUBLIC_ACCOUNT_PATHS.some((p) => pathname.startsWith(p))) {
      return NextResponse.next();
    }

    const studentId = await verifyStudentToken(req.cookies.get(STUDENT_COOKIE)?.value);
    if (!studentId) {
      const login = new URL("/account/login", req.url);
      // Send them back where they were headed once they've signed in.
      login.searchParams.set("next", pathname + search);
      return NextResponse.redirect(login);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/account/:path*"],
};
