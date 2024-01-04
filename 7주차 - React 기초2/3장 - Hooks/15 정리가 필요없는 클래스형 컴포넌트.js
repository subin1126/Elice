import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // componentDidMount() 메소드를 완성하세요.
  componentDidMount = () => {
    alert(`${this.state.count}번 클릭했습니다.`);
  };

  //componentDidUpdate() 메소드를 완성하세요.
  componentDidUpdate = () => {
    alert(`${this.state.count}번 클릭했습니다.`);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          버튼 클릭
        </button>
      </div>
    );
  }
}

export default App;
