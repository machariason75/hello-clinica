"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X, MessageSquare } from "lucide-react";
import { getAdminUnread, markEngagementRead, type AdminAlert } from "@/lib/actions/admin-alerts";

export function AdminMessageAlerts() {
  const router = useRouter();
  const [alerts, setAlerts] = useState<AdminAlert[]>([]);

  useEffect(() => {
    let live = true;
    getAdminUnread().then((a) => { if (live) setAlerts(a); }).catch(() => {});
    return () => { live = false; };
  }, []);

  // Remove strictly by id, functional update — never by position.
  function removeById(id: string) {
    setAlerts((prev) => prev.filter((x) => x.id !== id));
  }
  async function markRead(id: string) {
    removeById(id);                                  // optimistic, by id
    try { await markEngagementRead(id); } catch { /* stays read next fetch anyway */ }
  }
  async function open(id: string) {
    removeById(id);
    try { await markEngagementRead(id); } catch {}
    router.push("/admin/engagements");
  }

  if (alerts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed right-4 top-20 z-50 flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2">
      {alerts.slice(0, 5).map((a) => (
        <AlertCard
          key={a.id}
          alert={a}
          onOpen={() => open(a.id)}
          onDismiss={() => removeById(a.id)}
          onRead={() => markRead(a.id)}
        />
      ))}
    </div>
  );
}

function AlertCard({ alert, onOpen, onDismiss, onRead }: {
  alert: AdminAlert; onOpen: () => void; onDismiss: () => void; onRead: () => void;
}) {
  const startX = useRef<number | null>(null);
  const [dx, setDx] = useState(0);
  return (
    <div
      data-alert-id={alert.id}
      className="surface-card pointer-events-auto p-3 shadow-card-hover transition-transform"
      style={{ transform: dx ? `translateX(${dx}px)` : undefined, opacity: dx ? Math.max(0, 1 - Math.abs(dx) / 200) : 1 }}
      onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
      onTouchMove={(e) => { if (startX.current != null) setDx(e.touches[0].clientX - startX.current); }}
      onTouchEnd={() => { if (Math.abs(dx) > 70) onDismiss(); else setDx(0); startX.current = null; }}
    >
      <div className="flex items-start gap-2">
        <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-medical-blue" aria-hidden="true" />
        <button type="button" onClick={(e) => { e.stopPropagation(); onOpen(); }} className="min-w-0 flex-1 text-left">
          <p className="truncate text-sm font-semibold text-deep-blue">{alert.name}</p>
          <p className="truncate text-xs text-muted-foreground">{alert.preview}</p>
        </button>
        <button type="button" onClick={(e) => { e.stopPropagation(); onDismiss(); }} aria-label="Dismiss" className="rounded p-1 text-muted-foreground hover:bg-brand-bg">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="mt-2 flex justify-end gap-3">
        <button type="button" onClick={(e) => { e.stopPropagation(); onRead(); }} className="text-xs font-semibold text-muted-foreground hover:text-deep-blue">Mark read</button>
        <button type="button" onClick={(e) => { e.stopPropagation(); onOpen(); }} className="text-xs font-semibold text-medical-blue">Open</button>
      </div>
    </div>
  );
}
