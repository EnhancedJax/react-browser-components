import React, { FC } from "react";
import ChromeBrowser from "../ChromeBrowser";
import { ChromeBrowserProps } from "../props";

const Example: FC<ChromeBrowserProps> = ({
  link,
  theme,
  type,
  shadow,
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
        height: "100%",
      }}
    >
      <ChromeBrowser
        link={link}
        theme={theme}
        type={type}
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
