"use client";

import {
  CheckboxItem,
  Content,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle, Group } from "lucide-react";
import { ElementRef, forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuRadioItemProps,
  DropdownMenuSeparatorProps,
  DropdownMenuShortcutProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubTriggerProps,
} from "./DropdownMenuProps";

const DropdownMenu = Root;

const DropdownMenuTrigger = Trigger;

const DropdownMenuGroup = Group;

const DropdownMenuPortal = Portal;

const DropdownMenuSub = Sub;

const DropdownMenuRadioGroup = RadioGroup;

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </SubTrigger>
));

const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => (
  <SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));

const DropdownMenuContent = forwardRef<
  ElementRef<typeof Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </Portal>
));

const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  DropdownMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
));

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));

const DropdownMenuShortcut = ({
  className,
  ...props
}: DropdownMenuShortcutProps) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};

DropdownMenuSubTrigger.displayName = SubTrigger.displayName;
DropdownMenuSubContent.displayName = SubContent.displayName;
DropdownMenuContent.displayName = Content.displayName;
DropdownMenuItem.displayName = Item.displayName;
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;
DropdownMenuRadioItem.displayName = RadioItem.displayName;
DropdownMenuLabel.displayName = Label.displayName;
DropdownMenuSeparator.displayName = Separator.displayName;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
