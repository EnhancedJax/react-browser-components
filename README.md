# react-browser-containers

React Browser "container" components library, with tabs functionality. The library currency provides two browser components: `ChromeBrowser` and `ArcBrowser`.

You can use the components to demonstrate functionality with browsers, or as decorative elements in your project. The components are not designed to be used as actual browsers.

## Basic Usage

```jsx
import { BrowserContainer } from "@enhanced-jax/react-browser-containers";
import { useState } from "react";

const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <ChromeBrowser
      tab={tab}
      setTab={setTab}
      tabs={{
        name: "Tab 1",
        link: "/tab1",
        content: <div>Tab 1 Content</div>,
      }}
    ></ChromeBrowser>
  );
};
```

### Props

```js
export type ChromeBrowserProps = {
  theme?: "light" | "dark"; // theme of the browser, default is light. The light and dark theme of ArcBrowser is the same.
  tabs?: Array<{ // pages in the browser
    name: string;
    link: string; // decorative link in the URL bar
    content: React.ReactNode; // content of the page
    icon: React.ReactNode; // icon of the page. Recommend size: 12px (Chrome) 14px (Arc)
  }>;
  shadow?: boolean; // shadow of the browser, default is true
  useContentSize?: boolean; // default is false: browser will be the size of it's parent element. true: browser will be the size of it's content
  contentScroll?: boolean; // if content inside the container should be scrollable, default is true
  leftIcons?: React.ReactNode; // leave empty for default icons
  rightIcons?: React.ReactNode; // leave empty for default icons
  lightTheme?: Theme; // changes the light theme of the browser
  darkTheme?: Theme; // changes the dark theme of the browser
  children?: React.ReactNode; // content displayed over all pages
  tab?: number;
  setTab?: (tab: number) => void;
};
```

```js
export default interface Theme {
  theme: string;
  bg: string;
  contentBg: string;
  text: string;
  border: string;
  searchBarBg: string;
  tabBarBg: string;
  tabDivider: string;
  tabHoverBg: string;
  tabSelectedBg: string;
}
```

## Development

To get started:

```bash
git clone https://github.com/EnhancedJax/react-browser-containers.git
cd react-browser-containers
npm i
```

Actions:

```bash
npm run storybook # start storybook
npm run build # build the library
npm run test # test the library
```

### Testing in another project

```bash
npm run build
npm link
npm link "../your-project/node_modules/react"
cd ../your-project
npm link @enhanced-jax/react-browser-containers
```
