import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

/**
 * Rate limiting — brute-force and spam protection.
 *
 * Uses the existing `login_attempts` table rather than an external service
 * (Redis/Upstash). At this site's scale that's equivalent protection with one
 * less service to pay for, key to leak, or outage to absorb.
 *
 * Design notes:
 *  - We limit on BOTH email and IP. Email alone lets an attacker spray many
 *    accounts from one machine; IP alone lets a botnet hammer one account.
 *  - A failed attempt counts; a successful one clears the slate.
 *  - We fail OPEN (allow the request) if the check itself errors. A database
 *    hiccup should never lock every user out of the site.
 */

const WINDOW_MINUTES = 15; // how far back we count failures
const MAX_FAILURES = 5; // failures allowed in that window
const LOCKOUT_MINUTES = 15; // how long a lockout lasts

export type RateLimitResult = {
  allowed: boolean;
  /** Minutes remaining on the lockout, when blocked. */
  retryAfterMinutes?: number;
  message?: string;
};

/** Best-effort client IP (behind Vercel's proxy). */
export async function clientIp(): Promise<string | null> {
  try {
    const h = await headers();
    const fwd = h.get("x-forwarded-for") || h.get("x-real-ip");
    return fwd ? fwd.split(",")[0]?.trim() || null : null;
  } catch {
    return null;
  }
}

/**
 * Checks whether a login may proceed. Call BEFORE verifying the password.
 */
export async function checkLoginAllowed(email: string, ip: string | null): Promise<RateLimitResult> {
  try {
    const now = new Date();
    const normalized = email.toLowerCase().trim();

    // 1. Is there an active lockout for this email?
    const locked = await prisma.loginAttempt.findFirst({
      where: { email: normalized, lockedUntil: { gt: now } },
      orderBy: { attemptedAt: "desc" },
      select: { lockedUntil: true },
    });

    if (locked?.lockedUntil) {
      const mins = Math.max(1, Math.ceil((locked.lockedUntil.getTime() - now.getTime()) / 60000));
      return {
        allowed: false,
        retryAfterMinutes: mins,
        message: `Too many failed attempts. Please try again in ${mins} minute${mins === 1 ? "" : "s"}.`,
      };
    }

    // 2. Count recent failures for this email, and separately for this IP.
    const since = new Date(now.getTime() - WINDOW_MINUTES * 60 * 1000);

    const [emailFailures, ipFailures] = await Promise.all([
      prisma.loginAttempt.count({
        where: { email: normalized, successful: false, attemptedAt: { gte: since } },
      }),
      ip
        ? prisma.loginAttempt.count({
            where: { ipAddress: ip, successful: false, attemptedAt: { gte: since } },
          })
        : Promise.resolve(0),
    ]);

    // An IP gets more headroom than a single account — a shared office or campus
    // network can legitimately produce several failures.
    if (emailFailures >= MAX_FAILURES || ipFailures >= MAX_FAILURES * 4) {
      const lockedUntil = new Date(now.getTime() + LOCKOUT_MINUTES * 60 * 1000);
      await prisma.loginAttempt.create({
        data: { email: normalized, ipAddress: ip, successful: false, lockedUntil },
      });
      return {
        allowed: false,
        retryAfterMinutes: LOCKOUT_MINUTES,
        message: `Too many failed attempts. Please try again in ${LOCKOUT_MINUTES} minutes.`,
      };
    }

    return { allowed: true };
  } catch {
    // Fail open — never lock people out because the checker itself broke.
    return { allowed: true };
  }
}

/** Records the outcome of a login attempt. Call AFTER verifying the password. */
export async function recordLoginAttempt(email: string, ip: string | null, successful: boolean): Promise<void> {
  try {
    const normalized = email.toLowerCase().trim();
    await prisma.loginAttempt.create({
      data: { email: normalized, ipAddress: ip, successful },
    });

    // A successful login clears the recent failures, so a user who finally
    // remembers their password isn't still sitting near a lockout.
    if (successful) {
      await prisma.loginAttempt.deleteMany({
        where: { email: normalized, successful: false },
      });
    }
  } catch {
    /* never block a login because logging failed */
  }
}

/**
 * Generic limiter for public forms (contact, newsletter, password-reset
 * requests). Keyed by IP + action so spamming one form doesn't block another.
 */
export async function checkFormAllowed(action: string, ip: string | null, max = 5): Promise<RateLimitResult> {
  if (!ip) return { allowed: true };
  try {
    const now = new Date();
    const since = new Date(now.getTime() - WINDOW_MINUTES * 60 * 1000);
    const key = `form:${action}`;

    const recent = await prisma.loginAttempt.count({
      where: { email: key, ipAddress: ip, attemptedAt: { gte: since } },
    });

    if (recent >= max) {
      return {
        allowed: false,
        retryAfterMinutes: WINDOW_MINUTES,
        message: "You've sent this a few times already. Please wait a few minutes and try again.",
      };
    }

    await prisma.loginAttempt.create({
      data: { email: key, ipAddress: ip, successful: true },
    });
    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}

/** Housekeeping: drop attempt rows older than a day. */
export async function pruneOldAttempts(): Promise<void> {
  try {
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000);
    await prisma.loginAttempt.deleteMany({
      where: { attemptedAt: { lt: cutoff }, lockedUntil: null },
    });
  } catch {
    /* non-critical */
  }
}
