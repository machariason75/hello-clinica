import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — radiant palette blends (no flat solids).
 *  - primary: warm coral→teal gradient, deepens on hover
 *  - secondary: soft cream gradient with a teal border
 *  - destructive: red gradient
 * Gradients are drawn from the site palette (coral #F97360, teal #0C3C4C) so
 * every button reads as part of the brand rather than a solid block of colour.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "rounded-xl bg-gradient-to-r from-coral via-[#E8613F] to-medical-blue bg-[length:200%_100%] bg-left text-white shadow-sm hover:bg-right hover:shadow-md active:translate-y-px",
        secondary:
          "rounded-xl border border-medical-blue/25 bg-gradient-to-b from-white to-brand-bg text-medical-blue shadow-sm hover:from-brand-bg hover:to-white hover:border-coral/40 active:translate-y-px",
        ghost: "rounded-xl text-medical-blue hover:bg-gradient-to-r hover:from-brand-bg hover:to-transparent",
        link: "text-medical-blue underline-offset-4 hover:underline",
        destructive:
          "rounded-xl bg-gradient-to-r from-[#E5484D] to-[#A93C15] bg-[length:200%_100%] bg-left text-white shadow-sm hover:bg-right active:translate-y-px",
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
