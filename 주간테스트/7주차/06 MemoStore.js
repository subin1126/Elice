import React, { useEffect, useReducer } from "react";
import useFetch from "./useFetch.js";
import { memoReducer } from "./reducers.js";

export const MemoContext = React.createContext();

const MemoStore = (props) => {
  //1. useState()를 변경해서 useReducer 사용하는 코드로 작성하세요.
  //const [memo, setMemo] = useState([]);
  const [memo, dispatch] = useReducer(memoReducer, []);

  const setInitData = (initData) => {
    //2. setInitData() 메소드 내에 dispatch 함수로 액션을 발생시키세요.
    dispatch({
        type: "SET_INIT_DATA",
        payload: initData,
    });
  };

  const loading = useFetch(setInitData, "http://localhost:8080/memo");

  useEffect(() => {
    console.log("새로운 내용이 렌더링됐네요", memo);
  }, [memo]);

  return (
    <MemoContext.Provider value={{ memo, loading, dispatch }}>
      {props.children}
    </MemoContext.Provider>
  );
};

export default MemoStore;
