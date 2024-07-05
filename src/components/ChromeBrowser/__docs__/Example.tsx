import React, { FC } from "react";
import ChromeBrowser from "../ChromeBrowser";
import { ChromeBrowserProps } from "../props";

const Example: FC<ChromeBrowserProps> = ({
  theme,
  tabs,
  shadow,
  useContentSize,
  leftIcons,
  rightIcons,
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "600px",
      }}
    >
      <ChromeBrowser
        theme={theme}
        tabs={tabs}
        useContentSize={useContentSize}
        shadow={shadow}
        leftIcons={leftIcons}
        rightIcons={rightIcons}
      >
        {children}
      </ChromeBrowser>
    </div>
  );
};

export default Example;
