"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Search as SearchIcon, ChevronRight } from "lucide-react";
import { sidebarNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { SearchModal } from "./SearchModal";

/**
 * Sidebar drawer (frozen): opens from the hamburger, 360px on desktop / full
 * width on mobile. Contains Search + the frozen menu items. Radix Dialog gives
 * focus trapping, Esc-to-close and scroll locking for free.
 */
export function Sidebar({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-deep-blue/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className={cn(
              "fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-white shadow-card-hover sm:w-[360px]",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
            )}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <DialogPrimitive.Title className="text-lg font-bold text-deep-blue">
                Menu
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="sr-only">
                Primary site navigation
              </DialogPrimitive.Description>
              <DialogPrimitive.Close
                className="focus-ring rounded-lg p-2 text-deep-blue/60 transition-colors hover:bg-brand-bg"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </DialogPrimitive.Close>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Sidebar">
              <ul className="space-y-1">
                {sidebarNav.map((item) =>
                  item.isSearch ? (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() => {
                          onOpenChange(false);
                          setSearchOpen(true);
                        }}
                        className="focus-ring flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-lg font-medium text-deep-blue transition-colors hover:bg-brand-bg"
                      >
                        <SearchIcon className="h-5 w-5 text-medical-blue" aria-hidden="true" />
                        {item.label}
                      </button>
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => onOpenChange(false)}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={cn(
                          "focus-ring flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium transition-colors hover:bg-brand-bg",
                          pathname === item.href ? "bg-brand-bg text-medical-blue" : "text-deep-blue"
                        )}
                      >
                        {item.label}
                        <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="border-t border-border px-6 py-5">
              <p className="text-sm text-muted-foreground">
                Expert guidance for future healthcare professionals.
              </p>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
