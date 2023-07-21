import { VariantProps } from "class-variance-authority";
import React from "react";
import { badgeVariants } from "./Badge";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
