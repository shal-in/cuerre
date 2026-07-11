import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home page", () => {
  it("renders the scaffold smoke test content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Hello, Cuerre." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "shadcn/ui button ready" }),
    ).toBeDisabled();
  });
});
