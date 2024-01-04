import React from 'react';
import './App.css';

//함수명이 Welcome인 컴포넌트를 작성합니다.
function Welcome(props) {
  return (
    <h2>
      안녕, {props.character} {props.children}님!
    </h2>
  );
  //return <h2>안녕하세요. {props.children}님!</h2>; //자식 안에 있는 값을 불러올 수 있다
}
//컴포넌트를 호출하여 element에 저장합니다.
const element = <Welcome character="눈누난나">숩</Welcome>;
//character = 속성값, 숩 = 자식

//name은 Welcome함수의 props로 전달됨

export default element;



//index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import element from './App';

// // export한 컴포넌트를 렌더링합니다.
// ReactDOM.render(element, document.getElementById('root'));
