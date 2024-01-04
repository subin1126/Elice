import React, { useState } from 'react';

// Halloween 컴포넌트를 구현하세요.
const Halloween = () => {
  const [answer, setAnswer] = useState('');

  const handleClick = event => {
    if (event.target.id === 'treat-button') {
      setAnswer('Treat :)');
    } else {
      setAnswer('Trick :(');
    }
  };

  return (
    <div>
      <h1>Treat or Trick?</h1>
      <button id="treat-button" onClick={handleClick}>
        Treat
      </button>
      <button id="trick-button" onClick={handleClick}>
        Trick
      </button>
      <p>{answer}</p>
    </div>
  );
};

export default Halloween;
