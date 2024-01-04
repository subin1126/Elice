import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//클래스 컴포넌트를 사용하여 Clock컴포넌트를 작성합니다.
//클래스 잘 사용하진 않지만 나중에 협업할 때 읽을 줄 알아야한다! 혹시모르니까~
//this = 내 클래스 안에 들어온걸 찾아서 쓰겠다 어쩌고
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

//index.js의 setInterval 사용됨 매초 마다 호출되는 함수
function App() {
  //Clock 컴포넌트를 호출하고 현재 시간을 props로 넘겨줍니다.
  const element = <Clock date={new Date()} />;
  ReactDOM.render(element, document.getElementById('root'));
}

export default App;
