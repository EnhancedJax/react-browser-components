import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import ChromeBrowser from "../ChromeBrowser";

describe("ChromeBrowser", () => {
  it("renders correctly", () => {
    render(<ChromeBrowser />);

    // Assuming the ChromeBrowser component has a title or some identifiable text
    const browserElement = screen.getByText(/Hello/i);
    expect(browserElement).toBeInTheDocument();
  });
});
