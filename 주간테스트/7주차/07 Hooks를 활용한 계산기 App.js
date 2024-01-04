import React, { useState } from 'react';

// 지시사항을 참고하여 코드를 완성하세요.
function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const firstChange = e => {
    setFirst(parseInt(e.target.value));
  };

  const secondChange = e => {
    setSecond(parseInt(e.target.value));
  };

  return (
    <div className="App">
      <input onChange={firstChange} value={first}></input>
      <input onChange={secondChange} value={second}></input>
      <p>
        두 숫자의 합은 {first + second}이며 차는 {first - second}이고 곱은{' '}
        {first * second}입니다.
      </p>
    </div>
  );
}

export default App;
