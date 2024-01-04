import React from 'react';
import './App.css';

//Effect State 때문에 클래스를 많이 쓰지않음

class App extends React.Component {
  constructor(props) {
    console.log('constructor() 호출');
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log('componentDidMount() 호출');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() 호출');
    clearInterval(this.timerID);
  }

  tick() {
    console.log('tick() 호출');
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log('render() 호출');
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
