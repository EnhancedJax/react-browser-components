import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ChromeBrowserProps } from "./props";
import {
  Bar,
  BrowserContainer,
  Dot,
  Dots,
  IconsFlex,
  SearchBar,
  SearchRow,
  Tab,
  TabDecorator,
  Tabs,
  TitleRow,
  darkTheme,
  lightTheme,
} from "./styles";

const ChromeBrowser: React.FC<ChromeBrowserProps> = ({
  theme = "light",
  tabs = [
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
          Hello
        </div>
      ),
    },
  ],
  shadow = false,
  useContentSize = false,
  leftIcons = (
    <>
      <img src="/arrowback.svg" width={16} height={16} />
      <img src="/arrowforward.svg" width={16} height={16} />
      <img src="/refresh.svg" width={16} height={16} />
    </>
  ),
  rightIcons = <img src="/morevert.svg" width={16} height={16} />,
  children = null,
  ...props
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <BrowserContainer
        {...props}
        shadow={shadow}
        useContentSize={useContentSize}
      >
        <Bar>
          <TitleRow>
            <Dots>
              <Dot color="red" />
              <Dot />
              <Dot color="green" />
            </Dots>
            <Tabs>
              {Array.isArray(tabs) &&
                tabs.length > 0 &&
                tabs.map((tab, index) => {
                  if (index === selectedTab) {
                    return (
                      <>
                        <TabDecorator before />
                        <Tab selected>{tab.name}</Tab>
                        <TabDecorator after />
                      </>
                    );
                  } else {
                    return (
                      <Tab onClick={() => setSelectedTab(index)}>
                        {tab.name}
                      </Tab>
                    );
                  }
                })}
            </Tabs>
          </TitleRow>
          <SearchRow>
            <IconsFlex>{leftIcons}</IconsFlex>
            <SearchBar>
              {Array.isArray(tabs) && tabs.length > 0 && tabs[selectedTab].link}
            </SearchBar>
            <IconsFlex>{rightIcons}</IconsFlex>
          </SearchRow>
        </Bar>
        <div style={{ position: "relative" }}>
          {Array.isArray(tabs) && tabs.length > 0 && tabs[selectedTab].content}
          <div style={{ position: "absolute" }}>{children}</div>
        </div>
      </BrowserContainer>
    </ThemeProvider>
  );
};

export default ChromeBrowser;
