import React, { useState } from 'react';
import './App.css';

function Check(props) {
  //props에서 제공하는 데이터를 변수에 저장합니다.
  const password = props.name;
  return (
    //논리연산자를 사용하여 비밀번호 이상 여부를 검사합니다.
    //비밀번호가 7자 이상이고, #이 포함되어있으면 <h2>태그의 문구를 출력합니다.
    <div>
      {password.length >= 7 && password.includes('#') && (
        <h2>올바른 비밀번호입니다.</h2>
      )}
    </div>
  );
}

function App() {
  let [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form>
      비밀번호:{' '}
      <input
        placeholder="비밀번호를 입력하세요"
        value={name}
        onChange={handleChange}
      />
      {<Check name={name} />}
    </form>
  );
}

export default App;
