import Link from "next/link";
import {
  CalendarClock,
  Mail,
  Package,
  Users,
  FileText,
  BookOpen,
  Download,
  ArrowRight,
} from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { getDashboardStats, getRecentActivity } from "@/lib/admin/dashboard-data";
import { AdminShell } from "@/components/admin/AdminShell";

export const dynamic = "force-dynamic";

const cardConfig = [
  { key: "consultations", label: "Consultation Requests", icon: CalendarClock, href: "/admin/consultations", live: true },
  { key: "contactRequests", label: "Contact Requests", icon: Mail, href: "/admin/contact-requests", live: true },
  { key: "packageInquiries", label: "Package Inquiries", icon: Package, href: "/admin/package-inquiries", live: true },
  { key: "newsletterSubscribers", label: "Newsletter Subscribers", icon: Users, href: "/admin/newsletter", live: true },
  { key: "resources", label: "Resources", icon: FileText, href: "/admin/resources", live: true },
  { key: "books", label: "Books", icon: BookOpen, href: "/admin/books", live: true },
  { key: "downloads", label: "Total Downloads", icon: Download, href: "/admin/resources", live: true },
] as const;

function timeAgo(date: Date): string {
  const diff = Date.now() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

const activityTone: Record<string, string> = {
  Consultation: "bg-medical-blue/10 text-medical-blue",
  Contact: "bg-accent-blue/10 text-accent-blue",
  Inquiry: "bg-coral/10 text-coral",
  Subscriber: "bg-success/10 text-success",
};

export default async function AdminDashboardPage() {
  const admin = await requireAdmin();
  const [stats, activity] = await Promise.all([
    getDashboardStats(),
    getRecentActivity(8),
  ]);

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-8">
        <div>
          <h1 className="text-h2 text-deep-blue">Dashboard</h1>
          <p className="text-body mt-1 text-muted-foreground">
            An overview of activity across your site.
          </p>
        </div>

        {stats.newConsultations > 0 && (
          <div className="flex items-center gap-3 rounded-xl border border-coral/30 bg-coral/5 px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-white text-sm font-bold">
              {stats.newConsultations}
            </span>
            <p className="text-sm text-deep-blue">
              new consultation request{stats.newConsultations === 1 ? "" : "s"} awaiting review.
            </p>
          </div>
        )}

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cardConfig.map((card) => {
            const Icon = card.icon;
            const value = stats[card.key as keyof typeof stats] as number;
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-bg text-medical-blue">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {card.live ? (
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-medical-blue" />
                  ) : (
                    <span className="rounded-full bg-brand-bg px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground/60">
                      Soon
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-3xl font-bold text-deep-blue">{value}</p>
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                </div>
              </>
            );
            return card.live ? (
              <Link
                key={card.key}
                href={card.href}
                className="surface-card group flex flex-col gap-3 p-5 transition-shadow hover:shadow-md"
              >
                {inner}
              </Link>
            ) : (
              <div key={card.key} className="surface-card flex flex-col gap-3 p-5 opacity-90">
                {inner}
              </div>
            );
          })}
        </div>

        {/* Recent activity */}
        <div className="surface-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-h3 text-deep-blue">Latest activity</h2>
          </div>
          {activity.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No activity yet. Submissions from your site will appear here.
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {activity.map((item) => (
                <li key={`${item.type}-${item.id}`} className="flex items-center gap-4 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      activityTone[item.type] ?? "bg-brand-bg text-muted-foreground"
                    }`}
                  >
                    {item.type}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-deep-blue">{item.label}</p>
                    <p className="truncate text-xs text-muted-foreground">{item.sublabel}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {timeAgo(item.createdAt)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
