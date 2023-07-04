import { VariantProps } from "class-variance-authority";
import React from "react";
import { avatarCardVariants } from "./AvatarCard";

export interface AvatarCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarCardVariants> {}
