import React, { useContext } from "react";
import { TodoContext } from "./App";

// App.js에서 전달된 값을 출력하세요.
const Checklist = () => {
    const myTodo = useContext(TodoContext);

    return (
        <>
        <h3>"{myTodo.todo}"(을)를 "{myTodo.done}"했습니다</h3>
        </>
    )
};

export default Checklist;
