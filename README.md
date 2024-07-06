# react-browser-containers

React Browser "container" components library , with tabs functionality.

## Basic Usage

```jsx
import { BrowserContainer } from "react-browser-containers";
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
  theme?: "light" | "dark"; // theme of the browser, default is light
  tabs?: Array<{ // pages in the browser
    name: string;
    link: string; // decorative link in the URL bar
    content: React.ReactNode; // content of the page
  }>;
  shadow?: boolean; // shadow of the browser, default is true
  usecontentsize?: boolean; // default is false: browser will be the size of it's parent element. true: browser will be the size of it's content
  leftIcons?: React.ReactNode; // leave empty for default icons
  rightIcons?: React.ReactNode; // leave empty for default icons
  children?: React.ReactNode; // content displayed under all pages
  tab?: number;
  setTab?: (tab: number) => void;
};
```

## Run Locally

To run the project locally, follow the steps below:

1. Clone the project: `git clone https://github.com/EnhancedJax/react-browser-containers.git`
2. Go to the project directory: `cd react-browser-containers`
3. Install dependencies: `npm install`

---

- To start storybook: `npm run storybook`
- To build the library: `npm run build`
- To test the library: `npm run test`

### Using library locally

1. Build the library: `npm run build`
2. Link the library: `npm link`
3. Ensure same react version: `npm link "../your-project/node_modules/react"`
4. Import and develop
