"use client";

import { ElementRef, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { ToggleProps } from "./ToggleProps";
import { Root } from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = forwardRef<ElementRef<typeof Root>, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
);

Toggle.displayName = Root.displayName;

export { Toggle, toggleVariants };
