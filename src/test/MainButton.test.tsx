// src/test/MainButton.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MainButton from "../components/MainButton";
import { userEvent } from "@testing-library/user-event";

describe("MainButton Component", () => {
  const defaultProps = {
    link: "https://example.com",
    text: "Click Me",
  };

  it("renders with correct text", () => {
    render(<MainButton {...defaultProps} />);
    expect(screen.getByText("Click Me")).toBeTruthy();
  });

  it("has correct link href", () => {
    render(<MainButton {...defaultProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("has correct CSS classes", () => {
    render(<MainButton {...defaultProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveClass(
      "inline-flex",
      "items-center",
      "justify-center",
      "text-gray-200"
    );
  });

  it("is accessible with keyboard navigation", async () => {
    render(<MainButton {...defaultProps} />);
    const link = screen.getByRole("link");
    await userEvent.tab();
    expect(link).toHaveFocus();
  });

  it("handles empty text prop gracefully", () => {
    render(<MainButton {...{ ...defaultProps, text: "" }} />);
    const link = screen.getByRole("link");
    expect(link).toBeEmptyDOMElement();
  });
});
