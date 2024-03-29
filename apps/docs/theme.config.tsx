import React from "react";
import { type DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Noir Tribe Docs</span>,
  project: {
    link: "https://github.com/SkipPharaoh/NoirTech_Handbook",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/SkipPharaoh/NoirTech_Handbook",
  useNextSeoProps: function SEO() {
    return {
      titleTemplate: "%s - Noir Tribe Docs",
    };
  },
  footer: {
    text: "Noir Tribe Docs",
  },
};

export default config;
