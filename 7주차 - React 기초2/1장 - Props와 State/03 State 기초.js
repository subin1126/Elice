import React, { useState } from 'react';
//{useState} => 구조분해할당

function App() {
  const [count, setCount] = useState(0);
  //      변수, 함수
  //     구조분해할당
  return (
    <div className="App">
      <span>{count}회 클릭하였습니다.</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
