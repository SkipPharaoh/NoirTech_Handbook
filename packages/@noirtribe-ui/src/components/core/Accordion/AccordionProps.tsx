import React from "react";
import { Content, Item, Trigger } from "@radix-ui/react-accordion";

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof Item> {}

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Trigger> {}

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}
