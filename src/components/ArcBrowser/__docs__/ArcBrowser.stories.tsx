import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import StorybookIcon from "../../../assets/storybook.svg?react";
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
        icon: null,
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
        icon: null,
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
        icon: null,
      },
    ],
  },
};

export const Display: Story = {
  args: {
    tabs: [
      {
        name: "Example",
        link: "https://example.com",
        content: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "640px",
              height: "480px",
            }}
          >
            Hello 👋
          </div>
        ),
        icon: <StorybookIcon width="100%" height="100%" />,
      },
      {
        name: "Google",
        link: "google.com",
        content: (
          <iframe
            title="Google"
            src="https://www.google.com"
            style={{ width: "640px", height: "480px" }}
          />
        ),
        icon: (
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            width="100%"
            height="100%"
          />
        ),
      },
      {
        name: "YouTube",
        link: "youtube.com",
        content: (
          <iframe
            title="YouTube"
            src="https://www.youtube.com"
            style={{ width: "640px", height: "480px" }}
          />
        ),
        icon: (
          <img
            src="https://www.youtube.com/favicon.ico"
            alt="YouTube"
            width="100%"
            height="100%"
          />
        ),
      },
    ],

    useContentSize: true,
    shadow: false,
  },
};
