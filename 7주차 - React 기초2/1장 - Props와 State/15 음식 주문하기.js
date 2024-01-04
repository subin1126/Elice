// 채점을 위해 해당 파일은 수정할 수 없습니다.
import React from "react";
import Order from "./Order";

// Order 컴포넌트에 Props를 전달합니다.
function App() {
  return (
    <div>
      <Order menu="짜장면" count="2" />
      <Order menu="볶음밥" count="1" />
    </div>
  );
}

export default App;
