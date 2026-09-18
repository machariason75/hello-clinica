import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Aurora-border button: a light face inside a coral→teal gradient border, with a
 * soft lift on hover. (Kept the export name `NeonButton` so existing call sites —
 * Get in touch, Subscribe, Send message — pick it up without changes.)
 */
const BORDER = "linear-gradient(135deg, #C2461A 0%, #17a2b8 55%, #C2461A 100%)";

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
  const cls = `group focus-ring inline-block rounded-2xl p-[2px] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${className}`;
  const face = (
    <span className="block rounded-[14px] bg-[#FBF7F2] px-7 py-3 transition-colors duration-300 group-hover:bg-white">
      <span className="inline-flex items-center gap-2 font-semibold text-deep-blue">{children}</span>
    </span>
  );
  if (href) {
    return (
      <Link href={href} className={cls} style={{ backgroundImage: BORDER }}>
        {face}
      </Link>
    );
  }
  return (
    <button type={type} disabled={disabled} className={cls} style={{ backgroundImage: BORDER }}>
      {face}
    </button>
  );
}
