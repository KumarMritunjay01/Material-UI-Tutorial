import { Radio } from "@mui/material";
import React, { useState } from "react";
import "../App.css";

function RadiobuttonCom() {
  const [gender, setGender] = useState("");
  const onChangeHandler = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <h1>React Material UI | Radio Button</h1>
      <div>
        <span>Male</span>
        <Radio
          color="secondary"
          value="male"
          checked={gender === "male"}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </div>
      <div>
        <span>Female</span>
        <Radio
          value="female"
          checked={gender === "female"}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </div>
      <div>
        <span>Other</span>
        <Radio
          value="other"
          checked={gender === "other"}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </div>
    </div>
  );
}

export default RadiobuttonCom;
