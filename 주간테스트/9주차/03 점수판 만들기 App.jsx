import styled from 'styled-components';

// 임의로 설정한 12개의 점수들입니다, 수정하지 마세요!
const scores = [46, 74, 23, 38, 63, 58, 93, 67, 84, 86, 54, 34];

// 지시사항 1번을 참고하여 코드를 작성하세요.
const ScoresContainer = styled.div`
   display: grid;
   grid-template-columns: 100px 100px 100px;
   grid-column-gap: 20px;
   grid-row-gap: 10px;
`;

// 지시사항 2번을 참고하여 코드를 작성하세요.
function getColorByScore(score) {
  if (40 >= score) {
    return 'red';
  } else if (41 <= score && score <= 70) {
    return 'green';
  } else if (71 <= score) {
    return 'blue';
  }
}

// 지시사항 3번을 참고하여 코드를 작성하세요.
const Score = styled.div`
  position: relative;
  color: ${props => getColorByScore(props.score)};
  text-align: center;
  width: 100px;
  height: 50px;
  line-height: 50px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => getColorByScore(props.score)};
    opacity: 0.2;
    border-radius: 8px;
  }
`;

// map을 이용하여 12개의 Score를 화면에 그립니다. 수정하지 마세요!
export default function App() {
  return (
    <ScoresContainer id="check_layout">
      {scores.map((score, i) => {
        return (
          <Score
            score={score}
            key={`score-${i}-${score}`}
            id={`score-${i}-${score}`}
          >
            {score}
          </Score>
        );
      })}
    </ScoresContainer>
  );
}
