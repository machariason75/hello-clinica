"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { YesNoPill } from "@/components/admin/ui/StatusPill";
import { setStudentAccess } from "@/lib/actions/admin-content";

export type StudentRow = {
  id: string; name: string; email: string; university: string | null;
  hasAccess: boolean; createdAt: string; requestCount: number;
};

export function StudentsManager({ rows }: { rows: StudentRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q) || (r.university ?? "").toLowerCase().includes(q));
  }, [rows, query]);

  function toggle(r: StudentRow) {
    startTransition(async () => {
      const res = await setStudentAccess(r.id, !r.hasAccess);
      if (res.success) { toast.success(!r.hasAccess ? "Access granted." : "Access revoked."); router.refresh(); }
      else toast.error(res.message || "Could not update.");
    });
  }

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-deep-blue/40" />
        <Input className="pl-9" placeholder="Search name, email, school…" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="overflow-hidden rounded-xl border border-deep-blue/10 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-[#F3E9DD]/60 text-left text-deep-blue/70">
            <tr>
              <th className="px-4 py-3 font-medium">Student</th>
              <th className="px-4 py-3 font-medium">School</th>
              <th className="px-4 py-3 font-medium">Requests</th>
              <th className="px-4 py-3 font-medium">Premium access</th>
              <th className="px-4 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-deep-blue/50">No students yet.</td></tr>
            ) : filtered.map((r) => (
              <tr key={r.id} className="border-t border-deep-blue/5">
                <td className="px-4 py-3">
                  <div className="font-medium text-deep-blue">{r.name}</div>
                  <div className="text-xs text-deep-blue/50">{r.email}</div>
                </td>
                <td className="px-4 py-3 text-deep-blue/70">{r.university ?? "—"}</td>
                <td className="px-4 py-3 text-deep-blue/70">{r.requestCount}</td>
                <td className="px-4 py-3"><YesNoPill value={r.hasAccess} /></td>
                <td className="px-4 py-3 text-right">
                  <Button size="sm" variant={r.hasAccess ? "outline" : "primary"} disabled={isPending} onClick={() => toggle(r)}>
                    {r.hasAccess ? "Revoke" : "Grant access"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
