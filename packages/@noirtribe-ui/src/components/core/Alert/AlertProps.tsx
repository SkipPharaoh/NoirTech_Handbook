import React from "react";
import { alertVariants } from "./Alert";
import { VariantProps } from "class-variance-authority";

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
