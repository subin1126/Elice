import React, { useState } from 'react';
import Greeting from './components/Greeting';

function App() {
    const [name, setUsername] = useState("");
  return (
    <div className="App">
    <input value={name} onChange={(event) => { setUsername(event.target.value); }} />
    <Greeting name = {name} />;
    </div>
  );
}

export default App;
