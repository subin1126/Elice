import React, { useState } from 'react';

function App() {
  const [person, setPerson] = useState({
    name: '김민수',
    count: 0,
  });
  return (
    <div className="App">
      <button
        onClick={() => {
          setPerson(person => {
            const newPerson = { ...person };
            newPerson.count = newPerson.count + 1;
            return newPerson;
          });
        }}
      >
        클릭
      </button>
      <span>
        {person.name}님이 버튼을 {person.count}회 클릭하였습니다.
      </span>
    </div>
  );
}

export default App;
