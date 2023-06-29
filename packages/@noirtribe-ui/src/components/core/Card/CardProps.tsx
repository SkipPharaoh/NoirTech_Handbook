import { VariantProps } from "class-variance-authority";
import { cardVariants } from "./Card";

export interface CardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof cardVariants> {
  cta: string;
}
