import React, { useContext } from 'react';
import { TodoContext } from './App';

// App.js에서 전달된 값을 출력하세요.
const Checklist = () => {
  const myTodo = useContext(TodoContext);

  return (
    <div>
      <h3>
        "{myTodo.todo}"(을)를 "{myTodo.done}" 했습니다.
      </h3>
    </div>
  );
};

export default Checklist;


// import React, { useContext } from 'react';
// import { TodoContext } from './App';

// // App.js에서 전달된 값을 출력하세요.
// const Checklist = () => {
//   const { todo, done } = useTodo();

//   //   객체.key값으로 value를 받아오는 방식 : 원래한거 ㅇㅇ
//   //   이 방식이 내부적으로 계산이 필요한 방식이래
//   // 매번 렌더링 될때마다 반복

//   //const { todos, done } = context;
//   // => 이런씩으로 쓰는 습관을들이래. 이게 더 좋대

//   return (
//     <h3>
//       "{todo}"(을)를 "{done}"했습니다.
//     </h3>
//   );
// };

// function useTodo() {
//   const context = useContext(TodoContext);
//   return context;
// }

// export default Checklist;
