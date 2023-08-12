import {
  Content,
  Indicator,
  List,
  Root,
  Trigger,
  Viewport,
} from "@radix-ui/react-navigation-menu";
import React from "react";

export interface NavigationMenuProps
  extends React.ComponentPropsWithoutRef<typeof Root> {}

export interface NavigationMenuListProps
  extends React.ComponentPropsWithoutRef<typeof List> {}

export interface NavigationMenuTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Trigger> {}

export interface NavigationMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}

export interface NavigationMenuViewportProps
  extends React.ComponentPropsWithoutRef<typeof Viewport> {}

export interface NavigationMenuIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof Indicator> {}
