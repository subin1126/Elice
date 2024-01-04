import React, { useState } from 'react';
import MyForm from './components/MyForm';

function App() {
  const [username, setUsername] = useState('');

  const handleMyForm = event => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      <h1>{username}님, 환영합니다!</h1>
      <MyForm onChange={handleMyForm} />
    </div>
  );
}

export default App;

// <MyForm onChange={handleMyForm} />
// 여기서 onChange는 그냥 어트리뷰트임
// myform 컴포넌트 안에 있는 함수를 불러온 어쩌고 킹시보기 해야할듯
