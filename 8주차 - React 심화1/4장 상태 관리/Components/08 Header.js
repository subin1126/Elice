import React, {useContext} from 'react'

import { MemoContext } from './MemoStore.js';

const Header = () => {
  const {memo} = useContext(MemoContext);

  //메모의 상태가 'memo'인 메모들의 개수를 세는 기능
  //filter된 메모의 개수를 구한다 => length로 : memo 배열의 길이인거임
  // v는 filter의 콜백함수에서 사용되는 현재 요소를 나타내는 변수
  return (
          <>
            <h1>애플리케이션</h1>
            <div className="countInfo">
             메모가 총 {memo.filter(v => v.status === "memo").length}개가 있습니다
            </div>
          </>
  )
}

export default Header
