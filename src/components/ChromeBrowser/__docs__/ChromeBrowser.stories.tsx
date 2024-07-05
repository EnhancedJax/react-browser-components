import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "ChromeBrowser",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    link: "https://example.com",
    children: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "640px",
          height: "480px",
        }}
      >
        Hello
      </div>
    ),
  },
};
