import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from ".";

describe("Card", () => {
  it("renders card text correctly", () => {
    render(<Card cta="Read More" />);
    const card = screen.getByText("Read More");
  });
});
