import React, {useContext} from 'react'

import { MemoContext } from './MemoStore.js';

const Header = () => {
  const {memo} = useContext(MemoContext);
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
