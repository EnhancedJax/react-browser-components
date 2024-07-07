import styled from "styled-components";
import Theme from "../types/BrowserTheme";

export const lightTheme: Theme = {
  theme: "light",
  bg: "#fff",
  contentBg: "#fff",
  text: "#333",
  border: "#E1E3E1",
  tabBarBg: "#E3E3E3",
  searchBarBg: "#efeded",
  tabDivider: "#C7C7C7",
  tabHoverBg: "#C7C7C7",
  tabSelectedBg: "#FFF",
};

export const darkTheme: Theme = {
  theme: "dark",
  bg: "#333",
  contentBg: "#333",
  text: "#f5f5f5",
  border: "#555",
  tabBarBg: "#222",
  searchBarBg: "#444",
  tabDivider: "#555",
  tabHoverBg: "#555",
  tabSelectedBg: "#333",
};

export const BrowserContainer = styled.div<{
  theme: Theme;
  $shadow?: boolean;
  $useContentSize?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.bg};
  width: ${({ $useContentSize }) => ($useContentSize ? "max-content" : "100%")};
  height: ${({ $useContentSize }) =>
    $useContentSize ? "max-content" : "100%"};
  position: relative;
  box-shadow: ${({ $shadow }) =>
    $shadow ? "0 0 40px rgba(0,0,0,0.1)" : "none"};
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  text-align: left;
  transition:
    background-color 0.3s,
    color 0.3s;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.color === "red"
      ? "#EE5E58"
      : props.color === "green"
        ? "#54C840"
        : "#F5BB2E"};
  margin: 0 4px;
`;

export const Bar = styled.div<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.tabBarBg};
`;

export const Dots = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.tabBarBg};
`;

export const TitleRow = styled.div`
  display: flex;
  padding-right: 16px;
`;

export const TabsContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const SearchRow = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 0px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: border-color 0.3s;
  border-radius: 8px 8px 0px 0px;
  background-color: ${({ theme }) => theme.bg};
`;

export const SearchBar = styled.div<{ theme: Theme }>`
  margin: 8px;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.searchBarBg};
  border-radius: 1000px;
  flex-grow: 1;
  transition: background-color 0.3s;
`;

export const IconsFlex = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.text};
    transition: fill 0.3s;
  }
`;

export const ContentContainer = styled.div<{
  $contentScroll: boolean;
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.contentBg};
  width: 100%;
  overflow: ${({ $contentScroll }) => ($contentScroll ? "scroll" : "hidden")};
  position: relative;
  height: 100%;
`;
