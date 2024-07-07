import React from "react";
import { TabProps } from "./props";
import { TabBody, TabContainer, TabDecorator } from "./styles";

const Tab: React.FC<TabProps> = ({
  selected = false,
  children = null,
  ...props
}) => {
  return (
    <TabContainer {...props}>
      <TabDecorator $before selected={selected} />
      <TabBody selected={selected}>{children}</TabBody>
      <TabDecorator $after selected={selected} />
    </TabContainer>
  );
};

export default Tab;
