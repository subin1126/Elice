import React, { useState, useEffect } from 'react';
import './math-problem.css';

// GameStatus를 이용해 상태를 처리합니다.
// 속성 status에 따라서 어떻게 상태를 변경하면 되는지 추측가능
const GameStatus = {
  CORRECT: 'correct', //문제 생성 버튼 노출, 정답입니다
  INCORRECT: 'incorrect', //오답입니다
  READY: 'ready', //아무버튼 노출x
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function MathProblem() {
  // 필요한 숫자의 상태를 정의하세요.
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [gameStatus, setGameStatus] = useState(GameStatus.READY);
  const [answer, setAnswer] = useState(''); //input에서 answer의 상태가 관리되는구나

  //게임스테이터스를 ready로 바꾸는 것 : 앱의 상태를 초기화하는구나~
  const generateProblem = () => {
    setGameStatus(GameStatus.READY);
    // generateRandomNumber를 이용해 새로 숫자를 생성하세요.
    setN1(generateRandomNumber());
    setN2(generateRandomNumber());
    setAnswer('');
  };

  //연산 로직
  const handleSubmit = () => {
    // 제출시 정답 여부에 따라 GameStatus의 상태를 설정하세요.
    const originalAnswer = n1 + n2;
    // answer
    setGameStatus(
      originalAnswer === +answer ? GameStatus.CORRECT : GameStatus.INCORRECT
    );
  };

  //input answer를 변경할 때 사용하는 것
  const handleAnswerInput = e => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    generateProblem(); // 앱이 로드 될 때 호출 : 초기화되는구나~
  }, []);

  // 실행 결과와 동일한 기능을 하도록 마크업을 작성하세요.
  return (
    <div>
      <div className="problem">
        <span>{n1}</span>
        <span>+</span>
        <span>{n2}</span>
      </div>

      <hr />

      <div className="answer-sheet">
        <div className='equal'> = </div>
        <input
          id="answer"
          type="number"
          name="answer"
          value={answer}
          onChange={handleAnswerInput}
        />
        <button onClick={handleSubmit} className='submit-button'>제출</button>
      </div>

      <div className='result'>
        {gameStatus === GameStatus.CORRECT
          ? '정답입니다'
          : gameStatus === GameStatus.INCORRECT
          ? '오답입니다'
          : ''}
      </div>

      {gameStatus === GameStatus.CORRECT && (
        <div>
          <button className='generate-problem-button' onClick={generateProblem}>문제 생성</button>
        </div>
      )}
    </div>
  );
}

export default MathProblem;
