import React from "react";
import "./App.css";

//name변수를 선언하고, 이름을 저장합니다.
const name = "Josh Perez";
//표현식을 사용하여 name을 포함합니다.
const element = <h1>Hello, {name}</h1>;

function App() {
  return element;
}

export default App;
