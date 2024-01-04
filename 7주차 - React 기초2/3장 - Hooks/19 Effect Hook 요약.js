import "./App.css";
import React, { useState, useEffect } from "react";

const Example = () => {
  const [username, setUsername] = useState("");

  // 언제 호출되는지 확인하기 위해 useEffect에서 콘솔 출력을 해보세요.
  
  useEffect(() => {
      console.log('엥 뭐지');
  }, [username]);

  useEffect(() => {
    return () => {console.log('뭔데')};
  }, []);

  const handleUsername = (e) => {
    const { value } = e.target;

    setUsername(value);
  };

  return (
    <div>
      <div>
        <input value={username} onChange={handleUsername} />
      </div>
      <div>
        <span>{username}</span>
      </div>
    </div>
  );
};

function App() {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldRender(false);
    }, 10000);
  }, []);

  return shouldRender ? <Example /> : null;
}
export default App;
