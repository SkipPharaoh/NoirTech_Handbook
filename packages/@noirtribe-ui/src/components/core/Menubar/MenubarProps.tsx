import {
  CheckboxItem,
  Content,
  Item,
  Label,
  RadioItem,
  Root,
  Separator,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-menubar";
import React from "react";

export interface MenubarProps
  extends React.ComponentPropsWithoutRef<typeof Root> {}

export interface MenubarTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Trigger> {}

export interface MenubarSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SubTrigger> {
  inset?: boolean;
}

export interface MenubarSubContentProps
  extends React.ComponentPropsWithoutRef<typeof SubContent> {}

export interface MenubarContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}

export interface MenubarItemProps
  extends React.ComponentPropsWithoutRef<typeof Item> {
  inset?: boolean;
}

export interface MenubarCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxItem> {}

export interface MenubarRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioItem> {}

export interface MenubarLabelProps
  extends React.ComponentPropsWithoutRef<typeof Label> {
  inset?: boolean;
}

export interface MenubarSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof Separator> {}

export interface MenubarShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {}
