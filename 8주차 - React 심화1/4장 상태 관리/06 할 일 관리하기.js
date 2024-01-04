import React, { createContext } from "react";
import Checklist from "./Checklist";

// TodoContext 객체를 생성합니다. 해당 파일은 수정할 수 없습니다.
export const TodoContext = createContext();

const App = () => {
  const myTodo = {
    done: "완료",
    todo: "코딩 공부하기",
  };

  return (
    <>
      <TodoContext.Provider value={myTodo}>
        <Checklist />
      </TodoContext.Provider>
    </>
  );
};

export default App;
