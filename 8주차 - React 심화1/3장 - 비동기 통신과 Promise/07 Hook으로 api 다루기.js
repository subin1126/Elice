import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  // state인 users를 useState()로 선언하세요.
  const [users, setUsers] = useState([]);

  // async와 await를 이용한 useEffect()를 선언하세요.
  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    }
    fetch();
  }, []);

  const userName = users.map(user => <li key={user.id}> {user.name} </li>);

  return (
    <>
      <h4>사용자 리스트</h4>
      <div> {userName} </div>
    </>
  );
}

export default Users;

// 여기서 생긴 의문점은
// axios.get도 비동기 함수인걸로 알고있는데
// 왜 async await과 같이 쓰는가?
// 프로미스 체이닝이 계속 심해져서
// 더 보기 쉽게 더 이해도있게 작성하기 위해

// useEffect는 함수를 반환해야하는데
// async/await은 Promise 객체를 반환하기 때문에
// 새로운 async 함수 async function fetch()를 만드는 것