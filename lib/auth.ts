import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { checkLoginAllowed, recordLoginAttempt, clientIp } from "@/lib/security/rate-limit";
import { prisma } from "./prisma";

/**
 * NextAuth configuration (foundation).
 *
 * The credential flow authenticates against the `admins` table. Phase 1 stands
 * this up so the admin area (built in a later phase) plugs in without any
 * architecture change. No public/admin login UI ships in Phase 1.
 */
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
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email.toLowerCase().trim();

        // Brute-force protection. Returning null gives the same generic failure
        // as a wrong password, so an attacker can't tell a lockout apart from a
        // bad guess — they just stop making progress.
        const ip = await clientIp();
        const gate = await checkLoginAllowed(email, ip);
        if (!gate.allowed) return null;

        const admin = await prisma.admin.findUnique({ where: { email } });
        if (!admin) {
          await recordLoginAttempt(email, ip, false);
          return null;
        }

        const valid = await bcrypt.compare(credentials.password, admin.passwordHash);
        if (!valid) {
          await recordLoginAttempt(email, ip, false);
          return null;
        }

        await recordLoginAttempt(email, ip, true);
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
