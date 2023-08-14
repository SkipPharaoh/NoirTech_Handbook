import {
  Content,
  Item,
  Label,
  Separator,
  Trigger,
} from "@radix-ui/react-select";
import React from "react";

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Trigger> {}

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}

export interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof Label> {}

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof Item> {}

export interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof Separator> {}
