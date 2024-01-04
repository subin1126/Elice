import React from 'react';
// 필요한 모듈을 추가로 import하세요.
import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  useLocation,
  Redirect,
} from 'react-router-dom';
import LoginForm from './LoginForm';

export default function UserLogin() {
  // 작성한 페이지에 대한 router를 설정하세요

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/detail">
          <UserDetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
// HomePage 페이지 컴포넌트를 구현하세요.
function HomePage() {
  // Link 컴포넌트를 추가하세요.
  return (
    <div>
      <h2>Home Page</h2>
      <div>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}

// LoginPage 페이지 컴포넌트를 구현하세요.
function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />
      <div>
        <Link to='/'>Back to Home</Link>
      </div>
    </div>
  );
}

// DetailPage 페이지 컴포넌트를 구현하세요.
//location.search를 통해 전달된 쿼리 파라미터를 읽어와서 사용할 수 있다
//searchParams.get('email')를 사용하여 이메일 값을 가져올 수 있다
function UserDetailPage() {
  // email, password 정보를
  // query param 으로 받아와 저장하고, 정보를 보여주세요.
  const location = useLocation();
  
  //URL의 쿼리 문자열을 다루기 위한 인터페이스를 제공하는 객체
  const searchParams = new URLSearchParams(location.search);

  const email = searchParams.get('email');
  const password = searchParams.get('password');

//로그인하지 않은 사용자는 로그인 페이지로 리디렉션 되어
//로그인을 해야만 UserDetailPage를 볼 수 있게 된다
  if(!email || !password){
      return <Redirect to='/login' />;
  }

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>
        <h3>User details</h3>
        <em>{email}</em>
        <br />
        <strong>{password}</strong>
      </p>
      <Link to='login'>Logout</Link>
    </div>
  );
}
