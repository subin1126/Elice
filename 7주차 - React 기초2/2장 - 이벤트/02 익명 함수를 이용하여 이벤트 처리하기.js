import React from 'react';

function App() {
  return (
    <div className="App">
      <input
        onChange={event => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
