import styled from "styled-components";

// Define the theme interface
interface Theme {
  bg: string;
  text: string;
  border: string;
  searchBarBg: string;
}

export const lightTheme: Theme = {
  bg: "whitesmoke",
  text: "#333",
  border: "#ccc",
  searchBarBg: "#efeded",
};

export const darkTheme: Theme = {
  bg: "#333",
  text: "#f5f5f5",
  border: "#555",
  searchBarBg: "#444",
};

export const BrowserContainer = styled.div<{ theme: Theme; shadow?: boolean }>`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.bg};
  height: 100%;
  position: relative;
  box-shadow: ${(props) =>
    props.shadow ? "0 0 40px rgba(0,0,0,0.1)" : "none"};
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

export const DotRow = styled.div`
  display: flex;
  margin: 8px;
`;

export const BrowserRow = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const SearchBar = styled.div<{ theme: Theme }>`
  margin: 8px;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.searchBarBg};
  border-radius: 1000px;
  flex-grow: 1;
`;

export const IconsFlex = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
