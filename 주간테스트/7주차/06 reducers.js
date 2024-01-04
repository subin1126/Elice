//3. memoReducer의 ADD_MEMO 부분을 완성하세요.
export const memoReducer = (memo, { type, payload }) => {
    switch (type) {
      case 'ADD_MEMO':
        return [
          ...memo,
          {
            title: payload,
            id: memo.length,
            status: 'memo',
          },
        ];
  
      case 'SET_INIT_DATA':
      case 'CHANGE_MEMO_STATUS':
        return payload;
  
      default:
        return memo;
    }
  };
  