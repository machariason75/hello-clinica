import Link from "next/link";
import {
  ListChecks,
  Users,
  Library,
  Headphones,
  Inbox,
  Mail,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import type { DepartmentAnalytics, Trend, NamedCount } from "@/lib/admin/analytics-departments";

/**
 * Departmental analytics.
 *
 * Deliberately opinionated: every panel leads with ONE headline number and its
 * direction of travel, then supporting detail. A wall of equal-weight numbers is
 * the enemy of actually noticing anything.
 */

function TrendPill({ t }: { t: Trend }) {
  if (t.changePct === null) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-medical-blue/10 px-2 py-0.5 text-[11px] font-semibold text-medical-blue">
        new
      </span>
    );
  }
  const up = t.changePct > 0;
  const flat = t.changePct === 0;
  const Icon = flat ? Minus : up ? TrendingUp : TrendingDown;
  const tone = flat
    ? "bg-deep-blue/8 text-deep-blue/60"
    : up
      ? "bg-emerald-500/10 text-emerald-600"
      : "bg-amber-500/10 text-amber-600";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${tone}`}>
      <Icon className="h-3 w-3" aria-hidden="true" />
      {flat ? "no change" : `${up ? "+" : ""}${t.changePct}%`}
    </span>
  );
}

function Panel({
  icon: Icon,
  title,
  href,
  headline,
  headlineLabel,
  trend,
  children,
}: {
  icon: typeof ListChecks;
  title: string;
  href?: string;
  headline: string | number;
  headlineLabel: string;
  trend?: Trend;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-deep-blue/10 bg-white p-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-coral/15 to-medical-blue/10 text-medical-blue">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <h3 className="text-sm font-semibold text-deep-blue">{title}</h3>
        </div>
        {href && (
          <Link href={href} className="focus-ring text-xs font-medium text-medical-blue hover:text-coral">
            Open <ArrowRight className="inline h-3 w-3" />
          </Link>
        )}
      </div>

      <div className="mt-4 flex items-end gap-2">
        <p className="text-3xl font-bold leading-none text-deep-blue">{headline}</p>
        {trend && <TrendPill t={trend} />}
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{headlineLabel}</p>

      {children && <div className="mt-4 space-y-2 border-t border-deep-blue/5 pt-3">{children}</div>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-baseline justify-between gap-3 text-xs">
      <span className="truncate text-muted-foreground">{label}</span>
      <span className="shrink-0 font-semibold tabular-nums text-deep-blue">{value}</span>
    </div>
  );
}

function TopList({ items, empty }: { items: NamedCount[]; empty: string }) {
  if (items.length === 0) {
    return <p className="text-xs text-muted-foreground">{empty}</p>;
  }
  return (
    <ul className="space-y-1.5">
      {items.map((i, n) => (
        <li key={`${i.label}-${n}`} className="flex items-baseline justify-between gap-3 text-xs">
          <span className="min-w-0 truncate">
            <span className="text-deep-blue">{i.label}</span>
            {i.sub && <span className="text-muted-foreground"> · {i.sub}</span>}
          </span>
          <span className="shrink-0 font-semibold tabular-nums text-deep-blue">{i.count}</span>
        </li>
      ))}
    </ul>
  );
}

export function DepartmentAnalyticsView({ data }: { data: DepartmentAnalytics }) {
  const qb = data.questionBank;
  const st = data.students;
  const lib = data.library;
  const au = data.audio;
  const ld = data.leads;
  const cm = data.communications;

  return (
    <div className="space-y-6">
      {/* Anything actually wrong gets said first, not buried in a panel. */}
      {!cm.emailHealthy && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-300/60 bg-amber-50 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold text-amber-900">Email isn&apos;t sending</p>
            <p className="mt-0.5 text-amber-800">
              {cm.emailsPending} message{cm.emailsPending === 1 ? "" : "s"} queued and none delivered. Newsletters,
              password resets and form notifications are all silently going nowhere. Add your Resend API key in Vercel
              and redeploy to switch them on.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold text-deep-blue">By department</h2>
        <p className="text-xs text-muted-foreground">
          Last {data.days} days, compared with the {data.days} before
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {/* QUESTION BANK — the paid product */}
        <Panel
          icon={ListChecks}
          title="Question Bank"
          href="/admin/question-bank"
          headline={qb.attempts.current}
          headlineLabel="quiz attempts"
          trend={qb.attempts}
        >
          <Row label="Average score" value={`${qb.avgScore}%`} />
          <Row label="Pass rate" value={`${qb.passRate}%`} />
          <Row label="Learners active" value={qb.uniqueLearners} />
          <Row label="Practice / Exam" value={`${qb.practiceVsExam.practice} / ${qb.practiceVsExam.exam}`} />
        </Panel>

        {/* STUDENTS & CONVERSION — the money question */}
        <Panel
          icon={Users}
          title="Students & conversion"
          href="/admin/students"
          headline={st.registrations.current}
          headlineLabel="new registrations"
          trend={st.registrations}
        >
          <Row label="Total students" value={st.total} />
          <Row label="Premium" value={`${st.premium} (${st.conversionPct}%)`} />
          <Row label="Awaiting access" value={st.pendingAccessRequests} />
        </Panel>

        {/* LIBRARY */}
        <Panel
          icon={Library}
          title="Library"
          href="/admin/books"
          headline={lib.downloads.current}
          headlineLabel="downloads"
          trend={lib.downloads}
        >
          <Row label="Books / Resources" value={`${lib.bookDownloads} / ${lib.resourceDownloads}`} />
          <Row label="Published titles" value={`${lib.publishedBooks} books, ${lib.publishedResources} resources`} />
          <div className="pt-1">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Most downloaded
            </p>
            <TopList items={lib.topDownloads} empty="No downloads in this period." />
          </div>
        </Panel>

        {/* AUDIO */}
        <Panel
          icon={Headphones}
          title="Audiobooks"
          headline={au.listeners}
          headlineLabel="listeners (all time)"
        >
          <Row label="Published chapters" value={au.tracks} />
          <Row label="Chapters finished" value={`${au.completions} (${au.completionPct}%)`} />
          <div className="pt-1">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Most listened
            </p>
            <TopList items={au.topTracks} empty="No listening recorded yet." />
          </div>
        </Panel>

        {/* LEADS */}
        <Panel
          icon={Inbox}
          title="Leads & advising"
          href="/admin/consultations"
          headline={ld.consultations.current}
          headlineLabel="consultation requests"
          trend={ld.consultations}
        >
          <Row label="Contact requests" value={ld.contactRequests.current} />
          <Row label="Package inquiries" value={ld.packageInquiries.current} />
          <Row label="Unhandled" value={ld.newConsultations} />
        </Panel>

        {/* COMMUNICATIONS */}
        <Panel
          icon={Mail}
          title="Communications"
          href="/admin/newsletter"
          headline={cm.subscribers.current}
          headlineLabel="new subscribers"
          trend={cm.subscribers}
        >
          <Row label="Active subscribers" value={cm.totalSubscribers} />
          <Row label="Unsubscribed" value={cm.unsubscribed} />
          <Row label="Campaigns sent" value={cm.campaignsSent} />
          <Row
            label="Email delivery"
            value={`${cm.emailsSent} sent · ${cm.emailsPending} queued · ${cm.emailsFailed} failed`}
          />
        </Panel>
      </div>

      {/* WEAK TOPICS — the most editorially useful thing on the page */}
      <div className="rounded-2xl border border-deep-blue/10 bg-white p-5">
        <h3 className="text-sm font-semibold text-deep-blue">Where students struggle most</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Accuracy per topic across all attempts in this period. The weakest topics are where new practice questions,
          resources, or a coaching session would do the most good.
        </p>

        {qb.weakTopics.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Not enough attempts yet. Topics appear here once students have answered at least five questions in them.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {qb.weakTopics.map((t) => {
              const tone =
                t.accuracyPct < 50
                  ? "bg-red-500"
                  : t.accuracyPct < 70
                    ? "bg-amber-500"
                    : "bg-emerald-500";
              return (
                <li key={t.topic}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="truncate text-deep-blue">{t.topic}</span>
                    <span className="shrink-0 tabular-nums text-muted-foreground">
                      {t.accuracyPct}% · {t.correct}/{t.total}
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-deep-blue/8">
                    <div className={`h-full rounded-full ${tone}`} style={{ width: `${t.accuracyPct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* TOP QUIZZES */}
      <div className="rounded-2xl border border-deep-blue/10 bg-white p-5">
        <h3 className="text-sm font-semibold text-deep-blue">Most attempted quizzes</h3>
        <div className="mt-3">
          <TopList items={qb.topQuizzes} empty="No attempts in this period." />
        </div>
      </div>
    </div>
  );
}
