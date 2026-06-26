import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export type AdminSessionUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string;
};

/**
 * Returns the current admin session user, or null if not signed in.
 * Safe to call from server components.
 */
export async function getAdminUser(): Promise<AdminSessionUser | null> {
  const session = await getServerSession(authOptions);
  if (!session?.user) return null;
  return session.user as AdminSessionUser;
}

/**
 * Guard for protected admin pages. Redirects to the login screen when there is
 * no valid session. Returns the admin user when authenticated.
 *
 * Note: middleware already blocks unauthenticated access to /admin/*; this is a
 * second, server-component-level guard so pages can rely on a non-null user.
 */
export async function requireAdmin(): Promise<AdminSessionUser> {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");
  return user;
}
