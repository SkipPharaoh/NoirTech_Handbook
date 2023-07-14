import { Fallback, Image, Root } from "@radix-ui/react-avatar";

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof Root> {}

export interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof Image> {}

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof Fallback> {}
