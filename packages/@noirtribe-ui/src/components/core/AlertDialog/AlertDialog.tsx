"use client";

import {
  Action,
  AlertDialogPortalProps,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-alert-dialog";
import { ElementRef, HTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { buttonVariants } from "../Button";
import {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogTitleProps,
} from "./AlertDialogProps";

const AlertDialog = Root;

const AlertDialogTrigger = Trigger;

const AlertDialogPortal = ({ className, ...props }: AlertDialogPortalProps) => (
  <Portal className={cn(className)} {...props} />
);

const AlertDialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  AlertDialogOverlayProps
>(({ className, children, ...props }, ref) => (
  <Overlay
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));

const AlertDialogContent = forwardRef<
  ElementRef<typeof Content>,
  AlertDialogContentProps
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));

const AlertDialogHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

const AlertDialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);

const AlertDialogTitle = forwardRef<
  ElementRef<typeof Title>,
  AlertDialogTitleProps
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));

const AlertDialogDescription = forwardRef<
  ElementRef<typeof Description>,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

const AlertDialogAction = forwardRef<
  ElementRef<typeof Action>,
  AlertDialogActionProps
>(({ className, ...props }, ref) => (
  <Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));

const AlertDialogCancel = forwardRef<
  ElementRef<typeof Cancel>,
  AlertDialogCancelProps
>(({ className, ...props }, ref) => (
  <Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
));

AlertDialogPortal.displayName = Portal.displayName;
AlertDialogOverlay.displayName = Overlay.displayName;
AlertDialogContent.displayName = Content.displayName;
AlertDialogHeader.displayName = "AlertDialogHeader";
AlertDialogFooter.displayName = "AlertDialogFooter";
AlertDialogTitle.displayName = Title.displayName;
AlertDialogDescription.displayName = Description.displayName;
AlertDialogAction.displayName = Action.displayName;
AlertDialogCancel.displayName = Cancel.displayName;

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
