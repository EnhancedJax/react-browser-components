export type ChromeBrowserProps = {
  theme?: "light" | "dark";
  tabs?: Array<{
    name: string;
    link: string;
    content: React.ReactNode;
  }>;
  shadow?: boolean;
  usecontentsize?: boolean;
  leftIcons?: React.ReactNode;
  rightIcons?: React.ReactNode;
  children?: React.ReactNode;
  tab?: number;
  setTab?: (tab: number) => void;
};
