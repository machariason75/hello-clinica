import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

/**
 * NextAuth configuration.
 *
 * Credential flow authenticates against the `admins` table and enforces the
 * security policy from the Admin Requirements:
 *   - 3 failed attempts within the lockout window  -> 15-minute lockout
 *   - every attempt (success/failure/lockout) recorded in `login_attempts`
 *   - successful logins recorded in the audit log
 */

const MAX_FAILED_ATTEMPTS = 3;
const LOCKOUT_MINUTES = 15;

/** Surfaces to the login form via NextAuth's error string. */
class AuthError extends Error {}

function minutesFromNow(mins: number): Date {
  return new Date(Date.now() + mins * 60 * 1000);
}

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },
  pages: { signIn: "/admin/login" },
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email?.toLowerCase().trim();
        const password = credentials?.password;
        if (!email || !password) {
          throw new AuthError("Please enter your email and password.");
        }

        const ipHeader =
          (req?.headers?.["x-forwarded-for"] as string | undefined) ??
          (req?.headers?.["x-real-ip"] as string | undefined) ??
          null;
        const ipAddress = ipHeader ? ipHeader.split(",")[0]?.trim() || null : null;

        // 1) Active lockout?
        const lastLock = await prisma.loginAttempt.findFirst({
          where: { email, lockedUntil: { not: null } },
          orderBy: { attemptedAt: "desc" },
        });
        if (lastLock?.lockedUntil && lastLock.lockedUntil > new Date()) {
          throw new AuthError(
            "Too many failed attempts. Please try again in a few minutes."
          );
        }

        const admin = await prisma.admin.findUnique({ where: { email } });
        const valid = admin
          ? await bcrypt.compare(password, admin.passwordHash)
          : false;

        if (!admin || !valid) {
          const windowStart = minutesFromNow(-LOCKOUT_MINUTES);
          const recentFailures = await prisma.loginAttempt.count({
            where: { email, successful: false, attemptedAt: { gte: windowStart } },
          });
          const failuresIncludingThis = recentFailures + 1;
          const shouldLock = failuresIncludingThis >= MAX_FAILED_ATTEMPTS;

          await prisma.loginAttempt.create({
            data: {
              email,
              ipAddress,
              successful: false,
              lockedUntil: shouldLock ? minutesFromNow(LOCKOUT_MINUTES) : null,
            },
          });

          if (shouldLock) {
            throw new AuthError(
              "Too many failed attempts. Your account is locked for 15 minutes."
            );
          }
          const remaining = MAX_FAILED_ATTEMPTS - failuresIncludingThis;
          throw new AuthError(
            remaining > 0
              ? `Invalid email or password. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.`
              : "Invalid email or password."
          );
        }

        // Success
        await prisma.loginAttempt.create({
          data: { email, ipAddress, successful: true, lockedUntil: null },
        });
        try {
          await prisma.auditLog.create({
            data: {
              adminId: admin.id,
              action: "LOGIN",
              entity: "Session",
              entityId: admin.id,
              ipAddress,
            },
          });
        } catch {
          /* non-critical */
        }

        return { id: admin.id, name: admin.name, email: admin.email, role: admin.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as { id: string }).id;
        token.role = (user as { role?: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.id as string;
        (session.user as { role?: string }).role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
