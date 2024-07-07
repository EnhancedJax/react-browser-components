import Theme from "./BrowserTheme";

export default interface BrowserProps {
  theme?: "light" | "dark";
  tabs?: Array<{
    name: string;
    link: string;
    content: React.ReactNode;
    icon: React.ReactNode;
  }>;
  shadow?: boolean;
  useContentSize?: boolean;
  contentScroll?: boolean;
  leftIcons?: React.ReactNode;
  rightIcons?: React.ReactNode;
  lightTheme?: Theme;
  darkTheme?: Theme;
  children?: React.ReactNode;
  tab?: number;
  setTab?: (tab: number) => void;
}
