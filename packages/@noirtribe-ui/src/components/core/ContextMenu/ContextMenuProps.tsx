import {
  CheckboxItem,
  Content,
  Item,
  Label,
  RadioItem,
  Separator,
  SubContent,
  SubTrigger,
} from "@radix-ui/react-context-menu";
import React from "react";

export interface ContextMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SubTrigger> {
  inset?: boolean;
}

export interface ContextMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof SubContent> {}

export interface ContextMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}

export interface ContextMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof Item> {
  inset?: boolean;
}

export interface ContextMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxItem> {}

export interface ContextMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioItem> {}

export interface ContextMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof Label> {
  inset?: boolean;
}

export interface ContextMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof Separator> {}

export interface ContextMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {}
