import React from 'react';
import './App.css';

//user의 정보(이름, 프로필사진) 출력 컴포넌트
function UserInfo(ap) {
  return (
    <div>
      {/*3. Profile에서 전달받은 p를 이용해 p의 value 값에 name내용{p.a} 출력*/}
      <div>이름: {p.value.name}</div>
      {/*3. Profile에서 전달받은 p, p의 value 값에 age내용 출력*/}
      <div>나이: {p.value.age}</div>

      <div>문구22: {p.ttt}</div>
    </div>
  );
}

//코멘트 출력 컴포넌트
function Comment(p) {
  /*3. Profile에서 전달받은 p의 값 ttottot(p.t) */
  return <div>문구: {p.ttottot}</div>;
}

//문구 출력 컴포넌트
function Profile(p) {
  return (
    <div>
      {/*2. 여기서 어떤 값(value)을 받을지, 그 내용을 뭘로 받을지(p.a) UserInfo로 전달 중*/}
      <UserInfo value={p.a} ttt={p.t} />

      {/*2. Comment 컴포넌트로 ttottot={p.t} 속성 전달*/}
      <Comment ttottot={p.t} />
    </div>
  );
}

//데이터 저장 변수
const comment = {
  text: 'I hope you enjoy learning React!',
  author: {
    name: '엘리스 토끼',
    age: '12',
  },
};

/*1. Profile 컴포넌트에 comment 객체 속성 전달, 4.Profile 컴포넌트 렌더링 결과를, element에 저장 후 element export*/
const element = <Profile t={comment.text} a={comment.author} />;

export default element;
