import React from 'react';

// props로 전달 받은 이벤트 핸들링 함수를 호출하세요.
const ListView = ({ todoList, onComplete, onRemove }) => {
  return (
    <div>
      <ol>
        {todoList.map((item, index) => {
          return (
            <li key={item.key} className={item.isCompleted ? 'complete' : ''}>
              <span>{item.value}</span>
              <button
                type="button"
                onClick={() => {
                  if (typeof onComplete === 'function') {
                    onComplete(index);
                  }
                }}
              >
                완료
              </button>
              <button
                type="button"
                onClick={() => {
                  if (typeof onComplete === 'function') {
                    onRemove(index);
                  }
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ListView;
