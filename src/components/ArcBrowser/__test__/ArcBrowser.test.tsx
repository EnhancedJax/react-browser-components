import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import ArcBrowser from "../ArcBrowser";

describe("ArcBrowser", () => {
  it("renders correctly", () => {
    render(<ArcBrowser />);

    // Assuming the ArcBrowser component has a title or some identifiable text
    const browserElement = screen.getByText(/Hello/i);
    expect(browserElement).toBeInTheDocument();
  });
});
