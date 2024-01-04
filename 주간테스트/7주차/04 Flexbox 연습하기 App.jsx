import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Flexbox의 컨테이너로 사용될 요소입니다. */}
      <div className="container">
        {/* Flexbox의 아이템으로 사용될 요소입니다. */}
        <div id="box1">box1</div>
        <div id="box2">box2</div>
        <div id="box3">box3</div>
      </div>
    </div>
  );
}

export default App;
