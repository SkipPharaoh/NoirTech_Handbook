"use client";

import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";
import { ElementRef, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { SliderProps } from "./SliderProps";

export default forwardRef<ElementRef<typeof Root>, SliderProps>(function Slider(
  { className, ...props },
  ref
) {
  return (
    <Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
        <Range className="absolute h-full bg-primary" />
      </Track>
      <Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    </Root>
  );
});
