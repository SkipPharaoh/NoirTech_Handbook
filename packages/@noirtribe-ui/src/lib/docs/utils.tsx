import { icons } from "lucide-react";
import React from "react";
import { NavigationMenuLink } from "../../components/core/NavigationMenu";
import { cn } from "../styling/utils";

const PropData = [
  {
    name: "prop1",
    type: "string",
    defaultValue: "default1",
    description: "This is the first property.",
  },
  {
    name: "prop2",
    type: "number",
    defaultValue: "0",
    description: "This is the second property.",
  },
  {
    name: "prop3",
    type: "boolean",
    defaultValue: "false",
    description: "This is the third property.",
  },
];

const CardData = [
  {
    title: "Caching Tasks",
    cta: "Read More",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    backGroundColor: "white",
    titleColor: "secondary",
  },
  {
    title: "Running Tasks",
    cta: "Read More",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    backGroundColor: "zinc",
    titleColor: "white",
  },
  {
    title: "Configuration Options",
    cta: "Read More",
    href: "https://turbo.build/repo/docs/reference/configuration",
    backGroundColor: "secondary",
    titleColor: "primary",
  },
];

const TableData = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
];

const HomepageData = [
  {
    icon: icons.UserCircle2,
    title: "Accessible",
    content: "Follows ARIA standards for accessible components out of the box.",
  },
  {
    icon: icons.Layout,
    title: "Flexible",
    content: "Components adapt to different screen sizes and layout needs.",
  },
  {
    icon: icons.Puzzle,
    title: "Composability",
    content:
      "Components can be mixed, matched, and nested like building blocks to create versatile UI layouts.",
  },
  {
    icon: icons.Settings,
    title: "Customizable",
    content: "Extensible design system enables theme and style overrides.",
  },
  {
    icon: icons.Code2,
    title: "Type-Safe",
    content: "Strongly typed components help prevent bugs at build time",
  },
  {
    icon: icons.RefreshCwOff,
    title: "Dry-Code",
    content:
      "Simplify development with abstracted reusable hooks and components, which eliminates repetitive code.",
  },
];

const Components = [
  {
    title: "Alert Dialog",
    href: "/docs/components/AlertDialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/components/HoverCard",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/components/Progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/components/ScrollArea",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/components/Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/components/Tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export { PropData, CardData, TableData, HomepageData, Components };
