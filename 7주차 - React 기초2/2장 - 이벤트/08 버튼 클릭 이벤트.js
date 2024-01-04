import React, { useState } from "react";
import "./App.css";

function App() {
  let [isToggleOn, setIsToggleOn] = useState(true);
  
  //handleClick 이벤트를 정의합니다.
  const handleClick = () => {
      setIsToggleOn(!isToggleOn);
  }
  
  return (
    //button 태그에 handleClick이벤트를 등록합니다.
    <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
  );
}

export default App;
