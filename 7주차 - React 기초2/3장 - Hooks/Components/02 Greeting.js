import React, { useEffect } from 'react';

const Greeting = () => {
  useEffect(() => {
    console.log('컴포넌트가 생성되었습니다.');

    return () => {
      console.log('컴포넌트가 소멸되었습니다.');
    };
  }, []);

  return <h1>안녕하세요.</h1>;
};

export default Greeting;
