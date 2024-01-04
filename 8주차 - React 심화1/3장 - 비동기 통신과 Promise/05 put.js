import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  let [result, setResult] = useState('');

  // 수정할 데이터를 선언하세요.

  const UpdateData = {
    first_name: 'White',
    last_name: 'Rabbit',
    email: 'alice@elice.io',
  };

  //  axios.put을 호출하고 result에 반환되는 사용자 데이터를 저장하세요.
  useEffect(() => {
    console.log(result);
    axios
      .put('https://reqres.in/api/users/2', UpdateData)
      .then(response => setResult(response.data));
  }, []);

  return (
    <div>
      <h4>React Axios로 HTTP PUT 요청하기</h4>
      <div>
        Name: {result.first_name + ' ' + result.last_name} <br />
        Email: {result.email} <br />
        Update Date: {result.updatedAt} <br />
      </div>
    </div>
  );
}
export default Users;
