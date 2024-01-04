import './App.css';
import React, { useState } from 'react';

// 지시사항에 따라 출력 결과와 동일한 동작을 하는 코드를 작성하세요.

function App() {
  const [count, setCount] = useState(5);

  const decreaseCount = () => {
      setCount(count-1);
  }

  const increaseCount = () => {
      setCount(count+1);
  }

  return (
    <div className="App">
      <p>당신에게 {count}개의 사과가 남았습니다.</p>
      <button onClick={decreaseCount}>Eat apple</button>
      <button onClick={increaseCount}>Buy apple</button>
    </div>
  );
}

export default App;
