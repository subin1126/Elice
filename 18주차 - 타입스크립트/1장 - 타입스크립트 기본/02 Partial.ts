interface Todo {
    title: string
    description: string
  }
  
  // obj매개변수 타입에 Partial Utility types을 추가해주세요
  function updateTodo(obj: Partial<Todo>) { 
    return obj;
  }
  
  const result = updateTodo({
    description: "title",
  })
  
  console.log(result); // { title: 'title' } 출력
  
  function partialTodo(obj: Todo, obj2: Partial<Todo>){
      return {...obj, ...obj2};
  }
  
  const todo1 = {
      description: 'foo',
      title: 'bar',
  };
  
  const todo2 = partialTodo(todo1, {
      title: 'boooooo',
  });
  
  console.log(todo1);
  console.log(todo2);