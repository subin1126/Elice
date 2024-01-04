import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  let [result, setResult] = useState('');
  // useEffect를 사용하지 않고 아래를 출력해보세요.

  useEffect(() => {
    console.log(result);

    // axios.get을 호출하고 result에 반환되는 데이터를 저장하세요.
    axios
      .get('https://reqres.in/api/users/2')
      .then(response => setResult(response.data.data));
  }, []);

  return (
    <div>
      <h4>React Axios로 HTTP GET 요청하기</h4>
      <div>
        {/* result를 이용해 출력 결과와 동일하게 출력하세요. */}
        Name: {result.first_name} {result.last_name} <br />
        Email: {result.email}
      </div>
    </div>
  );
}

export default Users;

// axios.get은 비동기 함수인데,
// 이 함수가 끝나기 전에 setResult가 호출돼서
// 상태가 변경되었기 때문에 무한렌더링이 일어난다
// 그래서 useEffect로 의존성 배열을 빈배열로 해줌으로
//컴포넌트가 처음 마운트될 때만 실행되어 데이터를 가져온다
//무한렌더링 해결!
