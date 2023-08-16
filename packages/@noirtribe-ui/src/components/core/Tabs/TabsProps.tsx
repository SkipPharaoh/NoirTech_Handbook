import { Content, List, Trigger } from "@radix-ui/react-tabs";
import React from "react";

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof List> {}

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Trigger> {}

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}
