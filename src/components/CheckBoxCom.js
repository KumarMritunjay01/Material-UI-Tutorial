import React, { useState } from "react";
import "../App.css";
import Checkbox from "@mui/material/Checkbox";
import { pink, red } from "@mui/material/colors";
import { Favorite } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
function CheckBoxCom() {
  const [name, setName] = useState([]);
  const [gender, setGender] = useState("");

  const onChackHandler = (e) => {
    let data = name;
    data.push(e.target.value);
    console.warn(data);
  };

  const onChangeHandler = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <h1>React Checkbox</h1>
      <Checkbox
        size="small"
        color="success"
        value="Kumar"
        onChange={(e) => {
          onChackHandler(e);
        }}
      />
      <Checkbox
        size="small"
        color="success"
        value="Aman"
        onChange={(e) => {
          onChackHandler(e);
        }}
      />
      <Checkbox
        size="small"
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: red[600],
          },
        }}
        value="Mohit"
        // indeterminate
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onChange={(e) => {
          onChackHandler(e);
        }}
      />
    </div>
  );
}

export default CheckBoxCom;
