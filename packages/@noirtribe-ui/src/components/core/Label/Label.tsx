"use client";

import { ElementRef, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { LabelProps } from "./LabelProps";
import { cva } from "class-variance-authority";
import { Root } from "@radix-ui/react-label";

export const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export default forwardRef<ElementRef<typeof Root>, LabelProps>(function Label(
  { className, ...props },
  ref
) {
  return (
    <Root ref={ref} className={cn(labelVariants(), className)} {...props} />
  );
});
