// src/test/HeroBanner.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroBanner from "../components/HeroBanner";

// Mock child components
vi.mock("./Latestsong", () => ({
  default: () => <div data-testid="mock-latestsong">Latest Song Mock</div>,
}));

vi.mock("./MainButton", () => ({
  default: ({ text, link }: { text: string; link: string }) => (
    <button data-testid="mock-button" data-link={link}>
      {text}
    </button>
  ),
}));

describe("HeroBanner Component", () => {
  it("renders main headings", () => {
    render(<HeroBanner />);
    expect(screen.getByText("Hi!")).toBeTruthy();
    expect(screen.getByText("I am")).toBeTruthy();
    expect(screen.getByText("Luka")).toBeTruthy();
  });

  it("has correct styling classes", () => {
    render(<HeroBanner />);
    const mainContainer = screen.getByRole("heading", { name: "Hi!" });
    expect(mainContainer).toHaveClass("text-8xl", "text-white", "font-poppins");
  });

  it("renders name with gradient text", () => {
    render(<HeroBanner />);
    const nameText = screen.getByText("Luka");
    expect(nameText).toHaveClass(
      "text-transparent",
      "bg-clip-text",
      "bg-linear-to-r",
      "from-violet-600",
      "to-indigo-600",
    );
  });
});
