"use client";

import { Root } from "@radix-ui/react-separator";
import { ElementRef, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { SeparatorProps } from "./SeparatorProps";

export default forwardRef<ElementRef<typeof Root>, SeparatorProps>(
  function Separator(
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) {
    return (
      <Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    );
  }
);
