import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { ButtonProps } from "./ButtonProps";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus-visible:ring-slate-400 disabled:pointer-events-none dark:focus-visible:ring-offset-slate-900 ring-offset-background",

  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        primary: "text-white bg-primary hover:bg-primaryHoverandFocus", // This is also used for success
        secondary: "text-white bg-secondary hover:bg-secondaryHoverandFocus",
        tertiary: "text-white bg-tertiary hover:bg-tertiaryHoverandFocus",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
        outline:
          "bg-transparent text-primary border border-primary hover:bg-slate-100 dark:border-primary dark:text-slate-100",
        subtle:
          "bg-slate-100 text-secondary hover:bg-slate-200 dark:bg-slate-700 dark:text-secondary",
        ghost:
          "bg-transparent text-primary dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100",
        link: "text-primary underline-offset-4 hover:underline hover:text-primaryHoverandFocus",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-2 px-6 rounded-xl text-sm",
        md: "py-3 px-9 rounded-xl text-base",
        lg: "py-4 px-12 rounded-xl text-lg",
        xl: "py-5 px-16 rounded-xl text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, variant, size, onClick, ...props },
  ref
) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      id="Button"
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
