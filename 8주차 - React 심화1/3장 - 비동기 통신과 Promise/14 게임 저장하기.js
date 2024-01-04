import React, { useState } from 'react';
import axios from 'axios';

function Saveload() {
  const [level, setLevel] = useState(1);
  const [message, setMessage] = useState();
  const [savedata, setSavedata] = useState([]);

  // level을 1 증가시키는 levelUp 함수를 작성하세요.
  function levelUp() {
    setLevel(level + 1);
  }

  async function saveLevel() {
      //현재 level 상태 값을 담고 있다
    const saveData = { level: level };

//axios.post의 두번쨰 인자 : 서버로 전송할 데이터
    try {
      // `https://${window.location.hostname}:8190/data`에 saveData를 추가해보세요.
      await axios.post(
        `https://${window.location.hostname}:8190/data`,
        saveData
      );
      setMessage('저장되었습니다.');
    } catch (e) {
      setMessage('저장에 실패했습니다.');
    }
  }

  async function loadData() {
    try {
      // `https://${window.location.hostname}:8190/data`로부터 데이터를 불러와 savedata에 저장하세요.
      const response = await axios.get(
        `https://${window.location.hostname}:8190/data`
      );

      setSavedata(response.data);

      setMessage();
    } catch (e) {
      setMessage('저장된 데이터를 가져올 수 없습니다.');
    }
  }

  // 현재 레벨을 저장한 레벨로 바꾸는 loadLevel 함수를 작성하세요.
  // 아래 savefiles 를 참고해서 작성하세요.

  //클릭된 버튼의 텍스트 내용인 레벨 값을 가져와서 해당 레벨로 현재 레벨을 변경하는 것
  //event.target : 이벤트가 발생한 요소 => 여기서는 이벤트가 발생한 버튼 요소
  //textContent : 해당 요소의 텍스트 내용을 가져오는 속성
  function loadLevel(event) {
    const loadedLevel = parseInt(event.target.textContent);
    setLevel(loadedLevel);
  }

//savedata : 배열의 각 요소를 순회하면서 버튼 요소를 생성된
//앞서 서버로부터 가져온 데이터를 담고있는 배열이다
//saveData의 각 요소는 {level: 1} 형태이다

//savedata 배열의 각 요소를 info라는 이름의 매개변수로 받아온 후,
//해당 요소의 level 값을 사용하여 버튼 요소를 생성한다

//savedata.map 반환 배열의 버튼 요소들의  클래스 네임 'btn_1' 'btn_2'
  const savefiles = savedata.map(info => (
    <button className={'btn_' + info.level} onClick={loadLevel}>
      {info.level}
    </button>
  ));

  return (
    <>
      <div> {message} </div>
      <h4 id="level"> {level} </h4>
      <button id="levelup" onClick={levelUp}>
        레벨 업
      </button>
      <br />

      <button id="save" onClick={saveLevel}>
        저장하기
      </button>
      <br />
      <button id="load" onClick={loadData}>
        저장 파일
      </button>
      <br />

      <div> {savefiles} </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Saveload />
    </div>
  );
}

export default App;
