import React, { useState } from 'react';

function SimpleToggle() {
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(b => !b)
  return (
    <>
      {!show && <div>유저 정보를 보려면 버튼을 누르세요.</div>}
      {
          show && (
              <ul>
              <li>Email - elice@elicer.com</li>
              <li>Address - 서울시 강남구 테헤란로 401</li>
              </ul>
          )
      }
      <button onClick={handleClick}>
      {!show ? '유저정보 보기' : "유저정보 가리기"}
      </button>
    </>
  );
}

export default SimpleToggle;
