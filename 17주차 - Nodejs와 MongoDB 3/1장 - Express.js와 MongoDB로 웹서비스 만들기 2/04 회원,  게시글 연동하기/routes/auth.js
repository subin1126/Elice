const { Router } = require('express');
const passport = require('passport');

const router = Router();

// passport local 로 authenticate 하기
//authenticate안에는 Strategy이름 적어줌
router.post('/', passport.authenticate('local'), (req, res, next) => {
  res.redirect('/');
});

module.exports = router;