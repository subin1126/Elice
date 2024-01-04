import React, { useState } from 'react';

function App() {

  const [person, setPerson] = useState({
        name: "김민수",
        school: "엘리스대학교"
  });

  const handleValue = (event) => {
      const {name, value} = event.target; //input의 name과 value를 가져올 수 있음
      setPerson((person) => {
          const newPerson = {...person};
          //newPerson[name] = value;
          newPerson.name = value;
          return newPerson;
      })
  }

  const handleClick = () => { //받아오는 값이 없으니 event같은 객체가 필요없음
    alert(`${person.name}님은 ${person.school}에 다님`);
  }


  return (
    <div className="App">
    <input name = 'name' onChange={handleValue} />
    <input name = 'school' onChange={handleValue} />
    <button onClick = {handleClick}>버튼</button>
    </div>
  );
}

export default App;
