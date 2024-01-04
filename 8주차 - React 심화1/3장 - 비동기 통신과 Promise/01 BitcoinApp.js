import React, { useState, useEffect } from "react";
import * as authAPI from "../service/auth";
import styled from "styled-components";
import UserDetail from "./UserDetail";
import RegisterForm from "./RegisterForm";
// RegisterForm을 이용해 유저 정보를 가져와 화면을 업데이트하세요.

export default function BitcoinApp() {
  // 유저 정보를 저장하는 State를 지정하세요.
  const [users, setUsers] = useState('');
  
  // useEffect를 이용해 유저 정보를 받아와 State에 저장하세요.
  //authAPI는 사용자 데이터를 가져오는 기능을 제공하는 인증 관련 api를 추상화한 것
  //authAPI.getUsers()는 사용자 데이터를 비동기적으로 가져오는 역할을 함
  //사용자 목록을 가져오는 작업을 수행하고, 이 작업이 완료되면 Promise를 반환
  //처음 렌더링될 때 한번 실행되는 렌더링과 관계없는 부수 효과 useEffect
  //useEffect의 의존성 배열이 빈 배열이므로 첫 렌더링 이후에만 실행됨
  //data : authAPI.getUsers()의 비동기 작업이 완료되어 반환된 결과
  //작업이 완료되면 then() 메서드를 통해 반환된 데이터를 data 매개변수로 받는다
  //then은 Promise의 콜백함수로 setUsers(data)를 호출하여 컴포넌트의 상태를 업데이트한다
  useEffect(() => {
      authAPI.getUsers().then(data => {
          setUsers(data);
      })
  })

  const handleSubmit = (FormData) => {
      authAPI
        .registerUser(FormData) //새로운 사용자 등록
        .then(authAPI.getUsers) //업데이트된 사용자 목록 가져오기
        .then(setUsers) //상태 업데이트
        .catch(console.error)
  }

    //사용자 정보를 아직 불러오지 못한 상태를 처리
    if(!users) {
        return <div>유저 정보를 불러오는 중입니다...</div>
    }
  
  // 유저 정보를 받아온지의 여부에 따라서 화면을 구성하세요.
  //users 배열을 순회하면서 각각의 user를 UserDetail 컴포넌트로 렌더링한다
  //user 객체를 ...user을 사용하여 속성(props)로 전달
  //따라서 각 user 객체의 속성들은 UserDetail 컴포넌트에서 사용가능
  return (
      <div>
      <RegisterForm onSubmit={handleSubmit} />
      {users.map(user => (
          <UserDetail {...user} />
      ))}
      </div>
  )
}

const WrappedUserDetail = styled(UserDetail)`
  & + & {
    margin-top: 12px;
  }
`;

const WrappedRegisterForm = styled(RegisterForm)`
  margin-bottom: 12px;
`;

const Container = styled.div`
  width: 500px;
  min-height: 500px;
`;