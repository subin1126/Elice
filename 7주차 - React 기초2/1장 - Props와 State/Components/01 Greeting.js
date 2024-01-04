import React from 'react';

// const Greeting = (props) => {
//     const {username} =props;
//     return <h1>{username}님 안녕하세요.</h1>;
//}

const Greeting = props => {
  return <h2>{props.username}님 안녕하세요</h2>;
};

export default Greeting;
