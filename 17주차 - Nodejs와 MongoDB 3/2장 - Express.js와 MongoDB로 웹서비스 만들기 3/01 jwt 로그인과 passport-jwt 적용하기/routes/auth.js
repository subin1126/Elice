const { Router } = require('express');
const passport = require('passport');
const { setUserToken } = require('../utils/jwt');

const router = Router();

// 세션 비활성화
//{sessioni: false}를 꼭 해줘야됨, 그래야 세션을 사용하지 않음
router.post('/', passport.authenticate('local', { session: false }), (req, res, next) => {
  // 유저 토큰 생성 및 쿠키에 전달하기
  //토큰을 생성하고 response를 쿠키에 전달함
  setUserToken(res, req.user);
  res.redirect('/');
});

module.exports = router;