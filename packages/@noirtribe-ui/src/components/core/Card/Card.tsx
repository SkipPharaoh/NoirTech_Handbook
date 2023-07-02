import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { CardProps } from "./CardProps";

export const cardVariants = cva(
  "group mt-4 rounded-lg border border-transparent overflow-hidden bg-origin-border",
  {
    variants: {
      borderColor: {
        black: "bg-black",
        white: "bg-white",
        primary: "bg-primary",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary",
        gradient: "bg-gradient-to-r from-brandred to-brandblue",
      },
      ctaColor: {
        gray: "text-gray-500",
        white: "text-white",
        black: "text-black",
        primary: "text-primary",
        secondary: "text-secondary",
        tertiary: "text-tertiary",
      },
    },
    defaultVariants: {
      borderColor: "gradient",
      ctaColor: "gray",
    },
  }
);

export const cardBackGroundColorVariants = cva("p-4 h-full", {
  variants: {
    backGroundColor: {
      zinc: "bg-zinc-900",
      white: "bg-white",
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    },
  },
  defaultVariants: {
    backGroundColor: "zinc",
  },
});

export const cardTitleTextColorVariants = cva("inline-bloack text-xl", {
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
    titleColor: "tertiary",
  },
});

export default forwardRef<HTMLAnchorElement, CardProps>(function Card(
  {
    className,
    title,
    cta,
    href,
    borderColor,
    ctaColor,
    backGroundColor,
    titleColor,
    ...props
  },
  ref
) {
  return (
    <a
      className={cn(cardVariants({ borderColor, ctaColor }))}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      ref={ref}
      {...props}
    >
      <div className={cn(cardBackGroundColorVariants({ backGroundColor }))}>
        <p className={cn(cardTitleTextColorVariants({ titleColor }))}>
          {title}
        </p>
        <div className={cn("text-xs mt-4 group-hover:underline")}>{cta} →</div>
      </div>
    </a>
  );
});
