import crypto from "crypto";

/**
 * Minimal, self-contained signed-token session for STUDENT accounts.
 * Kept entirely separate from the admin NextAuth session so the two never mix.
 *
 * Token format:  base64url(payloadJson).base64url(HMAC_SHA256(payloadJson))
 * Signed with NEXTAUTH_SECRET (already configured for this app).
 */

const SECRET = process.env.NEXTAUTH_SECRET || "dev-insecure-secret-change-me";
export const STUDENT_COOKIE = "hc_student";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

function b64url(input: Buffer | string): string {
  return Buffer.from(input).toString("base64url");
}

function sign(data: string): string {
  return crypto.createHmac("sha256", SECRET).update(data).digest("base64url");
}

export function createSessionToken(studentId: string): string {
  const payload = JSON.stringify({ sub: studentId, exp: Date.now() + MAX_AGE_SECONDS * 1000 });
  const body = b64url(payload);
  return `${body}.${sign(body)}`;
}

export function verifySessionToken(token: string | undefined | null): string | null {
  if (!token || !token.includes(".")) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = sign(body);
  // constant-time compare
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (typeof payload.sub !== "string") return null;
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return null;
    return payload.sub;
  } catch {
    return null;
  }
}

export const studentCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: MAX_AGE_SECONDS,
};
