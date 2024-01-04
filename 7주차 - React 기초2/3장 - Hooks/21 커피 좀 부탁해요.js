import React, { useState } from 'react';

// 지시사항에 따라 출력 결과와 동일한 동작을 하는 코드를 작성하세요.
function App() {
  const [ameri, setAmeri] = useState(0);
  const [latte, setLatte] = useState(0);
  const [caremal, setCaremal] = useState(0);
  const [total, setTotal] = useState(0);
  const prices = {
    americano: 4100,
    caffelatte: 4600,
    caramel: 5100,
  };

  const handleIncrease = value => {
    switch (value) {
      case 'americano':
        setAmeri(ameri + 1);
        break;
      case 'caffelatte':
        setLatte(latte + 1);
        break;
      case 'caramel':
        setCaremal(caremal + 1);
        break;
      default:
        break;
    }
  };
  const handleDecrease = value => {
    switch (value) {
      case 'americano':
        setAmeri(ameri - 1);
        break;
      case 'caffelatte':
        setLatte(latte - 1);
        break;
      case 'caramel':
        setCaremal(caremal - 1);
        break;
      default:
        break;
    }
  };

  const handleTotal = () => {
    const totalPrice =
      ameri * prices.americano +
      latte * prices.caffelatte +
      caremal * prices.caramel;
    setTotal(totalPrice);
  };

  return (
    <div className="App">
      <div>
        <p>
          ₩4100 아메리카노: {ameri} &nbsp;
          <button onClick={() => handleIncrease('americano')}>추가</button>
          <button onClick={() => handleDecrease('americano')}>감소</button>
        </p>
        <p>
          ₩4600 카페라떼: {latte} &nbsp;
          <button onClick={() => handleIncrease('caffelatte')}>추가</button>
          <button onClick={() => handleDecrease('caffelatte')}>감소</button>
        </p>
        <p>
          ₩5100 캐러멜 마키아토: {caremal} &nbsp;
          <button onClick={() => handleIncrease('caramel')}>추가</button>
          <button onClick={() => handleDecrease('caramel')}>감소</button>
        </p>
        <p>
          <button onClick={handleTotal}>총 가격</button>: {total}
        </p>
        <p>남는 돈: {50000 - total}</p>
      </div>
    </div>
  );
}

export default App;
