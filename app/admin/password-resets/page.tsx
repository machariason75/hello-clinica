import { requireAdmin } from "@/lib/admin/auth-helpers";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { KeyRound, CheckCircle2, Clock, XCircle } from "lucide-react";

export const dynamic = "force-dynamic";

/**
 * Password reset activity.
 *
 * Students get their reset link immediately (no waiting on an admin — someone
 * locked out at midnight shouldn't be stranded until morning). This page gives
 * you oversight: who asked, when, and whether they completed it. A burst of
 * requests for one account is worth a look.
 *
 * Tokens are never shown — they're single-use secrets, and displaying them would
 * let anyone with admin screen access hijack a student account.
 */
export default async function AdminPasswordResetsPage() {
  const admin = await requireAdmin();

  const resets = await prisma.passwordResetToken.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
    include: { student: { select: { name: true, email: true, hasAccess: true } } },
  });

  const now = Date.now();

  function statusOf(r: (typeof resets)[number]) {
    if (r.usedAt) return { label: "Completed", tone: "text-emerald-600", Icon: CheckCircle2 };
    if (r.expiresAt.getTime() < now) return { label: "Expired", tone: "text-deep-blue/40", Icon: XCircle };
    return { label: "Pending", tone: "text-amber-600", Icon: Clock };
  }

  const pending = resets.filter((r) => !r.usedAt && r.expiresAt.getTime() >= now).length;

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-6">
        <AdminPageHeader
          title="Password Resets"
          description="Students receive their reset link straight away — this is your record of who requested one and whether they finished. Repeated requests on one account are worth checking."
        />

        {/* Summary */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Requests (recent)", value: resets.length },
            { label: "Awaiting completion", value: pending },
            { label: "Completed", value: resets.filter((r) => r.usedAt).length },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-deep-blue/10 bg-white p-4">
              <p className="text-2xl font-bold text-deep-blue">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {resets.length === 0 ? (
          <div className="rounded-xl border border-deep-blue/10 bg-white px-4 py-12 text-center">
            <KeyRound className="mx-auto h-8 w-8 text-deep-blue/25" />
            <p className="mt-3 text-sm text-deep-blue/50">No password reset requests yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-deep-blue/10 bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-[#F3E9DD]/60 text-left text-deep-blue/70">
                <tr>
                  <th className="px-4 py-3 font-medium">Student</th>
                  <th className="px-4 py-3 font-medium">Requested</th>
                  <th className="px-4 py-3 font-medium">Requests</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Completed</th>
                </tr>
              </thead>
              <tbody>
                {resets.map((r) => {
                  const s = statusOf(r);
                  return (
                    <tr key={r.id} className="border-t border-deep-blue/5">
                      <td className="px-4 py-3">
                        <div className="font-medium text-deep-blue">{r.student.name}</div>
                        <div className="text-xs text-deep-blue/50">{r.student.email}</div>
                      </td>
                      <td className="px-4 py-3 text-deep-blue/70">
                        {r.createdAt.toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3">
                        {r.requestCount > 1 ? (
                          <span
                            className="inline-flex items-center rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-semibold text-amber-700"
                            title="This person asked for a link more than once. Usually harmless — the email went to spam, or the window lapsed."
                          >
                            {r.requestCount}× requested
                          </span>
                        ) : (
                          <span className="text-xs text-deep-blue/45">once</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className={"inline-flex items-center gap-1.5 font-medium " + s.tone}>
                          <s.Icon className="h-4 w-4" />
                          {s.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-deep-blue/70">
                        {r.usedAt
                          ? r.usedAt.toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                            })
                          : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          Reset links expire after 60 minutes and can only be used once. For security, the links themselves are never
          displayed here — if a student is stuck, ask them to request a new one from the sign-in page.
        </p>
      </div>
    </AdminShell>
  );
}
