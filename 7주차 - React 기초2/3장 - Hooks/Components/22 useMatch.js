import { useState } from 'react';

const useMatch = value => {
  const [match, setMatch] = useState(value);

  const correct = () => {
    setMatch(current => {
      if (current === '아닌 밤중에 홍두깨') {
        return <h3>정답입니다!</h3>;
      } else {
        return <h3>오답입니다.</h3>;
      }
    });
  };

  return { match, correct };
};

export default useMatch;
