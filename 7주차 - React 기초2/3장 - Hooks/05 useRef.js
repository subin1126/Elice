import React, {useRef} from 'react';

function App() {

  const inputRef = useRef();


  return (
    <div className="App">
    <input ref={inputRef} />
    <button onClick={() => {
        alert(inputRef.current.value) //current 기억하기
    }}>버튼</button>
    </div>
  );
}

export default App;
