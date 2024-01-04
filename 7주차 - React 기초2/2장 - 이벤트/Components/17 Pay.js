import React from "react";

// 결제를 위한 Pay 컴포넌트를 완성하세요.
const Pay = () => {
    const handleClick = () => {
        alert("결제가 완료되었습니다.");
    }

    return <button onClick={handleClick}>결제하기</button>;
}

export default Pay;
