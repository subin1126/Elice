import React, { useState } from 'react';

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (typeof onInsert === 'function') {
      //onInsert의 타입이 function이어야
      onInsert(inputValue); //onInsert를 호출한다
    }
    setInputValue('');
  };

  //form 활용할때는 type 지정해주는게 좋대
  //버튼이 여러개 있을 때 type 지정안해주면 기능이 겹칠수도있음
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
