import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  //   const handleValue = (event) => {
  //       setInputValue(event.target.value);
  //   }

  //<input onChange = {handleValue} />

  return (
    <div className="App">
      <input
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />
      <br />

      <span>{inputValue}</span>
    </div>
  );
}

export default App;
