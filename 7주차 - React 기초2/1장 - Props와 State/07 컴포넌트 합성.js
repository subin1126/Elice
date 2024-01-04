import React from 'react';
import './App.css';

//함수 컴포넌트를 사용하여 Subject컴포넌트를 정의합니다.
function Subject(props) {
  return <h3>React를 이해하기 위해서는 {props.name}을(를) 알아야 합니다.</h3>;
}

//Curriculum 컴포넌트를 정의합니다.
function Curriculum() {
  return (
    <div>
      <Subject name="HTML" />
      <Subject name="CSS" />
      <Subject name="JavaScript" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Curriculum />
    </div>
  );
}

export default App;
