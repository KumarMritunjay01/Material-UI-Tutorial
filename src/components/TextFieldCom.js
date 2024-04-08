import React, { useState } from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function TextFieldCom() {
  const getData = (e, val) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <h1>React Material UI | TextField</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={getData}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </div>
  );
}

export default TextFieldCom;
