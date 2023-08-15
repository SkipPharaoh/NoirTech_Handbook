import { Content, Description, Overlay, Title } from "@radix-ui/react-dialog";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { sheetVariants } from "./Sheet";

export interface SheetOverlayProps
  extends React.ComponentPropsWithoutRef<typeof Overlay> {}

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {}

export interface SheetHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface SheetFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface SheetTitleProps
  extends React.ComponentPropsWithoutRef<typeof Title> {}

export interface SheetDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof Description> {}
