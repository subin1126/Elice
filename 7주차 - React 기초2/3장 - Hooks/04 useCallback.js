import React, { useState, useCallback } from 'react';

function App() {
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);

  const calc = useCallback(() => {
    return foo + bar;
  }, [foo, bar]);

  return (
    <div className="App">
      <input
        value={foo}
        onChange={event => {
          setFoo(parseInt(event.target.value));
        }}
      />
      <input
        value={bar}
        onChange={event => {
          setBar(parseInt(event.target.value));
        }}
      /><br/>
      {calc()}
    </div>
  );
}

export default App;
