import React from 'react';
import './App.css';

function App() {
  const style = {
    span: {},
    style1: { backgroundColor: 'green', color: 'yellow' },
  }; //object를 할당받고있음

  return (
    <div className="App">
      <div style={style.style1}>안녕하세요.</div>
    </div>
  );
}

export default App;
