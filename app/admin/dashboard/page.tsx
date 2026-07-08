import Link from "next/link";
import Image from "next/image";
import {
  CalendarClock, Mail, Package, Users, FileText, BookOpen, Download,
  ArrowRight, ListChecks, GraduationCap, KeyRound, Link2, FolderTree, Sparkles,
} from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth-helpers";
import { getDashboardStats, getRecentActivity } from "@/lib/admin/dashboard-data";
import { AdminShell } from "@/components/admin/AdminShell";

export const dynamic = "force-dynamic";

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
  const [stats, activity] = await Promise.all([getDashboardStats(), getRecentActivity(7)]);

  // Compact stat tiles grouped by area
  const groups: { heading: string; tiles: { label: string; value: number; icon: typeof Mail; href: string; accent?: boolean }[] }[] = [
    {
      heading: "Leads",
      tiles: [
        { label: "Consultations", value: stats.consultations, icon: CalendarClock, href: "/admin/consultations", accent: stats.newConsultations > 0 },
        { label: "Contact", value: stats.contactRequests, icon: Mail, href: "/admin/contact-requests" },
        { label: "Package inquiries", value: stats.packageInquiries, icon: Package, href: "/admin/package-inquiries" },
        { label: "Subscribers", value: stats.newsletterSubscribers, icon: Users, href: "/admin/newsletter" },
      ],
    },
    {
      heading: "Question Bank",
      tiles: [
        { label: "Sections", value: stats.quizCategories, icon: FolderTree, href: "/admin/question-bank" },
        { label: "Quizzes", value: stats.quizzes, icon: ListChecks, href: "/admin/question-bank" },
        { label: "Resource links", value: stats.externalLinks, icon: Link2, href: "/admin/question-bank" },
        { label: "Downloads", value: stats.downloads, icon: Download, href: "/admin/resources" },
      ],
    },
    {
      heading: "Students & content",
      tiles: [
        { label: "Students", value: stats.students, icon: GraduationCap, href: "/admin/students" },
        { label: "Access requests", value: stats.accessRequests, icon: KeyRound, href: "/admin/access-requests", accent: stats.pendingRequests > 0 },
        { label: "Resources", value: stats.resources, icon: FileText, href: "/admin/resources" },
        { label: "Books", value: stats.books, icon: BookOpen, href: "/admin/books" },
      ],
    },
  ];

  return (
    <AdminShell adminName={admin.name || "Admin"}>
      <div className="space-y-7">
        {/* Welcome banner with a warm photo accent */}
        <div className="surface-card relative overflow-hidden p-6">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-h2 text-deep-blue">Welcome back, {admin.name?.split(" ")[0] || "Admin"}</h1>
            <p className="text-body mt-1 text-muted-foreground">
              Everything across Hello Clinica at a glance — leads, the Question Bank, students, and content.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stats.newConsultations > 0 && (
                <Link href="/admin/consultations" className="inline-flex items-center gap-1.5 rounded-full bg-coral px-3 py-1.5 text-xs font-semibold text-white">
                  {stats.newConsultations} new consultation{stats.newConsultations === 1 ? "" : "s"} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
              {stats.pendingRequests > 0 && (
                <Link href="/admin/access-requests" className="inline-flex items-center gap-1.5 rounded-full bg-medical-blue px-3 py-1.5 text-xs font-semibold text-white">
                  {stats.pendingRequests} access request{stats.pendingRequests === 1 ? "" : "s"} pending <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
              {stats.newConsultations === 0 && stats.pendingRequests === 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                  <Sparkles className="h-3.5 w-3.5" /> All caught up
                </span>
              )}
            </div>
          </div>
          {/* Decorative floating photos (desktop) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-72 lg:block">
            <div className="absolute right-6 top-5 h-24 w-24 rotate-3 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
              <Image src="/images/medics/medic-2.jpg" alt="" fill sizes="96px" className="object-cover" />
            </div>
            <div className="absolute right-28 top-16 h-20 w-20 -rotate-6 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
              <Image src="/images/medics/medic-5.jpg" alt="" fill sizes="80px" className="object-cover" />
            </div>
            <div className="absolute right-10 bottom-3 h-16 w-16 rotate-6 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
              <Image src="/images/medics/medic-3.jpg" alt="" fill sizes="64px" className="object-cover" />
            </div>
          </div>
        </div>

        {/* Compact stat tiles by group */}
        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.heading} className="surface-card p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">{group.heading}</p>
              <div className="grid grid-cols-2 gap-3">
                {group.tiles.map((t) => {
                  const Icon = t.icon;
                  return (
                    <Link key={t.label} href={t.href} className="group rounded-xl border border-deep-blue/5 bg-white/60 p-3 transition hover:border-coral/30 hover:bg-white">
                      <div className="flex items-center justify-between">
                        <span className={"flex h-8 w-8 items-center justify-center rounded-lg " + (t.accent ? "bg-coral/10 text-coral" : "bg-brand-bg text-medical-blue")}>
                          <Icon className="h-4 w-4" />
                        </span>
                        {t.accent && <span className="h-2 w-2 rounded-full bg-coral" />}
                      </div>
                      <p className="mt-2 text-2xl font-bold text-deep-blue">{t.value}</p>
                      <p className="text-xs text-muted-foreground">{t.label}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Lower: activity + quick manage */}
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="surface-card p-6">
            <h2 className="text-h3 mb-4 text-deep-blue">Latest activity</h2>
            {activity.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">No activity yet. Submissions from your site will appear here.</p>
            ) : (
              <ul className="divide-y divide-border">
                {activity.map((item) => (
                  <li key={`${item.type}-${item.id}`} className="flex items-center gap-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${activityTone[item.type] ?? "bg-brand-bg text-muted-foreground"}`}>{item.type}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-deep-blue">{item.label}</p>
                      <p className="truncate text-xs text-muted-foreground">{item.sublabel}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{timeAgo(item.createdAt)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="surface-card p-6">
            <h2 className="text-h3 mb-4 text-deep-blue">Manage</h2>
            <div className="space-y-2">
              {[
                { label: "Question Bank", sub: `${stats.quizCategories} sections · ${stats.quizzes} quizzes`, href: "/admin/question-bank", icon: FolderTree },
                { label: "Students", sub: `${stats.studentsWithAccess} with premium access`, href: "/admin/students", icon: GraduationCap },
                { label: "Access Requests", sub: `${stats.pendingRequests} pending`, href: "/admin/access-requests", icon: KeyRound },
                { label: "Resources & Books", sub: `${stats.resources} resources · ${stats.books} books`, href: "/admin/resources", icon: FileText },
              ].map((q) => {
                const Icon = q.icon;
                return (
                  <Link key={q.label} href={q.href} className="group flex items-center gap-3 rounded-xl border border-deep-blue/5 bg-white/60 p-3 transition hover:border-coral/30 hover:bg-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-bg text-medical-blue"><Icon className="h-4 w-4" /></span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-deep-blue">{q.label}</p>
                      <p className="truncate text-xs text-muted-foreground">{q.sub}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-coral" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
