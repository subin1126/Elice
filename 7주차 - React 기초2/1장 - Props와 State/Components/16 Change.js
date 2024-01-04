// 거스름돈을 출력하는 Change 컴포넌트를 완성하세요.
import React, {useState} from 'react';

const Change = () => {

    const [change, setChange] = useState(0);

    const handleValue = (event) => {
        setChange(event.target.value - 6000);
    }

    return (
        <div>
        <input onChange={handleValue} />
        <p>거스름돈은 {change}원 입니다.</p>
        </div>
    );
}

export default Change;