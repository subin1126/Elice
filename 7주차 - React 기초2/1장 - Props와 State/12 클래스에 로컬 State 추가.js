import React from 'react';
import './App.css';

//constructor() : 함수가 시작될 때 작동됨, 함수가 시작헀다! 라고 알면됨
//끝날때 다 지워주는 작업을 하는 함수 : destructor() : 함수가 끝났다!

//현재시간을 출력하는 컴포넌트
//Clock 클래스가 호출될 때 자동으로 constructor() 실행
class Clock extends React.Component {
  //constructor()메소드를 추가합니다.
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //props를 state로 변경합니다.
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//Clock 컴포넌트를 호출합니다.
const element = <Clock />; //props가 없는데 state를 어디서 가져왔을까? => 클래스에서 가져온게 아닐까? => 클래스에 생성자가 있어서 된거임~~

function App() {
  return element;
}

export default App;
