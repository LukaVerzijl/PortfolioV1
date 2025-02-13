// src/tests/App.test.tsx
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "../App";

// Existing mocks...
vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock("../components/WebTree", () => ({
  default: () => <div>WebTree Component</div>,
}));

vi.mock("../components/ProjectPageTree", () => ({
  default: () => <div>ProjectPageTree Component</div>,
}));

describe("App Component Tests", () => {
  describe("Routing Tests", () => {
    // Existing tests...
    it("should render WebTree component on root path", () => {
      const { container } = render(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );
      expect(container.innerHTML).toContain("WebTree Component");
    });

    it("should render ProjectPageTree component on project path", () => {
      const { container } = render(
        <MemoryRouter initialEntries={["/project/test-project"]}>
          <App />
        </MemoryRouter>
      );
      expect(container.innerHTML).toContain("ProjectPageTree Component");
    });

    // New tests
    it("should handle invalid routes", () => {
      const { container } = render(
        <MemoryRouter initialEntries={["/invalid-route"]}>
          <App />
        </MemoryRouter>
      );
      expect(container.innerHTML).not.toContain("WebTree Component");
      expect(container.innerHTML).not.toContain("ProjectPageTree Component");
    });

    it("should handle multiple route changes", () => {
      const { container, rerender } = render(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );
      expect(container.innerHTML).toContain("WebTree Component");
    });

    it("should handle project names with special characters", () => {
      const specialProjectName = "projectwalibi";
      const { container } = render(
        <MemoryRouter initialEntries={[`/project/${specialProjectName}`]}>
          <App />
        </MemoryRouter>
      );
      expect(container.innerHTML).toContain("ProjectPageTree Component");
    });
  });

  describe("Location Hook Tests", () => {
    it("should have correct location object for root path", () => {
      const { container } = render(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );
      expect(container.innerHTML).toContain("WebTree Component");
    });

    it("should have correct location object for project path", () => {
      const { container } = render(
        <MemoryRouter initialEntries={["/project/projectwalibi"]}>
          <App />
        </MemoryRouter>
      );
      expect(container.innerHTML).toContain("ProjectPageTree Component");
    });
  });

  // Existing Main Entry Integration tests...
});
