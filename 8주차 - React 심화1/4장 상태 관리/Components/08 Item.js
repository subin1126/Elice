import React, {useContext} from 'react'
import { MemoContext } from './MemoStore.js';
// 개별 메모 아이템을 표시하고,
//클릭 이벤트에 응답하여 메모 상태를 변경하는 기능을 구현한 컴포넌트

const Item = ({memo}) => {

  const {dispatch} = useContext(MemoContext); //dispatch에 접근가능

//메모 아이템을 클릭했을 때 호출되며, 메모 상태를 변경하는 역할을 한다
  const toggleItem = (e) => {
      const id = e.target.dataset.id; //클릭된 데이터 속성 중 메모의 고유 식별자(id)를 나타낸다
      dispatch({type:'CHANGE_MEMO_STATUS', payload:id});
  }

//메모의 상태에 따라 클래스 이름을 동적으로 할당
//메모의 상태가 done인 경우 done 클래스를 할당, 아니면 빈 문자열 할당
  const itemClassName = memo.status === 'done' ? 'done' : '';

  return (
    <li data-id={memo.id} onClick={toggleItem} className={itemClassName} > {memo.title} </li>
  )
}

export default Item
