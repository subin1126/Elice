interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  // Pick을 이용해 title 프로퍼티를 포함해봅니다..
  type TodoPreview = Pick<Todo, 'title'>;
  
  const todo: TodoPreview = {
    title: "Clean room",
  }
  
  console.log(todo);