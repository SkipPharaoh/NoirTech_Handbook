import { VariantProps } from "class-variance-authority";
import {
  cardDescriptionVariants,
  cardFooterVariants,
  cardTitleVariants,
  cardVariants,
} from "./Card";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardDescriptionVariants> {}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof cardFooterVariants> {}
