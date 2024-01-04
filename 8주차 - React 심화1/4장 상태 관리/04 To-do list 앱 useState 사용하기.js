//1. useState를 react에서 import하세요.
import React, { useState } from 'react';
import Todo from './todo';
import TodoForm from './TodoForm';

function App() {
  //2. useState가 반환하는 첫 번째 인자인 state와 두 번째 인자인 setState를 todos, setTodos로 변경하세요.
  const [todos, setTodos] = useState([
    //3. useState의 배열에 초기화면에 display할 원소를 작성하세요.이렇게하면 useState 는 배열로 초기화하는데, 개별 원소는 text(사용자가 입력한 todo)와 hasCompleted(완료여부)로 구성됩니다.
    {
      text: 'Upload the video by tonight',
      hasCompleted: false,
    },
  ]);

  //4. addTodo()와 completeTodo() 함수를 작성하세요.이때 사용자가 입력한 text 데이터를 array(newTodos)로 받아 text로 전달하세요.
  const addTodo = text => {
    const newTodos = [...todos, { text: text, hasCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].hasCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>TO DO LIST</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <Todo
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
