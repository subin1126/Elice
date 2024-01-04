import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  // useState 함수를 이용해 상태의 기본값을 파라미터로 넣어서 호출하세요.
  const [count, setCount] = useState(countInitial());
  const [item, setItem] = useState('감자');

  // 함수를 완성하세요.
  function decrementcount() {
    setCount(count => count - 1);
  }

  function incrementcount() {
    setCount(count => count + 1);
  }

  function changeItem() {
    setItem(item => item = '오이');
  }

  /*--- 카운터를 클릭할 때마다 실행될 함수 ---*/
  function countInitial() {
    console.log('함수 실행');
    return 0;
  }

  // 완성한 함수를 연결하세요.
  return (
    <div>
      <button onClick={decrementcount}>-</button>
      <span>{count}</span>
      <span>{item}</span>
      <button onClick={incrementcount}>+</button>
      <div>
        <button onClick={changeItem}>아이템 바꾸기</button>
        <br />
      </div>
    </div>
  );
};

export default App;
