"use client";

import { ElementRef, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { ProgressProps } from "./ProgressProps";
import { Indicator, Root } from "@radix-ui/react-progress";

export default forwardRef<ElementRef<typeof Root>, ProgressProps>(
  function Progress({ className, value, ...props }, ref) {
    return (
      <Root
        ref={ref}
        value={value}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary/20",
          className
        )}
        {...props}
      >
        <Indicator
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </Root>
    );
  }
);
