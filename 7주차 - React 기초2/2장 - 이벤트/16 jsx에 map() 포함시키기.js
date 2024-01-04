import React, { useState } from "react";
import "./App.css";

function CurriculumPage(props) {
  //React의 목차 출력
  const contents = props.curriculum;

  //React의 목차 별 세부 내용 출력
  const subcontents = props.curriculum;

  return (
    <div>
      <h2>React과목 커리큘럼</h2>
      <ul>
        {contents.map((item) => <li key={item.id}>{item.title}</li>)}
        
      </ul>
      <hr />
      {subcontents.map((item) => {
          return (
              <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              </div>
          );
      })}
      
    </div>
  );
}

export default CurriculumPage;


//index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const reactCurriculum = [
  {
    id: 1,
    title: "리액트란?",
    detail: "리액트가 무엇인지 알고 리액트 앱을 구동해봅니다.",
  },
  {
    id: 2,
    title: "jsx 문법 및 렌더링",
    detail:
      "리액트의 사용성을 높여주는 JSX에 대해 배우고 React DOM에 렌더링해봅니다.",
  },
  {
    id: 3,
    title: "컴포넌트와 Props&State",
    detail:
      "컴포넌트 유형에 대해 배우고 관련하여 주요한 개념인 Props와 State에 대해 배워봅니다.",
  },
  {
    id: 4,
    title: "이벤트처리와 조건부 렌더링 및 Key 설정",
    detail:
      "리액트에서 이벤트를 처리하는 방식을 알고 조건에 따른 렌더링 방법과 Key 설정을 배워봅니다.",
  },
  {
    id: 5,
    title: "제어 컴포넌트 및 State 끌어올리기",
    detail:
      "리액트 고유성을 위한 key 설정 및 사용자가 제출한 폼에 따른 제어 기술을 배워봅니다.",
  },
];

ReactDOM.render(
  <App curriculum={reactCurriculum} />,
  document.getElementById("root")
);

