import React, { FC } from "react";
import ChromeBrowser, { ChromeBrowserProps } from "../ChromeBrowser";

const Example: FC<ChromeBrowserProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = "small",
  text = "ChromeBrowser",
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
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        primary={primary}
      />
    </div>
  );
};

export default Example;
