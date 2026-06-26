"use client";

import { useMemo, useState, useTransition, Fragment } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Search, Download, Archive, ArchiveRestore, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { StatusPill, YesNoPill, consultationStatusConfig } from "@/components/admin/ui/StatusPill";
import { toCsv, downloadCsv } from "@/lib/admin/csv";
import {
  setConsultationStatus,
  setConsultationArchived,
  type ConsultationStatusValue,
} from "@/lib/actions/admin-leads";

export type ConsultationRow = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  cadre: string;
  contactMethod: string;
  socialHandle: string | null;
  consent: boolean;
  message: string | null;
  status: string;
  archived: boolean;
  createdAt: string; // ISO
};

const STATUS_FILTERS = ["ALL", "NEW", "CONTACTED", "FOLLOW_UP_REQUIRED", "CLOSED"] as const;

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function ConsultationsClient({ rows }: { rows: ConsultationRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [showArchived, setShowArchived] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (r.archived !== showArchived) return false;
      if (statusFilter !== "ALL" && r.status !== statusFilter) return false;
      if (!q) return true;
      return (
        `${r.firstName} ${r.lastName}`.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.phone.toLowerCase().includes(q) ||
        r.cadre.toLowerCase().includes(q)
      );
    });
  }, [rows, query, statusFilter, showArchived]);

  function handleStatus(id: string, status: ConsultationStatusValue) {
    startTransition(async () => {
      const res = await setConsultationStatus(id, status);
      if (res.success) {
        toast.success("Status updated.");
        router.refresh();
      } else {
        toast.error(res.message ?? "Update failed.");
      }
    });
  }

  function handleArchive(id: string, archived: boolean) {
    startTransition(async () => {
      const res = await setConsultationArchived(id, archived);
      if (res.success) {
        toast.success(archived ? "Archived." : "Restored.");
        router.refresh();
      } else {
        toast.error(res.message ?? "Update failed.");
      }
    });
  }

  function handleExport() {
    const headers = [
      "Date", "First Name", "Last Name", "Phone", "Email", "Cadre",
      "Preferred Contact", "Social Handle", "Consent", "Status", "Message",
    ];
    const data = filtered.map((r) => [
      fmtDate(r.createdAt), r.firstName, r.lastName, r.phone, r.email, r.cadre,
      r.contactMethod, r.socialHandle ?? "", r.consent ? "Yes" : "No",
      consultationStatusConfig[r.status]?.label ?? r.status, r.message ?? "",
    ]);
    downloadCsv(`consultations-${new Date().toISOString().slice(0, 10)}`, toCsv(headers, data));
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, phone…"
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="sm:w-48">
              <SelectValue placeholder="Filter status" />
            </SelectTrigger>
            <SelectContent>
              {STATUS_FILTERS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s === "ALL" ? "All statuses" : consultationStatusConfig[s]?.label ?? s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setShowArchived((v) => !v)}>
            {showArchived ? "View active" : "View archived"}
          </Button>
          <Button variant="secondary" size="sm" onClick={handleExport} disabled={filtered.length === 0}>
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        {filtered.length} {showArchived ? "archived" : "active"} request{filtered.length === 1 ? "" : "s"}
      </p>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">
          No consultation requests to show.
        </div>
      ) : (
        <div className="surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Cadre</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((r) => {
                  const isOpen = expanded === r.id;
                  return (
                    <Fragment key={r.id}>
                      <tr className="align-top">
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{fmtDate(r.createdAt)}</td>
                        <td className="px-4 py-3 font-medium text-deep-blue">
                          {r.firstName} {r.lastName}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          <div>{r.email}</div>
                          <div className="text-xs">{r.phone}</div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{r.cadre}</td>
                        <td className="px-4 py-3">
                          {showArchived ? (
                            <StatusPill status={r.status} />
                          ) : (
                            <Select
                              value={r.status}
                              onValueChange={(v) => handleStatus(r.id, v as ConsultationStatusValue)}
                            >
                              <SelectTrigger className="h-9 w-40">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(consultationStatusConfig).map(([k, v]) => (
                                  <SelectItem key={k} value={k}>
                                    {v.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setExpanded(isOpen ? null : r.id)}
                              aria-label="Toggle details"
                            >
                              Details
                              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              disabled={isPending}
                              onClick={() => handleArchive(r.id, !r.archived)}
                              aria-label={r.archived ? "Restore" : "Archive"}
                            >
                              {r.archived ? <ArchiveRestore className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
                            </Button>
                          </div>
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="bg-brand-bg/50">
                          <td colSpan={6} className="px-4 py-4">
                            <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                              <Detail label="Preferred contact method" value={r.contactMethod} />
                              <Detail label="Social handle / number" value={r.socialHandle || "—"} />
                              <Detail label="Consent given" value={<YesNoPill value={r.consent} />} />
                              <Detail label="Email" value={r.email} />
                              <div className="sm:col-span-2">
                                <Detail label="Message" value={r.message || "—"} />
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-sm text-deep-blue">{value}</p>
    </div>
  );
}
