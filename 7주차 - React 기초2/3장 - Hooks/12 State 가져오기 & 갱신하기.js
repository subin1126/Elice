import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* count의 State를 화면에 출력하세요. */}
      <p>You clicked {count} times</p>
      {/* setCount()를 이용해 버튼 클릭 시 count가 1 증가하는 코드를 작성하세요. */}
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  );
}

export default App;
