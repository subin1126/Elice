import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      // try ~ catch를 이용해 예외 처리를 하세요.
      try {
        const response = await axios.get(
          `https://${window.location.hostname}:8190/data`
        );
        setUsers(response.data); //응답이 성공하면 상태에 저장
      } catch (error) {
        setError(error.message);
      }
    }
    fetchUser();
  }, []);

  const userName = users.map(user => <li key={user.id}> {user.name} </li>);

  if (error) return <h4>에러 발생!</h4>;
  return (
    <>
      <h4>사용자 리스트</h4>
      <div> {userName} </div>
    </>
  );
}

export default Users;


//index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Users from './Users';
// import axios from "axios";

// axios.interceptors.request.use(function(config) {
//   var url = new URL(config.url);
  
//   if (url.host === '127.0.0.1:8190') {
// 	  url.host='127.0.0.1:8090';
// 	  url.protocol='http://';
// 	  config.url = url.href;
//   }
  
//   return config;
// });

// ReactDOM.render(<Users />, document.getElementById('root'));

