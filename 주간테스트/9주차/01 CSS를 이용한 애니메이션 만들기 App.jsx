import styled from "styled-components";

// 지시사항을 참고하여 마우스를 올렸을 때 애니메이션이 동작하도록 styled component를 완성하세요.

const Container = styled.div`
  
  background-color: gray;
  width: 100px;
  height: 100px;

  transition: background-color 0.5s, width 0.5s, height 0.5s;

  &:hover {
      background-color: purple;
      width: 250px;
      height: 250px;
  }

 

`;

export default function App() {
  return <Container />;
}