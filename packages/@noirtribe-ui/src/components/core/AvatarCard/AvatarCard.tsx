import { forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { cva } from "class-variance-authority";
import { AvatarCardProps } from "./AvatarCardProps";

export const avatarCardVariants = cva("", {
  variants: {},
  defaultVariants: {},
});

export default forwardRef<HTMLDivElement, AvatarCardProps>(function AvatarCard(
  { className, ...props },
  ref
) {
  return (
    <div className={cn(avatarCardVariants({ className }))} ref={ref} {...props}>
      Hi
    </div>
  );
});
