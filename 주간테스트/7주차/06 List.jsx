import React, {useContext} from 'react'
import Item from './Item.jsx'
import { MemoContext } from './MemoStore.js';

const List = () => {

  const {memo, loading} = useContext(MemoContext);

  let memoList = <div>loading...</div>;
  if(!loading) memoList = memo.map( (memo) => 
    <Item key={memo.id} memo={memo} />
  )

  return (
    <ul>
        {memoList}
    </ul>
  )
}
export default List