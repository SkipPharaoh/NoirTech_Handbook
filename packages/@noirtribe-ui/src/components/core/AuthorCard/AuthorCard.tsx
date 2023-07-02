import { forwardRef } from "react";
import { cn } from "../../../lib/styling/utils";

export default forwardRef<HTMLDivElement>(function AuthorCard(
  { ...props },
  ref
) {
  return (
    <div className={cn("")} ref={ref} {...props}>
      Hi
    </div>
  );
});
