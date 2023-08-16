import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Action,
  Close,
  Description,
  Provider,
  Root,
  Title,
  Viewport,
} from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { ElementRef, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import {
  ToastActionElement,
  ToastActionProps,
  ToastCloseProps,
  ToastComponentProps,
  ToastDescriptionProps,
  ToastProps,
  ToastTitleProps,
  ToastViewportProps,
} from "./ToastProps";

export const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const ToastProvider = Provider;

const ToastViewport = forwardRef<
  ElementRef<typeof Viewport>,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
));

const Toast = forwardRef<ElementRef<typeof Root>, ToastComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

const ToastAction = forwardRef<ElementRef<typeof Action>, ToastActionProps>(
  ({ className, ...props }, ref) => (
    <Action
      ref={ref}
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )}
      {...props}
    />
  )
);

const ToastClose = forwardRef<ElementRef<typeof Close>, ToastCloseProps>(
  ({ className, ...props }, ref) => (
    <Close
      ref={ref}
      className={cn(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      )}
      toast-close=""
      {...props}
    >
      <Cross2Icon className="h-4 w-4" />
    </Close>
  )
);

const ToastTitle = forwardRef<ElementRef<typeof Title>, ToastTitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn("text-sm font-semibold [&+div]:text-xs", className)}
      {...props}
    />
  )
);

const ToastDescription = forwardRef<
  ElementRef<typeof Description>,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));

ToastViewport.displayName = Viewport.displayName;
Toast.displayName = Root.displayName;
ToastAction.displayName = Action.displayName;
ToastClose.displayName = Close.displayName;
ToastTitle.displayName = Title.displayName;
ToastDescription.displayName = Description.displayName;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
};
