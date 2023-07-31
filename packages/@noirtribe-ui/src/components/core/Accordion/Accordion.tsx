"use client";

import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import {
  AccordionContentProps,
  AccordionItemProps,
  AccordionTriggerProps,
} from "./AccordionProps";

const Accordion = Root;

const AccordionItem = forwardRef<
  React.ElementRef<typeof Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <Item ref={ref} className={cn("border-b", className)} {...props} />
));

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </Trigger>
  </Header>
));

const AccordionContent = forwardRef<
  React.ElementRef<typeof Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </Content>
));

AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = Trigger.displayName;
AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
