import React from 'react';

const Number = props => {
  return (
    <div>
      <p>{props.data[0]}</p>
      <p>{props.data[1]}</p>
      <p>{props.data[2]}</p>
    </div>
  );
};

export default Number;
