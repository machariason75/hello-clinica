"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Search, Download, Archive, ArchiveRestore } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { toCsv, downloadCsv } from "@/lib/admin/csv";
import { setSubscriberArchived } from "@/lib/actions/admin-leads";

export type SubscriberRow = {
  id: string;
  name: string;
  email: string;
  consent: boolean;
  archived: boolean;
  subscribedAt: string;
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
  });
}

export function NewsletterClient({ rows }: { rows: SubscriberRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [showArchived, setShowArchived] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (r.archived !== showArchived) return false;
      if (!q) return true;
      return r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q);
    });
  }, [rows, query, showArchived]);

  function handleArchive(id: string, archived: boolean) {
    startTransition(async () => {
      const res = await setSubscriberArchived(id, archived);
      if (res.success) {
        toast.success(archived ? "Archived." : "Restored.");
        router.refresh();
      } else {
        toast.error(res.message ?? "Update failed.");
      }
    });
  }

  function handleExport() {
    const headers = ["Date", "Name", "Email", "Consent"];
    const data = filtered.map((r) => [fmtDate(r.subscribedAt), r.name, r.email, r.consent ? "Yes" : "No"]);
    downloadCsv(`newsletter-subscribers-${new Date().toISOString().slice(0, 10)}`, toCsv(headers, data));
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or email…" className="pl-9" />
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
        {filtered.length} {showArchived ? "archived" : "active"} subscriber{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">
          No subscribers to show.
        </div>
      ) : (
        <div className="surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Consent</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((r) => (
                  <tr key={r.id}>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{fmtDate(r.subscribedAt)}</td>
                    <td className="px-4 py-3 font-medium text-deep-blue">{r.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.email}</td>
                    <td className="px-4 py-3"><YesNoPill value={r.consent} /></td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="sm" disabled={isPending} onClick={() => handleArchive(r.id, !r.archived)} aria-label={r.archived ? "Restore" : "Archive"}>
                        {r.archived ? <ArchiveRestore className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
