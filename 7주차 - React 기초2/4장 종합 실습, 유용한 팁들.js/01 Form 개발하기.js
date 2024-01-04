import React from 'react';
import InsertForm from './Components/01 InsertForm';

function App() {
  return (
    <div className="App">
    <InsertForm onInsert={(value) => {
        console.log(value);
    }} />
    </div>
  );
}

export default App;
