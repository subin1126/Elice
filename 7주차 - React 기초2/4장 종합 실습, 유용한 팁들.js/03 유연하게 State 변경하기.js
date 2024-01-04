import React, { useState } from 'react';
import InsertForm from './components/InsertForm';
import ListView from './components/ListView';

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleInsert = value => {
    setTodoList(current => {
      const newList = [...current];
      newList.push({
        key: new Date().getTime(),
        value,
        isCompleted: false,
      });
      return newList;
    });
  };

  const handleComplete = index => {
    setTodoList(current => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    });
  };

  const handleRemove = index => {
    setTodoList(current => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div className="App">
      <ListView
        todoList={todoList}
        onComplete={handleComplete}
        onRemove={handleRemove}
      />
      <InsertForm onInsert={handleInsert} />
    </div>
  );
}

export default App;

//1. 핸들러 함수가 상태를 직접 업데이트하는 경우 : 상태를 관리하는 컴포넌트 내부에 핸들러 함수를 작성하는 것이 좋다
//handleInsert 함수는 todoList 상태를 업데이트하기 위해 setTodoList 함수를 호출하기 때문에 App.js에 작성

//2. 핸들러 함수가 상위 컴포넌트로 데이터를 전달하는 경우 : 만약 핸들러 함수가 상위 컴포넌트로 데이터를 전달해야 한다면, 해당 핸들러 함수는 상위 컴포넌트에 작성하는 것이 좋다
//handleInsert 함수는 InsertForm에서 사용자의 입력을 받아 App 컴포넌트의 todoList 상태를 업데이트해야한다. 그래서 handleInsert는 App.js에 작성

//3. 핸들러 함수가 다른 하위 컴포넌트에 전달되는 경우 : 만약 핸들러 함수가 다른 하위 컴포넌트로 전달되어 사용되는 경우, 해당 핸들러 함수를 전달하는 컴포넌트에 작성하는 것이 일반적이다
//handleSubmit 함수는 InsertForm 컴포넌트에서 사용되므로, InsertForm.js에 작성

//핸들러 함수는 데이터를 처리하고 상태를 업데이트하는 등의 역할 담당이므로,
//코드를 읽고 이해하기 쉽고 유지보수하기 편하도록 구조화하는 것이 중요