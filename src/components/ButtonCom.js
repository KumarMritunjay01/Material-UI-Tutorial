import React, { useState } from "react";
import "../App.css";
import { MenuItem, Select } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function ButtonCom() {
  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false);

  const onClickHandler = () => {
    // alert("Button is Clicked !");
    setColor("secondary");
    setDisableBtn(true);
  };
  return (
    <div className="App">
      <h1>React Material UI | Button</h1>
      <Button
        color={color} // primary , secondary
        variant="contained" // bg-color
        // variant="outlined"   // boarder
        disabled={disableBtn} // use for desable button
        size="small" // large -> by default medium
        // startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}
        onClick={() => {
          onClickHandler();
        }}
      >
        Click me!
      </Button>
    </div>
  );
}

export default ButtonCom;
