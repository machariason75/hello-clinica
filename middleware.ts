import { withAuth } from "next-auth/middleware";

/**
 * Protects the admin area. The matcher intentionally excludes /admin/login so
 * the (future) login screen stays reachable. Admin screens are built in a
 * later phase; this guard is in place now so they are protected on arrival.
 */
export default withAuth({
  pages: { signIn: "/admin/login" },
});

export const config = {
  matcher: ["/admin/((?!login).*)"],
};
