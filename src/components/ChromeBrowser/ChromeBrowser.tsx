import React from "react";
import { ThemeProvider } from "styled-components";
import ArrowBackIcon from "../../assets/arrowback.svg?react";
import ArrowForwardIcon from "../../assets/arrowforward.svg?react";
import MoreVertIcon from "../../assets/morevert.svg?react";
import RefreshIcon from "../../assets/refresh.svg?react";
import StorybookIcon from "../../assets/storybook.svg?react";
import BrowserProps from "../types/BrowserProps";
import Tab from "./containers/Tab";
import {
  Bar,
  BrowserContainer,
  ContentContainer,
  Dot,
  Dots,
  IconsFlex,
  SearchBar,
  SearchRow,
  TabsContainer,
  TitleRow,
  darkTheme as defaultDarkTheme,
  lightTheme as defaultLightTheme,
} from "./styles";

const ChromeBrowser: React.FC<BrowserProps> = ({
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
          Hello 👋
        </div>
      ),
      icon: <StorybookIcon width={12} height={12} />,
    },
  ],
  shadow = true,
  useContentSize = true,
  contentScroll = true,
  leftIcons = (
    <>
      <ArrowBackIcon width={16} height={16} />
      <ArrowForwardIcon width={16} height={16} />
      <RefreshIcon width={16} height={16} />
    </>
  ),
  rightIcons = <MoreVertIcon width={16} height={16} />,
  children = null,
  lightTheme = null,
  darkTheme = null,
  tab = 0,
  setTab = () => {},
  ...props
}) => {
  return (
    <ThemeProvider
      theme={
        theme === "dark"
          ? darkTheme || defaultDarkTheme
          : lightTheme || defaultLightTheme
      }
    >
      <BrowserContainer
        {...props}
        $shadow={shadow}
        $useContentSize={useContentSize}
      >
        <Bar>
          <TitleRow>
            <Dots>
              <Dot color="red" />
              <Dot />
              <Dot color="green" />
            </Dots>
            <TabsContainer>
              {Array.isArray(tabs) &&
                tabs.length > 0 &&
                tabs.map((t, index) => {
                  if (index === tab) {
                    return (
                      <Tab key={index} selected>
                        {t?.icon}
                        {t.name}
                      </Tab>
                    );
                  } else {
                    return (
                      <Tab key={index} onClick={() => setTab(index)}>
                        {t?.icon}
                        {t.name}
                      </Tab>
                    );
                  }
                })}
            </TabsContainer>
          </TitleRow>
          <SearchRow>
            <IconsFlex>{leftIcons}</IconsFlex>
            <SearchBar>
              {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].link}
            </SearchBar>
            <IconsFlex>{rightIcons}</IconsFlex>
          </SearchRow>
        </Bar>
        <ContentContainer $contentScroll={contentScroll}>
          {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].content}
          <div style={{ position: "absolute", top: "0" }}>{children}</div>
        </ContentContainer>
      </BrowserContainer>
    </ThemeProvider>
  );
};

export default ChromeBrowser;
