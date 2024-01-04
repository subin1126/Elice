import React, { useState } from 'react';
import './App.css';

function App() {
  // 메시지를 담을 state를 정의하고, 초깃값을 "Hello"로 설정하세요.
  let [click, setClick] = useState('Hello');

  //handleClick 이벤트를 정의하고, 메시지를 "Goodbye!"로 변경하도록 동작하세요.
  const handleClick = () => {
    setClick('Goodbye!');
  };

  return (
    <div>
      <div>{click}</div>
      <button onClick={handleClick}>이벤트와 함수 연결 Click</button>
    </div>
  );
}

export default App;
