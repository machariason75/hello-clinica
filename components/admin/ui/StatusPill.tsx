export const consultationStatusConfig: Record<
  string,
  { label: string; className: string }
> = {
  NEW: { label: "New", className: "bg-coral/10 text-coral" },
  CONTACTED: { label: "Contacted", className: "bg-accent-blue/10 text-accent-blue" },
  FOLLOW_UP_REQUIRED: { label: "Follow-up", className: "bg-amber-100 text-amber-700" },
  CLOSED: { label: "Closed", className: "bg-brand-bg text-muted-foreground" },
};

export function StatusPill({ status }: { status: string }) {
  const cfg = consultationStatusConfig[status] ?? {
    label: status,
    className: "bg-brand-bg text-muted-foreground",
  };
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${cfg.className}`}>
      {cfg.label}
    </span>
  );
}

export function YesNoPill({ value }: { value: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
        value ? "bg-success/10 text-success" : "bg-brand-bg text-muted-foreground"
      }`}
    >
      {value ? "Yes" : "No"}
    </span>
  );
}
