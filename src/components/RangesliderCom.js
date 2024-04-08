import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import "../App.css";

function RangesliderCom() {
  const [val, setVal] = useState([40, 50]);

  const updateVal = (e, item) => {
    setVal(item);
  };

  return (
    <div className="App">
      <h1>React Material UI | Range Slider</h1>
      <div
        style={{ height: 300, width: 300, margin: 50, alignContent: "center" }}
      >
        <Slider
          // orientation="vertical"
          value={val}
          color="secondary"
          onChange={updateVal}
        />
      </div>
    </div>
  );
}

export default RangesliderCom;
