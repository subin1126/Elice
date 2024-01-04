import React from 'react';
import './App.css';
// Profile 컴포넌트를 불러오세요.
import Profile from '/elice/project_file/src/Profile';

// 프로필 데이터가 저장된 변수입니다. 채점 시 해당 데이터를 그대로 제출하세요!
const data = {
  name: 'Joshi',
  age: '25',
  gender: '남',
};

function App() {
  return (
    // 위에 선언된 data를 불러온 Profile 컴포넌트를 이용해 출력하세요.
    <div className="App">
      <Profile data={data} />
    </div>
  );
}

export default App;
