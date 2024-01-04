import React, { useState } from 'react';
import './App.css';

//login 상태 반환
function LoginState() {
  return <h2>로그인 되었습니다.</h2>;
}

//logout 상태 반환
function LogoutState() {
  return <h2>로그아웃 되었습니다. </h2>;
}

//props의 값에 따라 반환할 컴포넌트를 결정합니다.
function State(props) {
  const data = props.data;

  if (data) {
    return <LoginState />;
  } else {
    return <LogoutState />;
  }
}

function App() {
  let [isToggleOn, setIsToggleOn] = useState(true);

  //handleClick 이벤트를 정의합니다.
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    //정의한 이벤트를 등록합니다.
    <button onClick={handleClick}>{<State data={isToggleOn} />}</button>
  );
}
export default App;
