import React, { useState } from 'react';

// 지시사항에 따라 출력 결과와 동일한 동작을 하는 코드를 작성하세요.
function App() {
  const [answer, setAnswer] = useState('');
  const [grade, setGrade] = useState('');

  const handleCheck = () => {
      if(answer === "아닌 밤중에 홍두깨"){
          setGrade("정답입니다!");
      } else {
          setGrade("오답입니다.");
      }

      setAnswer('');
  }

  return (
    <div className="App">
      <div id="problem">
        예기하지 못한 말을 불쑥 꺼내거나 뜻밖의 일을 갑자기 당하는 경우에 이르는
        말은?
      </div>
      <input id="answer" value={answer} onChange={(event) => {
          setAnswer(event.target.value)
      }}></input>
      <button id="check" onClick={handleCheck}>확인하기</button>
      <h3 id="grade">{grade}</h3>
    </div>
  );
}

export default App;
