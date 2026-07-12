import crypto from "crypto";

/**
 * Shared email helpers.
 *
 * Addresses are ALL config-driven, so switching to your Hello Clinica inboxes is
 * an environment-variable change — no code edit:
 *
 *   FROM_EMAIL             who outbound mail comes FROM (e.g. "Hello Clinica <noreply@helloclinica.com>")
 *   NOTIFY_EMAIL_PRIMARY   where form submissions are DELIVERED
 *   NOTIFY_EMAIL_SECONDARY optional second recipient
 *   NEXT_PUBLIC_SITE_URL   used to build links (unsubscribe, password reset)
 */

/** Internal recipients for form notifications (contact, consultation, etc). */
export function notifyRecipients(): string[] {
  return [process.env.NOTIFY_EMAIL_PRIMARY, process.env.NOTIFY_EMAIL_SECONDARY]
    .filter((v): v is string => !!v && v.trim().length > 0)
    .map((v) => v.trim());
}

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://helloclinica.com").replace(/\/$/, "");
}

/** A cryptographically strong, URL-safe token. */
export function makeToken(): string {
  return crypto.randomBytes(32).toString("base64url");
}

/**
 * Wraps content in the Hello Clinica email shell (warm palette, matches the site).
 * Inline styles only — email clients strip stylesheets.
 */
export function emailShell(opts: {
  heading: string;
  bodyHtml: string;
  footerHtml?: string;
}): string {
  return `
<div style="margin:0;padding:24px;background:#FBF5EF;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(12,60,76,.08);">
    <div style="padding:24px 28px;background:#0C3C4C;">
      <div style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:.2px;">Hello Clinica</div>
    </div>
    <div style="padding:28px;">
      <h1 style="margin:0 0 14px;font-size:20px;line-height:1.3;color:#0C3C4C;">${opts.heading}</h1>
      <div style="font-size:15px;line-height:1.65;color:#334155;">
        ${opts.bodyHtml}
      </div>
    </div>
    <div style="padding:18px 28px;background:#FBF5EF;font-size:12px;line-height:1.6;color:#64748b;">
      ${opts.footerHtml ?? `You're receiving this from Hello Clinica.`}
    </div>
  </div>
</div>`.trim();
}

/** Standard button used in emails. */
export function emailButton(href: string, label: string): string {
  return `<a href="${href}" style="display:inline-block;margin-top:18px;padding:12px 22px;background:#F97360;color:#ffffff;text-decoration:none;border-radius:12px;font-weight:600;font-size:15px;">${label}</a>`;
}

/** Footer for newsletters — always carries a working unsubscribe link (legal requirement). */
export function newsletterFooter(unsubUrl: string): string {
  return `You're receiving this because you subscribed to Hello Clinica updates.<br />
<a href="${unsubUrl}" style="color:#0C3C4C;text-decoration:underline;">Unsubscribe</a> at any time.`;
}
