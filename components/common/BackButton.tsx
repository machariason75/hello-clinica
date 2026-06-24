"use client";

import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Back button — visible top-left on every internal page (frozen). Uses browser
 * history with a safe fallback to "/" when there is no history to go back to.
 * Hidden on the homepage.
 */
export function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={cn(
        "focus-ring inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-medical-blue transition-colors hover:bg-brand-bg",
        className
      )}
      aria-label="Go back to the previous page"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      Back
    </button>
  );
}
