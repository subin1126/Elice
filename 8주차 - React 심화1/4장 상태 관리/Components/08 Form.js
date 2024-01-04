import React, {useContext, useRef} from 'react'
import { MemoContext } from './MemoStore.js';
//useRef 훅을 사용하여, input 요소의 참조를 생성 => input 요소에 접근 가능
//useContext 훅을 사용하여 MemoContext를 가져옴 => dispatch 함수에 접근 가능

const Form = () => {
    const inputRef = useRef(false);
    const {dispatch} = useContext(MemoContext);

//dispatch 함수를 사용하여 액션 발생 {액션 객체}
//참조객체 inputRef의 current 속성을 통해 input요소의 현재 값(value)
//즉, 현재 입력된 값을 가져온다
// 이 값을 dispatch 함수를 사용하여 메모 추가 액션의 payload로 전달
//payload : 액션 객체 속성 중 하나, 액션과 관련된 데이터를 전달하는데 사용
//메모 내용이 input 요소의 값으로 설정되어 payload에 전달된다
    const addMemoData = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_MEMO', payload :inputRef.current.value})
    }

//폼 렌더링
//input 요소에 useRef를 사용하여 생성한 참조를 할당
    return (
        <>
            <form action="">
                <input type="text" ref={inputRef} />
                <button onClick={addMemoData}>메모추가</button>
            </form>
        </>
    )
}

export default Form
