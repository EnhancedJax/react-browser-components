import styled from "styled-components";
import Theme from "../../../types/BrowserTheme";

export const TabContainer = styled.button`
  margin-top: 4px;
  text-align: left;
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 0;
  align-items: baseline;
  background-color: transparent;
`;

export const TabBody = styled.div<{ selected?: boolean; theme: Theme }>`
  font-size: 10px;
  padding: 8px 12px;
  position: relative;
  background-color: ${({ selected, theme }) =>
    selected ? theme.tabSelectedBg : theme.tabBarBg};
  padding-bottom: ${({ selected }) => (selected ? "8px" : "4px")};
  border-radius: ${({ selected }) => (selected ? "8px 8px 0 0" : "8px")};
  width: 100px;
  text-overflow: ellipsis;
  display: flex;
  gap: 6px;
  align-items: center;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.tabSelectedBg : theme.tabHoverBg};
    &::after {
      display: none;
    }
  }

  &::after {
    content: "";
    display: ${({ selected }) => (selected ? "none" : "block")};
    position: absolute;
    top: 0;
    right: -4px;
    width: 1px;
    height: 50%;
    transform: translateY(50%);
    background-color: ${({ theme }) => theme.tabDivider};
  }
`;

export const TabDecorator = styled.div<{
  $before?: boolean;
  $after?: boolean;
  selected?: boolean;
  theme: Theme;
}>`
  width: 8px;
  height: 8px;
  margin-top: auto;
  opacity: ${({ selected }) => (selected ? "1" : "0")};
  background-color: ${({ theme }) => theme.tabSelectedBg};
  margin-right: ${({ $after }) => ($after ? "-4px" : "0")};
  transition:
    background-color 0.3s,
    opacity 0.3s;

  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-bottom-left-radius: ${(props) => (props.$before ? "0" : "8px")};
    border-bottom-right-radius: ${(props) => (props.$after ? "0" : "8px")};
    background-color: ${({ theme }) => theme.tabBarBg};
  }
`;
