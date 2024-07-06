import styled from "styled-components";

// Define the theme interface
interface Theme {
  theme: string;
  bg: string;
  text: string;
  border: string;
  tabBarBg: string;
  searchBarBg: string;
  tabDivider: string;
}

export const lightTheme: Theme = {
  theme: "light",
  bg: "#fff",
  text: "#333",
  border: "#E1E3E1",
  tabBarBg: "#E3E3E3",
  searchBarBg: "#efeded",
  tabDivider: "#C7C7C7",
};

export const darkTheme: Theme = {
  theme: "dark",
  bg: "#333",
  text: "#f5f5f5",
  border: "#555",
  tabBarBg: "#222",
  searchBarBg: "#444",
  tabDivider: "#555",
};

export const BrowserContainer = styled.div<{
  theme: Theme;
  $shadow?: boolean;
  $usecontentsize?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.bg};
  width: ${({ $usecontentsize }) => ($usecontentsize ? "max-content" : "100%")};
  height: ${({ $usecontentsize }) => ($usecontentsize ? "inherit" : "100%")};
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

export const Tabs = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const Tab = styled.button<{ selected?: boolean; theme: Theme }>`
  margin-top: 4px;
  font-size: 10px;
  padding: 8px 12px;
  position: relative;
  background-color: ${({ selected, theme }) =>
    selected ? theme.bg : theme.tabBarBg};
  margin-bottom: ${({ selected }) => (selected ? "0" : "4px")};
  margin-right: ${({ selected }) => (selected ? "0" : "8px")};
  border-radius: ${({ selected }) => (selected ? "8px 8px 0 0" : "8px")};
  width: 100px;
  text-overflow: ellipsis;
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;
  text-align: left;
  border: none;
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.bg : theme.tabDivider};
    &::after {
      display: none;
    }
  }

  &::after {
    content: "";
    display: ${({ selected }) => (selected ? "none" : "block")};
    position: absolute;
    top: 0;
    right: -4px;
    width: 1px;
    height: 50%;
    transform: translateY(50%);
    background-color: ${({ theme }) => theme.tabDivider};
  }
`;

export const TabDecorator = styled.div<{
  $before?: boolean;
  $after?: boolean;
  theme: Theme;
}>`
  width: 8px;
  height: 8px;
  margin-top: auto;
  background-color: ${({ theme }) => theme.bg};
  margin-right: ${({ $after }) => ($after ? "-4px" : "0")};
  transition: background-color 0.3s;

  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-bottom-left-radius: ${(props) => (props.$before ? "0" : "8px")};
    border-bottom-right-radius: ${(props) => (props.$after ? "0" : "8px")};
    background-color: ${({ theme }) => theme.tabBarBg};
  }
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
  filter: ${({ theme }) => (theme.theme === "dark" ? "invert(1)" : "none")};
  transition: filter 0.3s;
`;
