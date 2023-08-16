import {
  Action,
  Close,
  Description,
  Root,
  Title,
  Toast,
  ToastAction,
  Viewport,
} from "@radix-ui/react-toast";
import { VariantProps } from "class-variance-authority";
import React from "react";
import { toastVariants } from "./Toast";

export interface ToastViewportProps
  extends React.ComponentPropsWithoutRef<typeof Viewport> {}

export interface ToastComponentProps
  extends React.ComponentPropsWithoutRef<typeof Root>,
    VariantProps<typeof toastVariants> {}

export interface ToastActionProps
  extends React.ComponentPropsWithoutRef<typeof Action> {}

export interface ToastCloseProps
  extends React.ComponentPropsWithoutRef<typeof Close> {}

export interface ToastTitleProps
  extends React.ComponentPropsWithoutRef<typeof Title> {}

export interface ToastDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof Description> {}

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;
