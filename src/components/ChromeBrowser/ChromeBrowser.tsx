import React from "react";
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
  darkTheme as defaultDarkTheme,
  lightTheme as defaultLightTheme,
} from "./styles";

// Import SVGs
import ArrowBackIcon from "../../assets/arrowback.svg?react";
import ArrowForwardIcon from "../../assets/arrowforward.svg?react";
import MoreVertIcon from "../../assets/morevert.svg?react";
import RefreshIcon from "../../assets/refresh.svg?react";

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
  shadow = true,
  usecontentsize = false,
  leftIcons = (
    <>
      <ArrowBackIcon width={16} height={16} />
      <ArrowForwardIcon width={16} height={16} />
      <RefreshIcon width={16} height={16} />
    </>
  ),
  rightIcons = <MoreVertIcon width={16} height={16} />,
  children = null,
  tab = 0,
  setTab = () => {},
  ...props
}) => {
  return (
    <ThemeProvider
      theme={theme === "dark" ? defaultDarkTheme : defaultLightTheme}
    >
      <BrowserContainer
        {...props}
        $shadow={shadow}
        $usecontentsize={usecontentsize}
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
                tabs.map((t, index) => {
                  if (index === tab) {
                    return (
                      <>
                        <TabDecorator
                          $before
                          key={`${index}-decorator-before`}
                        />
                        <Tab selected key={index}>
                          {t.name}
                        </Tab>
                        <TabDecorator $after key={`${index}-decorator-after`} />
                      </>
                    );
                  } else {
                    return (
                      <Tab onClick={() => setTab(index)} key={index}>
                        {t.name}
                      </Tab>
                    );
                  }
                })}
            </Tabs>
          </TitleRow>
          <SearchRow>
            <IconsFlex>{leftIcons}</IconsFlex>
            <SearchBar>
              {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].link}
            </SearchBar>
            <IconsFlex>{rightIcons}</IconsFlex>
          </SearchRow>
        </Bar>
        <div style={{ position: "relative" }}>
          {Array.isArray(tabs) && tabs.length > 0 && tabs[tab].content}
          <div style={{ position: "absolute" }}>{children}</div>
        </div>
      </BrowserContainer>
    </ThemeProvider>
  );
};

export default ChromeBrowser;
