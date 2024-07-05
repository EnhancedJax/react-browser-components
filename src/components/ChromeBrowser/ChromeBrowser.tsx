import React from "react";
import { ThemeProvider } from "styled-components";
import { ChromeBrowserProps } from "./props";
import {
  BrowserContainer,
  BrowserRow,
  Dot,
  DotRow,
  IconsFlex,
  SearchBar,
  darkTheme,
  lightTheme,
} from "./styles";

const ChromeBrowser: React.FC<ChromeBrowserProps> = ({
  link = "https://example.com",
  theme = "light",
  type = "full",
  shadow = false,
  leftIcons = <img src="../../assets/arrowback.svg" width={24} height={24} />,
  rightIcons = null,
  children = null,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <BrowserContainer {...props} shadow={shadow}>
        <DotRow>
          <Dot color="red" />
          <Dot />
          <Dot color="green" />
        </DotRow>
        <BrowserRow>
          <IconsFlex>{leftIcons}</IconsFlex>
          <SearchBar>{link}</SearchBar>
          <IconsFlex>{rightIcons}</IconsFlex>
        </BrowserRow>
        {children}
      </BrowserContainer>
    </ThemeProvider>
  );
};

export default ChromeBrowser;
