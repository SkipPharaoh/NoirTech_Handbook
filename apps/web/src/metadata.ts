"use server";

import { Metadata } from "next";

// convert above to async function

export async function getMetadata(): Promise<Metadata> {
  return {
    title: "Web - Turborepo Example",
  };
}
