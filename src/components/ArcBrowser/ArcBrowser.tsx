import React from "react";
import { ThemeProvider } from "styled-components";
import ArrowBackIcon from "../../assets/arrowback.svg?react";
import ArrowForwardIcon from "../../assets/arrowforward.svg?react";
import MoreHoriIcon from "../../assets/morehori.svg?react";
import StorybookIcon from "../../assets/storybook.svg?react";
import BrowserProps from "../types/BrowserProps";
import {
  BrowserContainer,
  ContentContainer,
  Dot,
  Dots,
  Icon,
  IconsFlex,
  SearchBar,
  SideBar,
  TabContainer,
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
      link: "example.com",
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
  ],
  shadow = true,
  useContentSize = false,
  contentScroll = true,
  leftIcons = (
    <>
      <ArrowBackIcon width={16} height={16} />
      <ArrowForwardIcon width={16} height={16} />
    </>
  ),
  rightIcons = <MoreHoriIcon width={16} height={16} />,
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
        <SideBar>
          <TitleRow>
            <Dots>
              <Dot color="red" />
              <Dot />
              <Dot color="green" />
            </Dots>
            <IconsFlex>
              {leftIcons}
              {rightIcons}
            </IconsFlex>
          </TitleRow>
          <SearchBar>
            {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].link}
          </SearchBar>
          <TabsContainer>
            {Array.isArray(tabs) &&
              tabs.length > 0 &&
              tabs.map((t, index) => {
                if (index === tab) {
                  return (
                    <TabContainer
                      key={index}
                      onClick={() => setTab(index)}
                      selected
                    >
                      {t?.icon && <Icon>{t.icon}</Icon>}
                      <span>{t.name}</span>
                    </TabContainer>
                  );
                } else {
                  return (
                    <TabContainer key={index} onClick={() => setTab(index)}>
                      {t?.icon && <Icon>{t.icon}</Icon>}
                      <span>{t.name}</span>
                    </TabContainer>
                  );
                }
              })}
          </TabsContainer>
        </SideBar>
        <ContentContainer $contentScroll={contentScroll}>
          {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].content}
          <div style={{ position: "absolute", top: "0" }}>{children}</div>
        </ContentContainer>
      </BrowserContainer>
    </ThemeProvider>
  );
};

export default ChromeBrowser;
