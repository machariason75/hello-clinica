import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { footerNav, siteConfig } from "@/lib/site-config";

/**
 * Footer (frozen structure): newsletter signup, navigation links, legal links,
 * contact information, copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-gradient text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-8">
          {/* Newsletter */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-sm font-bold text-white">
                HC
              </span>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-white/80">
              Join our newsletter for educational updates, guides, and advising tips — straight to
              your inbox.
            </p>
            <div className="mt-6">
              <NewsletterForm variant="footer" />
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-blue">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring rounded text-white/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal + contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-blue">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring rounded text-white/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-accent-blue">
              Contact
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email.primary}`}
                  className="focus-ring inline-flex items-center gap-2 rounded text-white/85 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email.primary}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-sm text-white/70 sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Expert guidance for future healthcare professionals.</p>
        </div>
      </Container>
    </footer>
  );
}
