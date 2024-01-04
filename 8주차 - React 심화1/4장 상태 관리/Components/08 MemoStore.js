import React, { useEffect, useReducer } from 'react';
import useFetch from './useFetch.js';
import { memoReducer } from './reducers.js';

export const MemoContext = React.createContext();

const MemoStore = props => {
  //1. useState()를 변경해서 useReducer 사용하는 코드로 작성하세요.
  //const [memo, setMemo] = useState([]);
  //    state, dispatch(액션관리)       리듀서함수, 초기상태 빈 배열
  const [memo, dispatch] = useReducer(memoReducer, []);

  const setInitData = initData => {
    //2. setInitData() 메소드 내에 dispatch 함수로 액션을 발생시키세요.
    //action : {type, payload }
    //type: 액션의 종류를 나타내는 문자열
    //payload: 액션과 관련된 데이터를 나타내는 값
    //이 액션은 memoReducer로 전잘되어 상태 업데이트를 처리할 수 있게 된다
    dispatch({
      type: 'SET_INIT_DATA',
      payload: initData,
    });
  };

  const loading = useFetch(setInitData, 'http://localhost:8080/memo');

//컴포넌트의 렌더링과 관련된 부수 효과(side effect)를 처리하기 위해 사용
//부수 효과 : 컴포넌트 외부의 데이터를 가져오거나 변경하는 작업, DOM 조작, 이벤트 구독 같은 작업
//memo 상태의 변화를 감지하고, 변화에 따라 원하는 작업을 수행하기 위해서
//useEffect : 특정 상태나 props가 변경될 때마다 특정 함수를 실행
  useEffect(() => {
    console.log('새로운 내용이 렌더링됐네요', memo); //실행할 함수 : memo 상태가 변경될 때마다 실행됨
  }, [memo]); //의존성 배열 : 이 배열에 포함된 값들 중 하나라도 변경되면 함수 실행 : memo 상태가 변경될 때마다 실행

  //props.children : MemoStore 컴포넌트의 자식 컴포넌트들을 나타냄
  //<Header /> <Form /> <List /> 한번에 부른거
  //MemoContext.Provider로 감싸는 것은 MemoContext를 사용하는
  //모든 하위 컴포넌트에서 동일한 memo 상태와 dispatch 함수에 접근할 수 있도록 하기 위함
  return (
    <MemoContext.Provider value={{ memo, loading, dispatch }}>
      {props.children}
    </MemoContext.Provider>
  );
};

export default MemoStore;

// const [memo, dispatch] = useReducer(memoReducer, [])를 통해 memo상태와 dispatch 함수를 생성하고,
// 이를 MemoContext.Provider의 value로 제공한다
// 이렇게 함으로써 자식 컴포넌트에서 MemoContext를 활용하여 memo 상태와 dispatch 함수에 접근할 수 있게 되는 것
