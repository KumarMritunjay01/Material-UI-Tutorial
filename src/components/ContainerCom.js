import React, { useState } from "react";
import "../App.css";
import { Container } from "@material-ui/core";
function ContainerCom() {
  return (
    <div>
      <Container maxWidth="xs" style={{ backgroundColor: "skyblue" }}>
        <h1>React Material UI | Container</h1>
      </Container>
      <Container maxWidth="sm" style={{ backgroundColor: "skyblue" }}>
        <h1>React Material UI | Container</h1>
      </Container>
      <Container maxWidth="md" style={{ backgroundColor: "skyblue" }}>
        <h1>React Material UI | Container</h1>
      </Container>
      <Container maxWidth="lg" style={{ backgroundColor: "skyblue" }}>
        <h1>React Material UI | Container</h1>
      </Container>
    </div>
  );
}

export default ContainerCom;
