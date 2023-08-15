import { cn } from "../../../lib/styling/utils";
import { SkeletonProps } from "./SkeletonProps";

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}
