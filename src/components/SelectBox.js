import React, { useState } from "react";
import "../App.css";
import { MenuItem, Select } from "@mui/material";
function SelectBox() {
  const [course, setCourse] = useState("");

  const updateValue = (e, val) => {
    console.log(e.target.value);
    setCourse(e.target.value);
  };
  return (
    <div>
      <h1>React Material UI | Select Box</h1>
      <Select onChange={updateValue} value={course} displayEmpty>
        <MenuItem value=""> Select Course</MenuItem>
        <MenuItem value={1}>Node</MenuItem>
        <MenuItem value={2}>PHP</MenuItem>
        <MenuItem value={3}>JAVA</MenuItem>
        <MenuItem value={4}>C++</MenuItem>
      </Select>
    </div>
  );
}

export default SelectBox;
