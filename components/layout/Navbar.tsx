"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search as SearchIcon } from "lucide-react";
import { Container } from "@/components/common/Container";
import { BackButton } from "@/components/common/BackButton";
import { Sidebar } from "./Sidebar";
import { SearchModal } from "./SearchModal";
import { siteConfig } from "@/lib/site-config";

/**
 * Navbar (frozen): logo left, hamburger right. Sticky across all pages. The
 * back button renders top-left on internal pages (it self-hides on "/").
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
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="focus-ring flex items-center gap-2 rounded-lg"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white">
                HC
              </span>
              <span className="text-lg font-bold tracking-tight text-deep-blue">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="focus-ring hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-deep-blue transition-colors hover:bg-brand-bg sm:inline-flex"
              aria-label="Open search"
            >
              <SearchIcon className="h-4 w-4" aria-hidden="true" />
              Search
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl text-deep-blue transition-colors hover:bg-brand-bg"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Container>

        {/* Back button strip — appears on internal pages only */}
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
