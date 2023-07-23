"use client";

import { Fallback, Image, Root } from "@radix-ui/react-avatar";
import { ElementRef, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps,
} from "./AvatarProps";

const Avatar = forwardRef<ElementRef<typeof Root>, AvatarProps>(
  ({ className, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
);

const AvatarImage = forwardRef<ElementRef<typeof Image>, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <Image
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
);

const AvatarFallback = forwardRef<
  ElementRef<typeof Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));

Avatar.displayName = Root.displayName;
AvatarImage.displayName = Image.displayName;
AvatarFallback.displayName = Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
