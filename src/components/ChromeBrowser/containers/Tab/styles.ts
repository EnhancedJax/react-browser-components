import styled from "styled-components";
import Theme from "../../../types/BrowserTheme";

export const TabContainer = styled.button<{ selected?: boolean }>`
  margin-top: 4px;
  margin-bottom: ${({ selected }) => (selected ? "0" : "4px")};
  text-align: left;
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 0;
  background-color: transparent;
`;

export const TabBody = styled.div<{ selected?: boolean; theme: Theme }>`
  font-size: 10px;
  padding-left: 12px;
  padding-right: 12px;
  position: relative;
  background-color: ${({ selected, theme }) =>
    selected ? theme.tabSelectedBg : theme.tabBarBg};
  padding-bottom: ${({ selected }) => (selected ? "10px" : "6px")};
  padding-top: ${({ selected }) => (selected ? "6px" : "6px")};
  border-radius: ${({ selected }) => (selected ? "8px 8px 0 0" : "6px")};
  width: 100px;
  text-overflow: ellipsis;
  display: flex;
  gap: 6px;
  align-items: center;
  transition:
    background-color 0.3s,
    color 0.3s;
  white-space: nowrap;
  overflow: hidden;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }

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
  margin-right: ${({ $after }) => ($after ? "-12px" : "0")};
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
