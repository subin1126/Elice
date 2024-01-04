import React, { useState } from "react";
import axios from "axios";

function Users() {
  let [result, setResult] = useState("");

  // axios.delete를 호출하고 result에 반환되는 HTTP 상태 코드를 저장하세요.
  axios.delete('https://reqres.in/api/users/2')
  .then((response) => setResult(response.status));
  
  return (
    <div>
      <h4>React Axios로 HTTP DELETE 요청하기</h4>
      <div>
        {/* result를 이용해 출력 결과와 동일하게 출력하세요. */}
        Status: {result}
      </div>
    </div>
  );
}

export default Users;
