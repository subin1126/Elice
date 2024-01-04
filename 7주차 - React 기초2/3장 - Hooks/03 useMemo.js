import React, { useState, useMemo } from 'react';

function App() {
  const [foo, setFoo] = useState(0); 
  const [bar, setBar] = useState(0);

  const multi = useMemo(() => {
    return foo * bar;
  }, [foo, bar]);

  return (
    <div className="App">
      <input value={foo} onChange={(event) => {
          setFoo(parseInt(event.target.value));
        }} />
      <input value={bar} onChange={(event) => {
          setBar(parseInt(event.target.value));
        }} />
      <div>{multi}</div>
    </div>
  );
}

export default App;
