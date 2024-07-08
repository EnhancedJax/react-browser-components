import styled from "styled-components";
import Theme from "../types/BrowserTheme";

export const lightTheme: Theme = {
  theme: "light",
  bg: "linear-gradient(210deg, #D3C26A 0%, #E97580 100%)",
  contentBg: "#FFF",
  text: "#71393E",
  border: "#6b4f52",
  tabBarBg: "transparent",
  searchBarBg: "rgba(100,50,0,0.1)",
  tabDivider: "rgba(100,50,0,0.1)",
  tabHoverBg: "rgba(100,50,0,0.1)",
  tabSelectedBg: "#FFF",
};

export const darkTheme: Theme = lightTheme;

export const BrowserContainer = styled.div<{
  theme: Theme;
  $shadow?: boolean;
  $useContentSize?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background-image: ${({ theme }) => theme.bg};
  width: ${({ $useContentSize }) => ($useContentSize ? "max-content" : "100%")};
  height: ${({ $useContentSize }) =>
    $useContentSize ? "max-content" : "100%"};
  position: relative;
  display: flex;
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
  gap: 8px;
  padding: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;
`;

export const ContentContainer = styled.div<{
  $contentScroll: boolean;
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.contentBg};
  border-radius: 6px;
  width: 100%;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  overflow: ${({ $contentScroll }) => ($contentScroll ? "auto" : "hidden")};
  position: relative;
`;

export const SideBar = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 2px;
  max-width: 130px;
`;

export const Dot = styled.div<{ theme: Theme }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.searchBarBg};
`;

export const Dots = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 8px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TabsContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export const Icon = styled.div`
  width: 14px;
  max-width: 14px;
  height: 14px;
  max-height: 14px;
  overflow: hidden;
`;

export const TabContainer = styled.button<{ selected?: boolean; theme: Theme }>`
  padding: 8px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background-color: ${({ selected, theme }) =>
    selected ? theme.tabSelectedBg : "transparent"};
  box-shadow: ${({ selected }) =>
    selected ? "0 0 8px rgba(0,0,0,0.1)" : "none"};

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.tabSelectedBg : theme.tabHoverBg};
  }
  margin-bottom: 4px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
`;

export const SearchBar = styled.div<{ theme: Theme }>`
  padding: 8px;
  background-color: ${({ theme }) => theme.searchBarBg};
  border-radius: 10px;
  font-size: 12px;
  transition: background-color 0.3s;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 4px;
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
