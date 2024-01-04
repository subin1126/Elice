import React from 'react';
import './App.css';

//클래스든 함수형이든 state가 바뀔때마다 재렌더링된다

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '엘리스 토끼',
      job: 'developer',
    };
  }

  //name 데이터를 변경하는 메소드
  onNameHandler = event => {
    //setState를 사용해 name 데이터 업데이트 기능을 구현합니다.
    this.setState({
      name: event.target.value,
    });
  };

  //job 데이터를 변경하는 메소드
  onJobHandler = event => {
    //setState를 사용해 job 데이터 업데이트 기능을 구현합니다.
    this.setState({
      job: event.target.value,
    });
  };

  onClickEventHandler = () => {
    alert('이름: ' + this.state.name + ', 직업: ' + this.state.job);
  };

  render() {
    const { name, job } = this.state;
    return (
      <div>
        <div>
          name: <input type="text" value={name} onChange={this.onNameHandler} />
        </div>
        <div>
          job: <input type="text" value={job} onChange={this.onJobHandler} />
        </div>
        <button type="button" onClick={this.onClickEventHandler}>
          저장
        </button>
      </div>
    );
  }
}

export default App;
