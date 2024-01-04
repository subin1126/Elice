import React, { useState } from "react";
import "./App.css";
// List.jsx를 import하세요.
import List from './components/List.jsx';


const App = () => {
  //useState를 사용해서 첫번째 인자에 상태값, 두번째 인자로는 메소드를 반환하세요.
  const [memo, setMemo] = useState([]);
  const [newMemo, setNewMemo] = useState();

  const changeInputMemo = (e) => {
    setNewMemo(e.target.value);
  };

  const addMemo = (e) => {
    e.preventDefault();
    //setMemo에 들어가는 값은 배열입니다. 사용자가 메모를 입력할때 newMemo에 추가합니다.
    const newMemos = [...memo, newMemo];
    setMemo(newMemos);
    setNewMemo('');
  };
  return (
    <>
      <h1>메모장 애플리케이션</h1>

      <form action="">
        <input type="text" name={newMemo} onChange={changeInputMemo} />
        <button onClick={addMemo}> 메모 추가 </button>
      </form>

      <List memo={memo} />
    </>
  );
};

export default App;
