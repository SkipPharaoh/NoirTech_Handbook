import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Button } from ".";

afterEach(() => {
  cleanup();
});

describe("Button", () => {
  // it("should meet accessibility guidelines", async () => {
  //   const { container } = render(<Button>Accessible Button</Button>);
  //   const results = await axe(container);
  //   expect(results).toHaveNoViolations();
  // });

  it("renders button text correctly", () => {
    render(<Button>Hello, World!</Button>);
    const button = screen.getByText("Hello, World!");
    expect(button).toBeDefined();
  });

  // it("applies the specified variant class", () => {
  //   render(<Button variant="primary">Test Button!</Button>);
  //   const button = screen.getByRole("button");
  //   expect(button.className).toContain("bg-primary");
  // });

  // it("applies the specified size class", () => {
  //   render(<Button size="lg">Large Button</Button>);
  //   const button = screen.getByRole("button");
  //   expect(button.className).toContain("py-4 px-12");
  //   expect(button.className).toContain("lg");
  // });

  // it("calls the onClick handler when clicked", () => {
  //   const handleOnClickSpy = vi.fn(() => {});
  //   render(<Button onClick={handleOnClickSpy}>Click me</Button>);
  //   const button = screen.getByRole("button", { name: "Click me" });
  //   fireEvent.click(button);
  //   expect(handleOnClickSpy).toHaveBeenCalledTimes(1);
  // });
  // write unit test to check if the button is disabled

  // it("should be disabled when disabled prop is true", () => {
  //   render(<Button disabled>Disabled Button</Button>);
  //   const button = screen.getByRole("button");
  //   expect(button.className).toBeDisabled();
  // });
});
