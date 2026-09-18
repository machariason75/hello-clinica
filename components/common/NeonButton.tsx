import Link from "next/link";
import type { ReactNode } from "react";

const GLOW = "conic-gradient(from 0deg, #ff2d75, #7a5cff, #12c2e9, #ff2d75)";

/**
 * Neon-glow button (static halo that brightens on hover). Dark pill with a
 * blurred gradient halo behind it — reads well on light or dark backgrounds.
 * Renders a Link when `href` is set, otherwise a <button>.
 */
export function NeonButton({
  href,
  type = "button",
  disabled = false,
  children,
  className = "",
}: {
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const glow = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -inset-[3px] rounded-[20px] opacity-70 blur-[9px] transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: GLOW }}
    />
  );
  const face = (
    <span className="relative z-10 inline-flex items-center gap-2 rounded-2xl bg-[#0b0f17] px-7 py-3.5 font-semibold text-white">
      {children}
    </span>
  );
  const cls = `group focus-ring relative inline-flex ${className}`;
  if (href) return <Link href={href} className={cls}>{glow}{face}</Link>;
  return <button type={type} disabled={disabled} className={cls}>{glow}{face}</button>;
}
