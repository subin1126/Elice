import React from 'react';

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <input onChange={handleChange} />
    </div>
  );
}

export default App;
