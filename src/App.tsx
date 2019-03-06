import React, { Component, FunctionComponent } from "react";
import Monaco from "./component/molecules/monaco";
import GridLayout from "react-grid-layout";

const layout = [
  { i: "a", x: 0, y: 0, w: 2, h: 2 },
  { i: "b", x: 1, y: 0, w: 3, h: 2 },
  { i: "c", x: 4, y: 0, w: 1, h: 2 }
];

const App: FunctionComponent = () => {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={60}
      width={1200}
    >
      <div key="a">
        <Monaco />
      </div>
      <div key="b">b</div>
      <div key="c">c</div>
    </GridLayout>
  );
};

export default App;
