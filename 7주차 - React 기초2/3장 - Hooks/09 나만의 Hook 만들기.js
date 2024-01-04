import React, { useState } from "react";
import "./App.css";

const useUser = () => {
  // useState()를 이용해 state 변수를 만드세요.
  const [nickname, setNickname] = useState("");

  const updateNickname = (event) => {
    const nickname = event.target.value;

    setNickname(nickname);
  };

  return [nickname, updateNickname];
};

const App = () => {
  // React Hook을 호출하세요.
  const [nickname, setNickname] = useUser("");

  return (
    <div>
      <label>{nickname}</label>
      <br />
      <input value={nickname} onChange={setNickname} />
    </div>
  );
};

export default App;
