import React, {useContext} from 'react'
import { MemoContext } from './MemoStore.js';

const Item = ({memo}) => {

  const {dispatch} = useContext(MemoContext);

  const toggleItem = (e) => {
      const id = e.target.dataset.id;
      dispatch({type:'CHANGE_MEMO_STATUS', payload:id});
  }

  const itemClassName = memo.status === 'done' ? 'done' : '';

  return (
    <li data-id={memo.id} onClick={toggleItem} className={itemClassName} > {memo.title} </li>
  )
}

export default Item
