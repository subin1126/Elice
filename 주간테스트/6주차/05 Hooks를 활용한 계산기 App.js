import React, { useState } from 'react';

// 지시사항을 참고하여 코드를 완성하세요.
function App() {
  const [calc1, setCalc1] = useState(0);
  const [calc2, setCalc2] = useState(0);

  const handleChange = event => {
    setCalc1(event.target.value);
  };

  const handleChange1 = event => {
    setCalc2(event.target.value);
  };

  return (
    <div className="App">
      <input value={calc1} onChange={handleChange}></input>
      <input value={calc2} onChange={handleChange1}></input>
      <p>
        두 숫자의 합은 {parseInt(calc1) + parseInt(calc2)}이며 차는{' '}
        {parseInt(calc1) - parseInt(calc2)}이고 곱은{' '}
        {parseInt(calc1) * parseInt(calc2)}입니다.
      </p>
    </div>
  );
}

export default App;
