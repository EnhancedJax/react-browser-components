export type ChromeBrowserProps = {
  link?: string;
  theme?: "light" | "dark";
  type?: "minimal" | "full";
  shadow?: boolean;
  leftIcons?: React.ReactNode;
  rightIcons?: React.ReactNode;
  children?: React.ReactNode;
};
