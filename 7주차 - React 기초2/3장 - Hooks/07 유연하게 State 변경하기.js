import React, { useState } from 'react';
import InsertForm from './components/InsertForm';
import ListView from './components/ListView';

function App() {
  const [todoList, setTodoList] = useState([]);

  // Todo를 추가하기 위한 handleInsert, 완료 표시하기 위한 handleComplete, 제거하기 위한 handleRemove 이벤트를 각각 정의하세요.
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

  // 추가한 이벤트를 등록하세요.
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
