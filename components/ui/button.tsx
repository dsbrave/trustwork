import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-au-gum focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-upwork border border-au-gumbright bg-au-gumbright text-white shadow-sm hover:bg-[#0e7700]",
        default:
          "rounded-upwork bg-au-ocean text-white shadow-sm hover:bg-[#0a3d5c]",
        green:
          "rounded-upwork bg-au-gum text-white shadow-sm hover:bg-[#126d34]",
        orange:
          "rounded-upwork bg-au-coral text-white shadow-sm hover:bg-[#9a3412]",
        outline:
          "rounded-upwork border border-[#001e00]/20 bg-white text-[#001e00] hover:bg-black/[0.03]",
        ghost:
          "rounded-upwork text-au-ocean hover:bg-au-ocean/10",
        nav:
          "rounded-upwork border border-au-gumbright bg-au-gumbright px-5 py-2 text-sm text-white hover:bg-[#0e7700]",
      },
      size: {
        default: "h-11 px-6 text-base",
        lg: "min-h-[52px] px-8 py-3 text-base",
        sm: "h-9 px-4 text-sm",
        icon: "h-10 w-10 rounded-upwork",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
