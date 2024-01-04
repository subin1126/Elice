import React, { useState } from 'react';
import axios from 'axios';

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  // 과자 목록을 불러오는 함수를 완성하세요.
  async function fetchData() {
    const response = await axios.get(
      `https://${window.location.hostname}:8190/data`
    );
    setSnacks(response.data);
  }

  // 가져온 과자 데이터를 매핑하여, 이름만 가져옵니다.
  const snackName = snacks.map(snack => <li key={snack.id}> {snack.name} </li>);

  // 가져온 과자 목록을 반환합니다.
  return (
    <>
      <h4>과자 목록</h4>
      <div> {snackName} </div>
      <br />
      <button id="load" onClick={fetchData}>
        불러오기
      </button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Snacks />
    </div>
  );
}

export default App;
