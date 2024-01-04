import React from 'react';
import './App.css';

//정의된 이름
const name = 'Sara';

//함수명이 Welcome인 컴포넌트를 작성합니다.
// function Welcome() {
//   return <h2>Welcome, {name}!</h2>;
// }

// //컴포넌트를 호출하여 element에 저장합니다.
// const element = <Welcome />;

//코드가 길어지더라도 가독성이 훨씬 좋아짐!
function Welcome(props) {
  const name = props;
  return <h2>Welcome, {name}!</h2>;
}

const element = Welcome('sara');

export default element;
