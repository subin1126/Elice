import React, { useState } from 'react';
import axios from 'axios';

function Ledger() {
  const [pay, setPay] = useState([]);
  const [transportPay, setTransportPay] = useState([]);

  // 교통비 계산하기 버튼 클릭 시 URL에서 데이터를 받아 pay 상태에 저장하세요.
  async function getPayment() {
    try {
      const response = await axios.get(
        `https://${window.location.hostname}:8190/data`
      );
      setPay(response.data);

      const transportExpenses = response.data.filter(
        item => item.type === 'transport'
      );
      setTransportPay(transportExpenses);
    } catch (e) {
      console.log('에러', e);
    }
  }

  // pay에서 type이 transport인 데이터만 남겨 transportPay에 저장하세요.
  const transportList = transportPay.map(item => (
    <li key={item.id}>{item.cost}</li>
  ));

  // 화면에 출력하기 위한 li 태그를 만드세요.

  // 총 금액을 계산합니다.
  const totalPrice = transportPay.reduce((a, v) => (a = a + v.cost), 0);

  return (
    <>
      <h4>교통비 계산</h4>
      <button id="transport_cost" onClick={getPayment}>
        교통비 계산하기
      </button>
      {/* li 태그로 만든 교통비 금액을 id가 transport_list인 div로 감싸서 출력하세요. */}

      <div>
        <ul>{transportList}</ul>
      </div>

      <p id="transport_total">총 금액 : {totalPrice}</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Ledger />
    </div>
  );
}

export default App;
