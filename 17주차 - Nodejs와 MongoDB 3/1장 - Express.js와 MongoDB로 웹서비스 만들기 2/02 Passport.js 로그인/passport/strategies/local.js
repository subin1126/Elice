const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../../models');
const hashPassword = require('../../utils/hash-password');

const config = {
  usernameField: 'email',  // 'email' 필드 사용하도록 설정
  passwordField: 'password' // 'password' 필드 사용하도록 설정
};

//email, password : 전달받은 필드
//done : 로그인된 유저를 전달하는 콜백함수
const local = new LocalStrategy(config, async (email, password, done) => {
  try {
    //전달받은 email로 회원을 찾는거임
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('회원을 찾을 수 없습니다.');
    }
    // 검색 한 유저의 비밀번호와 요청된 비밀번호의 해쉬값이 일치하는지 확인
    if (user.password !== hashPassword(password)) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    //err가 없을때는 null값 전달 
    done (null, {
      shortId: user.shortId,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    done(err, null);
  }
});

module.exports = local;