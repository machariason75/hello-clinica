import { CalendarClock, Mail, Package, Users, Download } from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { getAnalytics } from "@/lib/admin/analytics-data";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";

export const dynamic = "force-dynamic";

export default async function AdminAnalyticsPage() {
  const admin = await requireAdmin();
  const data = await getAnalytics();

  const totalTiles = [
    { label: "Consultations", value: data.totals.consultations, sub: `${data.last30.consultations} in 30d`, icon: CalendarClock },
    { label: "Contact Requests", value: data.totals.contacts, sub: `${data.last30.contacts} in 30d`, icon: Mail },
    { label: "Package Inquiries", value: data.totals.inquiries, sub: "all time", icon: Package },
    { label: "Subscribers", value: data.totals.subscribers, sub: `${data.last30.subscribers} in 30d`, icon: Users },
    { label: "Downloads", value: data.totals.downloads, sub: "all time", icon: Download },
  ];

  const maxDay = Math.max(1, ...data.submissionsByDay.map((d) => d.count));
  const maxStatus = Math.max(1, ...data.consultationsByStatus.map((d) => d.count));
  const maxDownload = Math.max(1, ...data.downloadsSplit.map((d) => d.count));

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-8">
        <AdminPageHeader title="Analytics" description="Activity and engagement across your site." />

        {/* Total tiles */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {totalTiles.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.label} className="surface-card p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-bg text-medical-blue">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="mt-3 text-2xl font-bold text-deep-blue">{t.value}</p>
                <p className="text-sm text-muted-foreground">{t.label}</p>
                <p className="text-xs text-muted-foreground/70">{t.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Submissions over time */}
        <div className="surface-card p-6">
          <h2 className="text-h3 text-deep-blue">Submissions — last 14 days</h2>
          <p className="text-sm text-muted-foreground">Consultations, contact requests, and newsletter signups combined.</p>
          <div className="mt-6 flex h-48 items-end gap-1.5">
            {data.submissionsByDay.map((d) => (
              <div key={d.date} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t bg-medical-blue/80"
                    style={{ height: `${(d.count / maxDay) * 100}%`, minHeight: d.count > 0 ? "4px" : "0" }}
                    title={`${d.count} on ${d.label}`}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground">{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Consultations by status */}
          <div className="surface-card p-6">
            <h2 className="text-h3 text-deep-blue">Consultations by status</h2>
            <div className="mt-5 space-y-3">
              {data.consultationsByStatus.length === 0 ? (
                <p className="text-sm text-muted-foreground">No consultations yet.</p>
              ) : (
                data.consultationsByStatus.map((s) => (
                  <div key={s.label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-deep-blue">{s.label}</span>
                      <span className="text-muted-foreground">{s.count}</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-brand-bg">
                      <div className="h-full rounded-full bg-coral" style={{ width: `${(s.count / maxStatus) * 100}%` }} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Downloads split */}
          <div className="surface-card p-6">
            <h2 className="text-h3 text-deep-blue">Downloads</h2>
            <div className="mt-5 space-y-3">
              {data.totals.downloads === 0 ? (
                <p className="text-sm text-muted-foreground">No downloads recorded yet.</p>
              ) : (
                data.downloadsSplit.map((s) => (
                  <div key={s.label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-deep-blue">{s.label}</span>
                      <span className="text-muted-foreground">{s.count}</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-brand-bg">
                      <div className="h-full rounded-full bg-accent-blue" style={{ width: `${(s.count / maxDownload) * 100}%` }} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
