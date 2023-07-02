import { VariantProps } from "class-variance-authority";
import {
  cardBackGroundColorVariants,
  cardTitleTextColorVariants,
  cardVariants,
} from "./Card";

export interface CardTitleTextProps
  extends VariantProps<typeof cardTitleTextColorVariants> {}

export interface CardBackGroundProps
  extends CardTitleTextProps,
    VariantProps<typeof cardBackGroundColorVariants> {}

export interface CardProps
  extends CardBackGroundProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof cardVariants> {
  cta: string;
}
