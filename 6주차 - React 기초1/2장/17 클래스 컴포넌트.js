import React from 'react';
import './App.css';

//정의된 이름
const name = "Sara"

//클래스명이 Welcome인 컴포넌트를 작성합니다.
class Welcome extends React.Component{ //이거 잘 안쓴대
    render(){
        return <h2>Welcome, {name}!</h2>
    }
}


// function Welcome(){ //이렇게 많이 한대, 하지만 다른 사람의 코드를 읽을 때 
//     return <h2>Welcome, Sara!</h2>
// }//컴포넌트를 호출하여 element에 저장합니다.
const element = <Welcome />;

export default element;



