import { Root } from "@radix-ui/react-toggle";
import React from "react";
import { toggleVariants } from "./Toggle";
import { VariantProps } from "class-variance-authority";

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof Root>,
    VariantProps<typeof toggleVariants> {}
