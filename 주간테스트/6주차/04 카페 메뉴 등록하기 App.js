import React, { useState } from 'react';
import axios from 'axios';

function Cafes() {
  const [cafe, setCafe] = useState([]);
  const [saveId, setSaveId] = useState('');
  const [saveItem, setSaveItem] = useState('');
  const [message, setMessage] = useState('');

  async function fetchCafe() {
    const response = await axios.get(
      `https://${window.location.hostname}:8190/data`
    );
    setCafe(response.data);
  }

  async function saveMenu() {
    const newMenu = { id: saveId, item: saveItem };

    try {
      await axios.post(
        `https://${window.location.hostname}:8190/data`,
        newMenu
      );
      setMessage('메뉴 등록에 성공했습니다.');
    } catch (e) {
      setMessage('메뉴 등록에 실패했습니다.');
    }
  }

  const menuName = cafe.map(menu => <li key={menu.id}> {menu.item} </li>);

  return (
    <>
      <h4>카페 메뉴</h4>
      <div>{menuName}</div>
      <button id="load" onClick={fetchCafe}>
        불러오기
      </button>{' '}
      <br />
      <br />
      <div>
        ID:
        <input
          type="text"
          id="save_id"
          onChange={e => setSaveId(e.target.value)}
        />
      </div>
      <div>
        카페 메뉴:
        <input
          type="text"
          id="save_item"
          onChange={e => setSaveItem(e.target.value)}
        />
      </div>
      <div>
        <button id="save" onClick={saveMenu}>
          등록하기
        </button>
      </div>
      <div id="fail">{message}</div>
      <br />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Cafes />
    </div>
  );
}

export default App;
