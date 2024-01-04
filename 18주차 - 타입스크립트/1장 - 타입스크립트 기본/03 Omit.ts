interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  // Omit을 이용해 description 프로퍼티를 제외해봅니다.
  type TodoPreview = Omit<Todo, 'description'>;
  
  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,  
  }
  
  console.log(todo);