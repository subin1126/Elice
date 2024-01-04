import React from "react";
import "./App.css";

//고객의 이름을 출력하는 함수
function formatName(user) {
  return user.lastName + " " + user.firstName;
}

//고객의 이름을 저장하는 변수
const user = {
  lastName: "첫번째",
  firstName: "두번째",
};

//인사문구를 출력하는 함수
//formatName()함수를 사용해 출력문구를 완성합니다.
function getGreeting(user) {
  return <h1>Hello, {formatName(user)}!</h1>;
}

//getGreeting()의 결과값을 element에 저장합니다.
const element = getGreeting(user);

function App() {
  return element;
}

export default App;
