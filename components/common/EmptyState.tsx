import type { ReactNode } from "react";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Empty state — an invitation to act, not a "coming soon" placeholder.
 * Used by content hubs whose items are published from the admin area in a
 * later phase.
 */
export function EmptyState({
  title,
  description,
  action,
  icon,
  className,
}: {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "surface-card flex flex-col items-center justify-center px-6 py-16 text-center",
        className
      )}
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-bg text-medical-blue">
        {icon ?? <Inbox className="h-7 w-7" />}
      </div>
      <h3 className="text-h3 text-deep-blue">{title}</h3>
      <p className="text-body mt-3 max-w-md text-muted-foreground">{description}</p>
      {action && <div className="mt-7">{action}</div>}
    </div>
  );
}
