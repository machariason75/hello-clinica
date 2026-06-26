"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";

export type AuditRow = {
  id: string;
  adminName: string;
  action: string;
  entity: string;
  entityId: string | null;
  ipAddress: string | null;
  timestamp: string;
};

function fmt(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit",
  });
}

const actionTone: Record<string, string> = {
  LOGIN: "bg-success/10 text-success",
  CREATE: "bg-accent-blue/10 text-accent-blue",
  UPDATE: "bg-medical-blue/10 text-medical-blue",
  DELETE: "bg-destructive/10 text-destructive",
  ARCHIVE: "bg-amber-100 text-amber-700",
  UNARCHIVE: "bg-brand-bg text-muted-foreground",
};

function toneFor(action: string) {
  if (action.startsWith("STATUS_")) return "bg-medical-blue/10 text-medical-blue";
  if (action === "FEATURE" || action === "UNFEATURE") return "bg-coral/10 text-coral";
  return actionTone[action] ?? "bg-brand-bg text-muted-foreground";
}

export function AuditLogsClient({ rows }: { rows: AuditRow[] }) {
  const [query, setQuery] = useState("");
  const [entityFilter, setEntityFilter] = useState("ALL");

  const entities = useMemo(
    () => Array.from(new Set(rows.map((r) => r.entity))).sort(),
    [rows]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (entityFilter !== "ALL" && r.entity !== entityFilter) return false;
      if (!q) return true;
      return (
        r.adminName.toLowerCase().includes(q) ||
        r.action.toLowerCase().includes(q) ||
        r.entity.toLowerCase().includes(q) ||
        (r.ipAddress ?? "").toLowerCase().includes(q)
      );
    });
  }, [rows, query, entityFilter]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search admin, action, IP…" className="pl-9" />
        </div>
        <Select value={entityFilter} onValueChange={setEntityFilter}>
          <SelectTrigger className="sm:w-56"><SelectValue placeholder="Filter entity" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All entities</SelectItem>
            {entities.map((e) => (
              <SelectItem key={e} value={e}>{e}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-xs text-muted-foreground">{filtered.length} entr{filtered.length === 1 ? "y" : "ies"}</p>

      {filtered.length === 0 ? (
        <div className="surface-card p-10 text-center text-sm text-muted-foreground">No audit entries to show.</div>
      ) : (
        <div className="surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-medium">When</th>
                  <th className="px-4 py-3 font-medium">Admin</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                  <th className="px-4 py-3 font-medium">Entity</th>
                  <th className="px-4 py-3 font-medium">IP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((r) => (
                  <tr key={r.id}>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{fmt(r.timestamp)}</td>
                    <td className="px-4 py-3 font-medium text-deep-blue">{r.adminName}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${toneFor(r.action)}`}>
                        {r.action}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{r.entity}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.ipAddress ?? "—"}</td>
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
