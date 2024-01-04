import React, { useState } from 'react';
import './App.css';

function App() {
  let [todo, setTodo] = useState([
    { id: 1, task: '꾸준히 운동하기' },
    { id: 2, task: '영어 공부하기' },
    { id: 3, task: '미니 프로젝트 진행하기' },
  ]);

  //todoList를 정의합니다.
  const todoList = todo.map(item => <li key={item.id}>{item.task}</li>
  );

  return (
    <div>
      <h2>신년 목표</h2>
      <ul>{todoList}</ul>
    </div>
  );
}

export default App;
