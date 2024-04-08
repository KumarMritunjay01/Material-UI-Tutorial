import React, { useState } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import { Button } from "@material-ui/core";
function BoxCom() {
  const getValue = (e, val) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <h1>React Material UI | Box</h1>
      <Box component="span" style={{ color: "red" }} clone m={10} p={10}>
        This Box renders as an HTML section element.
      </Box>
    </div>
  );
}

export default BoxCom;
