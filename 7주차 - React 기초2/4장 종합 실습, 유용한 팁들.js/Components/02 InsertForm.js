import React, { useState, useCallback } from 'react';

const InsertForm = ({ onInsert }) => {
  //onInsert 함수는 inputValue 값을 매개 변수로 받아와서 todo 항목 생성
  const [inputValue, setInputValue] = useState('');

  // useCallback : 콜백함수를 메모이제이션 : 이전 렌더링에서 생성된 콜백함수를 재사용하여 성능 최적화
  //일반적으로 React 컴포넌트는 렌더링될 때마다 함수 컴포넌트의 내부 코드가 실행되고,
  //함수 내부에 정의된 함수들도 새로 생성된다
  //이런 문제를 해결하기 위해 콜백함수를 메모이제이션하여 이전 렌더링에서 생성된 콜백함수를 재사용한다
  //즉, 콜백함수의 레퍼런스가 이전과 동일하다면 이전에 생성된 함수를 사용하고,
  //콜백함수의 의존성이 변경되었을 떄에만 새로운 함수를 생성
  //handleSubmit 함수를 메모이제이션하고, onInsert와 inputValue값이 변경되었을 때만 새로운 함수를 생성
  const handleSubmit = useCallback(
    event => {
      event.preventDefault(); // 기본적인 HTML 동작으로 인해 페이지가 새로고침 되는 것을 방지
      if (typeof onInsert === 'function' && inputValue) {
        // onInsert가 정상적인 함수인 지 확인하여 에러 방지
        //inputValue 값이 유효한 경우에만 onInsert 함수를 호출하여 todo 항목 추가
        onInsert(inputValue);
      }
      setInputValue('');
    },
    [onInsert, inputValue]
  );

  //폼을 제출할 때 handleSubmit 함수 호출
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default InsertForm;

// 그렇다면 useMemo와 useCallback의 차이점은 뭘까?
// useMemo : 계산 비용이 큰 함수와 결과값을 메모이제이션하여 이전에 계산된 '값'을 재사용하는 데 사용된다
//특정 값을 계산하고 메모이제이션하여 이전에 계산된 결과를 사용한다
//이를 통해 같은 입력값에 대해서는 매번 계산하지 않고,
//이전에 계산된 결과를 바로 반환함으로써 성능 향상
//useMemo는 일반적으로 값의 변경에 따라 캐싱된 값을 업데이트 할 때 사용된다

//useCallback은 '함수' 자체를 메모이제이션하여 이전에 생성된 함수를 재사용하는 데 사용
//useCallback은 일반적으로 이벤트 핸들러 함수나 콜백함수를 props로 전달할 때 사용된다

//handleSubmit '함수'가 이벤트 핸들러로 사용되기 때문에 useMemo가 아닌 useCallback을 사용하는게 적합
//useMemo를 사용하여 handleSubmit 함수를 메모이제이션하면, 매번 새로운 함수를 생성하지 않고,
//이전에 생성된 함수를 사용할 수는 있지만, 이벤트 핸들러로 전달할 때 매번 새로운 함수를 전달해야 하므로
//부모 컴포넌트에서 자식 컴포넌트의 렌더링이 발생한다
//useCallback으로 함수를 메모이제이션하면 이벤트 핸들러로 전달되는 함수의 레퍼런스가 변하지 않기 때문에
//부모 컴포넌트에서 자식 컴포넌트의 불필요한 렌더링을 방지할 수 있다

//이벤트 핸들러 함수는 useCallback이 좋다~
