import { Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <Tabs>
        <Tab title="25">Tab 1 Content</Tab>
        <Tab title="50">Tab 2 Content</Tab>
        <Tab title="100">Tab 3 Content</Tab>
        <Tab title="150">Tab 4 Content</Tab>
        <Tab title="200">Tab 5 Content</Tab>
      </Tabs>
    </>
  );
};

export default App;
