import React from 'react';
import './App.css';

function App() {
  const username = '김민수';
  return (
    <>
      <div className="App">
        <div>안녕하세요.</div>
      </div>
      <div>
        <div>저는 {username}입니다.</div>
      </div>
    </>
  );
}

export default App;
