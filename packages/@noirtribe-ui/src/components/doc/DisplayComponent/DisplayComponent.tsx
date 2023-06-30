import { forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";
import { DisplayComponentProps } from "./DisplayComponentProps";

export default forwardRef<HTMLDivElement, DisplayComponentProps>(
  function DisplayComponent({ children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center")}
        {...props}
      >
        {children}
      </div>
    );
  }
);
