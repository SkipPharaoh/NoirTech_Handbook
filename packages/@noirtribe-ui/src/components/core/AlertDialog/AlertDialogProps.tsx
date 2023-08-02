import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Title,
} from "@radix-ui/react-alert-dialog";
import { ComponentPropsWithoutRef } from "react";

export interface AlertDialogOverlayProps
  extends ComponentPropsWithoutRef<typeof Overlay> {}

export interface AlertDialogContentProps
  extends ComponentPropsWithoutRef<typeof Content> {}

export interface AlertDialogTitleProps
  extends ComponentPropsWithoutRef<typeof Title> {}

export interface AlertDialogDescriptionProps
  extends ComponentPropsWithoutRef<typeof Description> {}

export interface AlertDialogActionProps
  extends ComponentPropsWithoutRef<typeof Action> {}

export interface AlertDialogCancelProps
  extends ComponentPropsWithoutRef<typeof Cancel> {}
