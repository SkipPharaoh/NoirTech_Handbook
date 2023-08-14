import { Root, ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";
import React from "react";

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof Root> {}

export interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar> {}
