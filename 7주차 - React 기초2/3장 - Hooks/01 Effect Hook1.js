import React, { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
