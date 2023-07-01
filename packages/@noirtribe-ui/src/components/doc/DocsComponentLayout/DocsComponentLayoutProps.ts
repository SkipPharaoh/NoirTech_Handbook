import React from "react";

interface PropInfo {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}

export interface DocsComponentLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  propInfo: PropInfo[];
}
