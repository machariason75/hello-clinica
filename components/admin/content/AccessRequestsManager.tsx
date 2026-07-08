"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { setRequestStatus, deleteAccessRequest } from "@/lib/actions/admin-content";

export type RequestRow = {
  id: string; name: string; email: string; university: string; course: string;
  message: string | null; status: string; createdAt: string; linkedStudent: boolean;
};

const STATUSES = ["pending", "contacted", "granted", "closed"];
const statusColor: Record<string, string> = {
  pending: "text-amber-600",
  contacted: "text-medical-blue",
  granted: "text-emerald-600",
  closed: "text-deep-blue/50",
};

export function AccessRequestsManager({ rows }: { rows: RequestRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => (filter === "all" ? rows : rows.filter((r) => r.status === filter)), [rows, filter]);

  function changeStatus(id: string, status: string) {
    startTransition(async () => {
      const res = await setRequestStatus(id, status);
      if (res.success) { toast.success("Updated."); router.refresh(); }
      else toast.error(res.message || "Could not update.");
    });
  }
  function remove(id: string) {
    startTransition(async () => {
      const res = await deleteAccessRequest(id);
      if (res.success) { toast.success("Deleted."); router.refresh(); }
      else toast.error(res.message || "Could not delete.");
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-deep-blue/60">Filter:</span>
        <div className="w-44">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {STATUSES.map((s) => <SelectItem key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-deep-blue/10 bg-white px-4 py-10 text-center text-deep-blue/50">No requests.</div>
      ) : (
        <div className="space-y-3">
          {filtered.map((r) => (
            <div key={r.id} className="rounded-xl border border-deep-blue/10 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-deep-blue">{r.course}</span>
                    <span className={"text-xs font-semibold uppercase " + (statusColor[r.status] ?? "")}>{r.status}</span>
                  </div>
                  <div className="text-sm text-deep-blue/70">{r.university}</div>
                  <div className="mt-1 text-xs text-deep-blue/50">
                    {r.name} · {r.email}{!r.linkedStudent && " · (no linked account)"} · {new Date(r.createdAt).toLocaleDateString()}
                  </div>
                  {r.message && <p className="mt-2 text-sm text-deep-blue/80">{r.message}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-36">
                    <Select value={r.status} onValueChange={(v) => changeStatus(r.id, v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{STATUSES.map((s) => <SelectItem key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <Button variant="ghost" size="sm" disabled={isPending} onClick={() => remove(r.id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
                </div>
              </div>
              <p className="mt-2 text-xs text-deep-blue/40">Tip: setting a request to “granted” also switches on that student’s premium access.</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
