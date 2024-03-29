import { useState } from "react";
import React  from 'react';

function TodoForm({ addTodo }) {
 
 const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        autoFocus
        value={value}
        placeholder="Enter todo item"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
