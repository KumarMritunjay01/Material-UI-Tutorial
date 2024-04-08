import React, { useState } from "react";
import "../App.css";
import Switch from "@mui/material/Switch";
function SwitchCom() {
  const getValue = (e, val) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <h1>React Material UI | Switch</h1>
      <Switch color="primary" size="small" onChange={getValue} />
    </div>
  );
}

export default SwitchCom;
