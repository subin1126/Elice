import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    // DetailPage로 이동하는 코드를 작성하세요.
    //URL의 쿼리 파라미터는 ? 문자로 시작하고,
    //key=value 형식으로 작성되며,
    //여러 개의 쿼리 파라미터는 & 문자로 구분된다
    //실행 후 : /detail?email=test@test.com&password=1234 이렇게 나옴
    history.push(`/detail?email=${email}&password=${password}`);
    
  };

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter email."
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            placeholder="Enter password."
          />
        </fieldset>
        <button type="submit" onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
}

//history 객체는 React Router에서 제공하는 객체로,
//브라우저의 세션 히스토리를 관리하고 조작할 수 있는 기능 제공
//페이지를 이동하거나 히스토리를 조작할 수 있다

//useHistory를 사용하여 history 객체를 가져온다
//submitForm 함수 내에서 history.push()를 호출하여 /detail 경로로 이동하고,
//이메일과 비밀번호를 쿼리 파라미터로 전달한다
