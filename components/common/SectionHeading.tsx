import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

/** Consistent section heading block (eyebrow + title + optional intro). */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  inverted = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", inverted && "text-accent-blue")}>{eyebrow}</p>
      )}
      <h2 className={cn("text-h2 mt-3", inverted ? "text-white" : "text-deep-blue")}>{title}</h2>
      {intro && (
        <p className={cn("text-lead mt-4", inverted && "text-white/85")}>{intro}</p>
      )}
    </Reveal>
  );
}
