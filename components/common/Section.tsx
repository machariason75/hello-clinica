import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

/** A page section with the frozen vertical rhythm + optional gradient surface. */
export function Section({
  children,
  className,
  containerClassName,
  gradient = false,
  as: Tag = "section",
  id,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  gradient?: boolean;
  as?: ElementType;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={cn("section", gradient && "bg-brand-gradient text-white", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
