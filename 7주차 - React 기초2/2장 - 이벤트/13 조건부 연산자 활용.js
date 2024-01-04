import React, { useState } from 'react';
import './App.css';

function Check(props) {
  //Check의 props를 변수에 저장합니다.
  const data = props.num;
  return (
    <div>
      {parseInt(data, 10) > 0 ? (
        <h2>양수입니다.</h2>
      ) : (
        <h2>양수가 아닙니다.</h2>
      )}
    </div>
  );
}

function App() {
  let [num, setNum] = useState(0);
  function handleChange(e) {
    setNum(e.target.value);
  }
  return (
    <form>
      숫자를 입력하세요: <input value={num} onChange={handleChange} />
      {<Check num={num} />}
    </form>
  );
}

export default App;
