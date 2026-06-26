import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Compact internal-page header. Light treatment over the shared atmospheric
 * canvas (no dark block), with soft blue + coral glows so the background stays
 * continuous across pages. Dark text on the bright field.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 -top-10 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div className="absolute right-8 bottom-0 h-56 w-56 rounded-full bg-[#F97360]/10 blur-3xl" />
      </div>
      <Container className="relative py-16 lg:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">{eyebrow}</p>
          )}
          <h1 className="text-h1 mt-3 text-balance text-deep-blue">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg text-deep-blue/70 md:text-xl">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
