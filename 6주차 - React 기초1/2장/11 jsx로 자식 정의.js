import React from 'react';
import './App.css';

//자식태그를 활용하여 JSX코드를 작성해 element에 저장합니다.
const element = (
  <div>
    <h2>안녕하세요:)</h2>
    <h2>오늘도 화이팅!!</h2>
  </div>
);

function App() {
  return element;
}

export default App;
