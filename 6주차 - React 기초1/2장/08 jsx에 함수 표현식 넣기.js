import React from 'react';
import './App.css';

//함수를 정의합니다.
function str(name) {
  return <p>안녕하세요! {name}에 오신걸 환영합니다:)</p>;
}
//함수표현식을 사용하여 함수를 호출합니다.
//<h2>태그를 사용해 함수의 결과값을 화면에 출력합니다.
const element = <h2>{str('korea')}</h2>;

function App() {
  return element;
}

export default App;
