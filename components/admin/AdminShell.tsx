"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { adminNav } from "@/lib/admin/nav";
import { SignOutButton } from "./SignOutButton";
import { cn } from "@/lib/utils";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
      {adminNav.map((group) => (
        <div key={group.heading}>
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {group.heading}
          </p>
          <ul className="space-y-1">
            {group.items.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              if (item.comingSoon) {
                return (
                  <li key={item.href}>
                    <span
                      className="flex cursor-not-allowed items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground/50"
                      title="Coming soon"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {item.label}
                      </span>
                      <span className="rounded-full bg-brand-bg px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                        Soon
                      </span>
                    </span>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-coral text-white"
                        : "text-deep-blue hover:bg-brand-bg"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-2 px-5 py-5">
      <Image
        src="/images/logo.png"
        alt="Hello Clinica"
        width={290}
        height={134}
        className="h-8 w-auto"
      />
      <span className="rounded-md bg-brand-bg px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-medical-blue">
        Admin
      </span>
    </div>
  );
}

export function AdminShell({
  children,
  adminName,
}: {
  children: React.ReactNode;
  adminName: string;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent lg:flex">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-white lg:flex">
        <Brand />
        <NavLinks />
        <div className="border-t border-border px-3 py-3">
          <SignOutButton />
        </div>
      </aside>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-deep-blue/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between pr-3">
              <Brand />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-brand-bg"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <NavLinks onNavigate={() => setDrawerOpen(false)} />
            <div className="border-t border-border px-3 py-3">
              <SignOutButton />
            </div>
          </aside>
        </div>
      )}

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-white/90 px-4 py-3 backdrop-blur lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="rounded-lg p-2 text-deep-blue hover:bg-brand-bg lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <span className="text-sm font-medium text-muted-foreground">
              Welcome back, <span className="text-deep-blue">{adminName}</span>
            </span>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
