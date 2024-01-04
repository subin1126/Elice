import React from 'react';

// 주문 받은 메뉴와 개수를 출력하는 Order 컴포넌트를 만드세요.
const Order = props => {
  return (
    <p>
      사장님, {props.menu} {props.count}개 주세요!
    </p>
  );
};

export default Order;
