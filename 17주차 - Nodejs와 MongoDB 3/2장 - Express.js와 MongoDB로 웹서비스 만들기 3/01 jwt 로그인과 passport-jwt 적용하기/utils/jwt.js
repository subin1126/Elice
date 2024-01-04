const jwt = require('jsonwebtoken');

const secret = 'elice';

exports.secret = secret;

exports.setUserToken = (res, user) => {
  // 유저 jwt 토큰생성
  //jwt패키지가 user라는 payload에 secret이라는 비밀값을 사용해서
  //서명을 생성하고, 그 서명을 붙여서 jwt 토큰을 만들어줌
  const token = jwt.sign(user, secret);
  // 토큰을 쿠키로 전달
  //토큰이라는 이름의 쿠키를 브라우저에 저장하고 어쩌고 된다
  res.cookie('token', token);
}