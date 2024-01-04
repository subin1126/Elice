import React, {useState} from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // count의 state를 0으로 설정하세요.
    this.state= {
        count : 0
    };
  }

  render() {
      const {count} = this.state;
    return (
      <div>
        {/* count의 state를 출력하세요. */}
        <p>You clicked {count} times</p>
        {/* setState()를 이용해 버튼 클릭 시 count가 1 증가하는 코드를 작성하세요. */}
        <button onClick={() => this.setState({count : count+1})}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
