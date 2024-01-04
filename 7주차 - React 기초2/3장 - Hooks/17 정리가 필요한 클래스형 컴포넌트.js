import React from 'react';
import './App.css';


class Child extends React.Component {
  // componentWillUnmount() 메소드를 생성하고 경고창을 띄우세요.
  componentWillUnmount = () => {
      alert(`텍스트가 제거 되었습니다!`);
  }
   
  render() {
    return (
      <p>버튼을 클릭해 해당 텍스트를 제거하세요.</p>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
        {myheader}
        <button type="버튼" onClick={this.delHeader}> Delete Header </button>
      </div>
    );
  }
}


export default App;
