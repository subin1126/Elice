import React, { useState } from 'react';

function Problem(props) {
  // "(문제 번호)번. (문제 내용)"을 출력하세요.
  return (
    <div>
      <p>
        {props.number}번. {props.text}
      </p>
    </div>
  );
}

const GradingForm = () => {
  const [grade, setGrade] = useState(0);
  const [inputValueOne, setInputValueOne] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');

  // 두 문제의 정답 여부에 따라 점수 State를 업데이트하는 이벤트 핸들러 함수를 정의하세요.
  // 제출 후 두 input은 빈 칸으로 변경되어야 합니다.
  const handleSubmit = event => {
    event.preventDefault();
    if (
      inputValueOne === '아닌 밤중에 홍두깨' &&
      inputValueTwo === '세살 버릇이 여든까지 간다'
    ) {
      setGrade(100);
    } else if (
      inputValueOne === '아닌 밤중에 홍두깨' ||
      inputValueTwo === '세살 버릇이 여든까지 간다'
    ) {
      setGrade(50);
    } else {
      setGrade(0);
    }

    setInputValueOne('');
    setInputValueTwo('');
  };
  const updateAnswerOne = event => {
    setInputValueOne(event.target.value);
  };
  const updateAnswerTwo = event => {
    setInputValueTwo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Problem
          number="1"
          text="예기하지 못한 말을 불쑥 꺼내거나 뜻밖의 일을 갑자기 당하는 경우를 이르는 말은?"
        />
        {/* id가 answer_one인 input을 생성하고, 입력된 값을 State로 관리하세요. */}
        <input
          id="answer_one"
          value={inputValueOne}
          onChange={updateAnswerOne}
        ></input>
      </div>
      <div>
        <Problem
          number="2"
          text="어릴 때의 버릇은 늙어서도 고치기 어렵다는 뜻을 가진 말은?"
        />
        {/* id가 answer_two인 input을 생성하고, 입력된 값을 State로 관리하세요. */}
        <input
          id="answer_two"
          value={inputValueTwo}
          onChange={updateAnswerTwo}
        ></input>
      </div>

      {/* id가 check인 button을 생성하고, form 제출을 받을 수 있도록 type을 submit으로 지정하세요.*/}
      <button id="check" type="submit" onClick={handleSubmit}>
        제출
      </button>

      {/* id가 grade인 h2를 생성하고, "(점수)점"와 같은 형태로 점수를 출력하세요.*/}
      <h2 id="grade">{grade}점</h2>
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <GradingForm />
    </div>
  );
}

export default App;
