const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const hashPassword = require('../utils/hash-password');
const { User } = require('../models');

const router = Router();

router.get('/', (req, res) => {
  // 로그인 된 경우 /posts로 
  // 로그인 되지 않은 경우 /login 으로
  if(req.user) {
      res.redirect('/posts');
      return; //response 마무리 됐으니까 return하는거 잊지말긔
  }
  res.redirect('/login');
});

router.get('/login', (req, res, next) => {
  res.render('user/login');
});

router.get('/join', (req, res, next) => {
  res.render('user/join');
});

router.post('/join', asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = hashPassword(password);
  const user = await User.create({
    email,
    name,
    password: hashedPassword,
  });
  
  console.log('신규 회원', user);
  
  res.redirect('/');
}));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;