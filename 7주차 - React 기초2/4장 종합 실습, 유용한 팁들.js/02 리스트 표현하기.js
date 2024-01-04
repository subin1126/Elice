import React, { useState } from 'react';
import InsertForm from './components/InsertForm';
import ListView from './components/ListView';

function App() {
  const [todoList, setTodoList] = useState([]);

//InsertForm에서 inputValue를 받기 때문에, value
  const hanldeInsert = value => {
    setTodoList(current => {
      const newTodoList = [...current];
      newTodoList.push({
        key: new Date().getTime(), // JSX에서 Array의 값을 표현할 때 각 요소를 구분하기 위한 값
        //현재 시간의 타임스탬프로 각 요소를 구분하는 고유한 값을 주는것
        //각 항목이 고유한 key를 갖게됨
        value: value, // onInsert로부터 전달받은 값,
        //InsertForm에서 입력된 값이 todo 항목으로 추가될 때 사용됨
        //사용자가 입력한 값을 onInsert 함수로 호출할 때 매개변수로 전달하여 todo 항목 생서
        isCompleted: false, // 완료 처리를 위한 flag
      });
      return newTodoList;
    });
  };

  return (
    <div className="App">
      <ListView todoList={todoList} />
      <InsertForm onInsert={hanldeInsert} />
    </div>
  );
}

export default App;

//1. App 컴포넌트 실행, 이때 useState를 사용하여 초기 todoList 상태를 빈 배열로 설정
//2. ListView 컴포넌트가 todoList 상태를 받아와서 매핑하여 화면에 렌더링됨, 초기에는 빈 배열이므로 아무 항목 표시x
//3. InsertForm 컴포넌트가 렌더링되고, 사용자가 입력 필드에 값을 입력하고 등록 버튼을 클릭하면
//onSubmit 이벤트가 발생
//4. InsertForm 컴포넌트의 handleSubmit 함수가 호출됨
//5. handleSubmit 함수는 이벤트의 기본 동작을 막고, inputValue 값이 유효한 경우에만 onInsert 함수를 호출한다
//6. onInsert 함수는 App 컴포넌트로 전달된 handleInsert 함수를 호출한다
//7. handleInsert 함수는 이전의 todoList 상태를 복사한 후, 새로운 항목 추가하여 새로운 배열 생성
//8. setTodoList 함수가 호출되어 todoList상태를 새로운 배열로 업데이트
//9. App 컴포넌트가 다시 렌더링되고, ListView 컴포넌트는 업데이트된 todoList 상태를 받아와서
//새로운 항목이 추가된 화면을 렌더링한다