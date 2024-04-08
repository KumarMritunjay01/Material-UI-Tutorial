import { useState } from "react";
import "./App.css";
import Slider from "@material-ui/core/Slider";
import SelectBox from "./components/SelectBox";
import ButtonCom from "./components/ButtonCom";
import ButtonGrpCom from "./components/ButtonGrpCom";
import CheckBoxCom from "./components/CheckBoxCom";
import RadiobuttonCom from "./components/RadiobuttonCom";
import SliderCom from "./components/SliderCom";
import RangesliderCom from "./components/RangesliderCom";
import TextFieldCom from "./components/TextFieldCom";
import SwitchCom from "./components/SwitchCom";
import BoxCom from "./components/BoxCom";
import ContainerCom from "./components/ContainerCom";

function App() {
  return (
    <div className="App">
      <ButtonCom />
      <ButtonGrpCom />
      <CheckBoxCom />
      <RadiobuttonCom />
      <SliderCom />
      <RangesliderCom />
      <SelectBox />
      <TextFieldCom />
      <SwitchCom />
      <BoxCom />
      <ContainerCom />
    </div>
  );
}

export default App;
