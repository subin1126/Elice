import styled from 'styled-components';
import React from 'react';

// score에 따라 다른 배경색을 출력합니다.
const Container = styled.div`
  padding: 10px;
  color: white;

  background-color: ${props =>
    props.score > 10 ? 'rgb(0, 0, 255)' : 'rgb(0, 128, 0)'};
  
`;

// score에 따라 다른 텍스트를 출력합니다.
const PrintMenu = props => {
  const text = props.score >= 10 ? '여름엔 팥빙수' : '겨울엔 칼국수';

  return <Container score={props.score}>{text}</Container>;
};

// 아래는 수정하지 마세요!
export default function App() {
  const score = [9, 10, 11];

  return (
    <React.Fragment>
      <PrintMenu score={score[0]} />
      <PrintMenu score={score[1]} />
      <PrintMenu score={score[2]} />
    </React.Fragment>
  );
}
