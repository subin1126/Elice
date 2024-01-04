import React from 'react';
import './App.css';

function App() {
  //handleClick 이벤트를 정의합니다. 인자값을 받아 alert()을 출력합니다.
  const handleClick = data => {
    alert('전달받은 인자값: ' + data);
  };

  var data = 'ABCDEFG';

  return (
    //data값을 인자값으로 제공하는 이벤트 핸들러를 작성합니다.
    <button onClick={() => handleClick(data)}>버튼을 눌러주세요!</button>
  );
}

export default App;
