import React, { useState } from 'react';
import axios from 'axios';

// 지시사항에 따라 출력 결과와 동일한 동작을 하는 코드를 작성하세요.
function App() {
  const [menu, setMenu] = useState([]);

  async function fetchMenu() {
    const res = await axios.get(
      `https://${window.location.hostname}:8190/data`
    );

    setMenu(res.data);
  }

  const menuName = menu.map(menu => <li key={menu.id}> {menu.item} </li>);

  return (
    <div className="App">
      <h4>카페 메뉴</h4>
      <div>{menuName}</div>
      <button id="load" onClick={fetchMenu}>
        불러오기
      </button>
    </div>
  );
}

export default App;


//index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import axios from "axios";

// axios.interceptors.request.use(function (config) {
//   var url = new URL(config.url);

//   if (url.host === "127.0.0.1:8190") {
//     url.host = "127.0.0.1:8090";
//     url.protocol = "http://";
//     config.url = url.href;
//   }

//   return config;
// });

// ReactDOM.render(<App />, document.getElementById("root"));


