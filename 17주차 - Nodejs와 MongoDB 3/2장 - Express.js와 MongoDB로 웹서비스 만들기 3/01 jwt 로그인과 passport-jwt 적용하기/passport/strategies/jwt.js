const JwtStrategy = require('passport-jwt').Strategy;
const { secret } = require('../../utils/jwt');

const cookieExtractor = (req) => {
  // req 의 cookies 에서 token 사용하기
  //아래 한줄과 같은 뜻
//   const { token } = req.cookies;
//   return token;

    return req.cookies.token;
};

const opts = {
  secretOrKey: secret, //./utils/jwt 의 secret 사용하기
  jwtFromRequest: cookieExtractor,
}

module.exports = new JwtStrategy(opts, (user, done) => {
  done(null, user);
});