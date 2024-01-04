import React from "react";
import styled from "styled-components";
import DrawingBoard from "./DrawingBoard/App";

import "./App.css";

function App() {
  return (
    <Container>
      <DrawingBoard />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;
