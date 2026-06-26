"use client";

import { useMemo, useState, useTransition, Fragment } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Search, Download, Archive, ArchiveRestore, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toCsv, downloadCsv } from "@/lib/admin/csv";
import { setPackageInquiryArchived } from "@/lib/actions/admin-leads";

export type InquiryRow = {
  id: string;
  studentFirstName: string;
  studentLastName: string;
  studentEmail: string;
  studentPhone: string;
  message: string | null;
  packageName: string;
  archived: boolean;
  createdAt: string;
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
  });
}

export function PackageInquiriesClient({ rows }: { rows: InquiryRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (r.archived !== showArchived) return false;
      if (!q) return true;
      return (
        `${r.studentFirstName} ${r.studentLastName}`.toLowerCase().includes(q) ||
        r.studentEmail.toLowerCase().includes(q) ||
        r.packageName.toLowerCase().includes(q)
      );
    });
  }, [rows, query, showArchived]);

  function handleArchive(id: string, archived: boolean) {
    startTransition(async () => {
      const res = await setPackageInquiryArchived(id, archived);
      if (res.success) {
        toast.success(archived ? "Archived." : "Restored.");
        router.refresh();
      } else {
        toast.error(res.message ?? "Update failed.");
      }
    });
  }

  function handleExport() {
    const headers = ["Date", "First Name", "Last Name", "Email", "Phone", "Package", "Message"];
    const data = filtered.map((r) => [
      fmtDate(r.createdAt), r.studentFirstName, r.studentLastName, r.studentEmail,
      r.studentPhone, r.packageName, r.message ?? "",
    ]);
    downloadCsv(`package-inquiries-${new Date().toISOString().slice(0, 10)}`, toCsv(headers, data));
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, email, package…" className="pl-9" />
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
        {filtered.length} {showArchived ? "archived" : "active"} inquir{filtered.length === 1 ? "y" : "ies"}
      </p>

      {filtered.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">
          No package inquiries to show.
        </div>
      ) : (
        <div className="surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Package</th>
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
                        <td className="px-4 py-3 font-medium text-deep-blue">{r.studentFirstName} {r.studentLastName}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          <div>{r.studentEmail}</div>
                          <div className="text-xs">{r.studentPhone}</div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{r.packageName}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            <Button variant="ghost" size="sm" onClick={() => setExpanded(isOpen ? null : r.id)}>
                              Details
                              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                            </Button>
                            <Button variant="ghost" size="sm" disabled={isPending} onClick={() => handleArchive(r.id, !r.archived)} aria-label={r.archived ? "Restore" : "Archive"}>
                              {r.archived ? <ArchiveRestore className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
                            </Button>
                          </div>
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="bg-brand-bg/50">
                          <td colSpan={5} className="px-4 py-4">
                            <Detail label="Message" value={r.message || "—"} />
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
