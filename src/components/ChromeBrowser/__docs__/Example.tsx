import React, { FC } from "react";
import ChromeBrowser from "../ChromeBrowser";
import { ChromeBrowserProps } from "../props";

const Example: FC<ChromeBrowserProps> = ({
  theme,
  tabs,
  shadow,
  usecontentsize,
  leftIcons,
  rightIcons,
  children,
}) => {
  const [tab, setTab] = React.useState(0);

  return (
    <ChromeBrowser
      theme={theme}
      tabs={tabs}
      tab={tab}
      setTab={setTab}
      usecontentsize={usecontentsize}
      shadow={shadow}
      leftIcons={leftIcons}
      rightIcons={rightIcons}
    >
      {children}
    </ChromeBrowser>
  );
};

export default Example;
