import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "ArcBrowser",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {},
};

export const MultipleTabs: Story = {
  args: {
    tabs: [
      {
        name: "Tab 1",
        link: "google.com",
        content: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "640px",
              height: "2000px",
            }}
          >
            Hello 1
          </div>
        ),
      },
      {
        name: "Tab 2",
        link: "bing.com",
        content: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "400px",
              height: "200px",
            }}
          >
            Hello 2
          </div>
        ),
      },
      {
        name: "Tab 3",
        link: "duckduckgo.com",
        content: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90px",
              height: "280px",
            }}
          >
            Hello 3
          </div>
        ),
      },
    ],
  },
};
