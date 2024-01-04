import React, {useContext, useRef} from 'react'
import { MemoContext } from './MemoStore.js';

const Form = () => {
    const inputRef = useRef(false);
    const {dispatch} = useContext(MemoContext);

    const addMemoData = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_MEMO', payload :inputRef.current.value})
        inputRef.current.value = '';
    }

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
