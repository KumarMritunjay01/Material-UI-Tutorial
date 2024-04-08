import { Radio } from "@mui/material";
import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import "../App.css";

function SliderCom() {
  const sliderHandler = (e, val) => {
    console.log(val);
  };

  const mark = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 50,
      label: "midel",
    },
    {
      value: 100,
      label: "end",
    },
  ];
  return (
    <div className="App">
      <h1>React Material UI | Slider</h1>
      <div
        style={{ height: 300, width: 300, margin: 50, alignContent: "center" }}
      >
        <Slider
          size="small"
          defaultValue={70}
          aria-label="small"
          step={10}
          marks={mark}
          valueLabelDisplay="auto"
          // orientation="vertical"
          color="secondary"
          onChange={sliderHandler}
        />
      </div>
    </div>
  );
}

export default SliderCom;
