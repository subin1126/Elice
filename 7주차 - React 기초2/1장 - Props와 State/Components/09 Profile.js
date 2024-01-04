// 프로필 정보를 출력하는 컴포넌트를 완성하세요.
//import React from 'react';

function Profile(data) {
    return (
      <div>
        <h2>이름: {data.name}</h2>
        <h2>나이: {data.age}</h2>
        <h2>성별: {data.gender}</h2>
      </div>
    );
  }
  //엥 뭐지 킹시보기 해야할듯
  export default Profile;
  