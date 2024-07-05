//ChromeBrowser/__test__/ChromeBrowser.test.tsx
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

describe("ChromeBrowser component", () => {
  it("ChromeBrowser should render correctly", () => {
    render(<ChromeBrowser />);
    const ChromeBrowser = screen.getByRole("ChromeBrowser");
    expect(ChromeBrowser).toBeInTheDocument();
  });
});
