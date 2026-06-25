"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Search as SearchIcon, ChevronDown } from "lucide-react";
import { primaryNav, primaryCta } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SearchModal } from "./SearchModal";

/**
 * Mobile/tablet drawer (the lg+ view uses the horizontal mega-menu instead).
 * Mirrors the mega-menu: a search trigger, the primary nav as expandable
 * accordions for items with children, and the persistent CTA. Radix Dialog
 * provides focus trapping, Esc-to-close and scroll locking.
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
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => onOpenChange(false);

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

            <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
              {/* Search trigger */}
              <button
                type="button"
                onClick={() => {
                  close();
                  setSearchOpen(true);
                }}
                className="focus-ring mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-lg font-medium text-deep-blue transition-colors hover:bg-brand-bg"
              >
                <SearchIcon className="h-5 w-5 text-medical-blue" aria-hidden="true" />
                Search
              </button>

              <ul className="space-y-1">
                {primaryNav.map((item) => {
                  const active =
                    pathname === item.href || pathname.startsWith(item.href + "/");

                  if (!item.children) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "focus-ring block rounded-xl px-4 py-3.5 text-lg font-medium transition-colors hover:bg-brand-bg",
                            active ? "bg-brand-bg text-medical-blue" : "text-deep-blue"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  const isOpen = expanded === item.href;
                  return (
                    <li key={item.href}>
                      <div className="flex items-stretch">
                        <Link
                          href={item.href}
                          onClick={close}
                          className={cn(
                            "focus-ring flex-1 rounded-xl px-4 py-3.5 text-lg font-medium transition-colors hover:bg-brand-bg",
                            active ? "text-medical-blue" : "text-deep-blue"
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : item.href)}
                          aria-expanded={isOpen}
                          aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                          className="focus-ring rounded-xl px-3 text-deep-blue transition-colors hover:bg-brand-bg"
                        >
                          <ChevronDown
                            className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      {isOpen && (
                        <ul className="mb-1 ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={close}
                                className="focus-ring block rounded-lg px-3 py-2.5 text-base text-deep-blue/90 transition-colors hover:bg-brand-bg"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-border px-6 py-5">
              <Button asChild className="w-full">
                <Link href={primaryCta.href} onClick={close}>
                  {primaryCta.label}
                </Link>
              </Button>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
