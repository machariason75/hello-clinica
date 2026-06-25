import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button styles (palette overridden per File 17 v1.2):
 *  - primary:   coral background, white text, rounded-xl (the MSHQ CTA)
 *  - secondary: white background, teal border + teal text
 * Coral (#C2461A) meets WCAG AA (4.9:1) with white label text.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "rounded-xl bg-medical-blue text-white shadow-sm hover:bg-deep-blue active:translate-y-px",
        secondary:
          "rounded-xl border-2 border-medical-blue bg-white text-medical-blue hover:bg-brand-bg active:translate-y-px",
        ghost: "rounded-xl text-medical-blue hover:bg-brand-bg",
        link: "text-medical-blue underline-offset-4 hover:underline",
        destructive: "rounded-xl bg-destructive text-destructive-foreground hover:opacity-90",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
