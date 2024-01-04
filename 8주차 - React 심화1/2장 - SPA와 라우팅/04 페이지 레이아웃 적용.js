import React, { useEffect } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './components/PrivateRoute';

import { registerUser, loginUser } from './service/auth';

function PageLAYOUT({ heading, links, children }) {
  return (
    <div>
      <h2>{heading}</h2>
      <nav>
        {links.map(({ to, text }) => (
          <li>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </nav>

      <main>{children}</main>
    </div>
  );
}

export default function UserLogin() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <PrivateRoute path="/detail">
          <UserDetailPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function LoginPage() {
  const history = useHistory();

  const handleSubmit = formData => {
    const foundUser = loginUser(formData);

    if (!foundUser) return;

    const location = {
      pathname: '/detail',
      state: {
        user: foundUser,
      },
    };

    history.push(location);
  };

  // 페이지 별로 반복되어 등장하는 코드를 공통화하세요.
  return (
    <PageLAYOUT
      heading="Login"
      links={[
        { to: '/register', text: 'Register' },
        { to: '/', text: 'Home' },
      ]}
    >
      <LoginForm onSubmit={handleSubmit} />
    </PageLAYOUT>
  );
}

function RegisterPage() {
  const history = useHistory();

  const handleSubmit = formData => {
    registerUser(formData);
    history.push('/login');
  };

  // 페이지 별로 반복되어 등장하는 코드를 공통화하세요.
  return (
    <PageLAYOUT
      heading="Register"
      links={[
        { to: '/login', text: 'Login' },
        { to: '/', text: 'Home' },
      ]}
    >
      <RegisterForm onSubmit={handleSubmit} />
    </PageLAYOUT>
  );
}

function UserDetailPage() {
  const history = useHistory();
  const location = useLocation();
  const user = location.state.user;

  useEffect(() => {
    return () => history.replace();
  }, [history]);

  // 페이지 별로 반복되어 등장하는 코드를 공통화하세요.
  return (
    <PageLAYOUT
      heading="User Details"
      links={[{ to: '/login', text: 'Logout' }]}
    >
      <div>
        <em>email : {user.email}</em>
      </div>
    </PageLAYOUT>
  );
}
