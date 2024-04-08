import React, { useState } from "react";
import "../App.css";
import { Button, ButtonGroup } from "@mui/material";
function ButtonGrpCom() {
  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false);

  const onClickHandler = () => {
    // alert("Button is Clicked !");
    setColor("secondary");
    setDisableBtn(true);
  };
  return (
    <div className="App">
      <h1>React Matrial UI | ButtonGroup</h1>

      {/* Advantages -> all button ka same hi property rakhana h to wrap in ButtonGroup */}
      <ButtonGroup color="primary" variant="contained" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default ButtonGrpCom;
