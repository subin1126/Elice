import React from 'react';
import "./App.css";
import DynamicForm from './DynamicForm/App'
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <DynamicForm />
    </Container>
  );
}

export default App;
