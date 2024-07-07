import React from "react";
import { ThemeProvider } from "styled-components";
import BrowserProps from "../types/BrowserProp";
import {
  BrowserContainer,
  ContentContainer,
  Dot,
  Dots,
  IconsFlex,
  SearchBar,
  SideBar,
  TabContainer,
  TabsContainer,
  TitleRow,
  darkTheme as defaultDarkTheme,
  lightTheme as defaultLightTheme,
} from "./styles";

// Import SVGs
import ArrowBackIcon from "../../assets/arrowback.svg?react";
import ArrowForwardIcon from "../../assets/arrowforward.svg?react";
import MoreHoriIcon from "../../assets/morehori.svg?react";

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
          Hello
        </div>
      ),
    },
  ],
  shadow = true,
  usecontentsize = false,
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
        $usecontentsize={usecontentsize}
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
                      {t.name}
                    </TabContainer>
                  );
                } else {
                  return (
                    <TabContainer key={index} onClick={() => setTab(index)}>
                      {t.name}
                    </TabContainer>
                  );
                }
              })}
          </TabsContainer>
        </SideBar>
        <ContentContainer>
          {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].content}
          <div style={{ position: "absolute" }}>{children}</div>
        </ContentContainer>
      </BrowserContainer>
    </ThemeProvider>
  );
};

export default ChromeBrowser;
