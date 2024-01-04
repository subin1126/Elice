import './App.css';
import React, { useState, useEffect } from 'react';

function Child() {
  // useEffect() 내 경고 문구를 출력하는 cleanup() 메소드를 반환하세요.
  useEffect(() => {
    return () => {
      alert(`텍스트가 제거 되었습니다!`);
    };
  });

  return <p>버튼을 클릭해 해당 텍스트를 제거하세요.</p>;
}

function App() {
  const [show, setShow] = useState(true);

  let myheader;
  if (show) {
    myheader = <Child />;
  }

  return (
    <div>
      {myheader}
      <button onClick={() => setShow(false)}>버튼</button>
    </div>
  );
}

export default App;
