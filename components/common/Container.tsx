import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Centered max-width page container with responsive gutters. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-6 lg:px-8", className)}>{children}</div>;
}
