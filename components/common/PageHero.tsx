import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "@/components/motion/Reveal";

/** Compact gradient page header used across internal pages. */
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
    <section className="bg-brand-gradient text-white">
      <Container className="py-16 lg:py-24">
        <Reveal className="max-w-3xl">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-blue">{eyebrow}</p>}
          <h1 className="text-h1 mt-3 text-balance">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-lg text-white/85 md:text-xl">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
