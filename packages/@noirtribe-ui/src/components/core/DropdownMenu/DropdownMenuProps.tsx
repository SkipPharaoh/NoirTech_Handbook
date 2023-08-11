import {
  CheckboxItem,
  Content,
  Item,
  Label,
  RadioItem,
  Separator,
  SubContent,
  SubTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";

export interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SubTrigger> {
  inset?: boolean;
}

export interface DropdownMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof SubContent> {}

export interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof Item> {
  inset?: boolean;
}

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxItem> {}

export interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioItem> {}

export interface DropdownMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof Label> {
  inset?: boolean;
}

export interface DropdownMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof Separator> {}

export interface DropdownMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {}
