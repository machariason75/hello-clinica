"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { footerNav, siteConfig } from "@/lib/site-config";
import {
  InstagramIcon, TiktokIcon, TelegramIcon, FacebookIcon, XIcon,
} from "@/components/common/SocialIcons";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/helloclinica?utm_source=qr&stkn=bGxsZmZidHJpZHpi", Icon: InstagramIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@helloclinica?_r=1&_t=ZS-99nxuFFFowR", Icon: TiktokIcon },
  { name: "Telegram", href: "https://t.me/helloclinica", Icon: TelegramIcon },
  { name: "Facebook", href: "https://www.facebook.com/share/1HT5J6R3yP/", Icon: FacebookIcon },
  { name: "X (Twitter)", href: "https://x.com/Helloclinica", Icon: XIcon },
];

/**
 * Footer — Legal and Contact only. The brand logo and the Explore column were
 * removed as duplicates of the top navigation; the newsletter sign-up lives in
 * its own section above. Contact now carries the email plus social links.
 */
export function Footer() {
  const pathname = usePathname();
  if (
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/read") ||
    pathname?.startsWith("/listen")
  )
    return null;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-deep-blue/10 bg-[#F3E9DD]/70" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">Legal</h3>
            <ul className="mt-5 space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring rounded text-deep-blue/75 transition-colors hover:text-coral">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email.primary}`} className="focus-ring inline-flex items-center gap-2 rounded text-deep-blue/75 transition-colors hover:text-coral">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email.primary}
                </a>
              </li>
            </ul>

            <p className="mt-6 text-sm font-medium text-deep-blue/70">Follow us</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white text-medical-blue shadow-sm transition hover:bg-medical-blue hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
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
