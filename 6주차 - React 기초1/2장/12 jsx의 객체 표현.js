import React from 'react';
import './App.css';

//실제로 많이 쓰는 방법은 아니라 하심

//element 객체를 생성합니다.
// const element = React.createElement(
//   'h2',
//   { className: 'welcome' },
//   '코더랜드에 오신것을 환영합니다:)'
// );

const Element2 = () => {
  return <h2>코더랜드에 오신것을 환영합니다</h2>;
};

function App() {
  return <Element2 />;
}

export default App;
