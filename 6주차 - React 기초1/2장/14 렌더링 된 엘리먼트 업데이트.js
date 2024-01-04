import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

//버튼 클릭된 횟수를 저장
let value = 0;

//버튼 클릭시 횟수를 증가시키는 함수를 정의합니다.
function click() {
    value = value + 1;
}

function App() {
  const element = (
    <div>
      <h1>버튼을 클릭해보세요</h1>
      <button onClick={click}>Click Me!</button>
      <h2>총 {value}번 클릭했습니다.</h2>
    </div>
  );
  //ReactDOM으로 element를 렌더링합니다.
  ReactDOM.render(element, document.getElementById('root'));
}

export default App;
//App.js 가면 버튼을 누를때마다 가 아



//index.js
// import "./index.css";
// import App from "./App";

// //1초마다 App 컴포넌트 호출
// setInterval(App, 1000);

