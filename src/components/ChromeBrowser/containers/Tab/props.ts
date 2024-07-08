import React from "react";
import { TabContainer } from "./styles";

export type TabProps = {
  selected?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof TabContainer>;
