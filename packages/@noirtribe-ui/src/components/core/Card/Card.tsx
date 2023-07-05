import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import {
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from "./CardProps";

export const cardVariants = cva(
  "rounded-lg border overflow-hidden bg-origin-border text-card-foreground shadow-sm",
  {
    variants: {
      borderColor: {
        black: "border-black",
        white: "border-white",
        primary: "border-primary",
        secondary: "border-secondary",
        tertiary: "border-tertiary",
      },
      backGroundColor: {
        zinc: "bg-zinc-900",
        white: "bg-white",
        primary: "bg-primary",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary",
        gradient: "bg-gradient-to-r from-brandred to-brandblue",
      },
    },
    defaultVariants: {
      borderColor: "primary",
      backGroundColor: "secondary",
    },
  }
);

export const cardTitleVariants = cva(
  "inline-block text-2xl font-semibold leading-none tracking-tight",
  {
    variants: {
      titleColor: {
        white: "text-white",
        black: "text-black",
        primary: "text-primary",
        secondary: "text-secondary",
        tertiary: "text-tertiary",
      },
    },
    defaultVariants: {
      titleColor: "white",
    },
  }
);

export const cardDescriptionVariants = cva("text-sm text-muted-foreground", {
  variants: {
    textColor: {
      white: "text-white",
      black: "text-black",
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    },
  },
  defaultVariants: {
    textColor: "white",
  },
});

export const cardFooterVariants = cva("flex items-center p-6 pt-0", {
  variants: {
    textColor: {
      gray: "text-gray-500",
      white: "text-white",
      black: "text-black",
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    },
  },
  defaultVariants: {
    textColor: "gray",
  },
});

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, borderColor, backGroundColor, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ borderColor, backGroundColor, className }))}
      {...props}
    />
  )
);

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);

const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, titleColor, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(cardTitleVariants({ titleColor, className }))}
      {...props}
    />
  )
);

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, textColor, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(cardDescriptionVariants({ textColor, className }))}
      {...props}
    />
  )
);

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, href, textColor, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ textColor, className }))}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  )
);

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
