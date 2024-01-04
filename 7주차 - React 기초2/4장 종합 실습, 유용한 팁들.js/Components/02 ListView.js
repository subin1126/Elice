import React from 'react';

function ListView({ todoList }) {
  return (
    <div>
      <ol>
        {todoList.map(item => {
          return (
            <li key={item.key}>
              <span>{item.value}</span>
              <button type="button">완료</button>
              <button type="button">삭제</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ListView;

//type 습관적으로 넣어주래
//버튼의 동작을 지정하기 위함 : 기본 동작과 관련된 정보를 지정하는 데 사용
//오 미친 버튼의 타입 종류
//type='button' : 버튼 동작
//type='submit' : 폼 제출 역할
//type='reset' : 폼의 입력 내용을 초기화하는 역할
//type='checkbox' : 버튼이 체크박스로 동작 : 클릭할 때마다 체크 상태 변경
//type='radio' : 버튼이 라디오 버튼으로 동작 : 여러개의 라디오 버튼 중 하나 선택
