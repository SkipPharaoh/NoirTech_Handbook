import { Root } from "@radix-ui/react-label";
import { VariantProps } from "class-variance-authority";
import React from "react";
import { labelVariants } from "./Label";

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof Root>,
    VariantProps<typeof labelVariants> {}
