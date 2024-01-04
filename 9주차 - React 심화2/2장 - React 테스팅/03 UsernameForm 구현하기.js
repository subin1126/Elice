import React, { useState } from "react";

function validateInput(value) {
    if (!value){
        return '유저명을 필수로 입력해주세요.'
    }

    if (value.length > 20) {
        return '20자 이하의 문자열을 입력해주세요.'
    }

    return ''
}

export default function UsernameForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);
    setError(validateInput(input));

    //변화시마다 error를 같이 세팅해주되,
    // submit때만 보여지는 것
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true)

    const error = validateInput(value)
    setError(error)

    if(error) return
    setSuccess('유저명 생성에 성공했습니다.')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="유저명을 입력하세요"
          value={value}
          onChange={handleChange}
        />

        <button type="submit">제출</button>
        {submitted && <div data-testid='error-box'>{error}</div>}
      </form>

      {success && <div data-testid='success-box'>{success}</div>}
    </div>
  );
}
