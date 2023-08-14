import { Item, Root } from "@radix-ui/react-radio-group";
import React from "react";

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof Root> {}

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof Item> {}
