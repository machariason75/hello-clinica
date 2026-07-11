"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { footerNav, siteConfig } from "@/lib/site-config";

/**
 * Footer — warm surface (matches the site background), brand logo, and the
 * Explore / Legal / Contact columns. The newsletter sign-up lives in its own
 * section above the footer, so it is intentionally not repeated here.
 */
export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/read")) return null;
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-deep-blue/10 bg-[#F3E9DD]/70"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={290}
                height={134}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-deep-blue/70">
              Expert guidance and study tools for future healthcare professionals — advising,
              resources, and practice questions in one place.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring rounded text-deep-blue/75 transition-colors hover:text-coral"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal + contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring rounded text-deep-blue/75 transition-colors hover:text-coral"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-coral">
              Contact
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email.primary}`}
                  className="focus-ring inline-flex items-center gap-2 rounded text-deep-blue/75 transition-colors hover:text-coral"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email.primary}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-deep-blue/10 pt-8 text-sm text-deep-blue/60 sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Expert guidance for future healthcare professionals.</p>
        </div>
      </Container>
    </footer>
  );
}
