//ChromeBrowser/__test__/ChromeBrowser.test.tsx
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import ChromeBrowser from "../ChromeBrowser"; // Import the ChromeBrowser component

describe("ChromeBrowser component", () => {
  it("ChromeBrowser should render correctly", () => {
    render(<ChromeBrowser />);
    const chromeBrowserElement = screen.getByRole("ChromeBrowser"); // Declare the chromeBrowserElement variable
    expect(chromeBrowserElement).toBeTruthy(); // Use the correct assertion method
  });
});
