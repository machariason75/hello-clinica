"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search as SearchIcon, ChevronDown } from "lucide-react";
import { Container } from "@/components/common/Container";
import { BackButton } from "@/components/common/BackButton";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/navigation/Sidebar";
import { SearchModal } from "@/components/navigation/SearchModal";
import { siteConfig, primaryNav, primaryCta, type NavItem } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Navbar (mega-menu override, File 17 v1.2): logo left; on lg+ a horizontal
 * mega-menu with dropdown panels, a search control, and a persistent coral CTA.
 * Below lg it collapses to search + hamburger (the drawer holds the same nav).
 * Sticky on every page; the back button strip shows on internal pages only.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-white/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="focus-ring flex shrink-0 items-center gap-2 rounded-lg"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white">
              HC
            </span>
            <span className="text-lg font-bold tracking-tight text-deep-blue">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop mega-menu */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Primary">
            {primaryNav.map((item) => (
              <NavEntry key={item.href} item={item} pathname={pathname} />
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="focus-ring hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-deep-blue transition-colors hover:bg-brand-bg sm:inline-flex"
              aria-label="Open search"
            >
              <SearchIcon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">Search</span>
            </button>

            <Button asChild size="sm" className="hidden lg:inline-flex">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>

            {/* Hamburger — mobile/tablet only */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl text-deep-blue transition-colors hover:bg-brand-bg lg:hidden"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Container>

        {/* Back button strip — internal pages only */}
        {!isHome && (
          <div className="border-t border-border/50 bg-white/60">
            <Container className="flex h-11 items-center">
              <BackButton />
            </Container>
          </div>
        )}
      </header>

      <Sidebar open={menuOpen} onOpenChange={setMenuOpen} />
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}

/** A single top-level nav entry: a plain link, or a button + dropdown panel. */
function NavEntry({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const active =
    pathname === item.href || pathname.startsWith(item.href + "/");

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "focus-ring rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-bg",
          active ? "text-medical-blue" : "text-deep-blue"
        )}
      >
        {item.label}
      </Link>
    );
  }

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        className={cn(
          "focus-ring inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-bg",
          active ? "text-medical-blue" : "text-deep-blue"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full z-50 pt-2 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <ul className="w-72 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-card-hover">
          <li>
            <Link
              href={item.href}
              className="focus-ring block rounded-xl px-3 py-2 text-sm font-semibold text-medical-blue hover:bg-brand-bg"
            >
              All {item.label}
            </Link>
          </li>
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="focus-ring block rounded-xl px-3 py-2 text-sm text-deep-blue transition-colors hover:bg-brand-bg"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}